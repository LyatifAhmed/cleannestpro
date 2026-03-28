import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type PartnerApplicationPayload = {
  applicationType: "Individual Cleaner" | "Cleaning Company";
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  location: string;
  experience: string;
  languages: string[];
  availability: string;
  hasSupplies: string;
  transport: string;
  teamSize: string;
  notes: string;
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

function buildAdminHtml(data: PartnerApplicationPayload) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 16px 0;">New Partner Application — CleanNestPro</h2>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row("Application type", data.applicationType)}
          ${row("Full name / Contact", data.fullName)}
          ${row("Company name", data.companyName || "Not provided")}
          ${row("Phone", data.phone)}
          ${row("Email", data.email)}
          ${row("Area in Antalya", data.location)}
          ${row("Experience", data.experience || "Not provided")}
          ${row(
            "Languages",
            data.languages?.length ? data.languages.join(", ") : "Not provided"
          )}
          ${row("Availability", data.availability || "Not provided")}
          ${row("Can bring supplies", data.hasSupplies)}
          ${row("Has transport", data.transport)}
          ${row("Team size", data.teamSize || "Not provided")}
          ${row("Notes", data.notes || "None")}
        </tbody>
      </table>
    </div>
  `;
}

function buildApplicantHtml(data: PartnerApplicationPayload) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#0f172a;max-width:640px;margin:0 auto;">
      <div style="padding:32px 24px;border:1px solid #e2e8f0;border-radius:20px;background:#ffffff;">
        <p style="margin:0 0 12px 0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#64748b;">
          CleanNestPro
        </p>

        <h1 style="margin:0 0 18px 0;font-size:28px;line-height:1.2;">
          Your application has been received
        </h1>

        <p style="margin:0 0 16px 0;color:#475569;">
          Hi ${escapeHtml(data.fullName)},
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Thank you for your application to work with CleanNestPro.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          We review applications carefully and selectively. If there is a fit,
          we will get back to you by email with the next step.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;font-size:14px;color:#475569;">
            We value reliability, clear communication, and a more considered
            service standard — especially for international clients.
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
    const data = (await req.json()) as PartnerApplicationPayload;

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
      subject: `New partner application from ${data.fullName}`,
      html: buildAdminHtml(data),
    });

    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "We’ve received your CleanNestPro application",
      html: buildApplicantHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("partner application route error", error);

    return NextResponse.json(
      { error: "Failed to send application." },
      { status: 500 }
    );
  }
}