import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Villa Cleaning in Antalya | Premium Holiday Home Cleaning",
  description:
    "Premium villa cleaning in Antalya for holiday homeowners, expats, and short-term rental properties. CleanNestPro helps keep high-standard homes guest-ready with trusted local teams.",
  keywords: [
    "villa cleaning Antalya",
    "holiday home cleaning Antalya",
    "premium villa cleaning Antalya",
    "luxury home cleaning Antalya",
    "expat villa cleaning Antalya",
    "Antalya cleaning service for villas",
  ],
  alternates: {
    canonical: "https://cleannestpro.com/villa-cleaning-antalya",
  },
  openGraph: {
    title: "Villa Cleaning in Antalya | Premium Holiday Home Cleaning",
    description:
      "Trusted villa cleaning in Antalya for holiday homes, expats, and premium properties.",
    url: "https://cleannestpro.com/villa-cleaning-antalya",
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium villa cleaning in Antalya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Cleaning in Antalya | Premium Holiday Home Cleaning",
    description:
      "Trusted villa cleaning in Antalya for holiday homes, expats, and premium properties.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Do you work with holiday villas and second homes?",
    answer:
      "Yes. CleanNestPro is designed for holiday homes, seasonal stays, and villas that need reliable, high-standard cleaning between visits or before guest arrivals.",
  },
  {
    question: "Is this suitable for overseas owners?",
    answer:
      "Yes. Many owners are based outside Turkey and need a cleaning service they can arrange remotely with clear communication and dependable standards.",
  },
  {
    question: "Do you support Airbnb or guest turnovers?",
    answer:
      "Yes. If your villa is used for short stays, guest changeovers and presentation-focused cleaning can be arranged depending on location and availability.",
  },
  {
    question: "Which languages do you support?",
    answer:
      "We support English, Russian, and Ukrainian, which makes coordination easier for international clients and property owners.",
  },
];

export default function VillaCleaningAntalyaPage() {
  return (
    <main className="bg-[#fcfbf8] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            CleanNestPro
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Villa Cleaning in Antalya
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            CleanNestPro provides premium villa cleaning in Antalya for holiday
            homeowners, expats, and short-term rental properties. We focus on a
            reliable, polished standard that helps homes feel fresh, presentable,
            and ready for owners or guests.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6 md:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Premium standard
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Ideal for villas, holiday homes, and well-kept residential
              properties where presentation matters.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Remote-friendly
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Useful for overseas owners who want dependable communication and a
              straightforward booking process.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              International support
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              English, Russian, and Ukrainian support for smoother coordination
              with international clients.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              A better fit for villas and holiday homes
            </h2>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-600">
              <p>
                Villa cleaning in Antalya often needs a different standard from
                ordinary domestic cleaning. Holiday homes and premium properties
                are judged quickly by how they look, smell, and feel the moment
                someone enters. Dust on surfaces, missed bathroom details, or a
                kitchen that does not feel fully reset can immediately lower the
                impression of the whole property.
              </p>

              <p>
                That is why CleanNestPro focuses on dependable presentation,
                attention to detail, and a more premium service style. Whether
                the property is owner-occupied, used seasonally, or prepared for
                short-term guests, the goal is simple: a home that feels ready,
                cared for, and comfortable.
              </p>

              <p>
                Antalya attracts many international homeowners who are not always
                in the city year-round. Some visit only during certain seasons.
                Others manage guest bookings from abroad and need a local team
                they can trust. CleanNestPro is built around that exact use case:
                helping remote owners arrange high-quality cleaning support with
                less friction and more confidence.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              What this service is suitable for
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>• Villas used as holiday homes</li>
              <li>• Premium homes between owner stays</li>
              <li>• Guest-ready resets before arrivals</li>
              <li>• Short-term rental and Airbnb turnovers</li>
              <li>• Properties managed remotely from abroad</li>
              <li>• Expats wanting consistent, reliable help</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-4 md:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">
            What makes premium villa cleaning different
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold">Presentation matters</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Premium homes need more than a quick tidy. Bathrooms, kitchens,
                floors, and visible surfaces all affect how the property is
                perceived.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Consistency matters</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Owners and guests should know what to expect. Reliable standards
                are especially important when the owner is not physically present.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Trust matters</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Many clients are coordinating remotely. Communication and
                confidence in the process are as important as the cleaning itself.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Guest readiness matters</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                If the property is used for short stays, details become part of
                the guest experience and can influence reviews and repeat bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Why homeowners choose a service like this in Antalya
          </h2>

          <div className="mt-6 space-y-6 text-base leading-8 text-slate-600">
            <p>
              Antalya is a strong market for second homes, villas, and holiday
              rentals. Many owners want a home that stays in excellent condition
              without needing to manage every cleaning detail themselves. A
              dependable cleaning arrangement saves time, reduces stress, and
              helps the property stay aligned with the standards owners expect.
            </p>

            <p>
              For some, it is about convenience. For others, it is about
              protecting a valuable property and keeping it presentable for
              guests. For short-term rentals, it can also support occupancy,
              reviews, and the overall guest experience. In all of these cases,
              the cleaner is not just doing a task. They are helping maintain the
              standard of the home itself.
            </p>

            <p>
              CleanNestPro is positioned around that mindset: not simply cleaning,
              but helping premium homes in Antalya stay ready for living, hosting,
              and welcoming people well.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-4 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-base font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="rounded-3xl bg-[#f3efe8] p-8 md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Looking for villa cleaning in Antalya?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              CleanNestPro is designed for international clients, expats, and
              property owners who want a more premium and dependable cleaning
              experience in Antalya.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Request a quote
              </Link>

              <Link
                href="/apply"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}