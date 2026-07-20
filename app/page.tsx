"use client";

import dynamic from "next/dynamic";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  website: string;
  formStartedAt: number;
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
  "Secure booking with Stripe",
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
    title: "Receive your personalised quote",
    text: "We review the request properly and email you a clear quote before any payment is requested.",
  },
  {
    step: "03",
    title: "Secure your booking with Stripe",
    text: "If the quote feels right, confirm your preferred date through a secure Stripe payment link.",
  },
  {
    step: "04",
    title: "Your cleaner is confirmed",
    text: "Once payment is complete, we confirm the booking details and prepare the service for your agreed date.",
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
    a: "The range shown on the page is only indicative and includes VAT (KDV). Final pricing is confirmed after we review your property details, timing, and any requested extras.",
  },
  {
    q: "How do I request a quote?",
    a: "Simply complete the quote form with the property type, preferred timing, and any notes that would help us understand the request. We then reply by email with the next step.",
  },
  {
    q: "How do I pay and confirm my booking?",
    a: "After you accept the final quote, we send you a secure Stripe payment link by email. Your booking is confirmed once payment is completed.",
  },
  {
    q: "What happens if CleanNestPro cannot provide the booked service?",
    a: "If we are unable to provide the agreed service on the confirmed booking date due to our fault, you will receive a full refund of the amount paid for that booking.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Customer cancellations made at least 48 hours before the confirmed appointment are eligible for a full refund. Cancellations made 24 to 48 hours before the appointment are eligible for a 50% refund. Cancellations within 24 hours may not be refundable because the cleaning team and time slot have already been reserved.",
  },
];

const createInitialState = (): FormState => ({
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
  website: "",
  formStartedAt: Date.now(),
});

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

// ─────────────────────────────────────────────────────────────
// Antalya piyasa araştırmasına dayalı fiyat mantığı
// Kaynaklar: Armut, TrendHizmet, Uğurlu Temizlik, Temizlik Express (2026)
// Kur: 1 EUR ≈ 53,5 TL (temmuz 2026)
// KDV: %20 (Türkiye standart oranı) — nihai fiyata dahil edilir
// ─────────────────────────────────────────────────────────────

const VAT_RATE = 0.2; // %20 KDV
const MAX_PROPERTY_PHOTOS = 5;
const MAX_PHOTO_BYTES = 700 * 1024;
const MAX_TOTAL_PHOTO_BYTES = 3.5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

async function compressPropertyPhoto(file: File): Promise<File> {
  if (!ALLOWED_PHOTO_TYPES.has(file.type)) {
    throw new Error(`${file.name}: please choose a JPG, PNG or WebP image.`);
  }

  const sourceUrl = URL.createObjectURL(file);

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const element = document.createElement("img");
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error(`${file.name}: the image could not be read.`));
      element.src = sourceUrl;
    });

    const maxDimension = 1600;
    const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
    const width = Math.max(1, Math.round(image.width * scale));
    const height = Math.max(1, Math.round(image.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    if (!context) throw new Error(`${file.name}: the image could not be processed.`);

    context.drawImage(image, 0, 0, width, height);

    let quality = 0.78;
    let blob: Blob | null = null;

    while (quality >= 0.48) {
      blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", quality)
      );
      if (blob && blob.size <= MAX_PHOTO_BYTES) break;
      quality -= 0.08;
    }

    if (!blob || blob.size > MAX_PHOTO_BYTES) {
      throw new Error(`${file.name}: the compressed image is still too large.`);
    }

    const baseName = file.name.replace(/\.[^.]+$/, "") || "property-photo";
    return new File([blob], `${baseName}.jpg`, {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

function estimateQuote(data: FormState) {
  // 1) Emlak tipine göre BAZ fiyat aralığı (KDV hariç, € cinsinden)
  //    Antalya'daki profesyonel firma paket fiyatlarından türetildi.
  let baseMin = 0;
  let baseMax = 0;

  switch (data.propertyType) {
    case "Studio":
      baseMin = 70;
      baseMax = 95;
      break;
    case "1 Bedroom Apartment":
      // 1+1 daire: piyasada 5.000 TL'den başlıyor (~€93)
      baseMin = 90;
      baseMax = 125;
      break;
    case "2 Bedroom Apartment":
      baseMin = 125;
      baseMax = 165;
      break;
    case "3 Bedroom Apartment":
      // 3+1 standart temizlik: 8.000–10.000 TL (~€150–187)
      baseMin = 145;
      baseMax = 185;
      break;
    case "Villa / Large Home":
      // Villa: 50–85 TL/m², ortalama 250 m² villa için hesaplandı
      baseMin = 220;
      baseMax = 420;
      break;
    case "Holiday Home":
      baseMin = 135;
      baseMax = 200;
      break;
  }

  // 2) Hizmet tipine göre ÇARPAN (sabit ek yerine oransal artış —
  //    çünkü örn. derin temizlik piyasada standart fiyatın
  //    %50-70 üzerinde fiyatlanıyor, sabit € eklemek gerçekçi değil)
  let serviceMultiplierMin = 1;
  let serviceMultiplierMax = 1;

  switch (data.serviceType) {
    case "Regular Home Cleaning":
      serviceMultiplierMin = 1;
      serviceMultiplierMax = 1;
      break;
    case "Deep Cleaning":
      // Piyasa: standart fiyatın %50-70 üzerinde
      serviceMultiplierMin = 1.45;
      serviceMultiplierMax = 1.7;
      break;
    case "Airbnb Turnover Cleaning":
      // Genelde standart temizliğe yakın, çarşaf değişimi vb. ile hafif üstünde
      serviceMultiplierMin = 1.05;
      serviceMultiplierMax = 1.25;
      break;
    case "Move In / Move Out Cleaning":
      // Taşınma sonrası / detaylı temizlik, inşaat sonrasına yakın ama daha hafif
      serviceMultiplierMin = 1.4;
      serviceMultiplierMax = 1.65;
      break;
    case "After-party Cleanup":
      serviceMultiplierMin = 1.15;
      serviceMultiplierMax = 1.4;
      break;
  }

  let min = baseMin * serviceMultiplierMin;
  let max = baseMax * serviceMultiplierMax;

  // 3) Malzeme (temizlik ürünleri getirilmesi)
  if (data.suppliesNeeded === "Yes") {
    min += 10;
    max += 18;
  }

  // 4) Ekstra görevler — her biri yaklaşık 20-30 dk ek işçiliğe denk gelir
  if (data.extraTasks.length > 0) {
    min += data.extraTasks.length * 7;
    max += data.extraTasks.length * 14;
  }

  // 5) Düzenli hizmet indirimi — piyasada abonelik/düzenli temizlikler
  //    tek seferliklere göre ortalama %15-20 daha uygun
  if (data.frequency === "Weekly" || data.frequency === "Bi-weekly") {
    min *= 0.83;
    max *= 0.86;
  } else if (data.frequency === "Monthly") {
    min *= 0.92;
    max *= 0.95;
  }

  // Mantıklı bir taban belirle (çok küçük gösterimleri önlemek için)
  min = Math.max(35, min);
  max = Math.max(min + 15, max);

  // 6) %20 KDV ekle (fiyata dahil olarak gösterilecek)
  const minWithVat = Math.round(min * (1 + VAT_RATE));
  const maxWithVat = Math.round(max * (1 + VAT_RATE));

  return `€${minWithVat}–€${maxWithVat}`;
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
  const [form, setForm] = useState<FormState>(createInitialState());
  const [submitted, setSubmitted] = useState(false);
  const [showFloatingQuote, setShowFloatingQuote] = useState(false);
  const [sending, setSending] = useState(false);
  const [processingPhotos, setProcessingPhotos] = useState(false);
  const [propertyPhotos, setPropertyPhotos] = useState<File[]>([]);

  const heroRef = useRef<HTMLElement | null>(null);
  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.72]);

  const estimate = useMemo(() => estimateQuote(form), [form]);
  const photoPreviews = useMemo(
    () => propertyPhotos.map((file) => ({ file, url: URL.createObjectURL(file) })),
    [propertyPhotos]
  );

  useEffect(() => {
    return () => photoPreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
  }, [photoPreviews]);

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

  async function handlePhotoSelection(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files || []);
    e.target.value = "";
    if (!selected.length) return;

    if (propertyPhotos.length + selected.length > MAX_PROPERTY_PHOTOS) {
      alert(`You can upload up to ${MAX_PROPERTY_PHOTOS} property photos.`);
      return;
    }

    setProcessingPhotos(true);
    try {
      const compressed = await Promise.all(selected.map(compressPropertyPhoto));
      const nextPhotos = [...propertyPhotos, ...compressed];
      const totalBytes = nextPhotos.reduce((sum, file) => sum + file.size, 0);

      if (totalBytes > MAX_TOTAL_PHOTO_BYTES) {
        throw new Error("The selected photos are too large in total. Please remove one or more photos.");
      }

      setPropertyPhotos(nextPhotos);
    } catch (error) {
      alert(error instanceof Error ? error.message : "The photos could not be processed.");
    } finally {
      setProcessingPhotos(false);
    }
  }

  function removePropertyPhoto(index: number) {
    setPropertyPhotos((current) => current.filter((_, photoIndex) => photoIndex !== index));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);

    try {
      if (form.website.trim() !== "") {
        setSending(false);
        return;
      }

      const secondsOnForm = Math.floor((Date.now() - form.formStartedAt) / 1000);

      if (secondsOnForm < 4) {
        setSending(false);
        alert("Please take a little more time to complete the form.");
        return;
      }

      const payload = {
        ...form,
        estimatedRange: estimate,
      };

      const requestBody = new FormData();
      requestBody.append("payload", JSON.stringify(payload));
      propertyPhotos.forEach((photo) => requestBody.append("propertyPhotos", photo));

      const res = await fetch("/api/quote", {
        method: "POST",
        body: requestBody,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send quote request.");
      }

      setSubmitted(true);
      setForm(createInitialState());
      setPropertyPhotos([]);
      if (photoInputRef.current) photoInputRef.current.value = "";
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
        <section
          ref={heroRef}
          className="relative h-screen w-full overflow-hidden text-white"
        >
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
                  ? "pointer-events-none translate-y-[-20px] opacity-0"
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

          <div className="mx-auto mt-10 max-w-4xl rounded-[30px] border border-emerald-200 bg-emerald-50/80 p-6 text-left shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-xl dark:bg-emerald-500/15">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Your booking is protected
                </h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  Payment is only requested after you receive and accept your
                  final quote. Payments are processed securely through Stripe,
                  and you receive a full refund if we cannot provide the agreed
                  service on the confirmed date due to our fault.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                    <li>• No payment before you receive and accept the final quote</li>
                    <li>• Secure booking confirmation through Stripe</li>
                    <li>• Full refund if we fail to provide the confirmed service</li>
                  </ul>
                </div>
              </motion.div>

              <motion.form
                variants={softReveal}
                onSubmit={handleSubmit}
                className="rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-none md:p-9 lg:p-10"
              >
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
                  />
                </div>

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

                  <Field className="md:col-span-2">
                    <Label htmlFor="propertyPhotos">Property photos (optional)</Label>
                    <p className="mb-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      A few photos help us prepare a more accurate quote. Please do not
                      include people, documents, screens, family photographs, or other
                      sensitive information.
                    </p>

                    <input
                      ref={photoInputRef}
                      id="propertyPhotos"
                      name="propertyPhotos"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      multiple
                      onChange={handlePhotoSelection}
                      disabled={sending || processingPhotos || propertyPhotos.length >= MAX_PROPERTY_PHOTOS}
                      className="block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-90 disabled:opacity-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:file:bg-white dark:file:text-slate-900"
                    />

                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      JPG, PNG or WebP · Maximum {MAX_PROPERTY_PHOTOS} photos · Photos are
                      resized before upload and used only to prepare and coordinate your quote.
                    </p>

                    {processingPhotos ? (
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                        Preparing photos…
                      </p>
                    ) : null}

                    {photoPreviews.length ? (
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {photoPreviews.map((preview, index) => (
                          <div
                            key={`${preview.file.name}-${preview.file.lastModified}-${index}`}
                            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"
                          >
                            <Image
                              src={preview.url}
                              alt={`Selected property photo ${index + 1}`}
                              width={320}
                              height={224}
                              unoptimized
                              className="h-28 w-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removePropertyPhoto(index)}
                              aria-label={`Remove property photo ${index + 1}`}
                              className="absolute right-2 top-2 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur hover:bg-black"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </Field>
                </div>

                <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#f6f3ee] p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Estimated range (VAT / KDV included)
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">
                    {estimate}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    This is an indicative range only, calculated from current
                    Antalya market rates and inclusive of 20% VAT (KDV). Final
                    pricing is confirmed after review.
                  </p>
                </div>

                <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950/40">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-base dark:bg-white/10">
                      🔒
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        Secure booking, clear protection
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        If you accept the final quote, we will email you a secure
                        Stripe payment link. Your booking is confirmed after
                        payment. If we cannot provide the agreed service on the
                        confirmed date due to our fault, you will receive a full
                        refund.
                      </p>
                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                        Secure payments powered by Stripe
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="submit"
                    disabled={sending || processingPhotos}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-medium text-white transition hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-slate-900"
                  >
                    {processingPhotos
                      ? "Preparing photos..."
                      : sending
                        ? "Sending..."
                        : "Request quote by email"}
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
                      Thank you. We’ll review the details and email your final
                      quote. No payment is requested unless you choose to accept
                      it and secure the booking.
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
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white/25 dark:focus:ring-white/10 dark:[color-scheme:dark]"
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 [color-scheme:light] dark:border-white/15 dark:bg-slate-900 dark:text-white dark:focus:border-white/25 dark:focus:ring-white/10 dark:[color-scheme:dark]"
    >
      {props.children}
    </select>
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