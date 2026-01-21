import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting (5 requests per IP per hour)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every 10 minutes to prevent memory leaks
setInterval(
  () => {
    const now = Date.now();
    for (const [ip, data] of rateLimitMap.entries()) {
      if (now > data.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  },
  10 * 60 * 1000,
);

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const limit = 5; // 5 requests
  const windowMs = 60 * 60 * 1000; // 1 hour

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // First request or expired window - create new record
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true };
  }

  if (record.count < limit) {
    // Within limit - increment count
    record.count++;
    return { allowed: true };
  }

  // Rate limit exceeded
  return { allowed: false, resetTime: record.resetTime };
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Validate URL format
    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, error: "URL is required" },
        { status: 400 },
      );
    }

    // Ensure URL has protocol
    let validUrl = url.trim();
    if (!validUrl.startsWith("http://") && !validUrl.startsWith("https://")) {
      validUrl = "https://" + validUrl;
    }

    // Validate URL format
    try {
      new URL(validUrl);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid URL format" },
        { status: 400 },
      );
    }

    // Rate limiting check (5 requests per IP per hour)
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      const resetTime = rateLimit.resetTime
        ? new Date(rateLimit.resetTime).toLocaleTimeString()
        : "soon";
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit exceeded. You can analyze up to 5 websites per hour. Please try again at ${resetTime}.`,
        },
        { status: 429 },
      );
    }

    // Call Google PageSpeed Insights API
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "API key not configured" },
        { status: 500 },
      );
    }

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(validUrl)}&key=${apiKey}&strategy=mobile&category=performance`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000); // 60s timeout - Google's API can be slow

    let pageSpeedResponse;
    try {
      pageSpeedResponse = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });
    } catch (error: any) {
      clearTimeout(timeout);
      if (error.name === "AbortError") {
        return NextResponse.json(
          { success: false, error: "Analysis timeout. Please try again." },
          { status: 408 },
        );
      }
      throw error;
    } finally {
      clearTimeout(timeout);
    }

    if (!pageSpeedResponse.ok) {
      const errorData = await pageSpeedResponse.json();
      console.error("PageSpeed API Error:", errorData);
      return NextResponse.json(
        {
          success: false,
          error:
            "Failed to analyze website. Please check the URL and try again.",
        },
        { status: pageSpeedResponse.status },
      );
    }

    const data = await pageSpeedResponse.json();
    const lighthouseResult = data.lighthouseResult;

    // Extract performance score (0-100)
    const performanceScore = Math.round(
      (lighthouseResult.categories.performance.score || 0) * 100,
    );

    // Determine verdict
    let verdict: string;
    if (performanceScore < 50) {
      verdict = "Poor";
    } else if (performanceScore < 70) {
      verdict = "Needs Improvement";
    } else if (performanceScore < 90) {
      verdict = "Good";
    } else {
      verdict = "Excellent";
    }

    // Extract key metrics
    const audits = lighthouseResult.audits;
    const keyMetrics = {
      largest_contentful_paint:
        audits["largest-contentful-paint"]?.displayValue || "N/A",
      first_contentful_paint:
        audits["first-contentful-paint"]?.displayValue || "N/A",
      time_to_interactive: audits["interactive"]?.displayValue || "N/A",
      speed_index: audits["speed-index"]?.displayValue || "N/A",
    };

    // Extract page statistics
    const totalByteWeight = audits["total-byte-weight"]?.numericValue || 0;
    const numRequests = audits["network-requests"]?.details?.items?.length || 0;

    const pageStatistics = {
      total_page_size:
        totalByteWeight > 1048576
          ? `${(totalByteWeight / 1048576).toFixed(2)} MB`
          : `${(totalByteWeight / 1024).toFixed(2)} KB`,
      number_of_requests: numRequests,
    };

    // Extract top issues (opportunities with highest savings)
    const opportunities: any[] = [];
    Object.keys(audits).forEach((key) => {
      const audit = audits[key];
      if (audit.details?.type === "opportunity" && audit.numericValue) {
        opportunities.push({
          issue: audit.title,
          potential_savings:
            audit.displayValue || `${Math.round(audit.numericValue / 1000)} ms`,
          score: audit.score || 0,
        });
      }
    });

    // Sort by score (lower is worse) and take top 3
    const topIssues = opportunities
      .sort((a, b) => a.score - b.score)
      .slice(0, 3)
      .map(({ issue, potential_savings }) => ({ issue, potential_savings }));

    // Extract company name from URL
    const urlObj = new URL(validUrl);
    const domain = urlObj.hostname.replace("www.", "");
    const companyName =
      domain.split(".")[0].charAt(0).toUpperCase() +
      domain.split(".")[0].slice(1);

    // Generate recommendation
    let recommendation: string;
    if (performanceScore < 70) {
      recommendation =
        "Your website speed could be improved significantly. This may be affecting your conversion rates and user experience.";
    } else if (performanceScore < 90) {
      recommendation =
        "Your website has good performance, but there's still room for optimization to achieve excellent speeds.";
    } else {
      recommendation =
        "Excellent! Your website is performing great. Keep maintaining these standards.";
    }

    // Response
    const result = {
      success: true,
      data: {
        company_name: companyName,
        website_url: validUrl,
        overall_score: performanceScore,
        verdict,
        is_qualified_lead: performanceScore < 70,
        key_metrics: keyMetrics,
        page_statistics: pageStatistics,
        top_issues:
          topIssues.length > 0
            ? topIssues
            : [
                {
                  issue: "No major issues detected",
                  potential_savings: "N/A",
                },
              ],
        recommendation,
      },
    };

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
