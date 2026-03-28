import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About CleanNestPro | International Standards, Local Trust in Antalya",
  description:
    "Learn more about CleanNestPro, a UK-based and Antalya-connected home cleaning brand operated by Generation Beta Digital Ltd for international clients, expats, holiday homeowners, and Airbnb hosts.",
};

const values = [
  {
    title: "International standards, local delivery",
    text: "CleanNestPro is structured around international expectations for trust, communication, and process, while coordinating carefully selected local service delivery in Antalya.",
  },
  {
    title: "Carefully selected local partners",
    text: "We do not operate as an open marketplace. Cleaning services may be carried out by selected local partners and firms that we choose carefully, review personally, and feel comfortable recommending.",
  },
  {
    title: "Clear communication",
    text: "We aim to make the process feel calmer and more transparent from the beginning, with thoughtful quoting, realistic expectations, and better communication throughout.",
  },
  {
    title: "Secure payment infrastructure",
    text: "Payments are handled through internationally trusted systems such as Stripe, helping the process feel more secure, familiar, and professionally managed for global clients.",
  },
];

const trustPoints = [
  "UK-based business structure with Antalya-connected delivery",
  "Operated by Generation Beta Digital Ltd",
  "Headquartered in London, United Kingdom",
  "English, Turkish, and Russian support",
  "Only selected local service partners",
  "Clear quote process before anything is confirmed",
  "Secure international payment methods via Stripe",
  "Built with privacy, trust, and international expectations in mind",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] text-slate-900 dark:bg-[#0b1020] dark:text-slate-100">
      <section className="border-b border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            About CleanNestPro
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            A more trusted way to arrange home cleaning in Antalya
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            CleanNestPro was created to offer a calmer, more trustworthy, and
            more internationally-minded cleaning experience for people who care
            about their homes, their guests, and the standard of service behind
            the booking.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              Why this was built
            </h2>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                Many international clients in Antalya want something more
                reliable than sending a message into the dark and hoping the
                right cleaner appears. They want to understand who is behind the
                brand, how the process works, what standard to expect, and how
                payment and communication are handled.
              </p>

              <p>
                CleanNestPro was built to make that experience feel clearer,
                calmer, and more professional. The idea was simple: combine
                international expectations around trust, communication, privacy,
                and payment with carefully selected local service delivery in
                Antalya.
              </p>

              <p>
                CleanNestPro operates under <strong>Generation Beta Digital Ltd</strong>,
                a UK company headquartered in London. That gives the brand a more
                international structure and a more accountable foundation, while
                remaining closely connected to the local reality of service in
                Antalya.
              </p>
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#f6f3ee] p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Company details</h3>

              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <p>
                  <strong>Legal entity:</strong> Generation Beta Digital Ltd
                </p>
                <p>
                  <strong>Headquarters:</strong> 3rd Floor, 86–90 Paul Street,
                  London EC2A 4NE, UK
                </p>
                <p>
                  <strong>Company No:</strong> 16274319
                </p>
                <p>
                  <strong>ICO No:</strong> ZB883806
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <div className="overflow-hidden rounded-[24px]">
              <Image
                src="/lyatif-ahmed-founder-cleannestpro-antalya-cleaning.avif"
                alt="Lyatif Ahmed, founder of CleanNestPro"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Founder
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Lyatif Ahmed</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                CleanNestPro was founded by Lyatif Ahmed to build a more trusted
                bridge between international clients and carefully selected local
                service partners in Antalya. The goal was never to create a
                noisy marketplace, but to create a more measured, better managed,
                and more internationally credible way to arrange home cleaning.
              </p>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                The brand is shaped around calm communication, higher standards
                of presentation, and a clearer sense of accountability — so
                clients understand who is behind the service, how the process is
                managed, and why it feels different from a casual listing or
                anonymous local directory.
              </p>

              <a
                href="https://www.linkedin.com/in/lyatif-ahmed-redzheb/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium transition hover:bg-slate-50 dark:border-white/15 dark:hover:bg-white/10"
              >
                View LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ee] py-16 dark:bg-[#0f172a] md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              Why clients choose us
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Trust is built when people understand the structure behind the
              service, know who is responsible for the client experience, and
              feel that the standard is being managed properly.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                Our approach to trust
              </h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                CleanNestPro manages the client experience, the quote process,
                the communication standard, and the payment flow. In some cases,
                the cleaning itself may be carried out by a selected local
                partner or local firm that has been chosen to operate within our
                service approach.
              </p>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                We believe clients should understand this clearly. That is why we
                do not present the service as an anonymous marketplace or pretend
                that every cleaner is directly employed under one roof. Instead,
                we focus on careful selection, clearer standards, and better
                oversight of the client journey.
              </p>
            </div>

            <div className="grid gap-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 px-4 py-4 text-sm text-slate-700 dark:border-white/10 dark:text-slate-200"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-[#f6f3ee] p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            Multilingual support, international expectations
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600 dark:text-slate-300">
            CleanNestPro is built with international clients in mind. We provide
            support in <strong>English, Turkish, and Russian</strong>, helping
            the process feel easier and more accessible for expats, overseas
            homeowners, and short-term rental operators who may prefer clear
            communication in their own language.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            Privacy, payment, and accountability
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600 dark:text-slate-300">
            We understand that international clients often look for stronger
            signals of trust before booking. That is why we emphasise clearer
            company details, more structured communication, and internationally
            recognised payment infrastructure. Payments are processed through
            trusted providers such as <strong>Stripe</strong>, helping the
            process feel more secure, familiar, and professionally managed.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600 dark:text-slate-300">
            As a UK-registered company with an ICO registration number, we also
            believe in giving clients clearer visibility into who is behind the
            brand and how the service is being managed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 text-center md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            Built for clients who value clarity, trust, and international standards
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
            If you want a quieter, more trustworthy, and more carefully managed
            way to arrange home cleaning in Antalya, CleanNestPro is designed
            for exactly that.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#quote-form"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              Request a private quote
            </Link>

            <Link
              href="/"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-base font-medium transition hover:bg-slate-50 dark:border-white/15 dark:hover:bg-white/10"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}