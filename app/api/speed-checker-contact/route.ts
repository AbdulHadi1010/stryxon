import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, website_url, performance_score } =
      await request.json();

    // Validate required fields
    if (!name || !email || !website_url) {
      return NextResponse.json(
        { success: false, error: "Name, email, and website URL are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Prepare lead data
    const leadData = {
      name,
      email,
      phone: phone || "",
      message: message || "",
      website_url,
      performance_score: performance_score || 0,
      created_at: new Date().toISOString(),
    };

    // Log to console (in production, save to database)
    console.log("New Speed Checker Lead:", leadData);

    // TODO: Save to database
    // Example with Prisma:
    // await prisma.websiteLead.create({ data: leadData });

    // TODO: Send email notification to sales team
    // Example with Nodemailer or SendGrid:
    /*
    await sendEmail({
      to: process.env.SALES_EMAIL,
      subject: `New Speed Checker Lead: ${name}`,
      html: `
        <h2>New Lead from Speed Checker</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Website:</strong> ${website_url}</p>
        <p><strong>Performance Score:</strong> ${performance_score}/100</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `
    });
    */

    // TODO: Send confirmation email to lead
    /*
    await sendEmail({
      to: email,
      subject: 'Thank You for Your Speed Check - Stryxon',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for using our website speed checker!</p>
        <p>We've received your request and will be in touch within 24 hours to discuss how we can help improve your website's performance.</p>
        <p>Your website (${website_url}) scored ${performance_score}/100.</p>
        <br>
        <p>Best regards,</p>
        <p>The Stryxon Team</p>
      `
    });
    */

    // For now, use Formspree as fallback (reuse existing integration)
    try {
      const formspreeResponse = await fetch("https://formspree.io/f/mwvvqygl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: `Speed Checker Lead\n\nWebsite: ${website_url}\nPerformance Score: ${performance_score}/100\n\nMessage: ${message || "No message provided"}`,
        }),
      });

      if (!formspreeResponse.ok) {
        console.error("Formspree error:", await formspreeResponse.text());
      }
    } catch (error) {
      console.error("Failed to send to Formspree:", error);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll contact you within 24 hours.",
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
