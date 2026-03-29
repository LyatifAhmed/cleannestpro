import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Airbnb Cleaning in Antalya | Reliable Turnover Service",
  description:
    "Reliable Airbnb cleaning in Antalya for hosts and property managers. Guest-ready cleaning, quick turnovers, and consistent standards for short-term rentals.",
  keywords: [
    "Airbnb cleaning Antalya",
    "short term rental cleaning Antalya",
    "guest turnover cleaning Antalya",
    "holiday rental cleaning Antalya",
    "Airbnb cleaner Antalya",
    "Antalya cleaning service Airbnb",
  ],
  alternates: {
    canonical: "https://cleannestpro.com/airbnb-cleaning-antalya",
  },
  openGraph: {
    title: "Airbnb Cleaning in Antalya | Reliable Turnover Service",
    description:
      "Professional Airbnb cleaning in Antalya for hosts who need fast, consistent guest-ready turnovers.",
    url: "https://cleannestpro.com/airbnb-cleaning-antalya",
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Airbnb cleaning service in Antalya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Cleaning in Antalya | Reliable Turnover Service",
    description:
      "Fast and reliable Airbnb cleaning in Antalya for hosts and property managers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Do you support same-day Airbnb turnovers?",
    answer:
      "Yes. Availability depends on location and schedule, but the service is designed around guest changeovers and time-sensitive cleaning.",
  },
  {
    question: "Is this suitable for multiple properties?",
    answer:
      "Yes. Hosts managing more than one property can coordinate cleaning schedules to keep everything running smoothly.",
  },
  {
    question: "Do you work with international hosts?",
    answer:
      "Yes. Many clients manage their Airbnb remotely. We support English, Russian, and Ukrainian communication.",
  },
  {
    question: "What is included in a turnover clean?",
    answer:
      "Typical turnover cleaning includes resetting bedrooms, cleaning bathrooms and kitchens, refreshing surfaces, and preparing the property for the next guest.",
  },
];

export default function AirbnbCleaningAntalyaPage() {
  return (
    <main className="bg-[#fcfbf8] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            CleanNestPro
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Airbnb Cleaning in Antalya
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            CleanNestPro provides reliable Airbnb cleaning in Antalya for hosts,
            property managers, and short-term rental owners. We focus on
            consistent, guest-ready standards that help properties look and feel
            right for every arrival.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6 md:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold">Fast turnovers</h2>
            <p className="mt-2 text-sm text-slate-600">
              Designed around short gaps between guests where timing and
              efficiency matter.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Guest-ready standard</h2>
            <p className="mt-2 text-sm text-slate-600">
              Clean, reset, and presentation-focused so every guest walks into a
              fresh space.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Remote coordination</h2>
            <p className="mt-2 text-sm text-slate-600">
              Ideal for hosts managing properties from abroad who need dependable
              support.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold">
              Built for short-term rental workflows
            </h2>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-600">
              <p>
                Airbnb cleaning in Antalya is not the same as standard home
                cleaning. Timing, consistency, and presentation all play a direct
                role in guest satisfaction and reviews. A missed detail can
                quickly turn into a negative experience.
              </p>

              <p>
                That is why turnover cleaning needs to be structured around
                arrival times, quick resets, and a reliable standard. Bedrooms
                need to feel fresh, bathrooms spotless, and kitchens fully reset
                so the next guest can settle in immediately.
              </p>

              <p>
                CleanNestPro focuses on that specific use case. Whether you manage
                one property or several, the aim is to make cleaning predictable,
                efficient, and aligned with guest expectations.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">
              Suitable for
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li>• Airbnb and short-term rental hosts</li>
              <li>• Property managers handling multiple listings</li>
              <li>• Holiday apartments and villas</li>
              <li>• Remote hosts managing from abroad</li>
              <li>• Guest turnover preparation</li>
              <li>• Properties requiring consistent standards</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-4 md:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <h2 className="text-2xl font-semibold">
            Why consistent cleaning matters for Airbnb
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold">Reviews depend on it</h3>
              <p className="mt-2 text-sm text-slate-300">
                Cleanliness is one of the first things guests notice and often
                mention in reviews.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Turnover speed matters</h3>
              <p className="mt-2 text-sm text-slate-300">
                Short gaps between bookings require efficient and predictable
                cleaning.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Consistency builds trust</h3>
              <p className="mt-2 text-sm text-slate-300">
                Hosts need to know the property will be ready every time without
                checking in person.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Presentation drives bookings</h3>
              <p className="mt-2 text-sm text-slate-300">
                A well-prepared space leads to better guest experiences and
                stronger demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b pb-6 last:border-b-0">
                <h3 className="text-base font-semibold">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="rounded-3xl bg-[#f3efe8] p-8 md:p-10">
          <h2 className="text-2xl font-semibold">
            Need Airbnb cleaning in Antalya?
          </h2>

          <p className="mt-4 text-base text-slate-600">
            CleanNestPro helps hosts and property managers keep their listings
            guest-ready with reliable, high-standard cleaning.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm text-white"
            >
              Request a quote
            </Link>

            <Link
              href="/apply"
              className="rounded-full border px-6 py-3 text-sm"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}