import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Work With CleanNestPro | Join Our Trusted Cleaning Network in Antalya",
  description:
    "Apply to work with CleanNestPro — a UK-based and Antalya-connected cleaning service for international clients. We collaborate with selected cleaners and local companies for premium homes, holiday properties, and Airbnb hosts.",
  keywords: [
    "cleaning jobs Antalya",
    "Antalya cleaning company jobs",
    "cleaner application Antalya",
    "Airbnb cleaning jobs Turkey",
    "cleaning partner network Antalya",
    "house cleaning work Antalya",
  ],
  alternates: {
    canonical: "https://cleannestpro.com/apply",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Work With CleanNestPro | Join Our Trusted Cleaning Network",
    description:
      "Apply as an individual cleaner or cleaning company. Work with international clients and premium properties in Antalya.",
    url: "https://cleannestpro.com/apply",
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "https://cleannestpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Work with CleanNestPro in Antalya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work With CleanNestPro | Join Our Trusted Cleaning Network",
    description:
      "Apply as an individual cleaner or cleaning company. Work with international clients and premium properties in Antalya.",
    images: ["https://cleannestpro.com/og-image.jpg"],
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}