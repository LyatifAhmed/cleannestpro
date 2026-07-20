import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/Footer";
import QuoteCTA from "./QuoteCTA";
import ServiceAreas from "./ServiceAreas";
import ServiceBenefits, { type Benefit } from "./ServiceBenefits";
import ServiceFaq, { type Faq } from "./ServiceFaq";
import ServicePageHero from "./ServicePageHero";
import ServiceScope from "./ServiceScope";

export type SeoPageConfig = {
  locale?: "en" | "ru";
  canonical: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  benefits: Benefit[];
  contentTitle: string;
  paragraphs: string[];
  suitableTitle: string;
  suitableFor: string[];
  scopeTitle: string;
  scopeIntro?: string;
  scope: string[];
  areasTitle: string;
  areasIntro: string;
  areas: string[];
  faqs: Faq[];
  related: { href: string; label: string }[];
  ctaTitle: string;
  ctaText: string;
};

export default function SeoServicePage({ config }: { config: SeoPageConfig }) {
  const locale = config.locale ?? "en";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.title,
    url: config.canonical,
    provider: { "@type": "Organization", name: "CleanNestPro", url: "https://www.cleannestpro.com" },
    areaServed: { "@type": "City", name: "Antalya" },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: `${config.canonical}#quote` },
  };

  return (
    <main lang={locale} className="min-h-screen bg-[#fcfbf8] text-slate-900">
      <Script id={`faq-${config.breadcrumb.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id={`service-${config.breadcrumb.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageHero eyebrow={config.eyebrow} title={config.title} intro={config.intro} breadcrumb={config.breadcrumb} locale={locale} />
      <ServiceBenefits items={config.benefits} />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:px-8 md:py-16 lg:grid-cols-[1.12fr_0.88fr]">
        <article>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{config.contentTitle}</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            {config.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
        <aside className="self-start rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">{config.suitableTitle}</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
            {config.suitableFor.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 md:px-8"><ServiceScope title={config.scopeTitle} intro={config.scopeIntro} items={config.scope} /></section>
      <ServiceAreas title={config.areasTitle} intro={config.areasIntro} areas={config.areas} />
      <ServiceFaq items={config.faqs} title={locale === "ru" ? "Часто задаваемые вопросы" : "Frequently asked questions"} />

      <section className="mx-auto max-w-6xl px-6 py-4 md:px-8">
        <h2 className="text-xl font-semibold text-slate-950">{locale === "ru" ? "Другие услуги уборки" : "Related cleaning services"}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {config.related.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50">{link.label}</Link>)}
        </div>
      </section>

      <div id="quote"><QuoteCTA title={config.ctaTitle} text={config.ctaText} locale={locale} /></div>
      <Footer locale={locale} />
    </main>
  );
}
