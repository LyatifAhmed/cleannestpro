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
      <h2 style="margin:0 0 16px 0;">
        New Quote Request — CleanNestPro
      </h2>

      <p style="margin:0 0 24px 0;color:#475569;">
        A new quote request has been submitted through the website.
        Reply directly to this email to contact the customer.
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
          ${row(
            "Approx property size",
            data.propertySize || "Not provided"
          )}
          ${row("Cleaning frequency", data.frequency)}
          ${row(
            "Preferred date",
            data.preferredDate || "Not provided"
          )}
          ${row(
            "Preferred time",
            data.preferredTime || "Not provided"
          )}
          ${row("Is the property furnished?", data.furnished)}
          ${row("Any pets?", data.pets)}
          ${row(
            "Need cleaning supplies brought?",
            data.suppliesNeeded
          )}
          ${row(
            "Extra tasks",
            data.extraTasks?.length
              ? data.extraTasks.join(", ")
              : "None"
          )}
          ${row(
            "Access details",
            data.accessDetails || "Not provided"
          )}
          ${row(
            "Special notes",
            data.specialNotes || "None"
          )}
          ${row(
            "Estimated range shown on site",
            data.estimatedRange
          )}
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
          Thank you for your enquiry. We’ve received your request and
          will review the details properly before replying with a clear
          next step.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          The indicative range shown on the site for your request was:
          <strong style="color:#0f172a;">
            ${escapeHtml(data.estimatedRange)}
          </strong>
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          This is not a final confirmed price yet. We’ll review the
          property details, timing, and any extras before responding.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;font-size:14px;color:#475569;">
            You can reply directly to this email if you need to add
            anything to your request.
          </p>
        </div>

        <p style="margin:0;color:#475569;">
          Warm regards,<br />
          <strong style="color:#0f172a;">CleanNestPro Support</strong><br />
          <span style="font-size:14px;color:#64748b;">
            support@cleannestpro.com
          </span>
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

    const data = (await req.json()) as QuotePayload;

    const fullName = data.fullName?.trim();
    const customerEmail = data.email?.trim().toLowerCase();
    const location = data.location?.trim();

    if (!fullName || !customerEmail || !location) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const adminEmail =
      process.env.QUOTE_TO_EMAIL ||
      "quotes@cleannestpro.com";

    const fromEmail =
      process.env.QUOTE_FROM_EMAIL ||
      "CleanNestPro Support <support@cleannestpro.com>";

    const supportEmail =
      process.env.QUOTE_REPLY_EMAIL ||
      "support@cleannestpro.com";

    const payload: QuotePayload = {
      ...data,
      fullName,
      email: customerEmail,
      location,
    };

    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: customerEmail,
      subject: `New quote request from ${fullName}`,
      html: buildAdminHtml(payload),
    });

    if (adminResult.error) {
      console.error(
        "Failed to send admin quote notification:",
        adminResult.error
      );

      return NextResponse.json(
        { error: "Failed to send quote notification." },
        { status: 502 }
      );
    }

    const customerResult = await resend.emails.send({
      from: fromEmail,
      to: [customerEmail],
      replyTo: supportEmail,
      subject: "We’ve received your CleanNestPro quote request",
      html: buildCustomerHtml(payload),
    });

    if (customerResult.error) {
      console.error(
        "Failed to send customer confirmation:",
        customerResult.error
      );

      return NextResponse.json(
        { error: "Quote received, but confirmation email failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      adminEmailId: adminResult.data?.id,
      customerEmailId: customerResult.data?.id,
    });
  } catch (error) {
    console.error("quote route error:", error);

    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 }
    );
  }
}