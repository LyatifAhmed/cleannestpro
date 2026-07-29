import type { Metadata } from "next";
import SeoServicePage, {
  type SeoPageConfig,
} from "@/components/seo/SeoServicePage";

const canonical =
  "https://www.cleannestpro.com/cleaning-service-konyaalti";

export const metadata: Metadata = {
  title: "Cleaning Service in Konyaaltı, Antalya | Hurma, Liman & Sarısu",
  description:
    "Request apartment, deep, holiday-home and Airbnb cleaning in Konyaaltı, Antalya. English, Russian and Turkish support, clear written scopes and managed local coordination.",
  alternates: {
    canonical,
    languages: {
      en: canonical,
      ru: "https://www.cleannestpro.com/ru/klining-konyaalti",
      "x-default": canonical,
    },
  },
  openGraph: {
    title: "Cleaning Service in Konyaaltı, Antalya | CleanNestPro",
    description:
      "Managed home-cleaning coordination for apartments, villas and holiday homes across Hurma, Liman, Sarısu and nearby Konyaaltı neighbourhoods.",
    url: canonical,
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cleaning service for homes and apartments in Konyaaltı, Antalya",
      },
    ],
  },
};

const config: SeoPageConfig = {
  canonical,
  breadcrumb: "Cleaning Service in Konyaaltı",
  eyebrow: "Hurma, Liman, Sarısu and nearby neighbourhoods",
  title: "Cleaning Service in Konyaaltı, Antalya",
  intro:
    "Request regular apartment cleaning, one-off deep cleaning, holiday-home preparation, Airbnb turnover or move-in and move-out cleaning in Konyaaltı. CleanNestPro combines local service delivery with English, Russian and Turkish communication, a written scope, secure payment and managed follow-up.",

  benefits: [
    {
      title: "Local cleaning, professionally coordinated",
      text:
        "The physical cleaning is carried out by an appointed independent local provider. CleanNestPro manages the enquiry, written scope, quote, booking communication, payment and service follow-up from one place.",
    },
    {
      title: "Clear communication for international clients",
      text:
        "English, Russian and Turkish support helps residents and overseas owners explain the property, access arrangements, priorities and specialist requests without relying on informal or fragmented conversations.",
    },
    {
      title: "Support when something needs attention",
      text:
        "Cleaning is a human service and outcomes can vary by property condition and material. When a concern is reported promptly, we review it with the local partner and coordinate a proportionate solution where appropriate.",
    },
  ],

  contentTitle:
    "A better-managed cleaning experience for homes in Konyaaltı",
  paragraphs: [
    "Konyaaltı is a large residential district on the western side of Antalya, with neighbourhoods including Hurma, Liman, Sarısu, Gürsu, Altınkum, Uncalı, Arapsuyu and Pınarbaşı. The area includes compact city apartments, furnished long-term rentals, modern residential complexes, family homes, second homes and properties prepared for short-term guests. Those different property types require different cleaning scopes, visit lengths, equipment and access arrangements.",

    "CleanNestPro is designed for customers who want more than a cleaner’s telephone number. You send one structured request explaining the property, preferred timing and required tasks. We then make reasonable efforts to check suitable independent local-provider options, confirm what can be included, present the available timing and final price clearly, and remain your point of contact before and after the visit. Our service standard is centred on communication, coordination, transparency and customer care rather than claiming that every local team, property or surface will produce an identical result.",

    "For a regular home-cleaning request, it is useful to state the number of bedrooms and bathrooms, approximate floor area, whether the home is furnished, whether supplies should be brought, and which rooms need the most attention. A recurring maintenance clean is normally different from a first-time deep clean. If a property has not been professionally cleaned for some time, contains heavy dust, grease, limescale or accumulated residue, a deeper initial visit may be more suitable before moving to a weekly, bi-weekly or monthly routine.",

    "A deep-cleaning request should identify additional work before the quote is confirmed. This may include interior windows, balcony or terrace cleaning, inside the oven or fridge, kitchen cupboards and drawers, detailed bathroom descaling, sofa and armchair extraction cleaning, mattress cleaning, curtain removal and washing, or preparation after renovation or a move. These tasks can require different tools, products, transport, labour and drying time, so they should not be assumed to form part of every standard cleaning visit.",

    "Professional cleaning can substantially improve hygiene, freshness and presentation, but it cannot guarantee that every old mark or permanent stain will disappear. Mattresses, sofas, carpets, curtains, grout, natural stone and other porous or delicate materials can retain discolouration caused by age, sunlight, moisture, previous chemical treatment, dye transfer, wear, biological staining or damage within the material itself. A provider may use appropriate extraction or specialist cleaning methods while some visible staining remains. Where repeated or stronger treatment could damage the fabric, colour or surface, the safer professional decision may be to stop rather than over-treat it.",

    "Customers are encouraged to review the completed work while the team is still present whenever practical and to mention any overlooked area immediately. Small issues such as remaining dust on a reachable surface, debris in a corner or a missed finishing detail can often be addressed quickly on site. If something is noticed later, it should be reported to CleanNestPro as soon as reasonably possible, preferably with clear photographs. We will listen, compare the concern with the agreed scope and available service evidence, discuss it with the appointed partner, and consider an appropriate response such as clarification, a targeted touch-up, corrective cleaning or another proportionate remedy.",

    "For holiday homes, Airbnb properties and homes managed from abroad, access planning is especially important. Your request should explain who will provide keys, whether a building concierge or key safe is involved, the earliest entry time, any guest departure or arrival deadline, linen requirements and whether someone will inspect the property after completion. A preferred date is not a guaranteed appointment until a suitable provider, final scope, price and time have been accepted, paid and confirmed in writing.",

    "CleanNestPro does not operate as an anonymous open marketplace. The local provider performs the on-site work, while your quote, payment, multilingual communication and service follow-up remain managed through CleanNestPro. This separation is important: the local team brings practical cleaning capability, and CleanNestPro provides the organised customer experience around it. The aim is not to promise impossible perfection, but to make the process clearer, more accountable and easier to resolve when expectations need to be discussed.",
  ],

  suitableTitle: "Cleaning services available in Konyaaltı",
  suitableFor: [
    "Regular apartment and home cleaning",
    "One-off deep cleaning",
    "First-time cleaning before a recurring schedule",
    "Holiday-home preparation before owner arrival",
    "Airbnb and guest-ready turnover cleaning",
    "Move-in and move-out cleaning",
    "Cleaning for furnished rental properties",
    "Sofa, armchair and mattress cleaning by request",
    "Curtain cleaning by request",
    "After-party and higher-mess cleaning by request",
  ],

  scopeTitle: "Information that helps us prepare an accurate quote",
  scope: [
    "Exact Konyaaltı neighbourhood and full address",
    "Apartment, villa or holiday-home type",
    "Approximate floor area in square metres",
    "Number of bedrooms and bathrooms",
    "Current condition and level of accumulated dirt",
    "Whether the property is furnished or empty",
    "Regular, deep, turnover, move-in or move-out service",
    "Interior windows, balcony or terrace requirements",
    "Inside oven, fridge, cupboards or drawers",
    "Sofa, armchair, mattress or curtain quantities",
    "Any known stains, discolouration or delicate materials",
    "Whether supplies and equipment should be brought",
    "Pets, allergies or product restrictions",
    "Floor number, lift access and parking information",
    "Key collection, building security and access instructions",
    "Preferred date, time and how flexible you can be",
  ],

  areasTitle: "Konyaaltı neighbourhoods covered by request",
  areasIntro:
    "Requests from the following Konyaaltı neighbourhoods can be reviewed subject to the property scope, travel time, preferred date and suitable local-provider availability.",
  areas: [
    "Hurma",
    "Liman",
    "Sarısu",
    "Gürsu",
    "Altınkum",
    "Uncalı",
    "Arapsuyu",
    "Pınarbaşı",
    "Kuşkavağı",
    "Öğretmenevleri",
    "Uluç",
    "Siteler",
  ],

  faqs: [
    {
      question: "Do you provide cleaning services in Hurma?",
      answer:
        "Yes, Hurma cleaning requests are welcome. Final availability depends on the preferred date, property details, requested scope and availability of a suitable appointed local provider.",
    },
    {
      question: "Which other Konyaaltı neighbourhoods do you cover?",
      answer:
        "Requests can be reviewed for Liman, Sarısu, Gürsu, Altınkum, Uncalı, Arapsuyu, Pınarbaşı, Kuşkavağı, Öğretmenevleri, Uluç, Siteler and nearby areas. Coverage is confirmed individually rather than guaranteed automatically.",
    },
    {
      question: "Can English- or Russian-speaking customers request a quote?",
      answer:
        "Yes. CleanNestPro supports communication in English, Russian and Turkish. You can select your preferred language and provide the property details through the online quote form.",
    },
    {
      question: "Who actually performs the cleaning?",
      answer:
        "The physical cleaning is performed by an independent local cleaner or cleaning company appointed for the confirmed booking. CleanNestPro manages the quote, payment, written booking details, customer communication and service follow-up.",
    },
    {
      question: "What is included in a regular apartment clean?",
      answer:
        "The exact scope is confirmed in writing before payment. A regular clean generally focuses on routine reachable surfaces, floors, kitchen and bathroom maintenance, but specialist or time-intensive work such as inside appliances, cupboards, upholstery, mattresses, curtains and heavy limescale should be requested separately.",
    },
    {
      question: "What is the difference between regular and deep cleaning?",
      answer:
        "Regular cleaning is intended to maintain a normally cared-for home. Deep cleaning allows more time and attention for accumulated dirt, detailed surfaces and agreed extras. The appropriate option depends on the size, condition and requested tasks rather than the service name alone.",
    },
    {
      question: "Can you guarantee that mattress or sofa stains will disappear?",
      answer:
        "No responsible cleaning provider can guarantee removal of every stain. Extraction cleaning may improve hygiene, freshness and appearance, but old or permanent discolouration can remain because of material damage, age, moisture, sunlight, previous products, dye transfer or the nature of the stain.",
    },
    {
      question: "What should I do if an area appears to have been missed?",
      answer:
        "Please point it out while the team is present whenever possible, as a small issue can often be corrected immediately. Otherwise, contact CleanNestPro as soon as reasonably possible and include clear details or photographs so we can review the concern against the agreed scope.",
    },
    {
      question: "Do you offer a touch-up or re-clean if there is a problem?",
      answer:
        "Where appropriate, CleanNestPro may coordinate clarification, a targeted touch-up, corrective cleaning, a partial refund or another proportionate remedy. The response depends on the agreed scope, the nature of the concern, available evidence and applicable consumer rights.",
    },
    {
      question: "Can overseas owners arrange cleaning online?",
      answer:
        "Yes. The request, quote, payment and confirmation process can be managed remotely. Practical key collection, building access, local contact details and any arrival or guest deadline must be agreed before the appointment is confirmed.",
    },
    {
      question: "Is my selected date guaranteed?",
      answer:
        "No. The date entered in the form is your preferred date. A booking is confirmed only after suitable availability has been found, the final scope and price have been accepted, payment has been completed where required, and CleanNestPro has issued written confirmation.",
    },
    {
      question: "Can the cleaning team bring supplies and equipment?",
      answer:
        "Yes, this can be requested in the quote form. Please mention any allergies, fragrance restrictions, delicate surfaces or products that must not be used.",
    },
  ],

  related: [
    {
      href: "/apartment-cleaning-antalya",
      label: "Apartment Cleaning in Antalya",
    },
    {
      href: "/deep-cleaning-antalya",
      label: "Deep Cleaning in Antalya",
    },
    {
      href: "/airbnb-cleaning-antalya",
      label: "Airbnb Cleaning in Antalya",
    },
    {
      href: "/villa-cleaning-antalya",
      label: "Villa Cleaning in Antalya",
    },
    {
      href: "/cleaning-service-muratpasa",
      label: "Cleaning Service in Muratpaşa",
    },
  ],

  ctaTitle: "Request a cleaning quote in Konyaaltı",
  ctaText:
    "Tell us whether the property is in Hurma, Liman, Sarısu or another Konyaaltı neighbourhood, then include its size, condition, required tasks, access details and preferred date. We will review the request and make reasonable efforts to return with a suitable local option and clear written quote.",
};

export default function CleaningServiceKonyaaltiPage() {
  return <SeoServicePage config={config} />;
}