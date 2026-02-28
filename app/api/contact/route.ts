export const runtime = "edge";
import "dotenv/config";

import { NextRequest, NextResponse } from "next/server";

// Recipients — Web3Forms forwards to the email registered with the access key.
// To CC additional addresses, list them here.
const CC_RECIPIENTS = ["hello@vanspire.in", "adithyan.n.dileep@gmail.com"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // Basic server-side validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // Forward via Web3Forms (free — no SMTP required)
    // Docs: https://web3forms.com
    const formPayload = {
      access_key: process.env.WEB3FORMS_KEY,
      subject: `New Enquiry from ${name} — ${company}`,
      from_name: "Vanspire Contact Form",
      replyto: "vanspire.innovations@gmail.com",
      cc: CC_RECIPIENTS.join(","),
      // Fields shown in the email body
      "Full Name": name,
      Email: email,
      "Company / Organisation": company,
      Message: message,
      "Submitted At": `${timestamp} IST`,
      Source: "vanspire.in/contact",
    };

    if (!process.env.WEB3FORMS_KEY) {
      return NextResponse.json(
        { error: "Server misconfiguration: Missing access key" },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Vercel Serverless)",
        Origin: "https://vanspire.in",
        Referer: "https://vanspire.in/contact",
      },
      body: JSON.stringify(formPayload),
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "Invalid response from Web3Forms", raw: text },
        { status: 500 },
      );
    }

    if (!response.ok || result.success === false) {
      console.error("[Contact API] Web3Forms error:", result);
      return NextResponse.json(
        { error: result.message || "Failed to send message." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
