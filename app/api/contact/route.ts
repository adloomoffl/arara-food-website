import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Forward to FormSubmit to deliver email directly to Gmail without client popups
    const response = await fetch("https://formsubmit.co/ajax/ararafoodindustry@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://ararafood.com",
        Referer: "https://ararafood.com/contact",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Phone: phone,
        Message: message || "No additional message provided.",
        _subject: `New ARARA FOOD Trade/Product Enquiry - ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("FormSubmit API response error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or contact via WhatsApp." },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try WhatsApp or email directly." },
      { status: 500 }
    );
  }
}
