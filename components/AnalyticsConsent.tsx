"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const GA4_MEASUREMENT_ID = "G-1ZGBSJVDK3";
const CLARITY_PROJECT_ID = "w3i9ffghgo";
const STORAGE_KEY = "cleannestpro-analytics-consent-v1";

type ConsentChoice = "accepted" | "rejected";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
  __cleanNestTrackingLoaded?: boolean;
};

function languageForPath(pathname: string): "en" | "tr" | "ru" {
  if (pathname.startsWith("/tr/")) return "tr";
  if (pathname === "/ru" || pathname.startsWith("/ru/")) return "ru";
  if (typeof window !== "undefined") {
    const lang = new URLSearchParams(window.location.search).get("lang");
    if (lang === "tr" || lang === "ru") return lang;
  }
  return "en";
}

export default function AnalyticsConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [locale, setLocale] = useState<"en" | "tr" | "ru">("en");

  useEffect(() => {
    setLocale(languageForPath(pathname));
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (existing === "accepted" || existing === "rejected") {
        setChoice(existing);
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, [pathname]);

  useEffect(() => {
    const updateLocale = () => setLocale(languageForPath(pathname));
    window.addEventListener("popstate", updateLocale);
    return () => window.removeEventListener("popstate", updateLocale);
  }, [pathname]);

  useEffect(() => {
    if (choice !== "accepted") return;
    const browser = window as AnalyticsWindow;
    // Only initialize analytics after the visitor explicitly opts in.
    if (!browser.__cleanNestTrackingLoaded) {
      browser.__cleanNestTrackingLoaded = true;
      browser.dataLayer = browser.dataLayer || [];
      browser.gtag = (...args: unknown[]) => { browser.dataLayer?.push(args); };
      browser.gtag("js", new Date());
      browser.gtag("config", GA4_MEASUREMENT_ID, {
        send_page_view: false,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
      const ga = document.createElement("script");
      ga.async = true;
      ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      ga.dataset.cleannestAnalytics = "ga4";
      document.head.appendChild(ga);

      const clarity = document.createElement("script");
      clarity.async = true;
      clarity.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
      clarity.dataset.cleannestAnalytics = "clarity";
      document.head.appendChild(clarity);
      browser.clarity = browser.clarity || ((...args: unknown[]) => {
        const client = browser.clarity as ((...a: unknown[]) => void) & { q?: unknown[][] };
        (client.q = client.q || []).push(args);
      });
    }

    // Pageview on first consent and on Next.js client navigation.
    const url = new URL(window.location.href);
    const allowedLanguage = url.searchParams.get("lang");
    const safeLocation = url.origin + pathname +
      ((allowedLanguage === "tr" || allowedLanguage === "ru") ? `?lang=${allowedLanguage}` : "");
    browser.gtag?.("event", "page_view", {
      page_location: safeLocation,
      page_path: pathname,
      page_title: document.title,
    });
  }, [choice, pathname]);

  function saveConsent(next: ConsentChoice) {
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* do not block user choice */ }
    setChoice(next);
    setShowBanner(false);
    setSettingsOpen(false);
    // Withdrawing consent removes tracking cookies on the next document load;
    // existing third-party scripts cannot be safely unloaded in-place.
    if (choice === "accepted" && next === "rejected") window.location.reload();
  }

  const copy = {
    en: {
      heading: "Your privacy choices",
      body: "With your permission, we use Google Analytics and Microsoft Clarity to understand website visits and improve our quote form. Optional analytics stays off until you accept.",
      accept: "Accept analytics", reject: "Reject optional analytics", manage: "Cookie settings",
    },
    tr: {
      heading: "Gizlilik tercihleriniz",
      body: "İzninizle Google Analytics ve Microsoft Clarity kullanarak ziyaretleri ve teklif formumuzu iyileştiriyoruz. Onay verene kadar isteğe bağlı analizler kapalıdır.",
      accept: "Analize izin ver", reject: "İsteğe bağlı analizleri reddet", manage: "Çerez ayarları",
    },
    ru: {
      heading: "Настройки конфиденциальности",
      body: "С вашего согласия Google Analytics и Microsoft Clarity помогают улучшать сайт и форму расчёта. Необязательная аналитика отключена до вашего согласия.",
      accept: "Разрешить аналитику", reject: "Отклонить аналитику", manage: "Настройки cookie",
    },
  }[locale];

  return (
    <>
      {(showBanner || settingsOpen) ? (
        <section
          aria-label={copy.heading}
          role="dialog"
          aria-modal="false"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl sm:p-6"
        >
          <h2 className="text-lg font-semibold">{copy.heading}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{copy.body}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => saveConsent("rejected")} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800">
              {copy.reject}
            </button>
            <button type="button" onClick={() => saveConsent("accepted")} className="rounded-xl bg-[#122522] px-4 py-2.5 text-sm font-semibold text-white">
              {copy.accept}
            </button>
          </div>
          <a href="/privacy-policy" className="mt-3 inline-block text-xs text-slate-600 underline underline-offset-2">
            {locale === "tr" ? "Gizlilik politikası (İngilizce)" : locale === "ru" ? "Политика конфиденциальности (англ.)" : "Privacy policy"}
          </a>
        </section>
      ) : choice !== null ? (
        <button type="button" onClick={() => setSettingsOpen(true)} className="fixed bottom-3 left-3 z-[90] rounded-full border border-slate-300 bg-white/95 px-3 py-2 text-xs text-slate-700 shadow-md">
          {copy.manage}
        </button>
      ) : null}
    </>
  );
}
