import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting map: ip -> timestamps
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5; // max 5 requests per minute

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many quote requests. Please wait a moment before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 1. Honeypot check (spam protection)
    if (body.website_trap || body.hp_check) {
      // Silently discard spam bots
      return NextResponse.json({
        success: true,
        message: "Your quotation request has been received.",
      });
    }

    // 2. Validate required fields
    const {
      fullName,
      companyName,
      businessEmail,
      phone,
      serviceRequired,
      portLocation,
      vesselOrProjectName,
      requestedDate,
      technicalSpecs,
      message,
    } = body;

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your company or organization name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!serviceRequired || typeof serviceRequired !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select the maritime service required." },
        { status: 400 }
      );
    }

    if (!portLocation || typeof portLocation !== "string") {
      return NextResponse.json(
        { success: false, error: "Please specify the port or operating location." },
        { status: 400 }
      );
    }

    // 3. Process Enquiry Dispatch / Logging
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "operations@asantishores.com";

    const quoteRecord = {
      id: `QUO-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      businessEmail: businessEmail.trim(),
      phone: (phone || "").trim(),
      serviceRequired,
      portLocation,
      vesselOrProjectName: (vesselOrProjectName || "").trim(),
      requestedDate: (requestedDate || "").trim(),
      technicalSpecs: (technicalSpecs || "").trim(),
      message: (message || "").trim(),
      recipientEmail,
    };

    // Log structured quotation for operations inspection
    console.log("[ASANTI QUOTATION ENQUIRY RECEIVED]:", JSON.stringify(quoteRecord, null, 2));

    // Optional transactional email service (e.g. Resend, Sendgrid, or SMTP)
    // If RESEND_API_KEY is configured in env:
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Asanti Shores Portal <quotes@asantishores.com>",
            to: [recipientEmail],
            reply_to: businessEmail,
            subject: `[New Marine Quote Request] ${serviceRequired} - ${companyName}`,
            text: `
New Commercial Quotation Request
Reference ID: ${quoteRecord.id}
Date: ${quoteRecord.receivedAt}

Contact Name: ${fullName}
Company: ${companyName}
Email: ${businessEmail}
Phone: ${phone || "N/A"}

Service Required: ${serviceRequired}
Operating Port / Location: ${portLocation}
Vessel or Project: ${vesselOrProjectName || "N/A"}
Target Service Date: ${requestedDate || "N/A"}

Technical Specifications / Scope:
${technicalSpecs || "N/A"}

Additional Notes / Message:
${message || "N/A"}
            `,
          }),
        });

        if (!resendRes.ok) {
          console.warn("[RESEND WARNING] Email dispatch encountered an issue, but enquiry was recorded.", await resendRes.text());
        }
      } catch (mailErr) {
        console.error("[EMAIL DISPATCH ERROR]", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your commercial quotation enquiry has been registered with the Asanti Shores operations team. We will review the specifications and respond promptly.",
      referenceId: quoteRecord.id,
    });
  } catch (error) {
    console.error("[QUOTE API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or contact our marine desk directly.",
      },
      { status: 500 }
    );
  }
}
