"use client";

import dynamic from "next/dynamic";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import HeroLens from "@/components/HeroLens";


const ChatAssistant = dynamic(() => import("@/components/ChatAssistant"), {
  ssr: false,
  loading: () => null,
});

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

type LanguageType = "Turkish" | "English" | "Russian";

type FormState = {
  fullName: string;
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
  {
    title: "Move In / Move Out Cleaning",
    description:
      "Detailed cleaning for property transitions, handovers, and fresh starts.",
    icon: "🧳",
  },
  {
    title: "After-party Cleanup",
    description:
      "Fast recovery cleaning after gatherings, events, and extra mess.",
    icon: "🥂",
  },
  {
    title: "Holiday Home Cleaning",
    description:
      "Ideal for owners who want their Antalya property kept guest-ready and elegant.",
    icon: "🌿",
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
  "English, Turkish & Russian support",
  "Clear quote by email",
  "Secure international payment options",
];

const quoteReasons = [
  {
    title: "Selective by design",
    text: "We are intentionally built for clients who value calm communication, trust, and consistency.",
  },
  {
    title: "Thoughtful quoting",
    text: "We ask the right questions first, so the quote feels considered rather than rushed.",
  },
  {
    title: "Premium fit",
    text: "A more suitable experience for holiday homes, well-kept apartments, and guest-ready properties.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tell us about the property",
    text: "Share the essentials so we can understand the size, timing, and type of cleaning required.",
  },
  {
    step: "02",
    title: "Receive a thoughtful quote",
    text: "We review the request properly and respond by email with a clear next step.",
  },
  {
    step: "03",
    title: "Confirm only if it feels right",
    text: "No pressure, no noise — just a cleaner, more considered booking experience.",
  },
];

const lifestylePanels = [
  {
    eyebrow: "Luxury villas",
    title: "Presented beautifully, maintained quietly",
    text: "From private villas to guest-ready homes, the experience is designed to feel discreet, polished, and dependable.",
    image: "/luxury-villa-cleaning.jpg",
    alt: "Luxury villa in Antalya prepared for premium home cleaning service",
  },
  {
    eyebrow: "Bathrooms & amenities",
    title: "Attention to the details guests notice",
    text: "Bathrooms, fresh towels, toiletries, and finishing touches all shape how a property feels from the very first moment.",
    image: "/bathroom-toiletries.jpg",
    alt: "Elegant bathroom toiletries and towels in a premium Antalya property",
  },
  {
    eyebrow: "Guest-ready spaces",
    title: "Cleaner visuals, calmer check-ins",
    text: "Ideal for holiday homes and Airbnb properties that need to look bright, settled, and beautifully prepared before every arrival.",
    image: "/guest-ready-bedroom.jpg",
    alt: "Guest-ready premium bedroom in a holiday home in Antalya",
  },
];

const faqs = [
  {
    q: "Which areas in Antalya do you currently cover?",
    a: "We currently focus on selected areas in Antalya. You can send your location in the quote form and we will confirm availability by email.",
  },
  {
    q: "Do you offer cleaning for Airbnb and holiday homes?",
    a: "Yes. Airbnb turnover cleaning and holiday home cleaning are part of the service. We can also note guest timing, access details, and linen-related needs in your request.",
  },
  {
    q: "Can the cleaner bring supplies?",
    a: "Yes. You can select this in the quote form if you would like cleaning supplies to be brought by the cleaner.",
  },
  {
    q: "Do you support international clients?",
    a: "Yes. The service is designed with expats, international residents, and holiday homeowners in mind, with support in English, Turkish, and Russian.",
  },
  {
    q: "How is pricing confirmed?",
    a: "The range shown on the page is only indicative. Final pricing is confirmed after we review your property details, timing, and any requested extras.",
  },
  {
    q: "How do I request a quote?",
    a: "Simply complete the quote form with the property type, preferred timing, and any notes that would help us understand the request. We then reply by email with the next step.",
  },
];

const initialState: FormState = {
  fullName: "",
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const softReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerWrap: Variants = {
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

function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: "CleanNestPro",
    image: [
      "/premium-villa-cleaning-service-antalya-turkey.avif",
      "/logo-droplet.png",
    ],
    url: "https://cleannestpro.com",
    areaServed: {
      "@type": "City",
      name: "Antalya",
    },
    serviceType: [
      "Home cleaning",
      "Deep cleaning",
      "Airbnb turnover cleaning",
      "Move in move out cleaning",
      "Holiday home cleaning",
    ],
    availableLanguage: ["English", "Turkish", "Russian"],
    description:
      "Premium home cleaning in Antalya for expats, international residents, holiday homeowners, and Airbnb hosts.",
  };
}

export default function Home() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [showFloatingQuote, setShowFloatingQuote] = useState(false);
  const [sending, setSending] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.72]);

  const estimate = useMemo(() => estimateQuote(form), [form]);
  useEffect(() => {
  const handleScroll = () => {
    setShowFloatingQuote(window.scrollY > 120);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);

    try {
      const payload = {
        ...form,
        estimatedRange: estimate,
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send quote request.");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while sending your quote request.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Script
        id="cleannestpro-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd()) }}
      />
      <Script
        id="cleannestpro-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessJsonLd()),
        }}
      />

      <main className="min-h-screen overflow-x-hidden bg-[#fcfbf8] text-slate-900 dark:bg-[#0b1020] dark:text-slate-100">
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden text-white">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            <Image
              src="/premium-villa-cleaning-service-antalya-turkey.avif"
              alt="Premium home cleaning in Antalya for international residents"
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/12" />
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/10 to-transparent" />

          <HeroLens containerRef={heroRef} />

          <div className="relative z-30 flex h-full w-full flex-col pt-8">
            <header
  className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/15 bg-black/22 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 md:px-6 ${
    showFloatingQuote
      ? "translate-y-[-20px] opacity-0 pointer-events-none"
      : "translate-y-0 opacity-100"
  }`}
>
              

              <div className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
                <Image
                  src="/logo.png"
                  alt="CleanNestPro"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                  priority
                />
                <span className="text-xl">CleanNestPro</span>
              </div>

              <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
                <a href="#services" className="hover:text-white">
                  Services
                </a>
                <a href="#gallery" className="hover:text-white">
                  Experience
                </a>
                <a href="#why-us" className="hover:text-white">
                  Why us
                </a>
                <a href="#how-it-works" className="hover:text-white">
                  How it works
                </a>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </nav>

              <button
                onClick={() =>
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-white/92 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
              >
                Request quote
              </button>
            </header>

            <div className="flex w-full flex-1 items-center justify-center px-6">
              <motion.div
                initial="hidden"
                animate="show"
                variants={staggerWrap}
                className="w-full pt-20 text-center md:pt-28"
              >
                <motion.div
                  variants={fadeUp}
                  className="mx-auto inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/85 shadow-sm backdrop-blur"
                >
                  Premium cleaning for expats, holiday homes & Airbnb hosts
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mx-auto mt-8 max-w-7xl text-[56px] font-light leading-[0.95] tracking-[-0.04em] text-white sm:text-[72px] md:text-[96px] lg:text-[128px]"
                >
                  Premium home cleaning
                  <br />
                  in Antalya
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85 md:text-2xl md:leading-10"
                >
                  A calmer, more considered cleaning experience designed for
                  international residents, holiday homeowners, and guest-ready
                  properties in Antalya.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-3"
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
                  className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                >
                  <a
                    href="#quote-form"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-medium text-slate-900 transition hover:bg-white/90"
                  >
                    Get a detailed quote
                  </a>

                  <button
                    onClick={() =>
                      window.dispatchEvent(new CustomEvent("open-clean-chat"))
                    }
                    className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white/20 bg-black/16 px-6 py-4 text-base font-medium text-white transition hover:bg-black/24"
                  >
                    Ask the assistant
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerWrap}
          className="mx-auto max-w-7xl px-6 py-24 md:px-8"
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              Services
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Services tailored to your property
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Built for apartments, holiday homes, villas, and well-kept spaces
              that deserve a more thoughtful standard of care.
            </p>
          </motion.div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={softReveal}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,245,240,0.88))] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-500 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] dark:shadow-none"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_30%)] opacity-80 dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

                <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-inset ring-white/50 dark:ring-white/10" />

                <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)] opacity-0 blur-xl transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100 dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(234,228,218,0.75))] text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_45%)] opacity-90 dark:opacity-40" />
                      <span className="relative z-10">{card.icon}</span>
                    </div>

                    <div className="inline-flex rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium tracking-[0.18em] text-slate-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-300">
                    <span className="inline-block h-2 w-2 rounded-full bg-slate-400/70 dark:bg-white/60" />
                    Premium care
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
              Explore more
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/villa-cleaning-antalya"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                Villa Cleaning in Antalya
              </Link>

              <Link
                href="/airbnb-cleaning-antalya"
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                Airbnb Cleaning in Antalya
              </Link>
            </div>
          </div>
        </motion.section>

        <section id="gallery" className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.035),transparent_34%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              variants={staggerWrap}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div
                variants={fadeUp}
                className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400"
              >
                Premium experience
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl font-semibold tracking-tight md:text-5xl"
              >
                Designed for properties that need to feel exceptional
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
              >
                From luxury villas to guest-ready holiday homes, every detail is
                shaped around presentation, comfort, and a more refined standard
                of care.
              </motion.p>
            </motion.div>

            <div className="mt-16 space-y-10 md:mt-20">
              {lifestylePanels.map((panel, index) => (
                <motion.article
                  key={panel.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.16 }}
                  variants={softReveal}
                  className={`group grid items-center gap-8 overflow-hidden rounded-[36px] border border-slate-200/90 bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:shadow-[0_28px_90px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/5 dark:shadow-none md:p-5 ${
                    index % 2 === 0
                      ? "md:grid-cols-[1.15fr_0.85fr]"
                      : "md:grid-cols-[0.85fr_1.15fr]"
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-slate-100 md:h-[440px] dark:bg-white/5">
                      <Image
                        src={panel.image}
                        alt={panel.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-black/6 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur">
                          {panel.eyebrow}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`px-2 py-4 md:px-6 ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                      {panel.eyebrow}
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
                      {panel.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                      {panel.text}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        "Luxury presentation",
                        "Guest-ready finish",
                        "Quiet reliability",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          id="why-us"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerWrap}
          className="relative overflow-hidden bg-[#f6f3ee] py-24 dark:bg-[#0f172a]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)]" />
          <div className="relative mx-auto max-w-7xl px-6 md:px-8">
            <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
              <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                Why CleanNestPro
              </div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Designed around trust, clarity, and discretion
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                This is not designed to feel loud, rushed, or transactional. The
                experience is intentionally quieter, more selective, and better
                suited to clients who value calm communication and thoughtful care.
              </p>
            </motion.div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
              {quoteReasons.map((item) => (
                <motion.div
                  key={item.title}
                  variants={softReveal}
                  whileHover={{ y: -6 }}
                  className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
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
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerWrap}
          className="mx-auto px-6 py-24 md:px-8"
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              Process
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              How it works
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              A smooth process that feels more considered from the first enquiry onward.
            </p>
          </motion.div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
            {processSteps.map((item) => (
              <motion.div
                key={item.step}
                variants={softReveal}
                className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-slate-100 blur-3xl dark:bg-white/5" />
                <div className="relative z-10">
                  <div className="text-sm font-semibold tracking-[0.18em] text-slate-400">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="quote-form"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerWrap}
          className="w-full px-6 py-24 md:px-10 lg:px-16"
        >
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1.15fr] xl:gap-16">
              <motion.div variants={fadeUp} className="max-w-2xl">
                <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                  Personalised quote
                </div>

                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Request your
                  <br />
                  personalised quote
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
                  Share the essentials and we’ll respond by email with a clear,
                  considered next step. No pressure. No noise. Just a better
                  quote experience.
                </p>

                <div className="mt-10 rounded-[32px] border border-slate-200 bg-[#f6f3ee] p-8 dark:border-white/10 dark:bg-white/5">
                  <h3 className="text-lg font-semibold">Why clients prefer this</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    <li>• More thoughtful communication from the start</li>
                    <li>• A quote shaped around the actual property details</li>
                    <li>• English, Turkish, and Russian support</li>
                    <li>• Better suited to premium homes and guest-ready spaces</li>
                  </ul>
                </div>
              </motion.div>

              <motion.form
                variants={softReveal}
                onSubmit={handleSubmit}
                className="rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-none md:p-9 lg:p-10"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field>
                    <Label htmlFor="fullName">Full name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="preferredLanguage">Preferred language</Label>
                    <Select
                      id="preferredLanguage"
                      name="preferredLanguage"
                      value={form.preferredLanguage}
                      onChange={(e) =>
                        updateField("preferredLanguage", e.target.value as LanguageType)
                      }
                    >
                      <option>English</option>
                      <option>Russian</option>
                      <option>Turkish</option>
                    </Select>
                  </Field>

                  <Field>
                    <Label htmlFor="location">Area in Antalya</Label>
                    <Input
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="Area / neighbourhood"
                      required
                      autoComplete="address-level2"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="serviceType">Service type</Label>
                    <Select
                      id="serviceType"
                      name="serviceType"
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
                    <Label htmlFor="propertyType">Property type</Label>
                    <Select
                      id="propertyType"
                      name="propertyType"
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
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Select
                      id="bathrooms"
                      name="bathrooms"
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
                    <Label htmlFor="propertySize">Approx property size</Label>
                    <Input
                      id="propertySize"
                      name="propertySize"
                      value={form.propertySize}
                      onChange={(e) => updateField("propertySize", e.target.value)}
                      placeholder="e.g. 90 m²"
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="frequency">Cleaning frequency</Label>
                    <Select
                      id="frequency"
                      name="frequency"
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
                    <Label htmlFor="preferredDate">Preferred date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => updateField("preferredDate", e.target.value)}
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="preferredTime">Preferred time</Label>
                    <Input
                      id="preferredTime"
                      name="preferredTime"
                      type="time"
                      value={form.preferredTime}
                      onChange={(e) => updateField("preferredTime", e.target.value)}
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="furnished">Is the property furnished?</Label>
                    <Select
                      id="furnished"
                      name="furnished"
                      value={form.furnished}
                      onChange={(e) => updateField("furnished", e.target.value)}
                    >
                      <option>Yes</option>
                      <option>No</option>
                      <option>Partly</option>
                    </Select>
                  </Field>

                  <Field>
                    <Label htmlFor="pets">Any pets?</Label>
                    <Select
                      id="pets"
                      name="pets"
                      value={form.pets}
                      onChange={(e) => updateField("pets", e.target.value)}
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </Select>
                  </Field>

                  <Field className="md:col-span-2">
                    <Label htmlFor="suppliesNeeded">
                      Do you need cleaning supplies brought by the cleaner?
                    </Label>
                    <Select
                      id="suppliesNeeded"
                      name="suppliesNeeded"
                      value={form.suppliesNeeded}
                      onChange={(e) => updateField("suppliesNeeded", e.target.value)}
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </Select>
                  </Field>

                  <Field className="md:col-span-2">
                    <fieldset>
                      <legend className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                        Extra tasks
                      </legend>

                      <div className="flex flex-wrap gap-3">
                        {extraTaskOptions.map((task) => {
                          const active = form.extraTasks.includes(task);
                          return (
                            <button
                              key={task}
                              type="button"
                              aria-pressed={active}
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
                    </fieldset>
                  </Field>

                  <Field className="md:col-span-2">
                    <Label htmlFor="accessDetails">Access details</Label>
                    <Input
                      id="accessDetails"
                      name="accessDetails"
                      value={form.accessDetails}
                      onChange={(e) => updateField("accessDetails", e.target.value)}
                      placeholder="Building access, key handover, guest timing, parking notes..."
                    />
                  </Field>

                  <Field className="md:col-span-2">
                    <Label htmlFor="specialNotes">Anything else we should know?</Label>
                    <Textarea
                      id="specialNotes"
                      name="specialNotes"
                      value={form.specialNotes}
                      onChange={(e) => updateField("specialNotes", e.target.value)}
                      placeholder="You can mention the condition of the property, urgency, special requirements, guest check-out times, or anything useful for an accurate quote."
                    />
                  </Field>
                </div>

                <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#f6f3ee] p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Estimated range
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">
                    {estimate}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    This is an indicative range only. Final pricing is confirmed after review.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-medium text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-slate-900"
                  >
                    {sending ? "Sending..." : "Request quote by email"}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      window.dispatchEvent(new CustomEvent("open-clean-chat"))
                    }
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-base font-medium text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                  >
                    Ask the assistant
                  </button>
                </div>

                {submitted ? (
                  <div className="mt-6 rounded-[24px] border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                      Your quote request has been sent.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-emerald-700/90 dark:text-emerald-200/90">
                      Thank you. We’ll review the details properly and get back to
                      you by email with a clear next step.
                    </p>
                  </div>
                ) : null}

                <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  Are you a cleaner in Antalya?{" "}
                  <Link
                    href="/apply"
                    className="underline hover:text-black dark:hover:text-white"
                  >
                    Apply to work with us
                  </Link>
                </p>
              </motion.form>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
          variants={staggerWrap}
          className="mx-auto max-w-6xl px-6 py-24 md:px-8"
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              FAQ
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Added in a search-friendly structure for both users and SEO.
            </p>
          </motion.div>

          <div className="mx-auto mt-14 space-y-4">
            {faqs.map((item) => (
              <motion.details
                key={item.q}
                variants={softReveal}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm open:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-slate-400 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-4 max-w-4xl leading-7 text-slate-600 dark:text-slate-300">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          variants={fadeUp}
          className="mx-auto max-w-5xl px-6 pb-24 text-center md:px-8"
        >
          <div className="rounded-[36px] border border-slate-200 bg-white px-8 py-12 shadow-[0_18px_60px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              Cleaning in Antalya, designed around international expectations
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
              If you are looking for a more reliable, more responsive, and more
              comfortable home cleaning experience in Antalya, this service is
              built for you. We focus on clarity, thoughtful quoting, and a calmer
              process for clients who value quality over noise.
            </p>
          </div>
        </motion.section>

        <ChatAssistant />
        <Footer />
      </main>
    </>
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

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
    >
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