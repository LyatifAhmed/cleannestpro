"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import HeroLens from "@/components/HeroLens";

type ServiceType =
  | "Regular Home Cleaning"
  | "Deep Cleaning"
  | "Airbnb Turnover Cleaning"
  | "Move In / Move Out Cleaning"
  | "After-party Cleanup";

type PropertyType =
  | "Studio"
  | "1 Bedroom Apartment"
  | "2 Bedroom Apartment"
  | "3 Bedroom Apartment"
  | "Villa / Large Home"
  | "Holiday Home";

type FrequencyType =
  | "One-time"
  | "Weekly"
  | "Bi-weekly"
  | "Monthly"
  | "Not sure yet";

type LanguageType = "English" | "Russian" | "Ukrainian";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  preferredLanguage: LanguageType;
  location: string;
  serviceType: ServiceType;
  propertyType: PropertyType;
  bathrooms: string;
  propertySize: string;
  frequency: FrequencyType;
  preferredDate: string;
  preferredTime: string;
  furnished: string;
  pets: string;
  suppliesNeeded: string;
  extraTasks: string[];
  accessDetails: string;
  specialNotes: string;
};

const WHATSAPP_NUMBER = "905000000000"; // change this

const serviceCards = [
  {
    title: "Regular Home Cleaning",
    description:
      "Ongoing cleaning for apartments, private residences, and second homes.",
    icon: "🏡",
  },
  {
    title: "Deep Cleaning",
    description:
      "A more detailed reset when your home needs extra care and attention.",
    icon: "✨",
  },
  {
    title: "Airbnb Turnover Cleaning",
    description:
      "Fast, presentation-focused cleaning between guest stays and check-ins.",
    icon: "🛏️",
  },
];

const extraTaskOptions = [
  "Interior windows",
  "Balcony / terrace",
  "Inside fridge",
  "Inside oven",
  "Linen change",
  "Ironing",
  "After-party extra mess",
];

const trustBadges = [
  "Designed for expats & international residents",
  "English, Russian & Ukrainian support",
  "Fast WhatsApp response",
  "Secure international payment options",
];

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  preferredLanguage: "English",
  location: "",
  serviceType: "Regular Home Cleaning",
  propertyType: "1 Bedroom Apartment",
  bathrooms: "1",
  propertySize: "",
  frequency: "One-time",
  preferredDate: "",
  preferredTime: "",
  furnished: "Yes",
  pets: "No",
  suppliesNeeded: "No",
  extraTasks: [],
  accessDetails: "",
  specialNotes: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function estimateQuote(data: FormState) {
  let min = 0;
  let max = 0;

  switch (data.propertyType) {
    case "Studio":
      min = 40;
      max = 55;
      break;
    case "1 Bedroom Apartment":
      min = 50;
      max = 70;
      break;
    case "2 Bedroom Apartment":
      min = 70;
      max = 100;
      break;
    case "3 Bedroom Apartment":
      min = 95;
      max = 135;
      break;
    case "Villa / Large Home":
      min = 160;
      max = 260;
      break;
    case "Holiday Home":
      min = 80;
      max = 130;
      break;
  }

  if (data.serviceType === "Deep Cleaning") {
    min += 25;
    max += 55;
  }

  if (data.serviceType === "Airbnb Turnover Cleaning") {
    min += 10;
    max += 25;
  }

  if (data.serviceType === "Move In / Move Out Cleaning") {
    min += 30;
    max += 65;
  }

  if (data.serviceType === "After-party Cleanup") {
    min += 35;
    max += 75;
  }

  if (data.suppliesNeeded === "Yes") {
    min += 10;
    max += 20;
  }

  if (data.extraTasks.length > 0) {
    min += data.extraTasks.length * 6;
    max += data.extraTasks.length * 14;
  }

  if (data.frequency === "Weekly" || data.frequency === "Bi-weekly") {
    min = Math.max(35, min - 8);
    max = Math.max(min + 8, max - 12);
  }

  return `€${min}–€${max}`;
}

function buildWhatsAppMessage(data: FormState, estimate: string) {
  const extras =
    data.extraTasks.length > 0 ? data.extraTasks.join(", ") : "None";

  return `Hello, I would like to request a cleaning quote.

Name: ${data.fullName}
Phone / WhatsApp: ${data.phone}
Email: ${data.email || "Not provided"}
Preferred language: ${data.preferredLanguage}

Location: ${data.location}
Service type: ${data.serviceType}
Property type: ${data.propertyType}
Bathrooms: ${data.bathrooms}
Approx size: ${data.propertySize || "Not provided"}
Frequency: ${data.frequency}

Preferred date: ${data.preferredDate || "Not provided"}
Preferred time: ${data.preferredTime || "Not provided"}

Furnished: ${data.furnished}
Pets: ${data.pets}
Need cleaning supplies brought: ${data.suppliesNeeded}
Extra tasks: ${extras}

Access details: ${data.accessDetails || "Not provided"}
Special notes: ${data.specialNotes || "None"}

Estimated range shown on site: ${estimate}`;
}

export default function Home() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  const estimate = useMemo(() => estimateQuote(form), [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleExtraTask(task: string) {
    setForm((prev) => {
      const exists = prev.extraTasks.includes(task);
      return {
        ...prev,
        extraTasks: exists
          ? prev.extraTasks.filter((item) => item !== task)
          : [...prev.extraTasks, task],
      };
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = buildWhatsAppMessage(form, estimate);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);
    window.open(url, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#fcfbf8] text-slate-900 dark:bg-[#0b1020] dark:text-slate-100">
      <section
        ref={heroRef}
        className="relative min-h-[92vh] overflow-hidden text-white"
      >
        <div className="absolute inset-0">
          <img
            src="/premium-villa-cleaning-service-antalya-turkey.jpg.png"
            alt="Premium villa cleaning service in Antalya for international residents"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.25),rgba(15,23,42,0.62))]" />
        </div>

        <HeroLens containerRef={heroRef} />

        <div className="relative z-30 mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 pb-16 pt-8 md:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/15 bg-black/30 px-4 py-3 shadow-sm backdrop-blur-md md:px-6">
            <div className="text-lg font-semibold tracking-tight text-white">
              CleanNestPro
            </div>

            <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#why-us" className="hover:text-white">
                Why us
              </a>
              <a href="#how-it-works" className="hover:text-white">
                How it works
              </a>
              <a href="#quote-form" className="hover:text-white">
                Quote
              </a>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
            >
              WhatsApp us
            </a>
          </header>

          <div className="flex flex-1 items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerWrap}
              className="max-w-4xl pt-16 md:pt-24"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/85 shadow-sm backdrop-blur"
              >
                Premium cleaning for expats, holiday homes & Airbnb hosts
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
              >
                Premium home cleaning
                <br />
                in Antalya
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl"
              >
                A calm, reliable cleaning experience designed for international
                residents, short-term rental hosts, and holiday homeowners in
                central Antalya.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-medium text-slate-900 transition hover:bg-white/90"
                >
                  Get a detailed quote
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/20 px-6 py-4 text-base font-medium text-white transition hover:bg-black/30"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 text-sm text-white/70"
              >
                English • Russian • Ukrainian support
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="services"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerWrap}
        className="mx-auto max-w-7xl px-6 py-20 md:px-8"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Services tailored to your property
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Built for apartments, holiday homes, and guest-ready properties that
            need a cleaner, more reliable experience.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="why-us"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerWrap}
        className="relative overflow-hidden bg-[#f6f3ee] py-20 dark:bg-[#0f172a]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Designed around trust, clarity, and discretion
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              We are not trying to feel like a mass-market platform. The entire
              experience is built to feel calm, responsive, and considered —
              especially for international clients who value communication and
              reliability.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Clear communication",
                text: "No confusing back-and-forth. We collect the right details early and respond properly.",
              },
              {
                title: "Premium positioning",
                text: "A more thoughtful service experience for expats, holiday homeowners, and Airbnb hosts.",
              },
              {
                title: "Detail-conscious approach",
                text: "The kind of service that feels suitable for a home you genuinely care about.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="how-it-works"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerWrap}
        className="mx-auto max-w-7xl px-6 py-20 md:px-8"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            A smooth process designed to feel clear, responsive, and easy from
            the first message onward.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Tell us what you need",
              text: "Share your property details, your preferred date, and the kind of cleaning you’re looking for.",
            },
            {
              step: "02",
              title: "Receive a confirmed quote",
              text: "We review the request and confirm the expected price range, timing, and any important notes.",
            },
            {
              step: "03",
              title: "Enjoy a cleaner, calmer space",
              text: "Once agreed, we move forward with a simple, clear process and reliable communication.",
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="text-sm font-semibold text-slate-400">
                {item.step}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="quote-form"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerWrap}
        className="mx-auto max-w-7xl px-6 py-20 md:px-8"
      >
        <div className="grid gap-10 md:grid-cols-[0.88fr_1.12fr]">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Request your personalised quote
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              This form is designed to give us enough detail to respond
              properly. It helps us understand the property, the type of
              cleaning, and any extras that may affect the quote.
            </p>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#f6f3ee] p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Why clients like this</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                <li>• Clear communication before anything is confirmed</li>
                <li>• A quote shaped around the actual property details</li>
                <li>• Support in English, Russian, and Ukrainian</li>
                <li>• Designed for expats, hosts, and holiday homeowners</li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field>
                <Label>Full name</Label>
                <Input
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </Field>

              <Field>
                <Label>Phone / WhatsApp</Label>
                <Input
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+90 ..."
                  required
                />
              </Field>

              <Field>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field>
                <Label>Preferred language</Label>
                <Select
                  value={form.preferredLanguage}
                  onChange={(e) =>
                    updateField(
                      "preferredLanguage",
                      e.target.value as LanguageType
                    )
                  }
                >
                  <option>English</option>
                  <option>Russian</option>
                  <option>Ukrainian</option>
                </Select>
              </Field>

              <Field>
                <Label>Area in Antalya</Label>
                <Input
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  placeholder="Area / neighbourhood"
                  required
                />
              </Field>

              <Field>
                <Label>Service type</Label>
                <Select
                  value={form.serviceType}
                  onChange={(e) =>
                    updateField("serviceType", e.target.value as ServiceType)
                  }
                >
                  <option>Regular Home Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Airbnb Turnover Cleaning</option>
                  <option>Move In / Move Out Cleaning</option>
                  <option>After-party Cleanup</option>
                </Select>
              </Field>

              <Field>
                <Label>Property type</Label>
                <Select
                  value={form.propertyType}
                  onChange={(e) =>
                    updateField("propertyType", e.target.value as PropertyType)
                  }
                >
                  <option>Studio</option>
                  <option>1 Bedroom Apartment</option>
                  <option>2 Bedroom Apartment</option>
                  <option>3 Bedroom Apartment</option>
                  <option>Villa / Large Home</option>
                  <option>Holiday Home</option>
                </Select>
              </Field>

              <Field>
                <Label>Bathrooms</Label>
                <Select
                  value={form.bathrooms}
                  onChange={(e) => updateField("bathrooms", e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </Select>
              </Field>

              <Field>
                <Label>Approx property size</Label>
                <Input
                  value={form.propertySize}
                  onChange={(e) => updateField("propertySize", e.target.value)}
                  placeholder="e.g. 90 m²"
                />
              </Field>

              <Field>
                <Label>Cleaning frequency</Label>
                <Select
                  value={form.frequency}
                  onChange={(e) =>
                    updateField("frequency", e.target.value as FrequencyType)
                  }
                >
                  <option>One-time</option>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                  <option>Not sure yet</option>
                </Select>
              </Field>

              <Field>
                <Label>Preferred date</Label>
                <Input
                  type="date"
                  value={form.preferredDate}
                  onChange={(e) => updateField("preferredDate", e.target.value)}
                />
              </Field>

              <Field>
                <Label>Preferred time</Label>
                <Input
                  type="time"
                  value={form.preferredTime}
                  onChange={(e) => updateField("preferredTime", e.target.value)}
                />
              </Field>

              <Field>
                <Label>Is the property furnished?</Label>
                <Select
                  value={form.furnished}
                  onChange={(e) => updateField("furnished", e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Partly</option>
                </Select>
              </Field>

              <Field>
                <Label>Any pets?</Label>
                <Select
                  value={form.pets}
                  onChange={(e) => updateField("pets", e.target.value)}
                >
                  <option>No</option>
                  <option>Yes</option>
                </Select>
              </Field>

              <Field className="md:col-span-2">
                <Label>Do you need cleaning supplies brought by the cleaner?</Label>
                <Select
                  value={form.suppliesNeeded}
                  onChange={(e) =>
                    updateField("suppliesNeeded", e.target.value)
                  }
                >
                  <option>No</option>
                  <option>Yes</option>
                </Select>
              </Field>

              <Field className="md:col-span-2">
                <Label>Extra tasks</Label>
                <div className="flex flex-wrap gap-3">
                  {extraTaskOptions.map((task) => {
                    const active = form.extraTasks.includes(task);
                    return (
                      <button
                        key={task}
                        type="button"
                        onClick={() => toggleExtraTask(task)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          active
                            ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                        }`}
                      >
                        {task}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field className="md:col-span-2">
                <Label>Access details</Label>
                <Input
                  value={form.accessDetails}
                  onChange={(e) => updateField("accessDetails", e.target.value)}
                  placeholder="Building access, key handover, guest timing, parking notes..."
                />
              </Field>

              <Field className="md:col-span-2">
                <Label>Anything else we should know?</Label>
                <Textarea
                  value={form.specialNotes}
                  onChange={(e) => updateField("specialNotes", e.target.value)}
                  placeholder="You can mention the condition of the property, urgency, special requirements, guest check-out times, or anything useful for an accurate quote."
                />
              </Field>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-[#f6f3ee] p-5 dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Estimated range
              </div>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {estimate}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                This is an indicative range only. Final pricing is confirmed
                after we review the request.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
              >
                Send request on WhatsApp
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-base font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              >
                Open WhatsApp directly
              </a>
            </div>

            {submitted ? (
              <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                Your request has been prepared and opened in WhatsApp.
              </p>
            ) : null}

            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Are you a cleaner in Antalya?{" "}
              <a href="/apply" className="underline hover:text-black dark:hover:text-white">
                Apply to work with us
              </a>
            </p>
          </motion.form>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mx-auto max-w-5xl px-6 pb-20 text-center md:px-8"
      >
        <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Cleaning in Antalya, designed around international expectations
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
            If you are looking for a more reliable, more responsive, and more
            comfortable home cleaning experience in Antalya, this service is
            built for you. We focus on clear communication, thoughtful quoting,
            and a calmer process for expats, holiday homeowners, and short-term
            rental hosts.
          </p>
        </div>
      </motion.section>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-slate-950 px-5 py-4 text-sm font-medium text-white shadow-xl transition hover:opacity-90 dark:bg-white dark:text-slate-900"
      >
        Chat with us
      </a>

      <Footer whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}

function Field({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white/25 dark:focus:ring-white/10"
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-white/25 dark:focus:ring-white/10"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={5}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white/25 dark:focus:ring-white/10"
    />
  );
}