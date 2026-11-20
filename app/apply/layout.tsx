import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Antalya Temizlik İş Ortaklığı Başvurusu | CleanNestPro",
  description:
    "Antalya'da temizlik şirketi, ekip veya bireysel hizmet sağlayıcısı olarak CleanNestPro iş ortaklığına başvurun. Villa, yazlık ve profesyonel ev temizliği iş fırsatları.",
  keywords: [
    "Antalya temizlik işi",
    "Antalya temizlik şirketi iş ortaklığı",
    "Antalya temizlikçi başvurusu",
    "Antalya Airbnb temizlik işleri",
    "Antalya temizlik iş ortaklığı",
    "Antalya ev temizliği iş ilanları",
  ],
  alternates: {
    canonical: "https://www.cleannestpro.com/apply",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Antalya Temizlik İş Ortaklığı | CleanNestPro",
    description:
      "Antalya'da temizlik şirketi veya bireysel temizlik görevlisi olarak başvurun. Seçkin konutlar, villalar ve yazlıklar için hizmet ağı.",
    url: "https://www.cleannestpro.com/apply",
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "https://www.cleannestpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Work with CleanNestPro in Antalya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Temizlik İş Ortaklığı | CleanNestPro",
    description:
      "Antalya'da temizlik şirketi veya bireysel temizlik görevlisi olarak başvurun. Seçkin konutlar, villalar ve yazlıklar için hizmet ağı.",
    images: ["https://www.cleannestpro.com/og-image.jpg"],
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}