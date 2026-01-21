"use client";

import { useState } from "react";
import {
  Zap,
  TrendingUp,
  Clock,
  FileText,
  AlertTriangle,
  ArrowRight,
  Info,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import LeadCaptureModal from "@/components/ui/lead-capture-modal";
import { GooeyLoader } from "@/components/loader-10";
import { InteractiveHoverButton } from "@/components/interactive-hover-button";
import { Meteors } from "@/components/meteors";

interface AnalysisResult {
  company_name: string;
  website_url: string;
  overall_score: number;
  verdict: string;
  is_qualified_lead: boolean;
  key_metrics: {
    largest_contentful_paint: string;
    first_contentful_paint: string;
    time_to_interactive: string;
    speed_index: string;
  };
  page_statistics: {
    total_page_size: string;
    number_of_requests: number;
  };
  top_issues: Array<{
    issue: string;
    potential_savings: string;
  }>;
  recommendation: string;
}

export default function SpeedCheckerSection() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const isProduction = process.env.NODE_ENV === "production";

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for bot verification (only in production)
    if (isProduction && !turnstileToken) {
      setError("Please complete the verification check");
      return;
    }

    setIsAnalyzing(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, turnstileToken }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        // Show modal after 7 seconds if qualified lead (give time to review results)
        if (data.data.is_qualified_lead) {
          setTimeout(() => setShowModal(true), 7000);
        }
      } else {
        setError(data.error || "Failed to analyze website");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 50)
      return { bg: "from-red-500 to-red-600", text: "text-red-400" };
    if (score < 70)
      return { bg: "from-orange-500 to-orange-600", text: "text-orange-400" };
    if (score < 90)
      return { bg: "from-yellow-500 to-yellow-600", text: "text-yellow-400" };
    return { bg: "from-green-500 to-green-600", text: "text-green-400" };
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full shadow-lg shadow-indigo-500/50">
            <Zap className="w-8 h-8 text-white" fill="white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            How Fast Is Your Website?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Get your free performance analysis in seconds. Discover what's
            slowing you down and how to fix it.
          </p>

          {/* Input Form */}
          <form
            onSubmit={handleAnalyze}
            className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL (e.g., example.com)"
              required
              className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <InteractiveHoverButton
              type="submit"
              disabled={isAnalyzing || (isProduction && !turnstileToken)}
              className="whitespace-nowrap"
              text={isAnalyzing ? "Analyzing..." : "Analyze Now"}
            />
          </form>

          {/* Turnstile Bot Check (Production Only) */}
          {isProduction && (
            <div className="mt-6 flex justify-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => {
                  console.log(
                    "Turnstile error - continuing without verification",
                  );
                  setTurnstileToken("bypass"); // Allow fallback
                }}
                options={{ theme: "dark", size: "normal" }}
              />
            </div>
          )}

          {error && (
            <div className="mt-6 max-w-2xl mx-auto p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>

        {/* Loading State */}
        {isAnalyzing && (
          <div className="text-center py-12">
            <div className="inline-flex flex-col items-center gap-4">
              <GooeyLoader
                primaryColor="#4F46E5"
                secondaryColor="#6366F1"
                borderColor="#312E81"
              />
              <div>
                <p className="text-xl text-white font-semibold">
                  Analyzing {url}...
                </p>
                <p className="text-gray-400 mt-2">
                  This may take 30-60 seconds
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Results Display */}
        {result && !isAnalyzing && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Score Circle */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-6 p-8 bg-gray-900/50 border border-indigo-500/20 rounded-3xl backdrop-blur-sm">
                <div className="relative">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-gray-800"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(result.overall_score / 100) * 553} 553`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          className={getScoreColor(result.overall_score).text}
                        />
                        <stop
                          offset="100%"
                          className={getScoreColor(result.overall_score).text}
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-white">
                      {result.overall_score}
                    </span>
                    <span className="text-gray-400 text-sm">out of 100</span>
                  </div>
                </div>
                <div>
                  <p
                    className={`text-2xl font-bold ${getScoreColor(result.overall_score).text}`}
                  >
                    {result.verdict}
                  </p>
                  <p className="text-gray-400 mt-2">{result.company_name}</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Key Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    label: "Largest Contentful Paint",
                    value: result.key_metrics.largest_contentful_paint,
                    icon: FileText,
                    color: "#10b981",
                    info: "Measures how long it takes for the largest content element to appear. Good: < 2.5s, Needs Improvement: 2.5s - 4s, Poor: > 4s",
                  },
                  {
                    label: "First Contentful Paint",
                    value: result.key_metrics.first_contentful_paint,
                    icon: TrendingUp,
                    color: "#3b82f6",
                    info: "Measures when the first content appears on screen. Good: < 1.8s, Needs Improvement: 1.8s - 3s, Poor: > 3s",
                  },
                  {
                    label: "Time to Interactive",
                    value: result.key_metrics.time_to_interactive,
                    icon: Clock,
                    color: "#f59e0b",
                    info: "Measures when the page becomes fully interactive. Good: < 3.8s, Needs Improvement: 3.8s - 7.3s, Poor: > 7.3s",
                  },
                  {
                    label: "Speed Index",
                    value: result.key_metrics.speed_index,
                    icon: Zap,
                    color: "#8b5cf6",
                    info: "Measures how quickly content is visually displayed. Good: < 3.4s, Needs Improvement: 3.4s - 5.8s, Poor: > 5.8s",
                  },
                ].map((metric, i) => {
                  const numericValue = parseFloat(metric.value);
                  const maxValue = 10;
                  const percentage = Math.min(
                    (numericValue / maxValue) * 100,
                    100,
                  );
                  const circumference = 2 * Math.PI * 45;
                  const strokeDashoffset =
                    circumference - (percentage / 100) * circumference;

                  return (
                    <div
                      key={i}
                      className="group relative p-6 bg-gray-900/50 border border-indigo-500/20 rounded-2xl hover:border-indigo-500/40 transition-all backdrop-blur-sm overflow-hidden"
                    >
                      {/* Info Icon with Tooltip */}
                      <div className="absolute top-4 right-4 z-20 group/info">
                        <Info className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-help transition-colors" />
                        <div className="absolute top-8 right-0 w-64 p-3 bg-gray-800 border border-indigo-500/30 rounded-lg text-xs text-gray-300 opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-200 shadow-xl z-30">
                          {metric.info}
                        </div>
                      </div>

                      {/* Circular Progress */}
                      <div className="flex flex-col items-center gap-4 relative z-10">
                        <div className="relative">
                          <svg className="w-24 h-24 transform -rotate-90">
                            <circle
                              cx="48"
                              cy="48"
                              r="45"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="none"
                              className="text-gray-800"
                            />
                            <circle
                              cx="48"
                              cy="48"
                              r="45"
                              stroke={metric.color}
                              strokeWidth="6"
                              fill="none"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              className="transition-all duration-1000 ease-out"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <metric.icon
                              className="w-8 h-8"
                              style={{ color: metric.color }}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white mb-1">
                            {metric.value}
                          </p>
                          <p className="text-xs text-gray-400">
                            {metric.label}
                          </p>
                        </div>
                      </div>
                      <Meteors number={20} color={metric.color} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Page Statistics */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Page Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    label: "Total Page Size",
                    value: result.page_statistics.total_page_size,
                    color: "#ec4899",
                    info: "The total size of all resources loaded. Smaller is better. Aim for < 1.6MB on mobile.",
                    maxValue: 5,
                  },
                  {
                    label: "Number of Requests",
                    value: result.page_statistics.number_of_requests.toString(),
                    color: "#06b6d4",
                    info: "Total HTTP requests made. Fewer requests mean faster loading. Aim for < 50 requests.",
                    maxValue: 100,
                  },
                ].map((stat, i) => {
                  const numericValue = parseFloat(stat.value);
                  const percentage = Math.min(
                    (numericValue / stat.maxValue) * 100,
                    100,
                  );
                  const circumference = 2 * Math.PI * 60;
                  const strokeDashoffset =
                    circumference - (percentage / 100) * circumference;

                  return (
                    <div
                      key={i}
                      className="group relative p-6 bg-gray-900/50 border border-indigo-500/20 rounded-2xl backdrop-blur-sm overflow-hidden"
                    >
                      {/* Info Icon with Tooltip */}
                      <div className="absolute top-4 right-4 z-20 group/info">
                        <Info className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-help transition-colors" />
                        <div className="absolute top-8 right-0 w-64 p-3 bg-gray-800 border border-indigo-500/30 rounded-lg text-xs text-gray-300 opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-200 shadow-xl z-30">
                          {stat.info}
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        {/* Circular Progress */}
                        <div className="relative flex-shrink-0">
                          <svg className="w-32 h-32 transform -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="60"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-gray-800"
                            />
                            <circle
                              cx="64"
                              cy="64"
                              r="60"
                              stroke={stat.color}
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              className="transition-all duration-1000 ease-out"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">
                              {stat.value}
                            </span>
                          </div>
                        </div>

                        {/* Label */}
                        <div>
                          <p className="text-lg font-semibold text-white">
                            {stat.label}
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            {i === 0 ? "Smaller is better" : "Fewer is faster"}
                          </p>
                        </div>
                      </div>
                      <Meteors number={15} color={stat.color} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Issues */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Optimization Opportunities
              </h3>
              <div className="space-y-3">
                {result.top_issues.map((issue, i) => {
                  const isOptimized =
                    issue.potential_savings === "0 s" ||
                    issue.potential_savings === "0 KB";

                  return (
                    <div
                      key={i}
                      className={`relative p-5 bg-gray-900/50 border rounded-xl flex items-start gap-4 backdrop-blur-sm transition-all hover:border-opacity-60 overflow-hidden ${
                        isOptimized
                          ? "border-green-500/20 hover:border-green-500/40"
                          : "border-orange-500/20 hover:border-orange-500/40"
                      }`}
                    >
                      {isOptimized ? (
                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 relative z-10" />
                      ) : (
                        <XCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5 relative z-10" />
                      )}
                      <div className="flex-1 relative z-10">
                        <p className="text-white font-semibold mb-1 text-sm">
                          {issue.issue}
                        </p>
                        <p className="text-xs text-gray-400">
                          {isOptimized ? (
                            <span className="text-green-400">
                              ✓ Already optimized
                            </span>
                          ) : (
                            <span>
                              Potential savings:{" "}
                              <span className="text-orange-400 font-medium">
                                {issue.potential_savings}
                              </span>
                            </span>
                          )}
                        </p>
                      </div>
                      <Meteors 
                        number={12} 
                        color={isOptimized ? "#10b981" : "#f97316"} 
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendation */}
            <div className="p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-3xl text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Recommendation
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {result.recommendation}
              </p>
              <InteractiveHoverButton
                onClick={() => setShowModal(true)}
                text="Get Expert Help"
              />
            </div>
          </div>
        )}
      </div>

      {/* Lead Capture Modal */}
      {result && (
        <LeadCaptureModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          websiteUrl={result.website_url}
          performanceScore={result.overall_score}
        />
      )}
    </section>
  );
}
