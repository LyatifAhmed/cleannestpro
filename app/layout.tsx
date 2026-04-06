import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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