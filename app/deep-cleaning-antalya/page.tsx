import type { Metadata } from "next";
import SeoServicePage, { type SeoPageConfig } from "@/components/seo/SeoServicePage";

const canonical = "https://www.cleannestpro.com/deep-cleaning-antalya";
export const metadata: Metadata = {
  title: "Deep Cleaning in Antalya | Apartments & Villas",
  description: "Professional deep cleaning in Antalya for furnished apartments, villas and holiday homes. Clear scope, multilingual coordination and secure booking.",
  alternates: { canonical, languages: { en: canonical, ru: "https://www.cleannestpro.com/ru/generalnaya-uborka-antaliya", "x-default": canonical } },
  openGraph: { title: "Deep Cleaning in Antalya | CleanNestPro", description: "Detailed one-off cleaning for apartments, villas and holiday homes in Antalya.", url: canonical, siteName: "CleanNestPro", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Deep cleaning service in Antalya" }] },
  robots: { index: true, follow: true },
};

const config: SeoPageConfig = {
  canonical,
  breadcrumb: "Deep Cleaning in Antalya",
  eyebrow: "Detailed one-off cleaning",
  title: "Deep Cleaning in Antalya",
  intro: "A considered top-to-bottom cleaning service for furnished apartments, villas, holiday homes and properties that need more attention than a regular visit.",
  benefits: [
    { title: "Clear scope before booking", text: "Tell us about the property, condition and requested extras so the team can be briefed before a final quote is confirmed." },
    { title: "Suitable for international clients", text: "English, Russian and Turkish communication helps overseas owners and Antalya residents arrange the service with less friction." },
    { title: "Optional property photos", text: "A few non-sensitive photos can help us understand the workload and reduce the risk of unexpected additions on the day." },
  ],
  contentTitle: "When a regular clean is not enough",
  paragraphs: [
    "Deep cleaning is intended for homes that need a more detailed reset. It goes beyond routine dusting, vacuuming and mopping by focusing on build-up, overlooked surfaces and areas that require additional time. It can be useful before a long stay, after a period when a home has been closed, ahead of guests arriving, or simply when the property needs a thorough one-off clean.",
    "The exact workload depends on the size and current condition of the home. A furnished two-bedroom apartment may require detailed work across the kitchen, bathroom, internal windows, balcony, doors, skirting boards and accessible furniture surfaces. Tasks such as cleaning inside an oven, fridge, freezer, cupboards or drawers should be identified in advance because they add meaningful time to the visit.",
    "CleanNestPro reviews the information before confirming the final price. This is particularly useful for clients arranging cleaning remotely or communicating in English or Russian. The aim is to make the scope understandable for both the customer and the selected local cleaning provider, while keeping expectations realistic around access, safety and the time required.",
  ],
  suitableTitle: "Deep cleaning is suitable for",
  suitableFor: ["Furnished apartments requiring a detailed reset", "Villas and holiday homes before owner or guest arrival", "Homes that have been closed for a period", "One-off seasonal or spring cleaning", "Properties with kitchens and bathrooms needing extra attention", "International owners coordinating from outside Turkey"],
  scopeTitle: "Typical deep-cleaning scope",
  scopeIntro: "The final checklist is agreed from the information supplied. Optional extras should be selected in the quote request.",
  scope: ["Dusting and wiping accessible surfaces", "Vacuuming and mopping floors", "Detailed bathroom cleaning", "Kitchen worktops, sink, tiles and cabinet fronts", "Interior doors, switches and skirting boards", "Interior windows and safely reachable glass", "Balcony or terrace cleaning when requested", "Inside oven, fridge or empty cupboards when selected"],
  areasTitle: "Deep cleaning across Antalya",
  areasIntro: "Availability is confirmed after reviewing the area, date and scope. Current enquiries are welcomed from central Antalya and selected surrounding neighbourhoods.",
  areas: ["Muratpaşa", "Konyaaltı", "Hurma", "Lara", "Liman", "Sarısu"],
  faqs: [
    { question: "How long does deep cleaning take?", answer: "It depends on the property size, condition, furnishings and extras. A detailed quote request helps the cleaning provider estimate the appropriate team and working time." },
    { question: "Can cleaning products and equipment be brought?", answer: "Yes. Select this in the quote form so it can be included when availability and pricing are reviewed." },
    { question: "Are oven, fridge and cupboard interiors included?", answer: "They can be requested as extras. Please list them in advance because they add time and may affect the final quote." },
    { question: "Do I have to upload photographs?", answer: "No. Photographs are optional. They can help with accuracy, but you can request an initial estimate using written information only." },
    { question: "Can exterior windows be cleaned?", answer: "Only where they can be reached safely from inside or from a secure terrace. Teams should not be expected to carry out unsafe work at height." },
  ],
  related: [{ href: "/apartment-cleaning-antalya", label: "Apartment cleaning" }, { href: "/cleaning-service-muratpasa", label: "Cleaning in Muratpaşa" }, { href: "/cleaning-service-konyaalti", label: "Cleaning in Konyaaltı" }, { href: "/villa-cleaning-antalya", label: "Villa cleaning" }],
  ctaTitle: "Request a detailed deep-cleaning quote",
  ctaText: "Share the property size, condition, preferred date and any extras. We will review the request before confirming a final price or requesting payment.",
};

export default function DeepCleaningAntalyaPage() { return <SeoServicePage config={config} />; }
