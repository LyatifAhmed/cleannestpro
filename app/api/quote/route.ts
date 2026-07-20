import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);
const MAX_PROPERTY_PHOTOS = 5;
const MAX_PHOTO_BYTES = 700 * 1024;
const MAX_TOTAL_PHOTO_BYTES = 3.5 * 1024 * 1024;

type QuotePayload = {
  quoteReference?: string;
  fullName: string;
  email: string;
  preferredLanguage: "English" | "Russian" | "Turkish";
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

type EmailAttachment = {
  filename: string;
  content: Buffer;
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

function createQuoteReference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const suffix = randomBytes(3).toString("hex").toUpperCase();
  return `CNP-${date}-${suffix}`;
}

function safeFilename(name: string, index: number) {
  const cleaned = name
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
  return cleaned || `property-photo-${index + 1}.jpg`;
}

async function parseRequest(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";

  if (!contentType.includes("multipart/form-data")) {
    return {
      data: (await req.json()) as QuotePayload,
      attachments: [] as EmailAttachment[],
    };
  }

  const formData = await req.formData();
  const rawPayload = formData.get("payload");

  if (typeof rawPayload !== "string") {
    throw new Error("INVALID_PAYLOAD");
  }

  let data: QuotePayload;
  try {
    data = JSON.parse(rawPayload) as QuotePayload;
  } catch {
    throw new Error("INVALID_PAYLOAD");
  }

  const files = formData
    .getAll("propertyPhotos")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (files.length > MAX_PROPERTY_PHOTOS) {
    throw new Error("TOO_MANY_PHOTOS");
  }

  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  if (totalBytes > MAX_TOTAL_PHOTO_BYTES) {
    throw new Error("PHOTOS_TOO_LARGE");
  }

  const attachments: EmailAttachment[] = [];

  for (const [index, file] of files.entries()) {
    if (file.type !== "image/jpeg" || file.size > MAX_PHOTO_BYTES) {
      throw new Error("INVALID_PHOTO");
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const isJpeg = bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;

    if (!isJpeg) {
      throw new Error("INVALID_PHOTO");
    }

    attachments.push({
      filename: safeFilename(file.name, index),
      content: bytes,
    });
  }

  return { data, attachments };
}

function buildAdminHtml(data: QuotePayload, photoCount: number) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 16px 0;">
        New Quote Request — ${escapeHtml(data.quoteReference || "CleanNestPro")}
      </h2>

      <p style="margin:0 0 24px 0;color:#475569;">
        A new quote request has been submitted through the website.
        Reply directly to this email to contact the customer.
      </p>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row("Quote reference", data.quoteReference || "Not provided")}
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
          ${row("Need cleaning supplies brought?", data.suppliesNeeded)}
          ${row("Extra tasks", data.extraTasks?.length ? data.extraTasks.join(", ") : "None")}
          ${row("Access details", data.accessDetails || "Not provided")}
          ${row("Special notes", data.specialNotes || "None")}
          ${row("Property photos", photoCount ? `${photoCount} attached` : "None")}
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
          CleanNestPro · ${escapeHtml(data.quoteReference || "Quote request")}
        </p>

        <h1 style="margin:0 0 18px 0;font-size:28px;line-height:1.2;">
          Your quote request has been received
        </h1>

        <p style="margin:0 0 16px 0;color:#475569;">
          Hi ${escapeHtml(data.fullName)},
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Thank you for your enquiry. We’ve received your request and
          will review the details properly before replying with a clear
          next step.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Your reference is <strong style="color:#0f172a;">${escapeHtml(
            data.quoteReference || "Not provided"
          )}</strong>.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          The indicative range shown on the site for your request was:
          <strong style="color:#0f172a;">${escapeHtml(data.estimatedRange)}</strong>
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          This is not a final confirmed price yet. We’ll review the
          property details, timing, and any extras before responding.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;font-size:14px;color:#475569;">
            You can reply directly to this email if you need to add anything to your request.
          </p>
        </div>

        <p style="margin:0;color:#475569;">
          Warm regards,<br />
          <strong style="color:#0f172a;">CleanNestPro Support</strong><br />
          <span style="font-size:14px;color:#64748b;">support@cleannestpro.com</span>
        </p>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const { data, attachments } = await parseRequest(req);
    const fullName = data.fullName?.trim();
    const customerEmail = data.email?.trim().toLowerCase();
    const location = data.location?.trim();

    if (!fullName || !customerEmail || !location) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const adminEmail = process.env.QUOTE_TO_EMAIL || "quotes@cleannestpro.com";
    const fromEmail =
      process.env.QUOTE_FROM_EMAIL ||
      "CleanNestPro Support <support@cleannestpro.com>";
    const supportEmail = process.env.QUOTE_REPLY_EMAIL || "support@cleannestpro.com";

    const payload: QuotePayload = {
      ...data,
      quoteReference: createQuoteReference(),
      fullName,
      email: customerEmail,
      location,
      extraTasks: Array.isArray(data.extraTasks) ? data.extraTasks : [],
    };

    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: customerEmail,
      subject: `New quote — ${payload.quoteReference} — ${fullName}`,
      html: buildAdminHtml(payload, attachments.length),
      attachments,
    });

    if (adminResult.error) {
      console.error("Failed to send admin quote notification:", adminResult.error);
      return NextResponse.json(
        { error: "Failed to send quote notification." },
        { status: 502 }
      );
    }

    const customerResult = await resend.emails.send({
      from: fromEmail,
      to: [customerEmail],
      replyTo: supportEmail,
      subject: `${payload.quoteReference} — We’ve received your CleanNestPro request`,
      html: buildCustomerHtml(payload),
    });

    if (customerResult.error) {
      console.error("Failed to send customer confirmation:", customerResult.error);
      return NextResponse.json(
        { error: "Quote received, but confirmation email failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      quoteReference: payload.quoteReference,
      photoCount: attachments.length,
      adminEmailId: adminResult.data?.id,
      customerEmailId: customerResult.data?.id,
    });
  } catch (error) {
    console.error("quote route error:", error);

    const code = error instanceof Error ? error.message : "";
    const clientErrors: Record<string, string> = {
      INVALID_PAYLOAD: "The quote form data is invalid.",
      TOO_MANY_PHOTOS: `You can upload up to ${MAX_PROPERTY_PHOTOS} photos.`,
      PHOTOS_TOO_LARGE: "The property photos are too large in total.",
      INVALID_PHOTO: "One or more property photos are invalid.",
    };

    if (clientErrors[code]) {
      return NextResponse.json({ error: clientErrors[code] }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 }
    );
  }
}