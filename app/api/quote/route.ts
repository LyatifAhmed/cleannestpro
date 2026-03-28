import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type QuotePayload = {
  fullName: string;
  email: string;
  preferredLanguage: "English" | "Russian";
  location: string;
  serviceType: string;
  propertyType: string;
  bathrooms: string;
  propertySize: string;
  frequency: string;
  preferredDate: string;
  preferredTime: string;
  furnished: string;
  pets: string;
  suppliesNeeded: string;
  extraTasks: string[];
  accessDetails: string;
  specialNotes: string;
  estimatedRange: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:220px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;">
        ${escapeHtml(value || "Not provided")}
      </td>
    </tr>
  `;
}

function buildAdminHtml(data: QuotePayload) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 16px 0;">New Quote Request — CleanNestPro</h2>
      <p style="margin:0 0 24px 0;color:#475569;">
        A new quote request has been submitted through the website.
      </p>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row("Full name", data.fullName)}
          ${row("Email", data.email)}
          ${row("Preferred language", data.preferredLanguage)}
          ${row("Area in Antalya", data.location)}
          ${row("Service type", data.serviceType)}
          ${row("Property type", data.propertyType)}
          ${row("Bathrooms", data.bathrooms)}
          ${row("Approx property size", data.propertySize || "Not provided")}
          ${row("Cleaning frequency", data.frequency)}
          ${row("Preferred date", data.preferredDate || "Not provided")}
          ${row("Preferred time", data.preferredTime || "Not provided")}
          ${row("Is the property furnished?", data.furnished)}
          ${row("Any pets?", data.pets)}
          ${row(
            "Need cleaning supplies brought?",
            data.suppliesNeeded
          )}
          ${row(
            "Extra tasks",
            data.extraTasks?.length ? data.extraTasks.join(", ") : "None"
          )}
          ${row("Access details", data.accessDetails || "Not provided")}
          ${row("Special notes", data.specialNotes || "None")}
          ${row("Estimated range shown on site", data.estimatedRange)}
        </tbody>
      </table>
    </div>
  `;
}

function buildCustomerHtml(data: QuotePayload) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#0f172a;max-width:640px;margin:0 auto;">
      <div style="padding:32px 24px;border:1px solid #e2e8f0;border-radius:20px;background:#ffffff;">
        <p style="margin:0 0 12px 0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#64748b;">
          CleanNestPro
        </p>

        <h1 style="margin:0 0 18px 0;font-size:28px;line-height:1.2;">
          Your quote request has been received
        </h1>

        <p style="margin:0 0 16px 0;color:#475569;">
          Hi ${escapeHtml(data.fullName)},
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Thank you for your enquiry. We’ve received your request and will review
          the details properly before replying with a clear next step.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          The indicative range shown on the site for your request was:
          <strong style="color:#0f172a;"> ${escapeHtml(data.estimatedRange)}</strong>
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          This is not a final confirmed price yet. We’ll review the property details,
          timing, and any extras before responding.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;font-size:14px;color:#475569;">
            We aim to keep the process calm, clear, and properly considered —
            especially for international clients, holiday homes, and guest-ready properties.
          </p>
        </div>

        <p style="margin:0;color:#475569;">
          Warm regards,<br />
          <strong style="color:#0f172a;">CleanNestPro</strong>
        </p>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as QuotePayload;

    if (!data.fullName || !data.email || !data.location) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.QUOTE_TO_EMAIL;
    const fromEmail =
      process.env.QUOTE_FROM_EMAIL || "CleanNestPro <onboarding@resend.dev>";

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    if (!adminEmail) {
      return NextResponse.json(
        { error: "QUOTE_TO_EMAIL is not configured." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: data.email,
      subject: `New quote request from ${data.fullName}`,
      html: buildAdminHtml(data),
    });

    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "We’ve received your CleanNestPro quote request",
      html: buildCustomerHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("quote route error", error);

    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 }
    );
  }
}