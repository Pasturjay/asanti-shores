import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter: ip -> timestamps
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

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
          error: "Too many messages sent. Please wait a minute before retrying.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.website_trap || body.hp_check) {
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    const { fullName, companyName, businessEmail, phone, subject, message } = body;

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a detailed message for our team." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "operations@asantishores.com";

    const contactRecord = {
      id: `CNT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      companyName: (companyName || "").trim(),
      businessEmail: businessEmail.trim(),
      phone: (phone || "").trim(),
      subject: (subject || "General Maritime Enquiry").trim(),
      message: message.trim(),
      recipientEmail,
    };

    console.log("[ASANTI GENERAL ENQUIRY RECEIVED]:", JSON.stringify(contactRecord, null, 2));

    // Optional transactional email integration
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Asanti Shores Contact <contact@asantishores.com>",
            to: [recipientEmail],
            reply_to: businessEmail,
            subject: `[Contact Form Enquiry] ${contactRecord.subject} - ${contactRecord.fullName}`,
            text: `
New Message from Website Contact Form
Reference ID: ${contactRecord.id}
Date: ${contactRecord.receivedAt}

Name: ${contactRecord.fullName}
Company: ${contactRecord.companyName || "N/A"}
Email: ${contactRecord.businessEmail}
Phone: ${contactRecord.phone || "N/A"}
Subject: ${contactRecord.subject}

Message:
${contactRecord.message}
            `,
          }),
        });
      } catch (err) {
        console.error("[CONTACT EMAIL DISPATCH ERROR]", err);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Asanti Shores Limited. Your message has been routed to our operations coordination team.",
      referenceId: contactRecord.id,
    });
  } catch (error) {
    console.error("[CONTACT API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to submit message at this time. Please contact our operations desk directly.",
      },
      { status: 500 }
    );
  }
}
