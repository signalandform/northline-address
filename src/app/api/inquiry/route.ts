import { NextResponse } from "next/server";

import { sendViaGmail } from "@/lib/email/gmail";
import { formatInquiryEmail, InquirySchema } from "@/lib/inquiry";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = InquirySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const inquiry = parsed.data;

    // Honeypot: if filled, pretend success.
    if (inquiry.company && inquiry.company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const { subject, text } = formatInquiryEmail(inquiry);

    const to =
      process.env.INQUIRY_TO ||
      "jack@signalandform.net, matthew.derek.nelson@gmail.com";

    const fromName = process.env.INQUIRY_FROM_NAME || "Northline Address";
    const fromEmail = process.env.INQUIRY_FROM_EMAIL || "ai@signalandformllc.com";
    const from = `${fromName} <${fromEmail}>`;

    const replyTo = inquiry.email;

    // If Gmail env isn’t configured yet (common on first deploy), don’t hard-fail the UX.
    const hasGmail =
      !!process.env.GMAIL_CLIENT_ID &&
      !!process.env.GMAIL_CLIENT_SECRET &&
      !!process.env.GMAIL_REFRESH_TOKEN;

    if (!hasGmail) {
      console.warn("Inquiry received but Gmail env vars are not configured.", {
        subject,
        to,
      });
      return NextResponse.json({ ok: true, warn: "email_not_configured" });
    }

    await sendViaGmail({ to, subject, text, from, replyTo });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
