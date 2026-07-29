import type { Metadata } from "next";
import SeoServicePage, {
  type SeoPageConfig,
} from "@/components/seo/SeoServicePage";

const canonical =
  "https://www.cleannestpro.com/deep-cleaning-antalya";

export const metadata: Metadata = {
  title: "Deep Cleaning in Antalya | Apartments, Villas & Holiday Homes",
  description:
    "Request deep cleaning in Antalya for apartments, villas and holiday homes. Clear written scope, multilingual support, managed local coordination and secure booking.",
  alternates: {
    canonical,
    languages: {
      en: canonical,
      ru: "https://www.cleannestpro.com/ru/generalnaya-uborka-antaliya",
      "x-default": canonical,
    },
  },
  openGraph: {
    title: "Deep Cleaning in Antalya | CleanNestPro",
    description:
      "Detailed one-off cleaning for furnished apartments, villas and holiday homes, coordinated with clear expectations and multilingual support.",
    url: canonical,
    siteName: "CleanNestPro",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deep cleaning service for apartments and villas in Antalya",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const config: SeoPageConfig = {
  canonical,
  breadcrumb: "Deep Cleaning in Antalya",
  eyebrow: "Detailed one-off cleaning with managed coordination",
  title: "Deep Cleaning in Antalya",
  intro:
    "A more detailed cleaning service for furnished apartments, villas, holiday homes and properties that need extra time, attention and a clearly agreed scope. CleanNestPro manages the quote, communication, booking and service follow-up while an appointed local provider carries out the on-site work.",

  benefits: [
    {
      title: "A realistic scope before booking",
      text:
        "We review the property size, current condition, access, requested extras and optional photos before confirming the final scope and price, helping both the customer and local provider prepare more accurately.",
    },
    {
      title: "Multilingual customer support",
      text:
        "English, Russian and Turkish communication makes it easier for Antalya residents, international owners and overseas clients to explain priorities, access arrangements and specialist cleaning requests.",
    },
    {
      title: "Support beyond the appointment",
      text:
        "CleanNestPro remains your point of contact after the visit. If something needs clarification or a reasonable correction, we review the concern with the appointed provider and coordinate an appropriate response.",
    },
  ],

  contentTitle:
    "When your property needs more than a routine cleaning visit",
  paragraphs: [
    "Deep cleaning is intended for homes that need a more thorough reset than a regular maintenance visit. It is suitable when dust, grease, limescale, residue or overlooked dirt has accumulated over time, when a property has been closed for a period, before an owner or guest arrives, after a tenancy, or when a furnished home needs detailed attention across several rooms.",

    "A regular cleaning visit normally focuses on maintaining a property that is already in reasonably good condition. Deep cleaning allows more time for detailed work, but it is not an unlimited or undefined service. The exact checklist must still be agreed before the appointment because the size, condition, furnishings, access, surfaces and requested extras can significantly change the labour, equipment and time required.",

    "CleanNestPro does not simply pass your phone number to an anonymous cleaner. You send one structured request describing the property, preferred date, flexibility and required tasks. We then make reasonable efforts to check suitable independent local-provider options, clarify what can be included, present the available timing and final price clearly, and remain your customer-service contact before and after the visit.",

    "The physical cleaning is carried out by an appointed independent local cleaner or cleaning company. CleanNestPro manages the surrounding experience: the enquiry, written scope, quote, secure payment, multilingual communication, booking confirmation and service follow-up. Our standard is based on professional coordination, transparency and accountability rather than promising that every surface or material will look completely new after one visit.",

    "The workload for deep cleaning varies considerably. A furnished two-bedroom apartment may require detailed work across the kitchen, bathrooms, accessible surfaces, floors, doors, switches, skirting boards, internal windows and balcony. A villa may involve larger floor areas, several bathrooms, staircases, terraces, additional furnishings and more complex access. The number of rooms alone is therefore not enough to determine the final price or duration.",

    "Tasks such as cleaning inside an oven, fridge, freezer, cupboards or drawers should be requested in advance. The same applies to sofa and armchair extraction cleaning, mattress cleaning, curtain removal and washing, interior windows, balcony or terrace cleaning, heavy bathroom descaling, post-renovation dust and higher-mess conditions. These services can require specialist equipment, extra transport, additional staff, drying time or a different local provider.",

    "Professional deep cleaning can substantially improve hygiene, freshness and presentation, but it cannot responsibly guarantee removal of every stain, mark, odour, discolouration, scale deposit, mould trace or pre-existing defect. Mattresses, sofas, carpets, curtains, grout, natural stone and other porous or delicate materials may retain visible changes caused by age, sunlight, moisture, previous chemical treatment, dye transfer, wear or damage within the material itself.",

    "For example, mattress or upholstery extraction cleaning may remove dirt and improve hygiene while an old stain remains visible. In some cases, the stain has permanently changed the material rather than merely sitting on the surface. If stronger or repeated treatment creates a risk of fading, weakening, shrinkage or other damage, the safer professional decision may be to stop rather than continue treating the area.",

    "This distinction is important when setting expectations for a deep clean. The purpose is to achieve the best reasonable improvement within the agreed scope, available time, material limitations and safe cleaning methods. Deep cleaning does not mean restoration, repair, redecoration or a guarantee that pre-existing wear and permanent staining will disappear.",

    "Optional property photos can help reduce uncertainty before the quote is confirmed. Useful photos may show the general room layout, kitchen, bathrooms, balcony, floor condition or specialist items such as sofas and mattresses. Customers should avoid uploading documents, personal data or sensitive belongings. Photos are not mandatory, but they can help the provider understand the likely workload and prepare appropriate equipment.",

    "Customers are encouraged to review the work while the team is still present whenever practical. Small issues such as remaining dust on a reachable surface, debris in a corner, hair on the floor or an overlooked finishing detail can often be corrected immediately if they are pointed out on site. This is one of the simplest ways to improve the final result and avoid unnecessary frustration later.",

    "If a concern is noticed after the appointment, it should be reported to CleanNestPro as soon as reasonably possible, preferably with clear photographs and a brief explanation. We will compare the concern with the agreed scope, review the information with the appointed provider and consider a proportionate response. Depending on the circumstances, this may include clarification, a targeted touch-up, corrective cleaning, a partial refund or another reasonable remedy.",

    "A preferred date entered in the quote form is not a confirmed appointment. Availability depends on the property location, requested scope, flexibility, travel time and suitable local-provider capacity. A booking becomes confirmed only after the scope, timing and final price have been accepted, any required payment has been completed, and CleanNestPro has issued written confirmation.",

    "The aim of CleanNestPro is not to sell an unrealistic promise of perfection. We aim to provide a better-managed cleaning experience: clear expectations before booking, appropriate local delivery, professional communication during the process and accountable support if something needs to be discussed afterwards.",
  ],

  suitableTitle: "Deep cleaning is suitable for",
  suitableFor: [
    "Furnished apartments requiring a detailed reset",
    "Villas and larger homes with several rooms or bathrooms",
    "Holiday homes before owner or guest arrival",
    "Properties that have been closed for a period",
    "Homes with accumulated dust, grease or limescale",
    "One-off seasonal or spring cleaning",
    "First-time cleaning before a recurring schedule",
    "Move-in and move-out preparation",
    "Properties after long-term tenants",
    "International owners coordinating from outside Turkey",
  ],

  scopeTitle: "Typical deep-cleaning scope",
  scopeIntro:
    "The final checklist is agreed from the information supplied. Optional and specialist tasks should be selected or described in the quote request before the price is confirmed.",
  scope: [
    "Dusting and wiping accessible surfaces",
    "Vacuuming and mopping floors",
    "Detailed bathroom and sanitary-area cleaning",
    "Kitchen worktops, sink, tiles and cabinet fronts",
    "Interior doors, handles, switches and skirting boards",
    "Reachable shelves and accessible furniture surfaces",
    "Interior windows and safely reachable glass when selected",
    "Balcony or terrace cleaning when requested",
    "Inside oven, fridge or freezer when selected",
    "Inside empty cupboards and drawers when selected",
    "Sofa and armchair extraction cleaning when requested",
    "Mattress deep cleaning when requested",
    "Curtain removal, washing and rehanging when available",
    "Detailed cleaning after long periods of non-use",
    "Additional attention to accumulated dust or limescale",
  ],

  areasTitle: "Deep cleaning across Antalya",
  areasIntro:
    "Current enquiries are welcomed from central Antalya and selected surrounding neighbourhoods. Availability is reviewed individually according to the address, preferred date, scope, travel time and suitable local-provider capacity.",
  areas: [
    "Muratpaşa",
    "Konyaaltı",
    "Hurma",
    "Lara",
    "Liman",
    "Sarısu",
    "Gürsu",
    "Altınkum",
    "Uncalı",
    "Fener",
    "Şirinyalı",
    "Arapsuyu",
  ],

  faqs: [
    {
      question: "What is included in deep cleaning?",
      answer:
        "The exact scope is confirmed in writing before booking. Deep cleaning usually allows more detailed work across floors, reachable surfaces, kitchens, bathrooms, doors, switches and skirting boards. Specialist tasks such as appliance interiors, windows, upholstery, mattresses and curtains should be requested separately.",
    },
    {
      question: "How long does deep cleaning take?",
      answer:
        "It depends on the property size, condition, furnishings, number of bathrooms, requested extras, access and available team size. A detailed request and optional photos help the provider estimate the appropriate working time.",
    },
    {
      question: "What is the difference between regular and deep cleaning?",
      answer:
        "Regular cleaning maintains a normally cared-for property. Deep cleaning provides more time for accumulated dirt, detailed surfaces and agreed extras. Neither service is unlimited, so the final checklist should be confirmed before booking.",
    },
    {
      question: "Can cleaning products and equipment be brought?",
      answer:
        "Yes. Select this in the quote form so it can be included when availability and pricing are reviewed. Please also mention allergies, fragrance restrictions or delicate surfaces.",
    },
    {
      question: "Are oven, fridge and cupboard interiors included?",
      answer:
        "They can be added to the agreed scope. Please list them in advance because they add meaningful time and may affect the final price, team size or appointment duration.",
    },
    {
      question: "Can sofas, armchairs and mattresses be deep cleaned?",
      answer:
        "Yes, these services can be requested. Please provide the number, approximate size and any known stains so suitable equipment and pricing can be reviewed.",
    },
    {
      question: "Can you guarantee that all stains will be removed?",
      answer:
        "No responsible provider can guarantee removal of every stain. Old or permanent discolouration can remain because of age, moisture, sunlight, previous products, dye transfer, wear or damage within the material.",
    },
    {
      question: "Why might a mattress stain remain after professional cleaning?",
      answer:
        "Extraction cleaning can remove dirt and improve hygiene while the original colour change remains visible. Some stains alter the material itself, and stronger treatment may create a risk of fading or damage.",
    },
    {
      question: "Do I have to upload photographs?",
      answer:
        "No. Photos are optional. They can help the provider understand the condition and workload, but you can request an initial review using written information only.",
    },
    {
      question: "Can exterior windows be cleaned?",
      answer:
        "Only where they can be reached safely from inside or from a secure terrace and have been agreed in advance. Teams should not be expected to perform unsafe work at height.",
    },
    {
      question: "What should I do if something appears to have been missed?",
      answer:
        "Please point it out while the team is present whenever possible, as small issues can often be corrected immediately. If noticed later, contact CleanNestPro promptly with details and clear photographs.",
    },
    {
      question: "Do you offer a touch-up or re-clean?",
      answer:
        "Where appropriate, CleanNestPro may coordinate clarification, a targeted touch-up, corrective cleaning, a partial refund or another proportionate remedy. The response depends on the agreed scope, the nature of the concern and available evidence.",
    },
    {
      question: "Is my preferred date guaranteed?",
      answer:
        "No. The date entered in the form is a preference. A booking is confirmed only after suitable availability is found, the scope and final price are accepted, payment is completed where required, and written confirmation is issued.",
    },
  ],

  related: [
    {
      href: "/apartment-cleaning-antalya",
      label: "Apartment Cleaning in Antalya",
    },
    {
      href: "/villa-cleaning-antalya",
      label: "Villa Cleaning in Antalya",
    },
    {
      href: "/airbnb-cleaning-antalya",
      label: "Airbnb Cleaning in Antalya",
    },
    {
      href: "/cleaning-service-muratpasa",
      label: "Cleaning Service in Muratpaşa",
    },
    {
      href: "/cleaning-service-konyaalti",
      label: "Cleaning Service in Konyaaltı",
    },
  ],

  ctaTitle: "Request a detailed deep-cleaning quote",
  ctaText:
    "Share the property size, current condition, preferred date, flexibility and any specialist tasks. We will review the request, make reasonable efforts to source a suitable local option and confirm the written scope and final price before requesting payment.",
};

export default function DeepCleaningAntalyaPage() {
  return <SeoServicePage config={config} />;
}