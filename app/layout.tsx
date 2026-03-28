import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Premium Home Cleaning in Antalya | CleanNestPro",
  description:
    "Premium home cleaning in Antalya for expats, holiday homeowners, and Airbnb hosts. English, Russian and Ukrainian support.",
  keywords: [
    "home cleaning Antalya",
    "cleaning service Antalya",
    "premium cleaning Antalya",
    "Airbnb cleaning Antalya",
    "expat cleaning Antalya",
    "holiday home cleaning Antalya",
    "villa cleaning Antalya",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
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
      <head>
        {/* FAVICON OVERRIDE */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body className="min-h-full bg-[#fcfbf8] text-slate-900">
        {children}
      </body>
    </html>
  );
}