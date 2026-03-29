import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // ✅ EKLENDİ
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
  metadataBase: new URL("https://cleannestpro.com"),

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Premium Home Cleaning in Antalya | CleanNestPro",
    description:
      "Premium home cleaning in Antalya for expats, holiday homeowners, and Airbnb hosts.",
    url: "https://cleannestpro.com",
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

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
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* 🔥 CLARITY EKLENDİ */}
        
      </head>

      <body className="min-h-full bg-[#fcfbf8] text-slate-900">
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w3i9ffghgo");`,
          }}
        />
        {children}
      </body>
    </html>
  );
}