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
  canInvoice: string;
  acceptsFeedback: string;
  performsFinalCheck: string;
  qualityCommitment: boolean;
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

function yesNo(value: string) {
  if (value === "Yes") return "Evet";
  if (value === "No") return "Hayır";
  return "Belirtilmedi";
}

function containsUrl(text: string) {
  return /(https?:\/\/|www\.|<a\s|href=)/i.test(text);
}

function looksLikeGibberish(value: string) {
  const text = value.replace(/\s+/g, "");

  if (!text) {
    return false;
  }

  if (
    text.length >= 16 &&
    /^[A-Za-z]+$/.test(text) &&
    !/[aeiouAEIOU]{2,}/.test(text)
  ) {
    return true;
  }

  if (text.length >= 18 && /^[A-Za-z0-9]+$/.test(text)) {
    const vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length;
    const vowelRatio = vowelCount / text.length;

    if (vowelRatio < 0.2) {
      return true;
    }
  }

  return false;
}

function tooManyFieldsLookRandom(fields: string[]) {
  const suspiciousCount = fields.filter((field) =>
    looksLikeGibberish(field)
  ).length;

  return suspiciousCount >= 3;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:220px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;">
        ${escapeHtml(value || "Belirtilmedi")}
      </td>
    </tr>
  `;
}

function buildAdminHtml(data: PartnerApplicationPayload) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 16px 0;">
        Yeni İş Ortağı Başvurusu — CleanNestPro
      </h2>

      <p style="margin:0 0 24px 0;color:#475569;">
        Web sitesi üzerinden yeni bir iş ortağı başvurusu gönderildi.
        Başvuru sahibiyle iletişime geçmek için bu e-postayı doğrudan yanıtlayabilirsiniz.
      </p>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row(
            "Başvuru türü",
            data.applicationType === "Cleaning Company"
              ? "Şirket / ekip"
              : "Bireysel temizlik görevlisi"
          )}
          ${row("Ad soyad / Yetkili kişi", data.fullName)}
          ${row("Şirket / ekip adı", data.companyName || "Belirtilmedi")}
          ${row("Telefon", data.phone)}
          ${row("E-posta", data.email)}
          ${row("Antalya'da hizmet verdiği bölgeler", data.location)}
          ${row("Deneyim", data.experience || "Belirtilmedi")}
          ${row(
            "Konuşabildiği diller",
            data.languages?.length
              ? data.languages
                  .map((language) =>
                    ({
                      English: "İngilizce",
                      Russian: "Rusça",
                      Turkish: "Türkçe",
                      Other: "Diğer",
                    }[language] || language)
                  )
                  .join(", ")
              : "Belirtilmedi"
          )}
          ${row(
            "Çalışma günleri ve saatleri",
            data.availability || "Belirtilmedi"
          )}
          ${row("Malzeme ve ekipman sağlayabilir", yesNo(data.hasSupplies))}
          ${row("Kendi ulaşım aracı var", yesNo(data.transport))}
          ${row("Fatura kesebilir", yesNo(data.canInvoice))}
          ${row("Geri bildirimi kabul edip düzeltme yapar", yesNo(data.acceptsFeedback))}
          ${row("Müşteriden ayrılmadan önce son kontrol yapar", yesNo(data.performsFinalCheck))}
          ${row("Hizmet standardı taahhüdünü onayladı", data.qualityCommitment ? "Evet" : "Hayır")}
          ${row("Ekip büyüklüğü", data.teamSize || "Belirtilmedi")}
          ${row("Ek notlar", data.notes || "Yok")}
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
          Başvurunuz bize ulaştı
        </h1>

        <p style="margin:0 0 16px 0;color:#475569;">
          Merhaba ${escapeHtml(data.fullName)},
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          CleanNestPro hizmet ağına katılmak için yaptığınız başvuru için teşekkür ederiz.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Başvuruları deneyim, hizmet bölgesi, iletişim ve kalite yaklaşımı
          açısından dikkatle değerlendiriyoruz. Uygunluk olması hâlinde sonraki
          adımları görüşmek için sizinle e-posta veya telefon yoluyla iletişime geçeceğiz.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;font-size:14px;color:#475569;">
            Özellikle uluslararası müşterilerimiz için güvenilirlik, açık iletişim,
            dakiklik, geri bildirime açıklık ve özenli hizmet standardı bizim için önemlidir.
          </p>
        </div>

        <p style="margin:0 0 16px 0;color:#475569;">
          Başvurunuza eklemek istediğiniz bir bilgi varsa bu e-postayı doğrudan
          yanıtlayabilirsiniz.
        </p>

        <p style="margin:0;color:#475569;">
          Saygılarımızla,<br />
          <strong style="color:#0f172a;">
            CleanNestPro Destek Ekibi
          </strong><br />
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
        { error: "E-posta hizmeti yapılandırılmamış." },
        { status: 500 }
      );
    }

    const raw = (await req.json()) as PartnerApplicationPayload;

    const data: PartnerApplicationPayload = {
      applicationType: raw.applicationType,
      fullName: clean(raw.fullName),
      companyName: clean(raw.companyName),
      phone: clean(raw.phone),
      email: clean(raw.email).toLowerCase(),
      location: clean(raw.location),
      experience: clean(raw.experience),
      languages: Array.isArray(raw.languages)
        ? raw.languages.map(clean).filter(Boolean)
        : [],
      availability: clean(raw.availability),
      hasSupplies: clean(raw.hasSupplies),
      transport: clean(raw.transport),
      canInvoice: clean(raw.canInvoice),
      acceptsFeedback: clean(raw.acceptsFeedback),
      performsFinalCheck: clean(raw.performsFinalCheck),
      qualityCommitment: raw.qualityCommitment === true,
      teamSize: clean(raw.teamSize),
      notes: clean(raw.notes),
      website: clean(raw.website),
      formStartedAt:
        typeof raw.formStartedAt === "number"
          ? raw.formStartedAt
          : 0,
    };

    const supportEmail =
      process.env.SUPPORT_EMAIL ||
      "support@cleannestpro.com";

    const fromEmail =
      process.env.SUPPORT_FROM_EMAIL ||
      "CleanNestPro Support <support@cleannestpro.com>";

    // Honeypot: return success silently for likely bots.
    if (data.website) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    // Time trap: reject unrealistically fast submissions.
    if (
      !data.formStartedAt ||
      Date.now() - data.formStartedAt < 4000
    ) {
      return NextResponse.json(
        { error: "Form çok hızlı gönderildi. Lütfen bilgilerinizi kontrol edin." },
        { status: 400 }
      );
    }

    if (
      data.applicationType !== "Individual Cleaner" &&
      data.applicationType !== "Cleaning Company"
    ) {
      return NextResponse.json(
        { error: "Geçersiz başvuru türü." },
        { status: 400 }
      );
    }

    if (
      !data.fullName ||
      data.fullName.length < 2 ||
      data.fullName.length > 100
    ) {
      return NextResponse.json(
        { error: "Lütfen geçerli bir ad ve soyad girin." },
        { status: 400 }
      );
    }

    if (
      data.applicationType === "Cleaning Company" &&
      !data.companyName
    ) {
      return NextResponse.json(
        { error: "Şirket veya ekip adı gereklidir." },
        { status: 400 }
      );
    }

    if (!data.phone || !isPhoneReasonable(data.phone)) {
      return NextResponse.json(
        { error: "Lütfen geçerli bir telefon numarası girin." },
        { status: 400 }
      );
    }

    if (!data.email || !isEmailValid(data.email)) {
      return NextResponse.json(
        { error: "Lütfen geçerli bir e-posta adresi girin." },
        { status: 400 }
      );
    }

    if (
      !data.location ||
      data.location.length < 2 ||
      data.location.length > 120
    ) {
      return NextResponse.json(
        { error: "Lütfen Antalya'da hizmet verdiğiniz bölgeleri belirtin." },
        { status: 400 }
      );
    }

    const fieldsThatMustNotContainLinks = [
      data.experience,
      data.notes,
      data.availability,
      data.location,
      data.companyName,
    ];

    if (
      fieldsThatMustNotContainLinks.some((value) =>
        containsUrl(value)
      )
    ) {
      return NextResponse.json(
        { error: "Bu formdaki metin alanlarında bağlantı kullanılamaz." },
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
        { error: "Başvuru bilgileri geçersiz görünüyor." },
        { status: 400 }
      );
    }

    const yesNoFields = [
      data.hasSupplies,
      data.transport,
      data.canInvoice,
      data.acceptsFeedback,
      data.performsFinalCheck,
    ];

    if (yesNoFields.some((value) => value !== "Yes" && value !== "No")) {
      return NextResponse.json(
        { error: "Lütfen tüm Evet/Hayır sorularını yanıtlayın." },
        { status: 400 }
      );
    }

    if (!data.qualityCommitment) {
      return NextResponse.json(
        {
          error:
            "Başvuruyu göndermek için hizmet standardı taahhüdünü onaylamalısınız.",
        },
        { status: 400 }
      );
    }

    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [supportEmail],
      replyTo: data.email,
      subject: `Yeni iş ortağı başvurusu: ${data.fullName}`,
      html: buildAdminHtml(data),
    });

    if (adminResult.error) {
      console.error(
        "Failed to send partner application notification:",
        adminResult.error
      );

      return NextResponse.json(
        { error: "Başvuru gönderilemedi. Lütfen tekrar deneyin." },
        { status: 502 }
      );
    }

    const applicantResult = await resend.emails.send({
      from: fromEmail,
      to: [data.email],
      replyTo: supportEmail,
      subject: "CleanNestPro başvurunuz bize ulaştı",
      html: buildApplicantHtml(data),
    });

    if (applicantResult.error) {
      console.error(
        "Failed to send applicant confirmation:",
        applicantResult.error
      );

      return NextResponse.json(
        {
          error:
            "Başvurunuz alındı ancak onay e-postası gönderilemedi.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      adminEmailId: adminResult.data?.id,
      applicantEmailId: applicantResult.data?.id,
    });
  } catch (error) {
    console.error(
      "partner application route error:",
      error
    );

    return NextResponse.json(
      { error: "Başvuru gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}