import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleannestpro.com"),

  title: "Premium Home Cleaning in Antalya | CleanNestPro",
  description:
    "Premium home cleaning in Antalya for expats, holiday homeowners, and Airbnb hosts. English, Russian and Turkish support.",

  keywords: [
    "home cleaning Antalya",
    "cleaning service Antalya",
    "premium cleaning Antalya",
    "Airbnb cleaning Antalya",
    "expat cleaning Antalya",
    "holiday home cleaning Antalya",
    "villa cleaning Antalya",
  ],

  alternates: {
    canonical: "/",
    languages: {
      en: "https://www.cleannestpro.com/",
      ru: "https://www.cleannestpro.com/ru",
      "x-default": "https://www.cleannestpro.com/",
    },
  },

  openGraph: {
    title: "Premium Home Cleaning in Antalya | CleanNestPro",
    description:
      "Premium home cleaning in Antalya for expats, holiday homeowners, and Airbnb hosts.",
    url: "https://www.cleannestpro.com",
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "https://www.cleannestpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CleanNestPro premium cleaning service in Antalya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Home Cleaning in Antalya | CleanNestPro",
    description:
      "Premium home cleaning in Antalya for expats, holiday homeowners, and Airbnb hosts.",
    images: ["https://www.cleannestpro.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest",
};

export const viewport: Viewport = {
  themeColor: "#fcfbf8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fcfbf8] text-slate-900">
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
