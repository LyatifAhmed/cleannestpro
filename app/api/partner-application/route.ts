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
  website?: string;
  formStartedAt?: number;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPhoneReasonable(phone: string) {
  return /^[+()\d\s-]{7,20}$/.test(phone);
}

function containsUrl(text: string) {
  return /(https?:\/\/|www\.|<a\s|href=)/i.test(text);
}

function looksLikeGibberish(value: string) {
  const text = value.replace(/\s+/g, "");
  if (!text) return false;

  if (text.length >= 16 && /^[A-Za-z]+$/.test(text) && !/[aeiouAEIOU]{2,}/.test(text)) {
    return true;
  }

  if (text.length >= 18 && /^[A-Za-z0-9]+$/.test(text)) {
    const vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length;
    const vowelRatio = vowelCount / text.length;
    if (vowelRatio < 0.2) return true;
  }

  return false;
}

function tooManyFieldsLookRandom(fields: string[]) {
  const suspiciousCount = fields.filter((field) => looksLikeGibberish(field)).length;
  return suspiciousCount >= 3;
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
    const raw = (await req.json()) as PartnerApplicationPayload;

    const data: PartnerApplicationPayload = {
      applicationType: raw.applicationType,
      fullName: clean(raw.fullName),
      companyName: clean(raw.companyName),
      phone: clean(raw.phone),
      email: clean(raw.email).toLowerCase(),
      location: clean(raw.location),
      experience: clean(raw.experience),
      languages: Array.isArray(raw.languages) ? raw.languages : [],
      availability: clean(raw.availability),
      hasSupplies: clean(raw.hasSupplies),
      transport: clean(raw.transport),
      teamSize: clean(raw.teamSize),
      notes: clean(raw.notes),
      website: clean(raw.website),
      formStartedAt:
        typeof raw.formStartedAt === "number" ? raw.formStartedAt : 0,
    };

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const adminEmail = process.env.QUOTE_TO_EMAIL;
    const fromEmail =
      process.env.QUOTE_FROM_EMAIL || "CleanNestPro <onboarding@resend.dev>";

    if (!adminEmail) {
      return NextResponse.json(
        { error: "QUOTE_TO_EMAIL is not configured." },
        { status: 500 }
      );
    }

    // Honeypot
    if (data.website && data.website !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Time trap
    if (!data.formStartedAt || Date.now() - data.formStartedAt < 4000) {
      return NextResponse.json(
        { error: "Form submitted too quickly." },
        { status: 400 }
      );
    }

    if (
      data.applicationType !== "Individual Cleaner" &&
      data.applicationType !== "Cleaning Company"
    ) {
      return NextResponse.json(
        { error: "Invalid application type." },
        { status: 400 }
      );
    }

    if (!data.fullName || data.fullName.length < 2 || data.fullName.length > 100) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 }
      );
    }

    if (
      data.applicationType === "Cleaning Company" &&
      !data.companyName
    ) {
      return NextResponse.json(
        { error: "Company name is required." },
        { status: 400 }
      );
    }

    if (!data.phone || !isPhoneReasonable(data.phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (!data.email || !isEmailValid(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!data.location || data.location.length < 2 || data.location.length > 120) {
      return NextResponse.json(
        { error: "Please enter a valid location." },
        { status: 400 }
      );
    }

    if (
      [data.experience, data.notes, data.availability, data.location, data.companyName].some(
        (value) => containsUrl(value)
      )
    ) {
      return NextResponse.json(
        { error: "Links are not allowed in this form." },
        { status: 400 }
      );
    }

    const textFieldsToCheck = [
      data.fullName,
      data.companyName,
      data.location,
      data.experience,
      data.availability,
      data.teamSize,
      data.notes,
    ].filter(Boolean);

    if (tooManyFieldsLookRandom(textFieldsToCheck)) {
      return NextResponse.json(
        { error: "Submission looks invalid." },
        { status: 400 }
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