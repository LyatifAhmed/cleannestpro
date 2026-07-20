import type { Metadata } from "next";
import SeoServicePage, { type SeoPageConfig } from "@/components/seo/SeoServicePage";

const canonical = "https://www.cleannestpro.com/cleaning-service-muratpasa";
export const metadata: Metadata = {
  title: "Cleaning Service in Muratpaşa | Apartments & Homes",
  description: "Apartment and deep-cleaning services in Muratpaşa, Antalya. Clear online quotes for residents, expats, furnished homes and holiday properties.",
  alternates: { canonical },
  openGraph: { title: "Cleaning Service in Muratpaşa | CleanNestPro", description: "Home, apartment and deep cleaning in Muratpaşa, Antalya.", url: canonical, siteName: "CleanNestPro", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cleaning service in Muratpaşa Antalya" }] },
};

const config: SeoPageConfig = {
  canonical, breadcrumb: "Cleaning Service in Muratpaşa", eyebrow: "Central Antalya home cleaning", title: "Cleaning Service in Muratpaşa", intro: "Detailed and regular cleaning for apartments, furnished homes and holiday properties across Muratpaşa, with a clear quote process for local and international clients.",
  benefits: [
    { title: "Central-area coverage", text: "Requests from central Muratpaşa neighbourhoods can be reviewed around the preferred date, property size and provider availability." },
    { title: "Detailed cleaning options", text: "Interior windows, terraces, oven, fridge and cupboard interiors can be identified in advance as optional tasks." },
    { title: "Clear written coordination", text: "English, Russian and Turkish communication helps residents and overseas owners understand the scope before booking." },
  ],
  contentTitle: "A property-specific service for Muratpaşa homes",
  paragraphs: [
    "Muratpaşa includes central apartments, established residential buildings, furnished homes and properties used by international residents or seasonal owners. Cleaning requirements vary considerably between a routine visit and a full deep clean, especially where the home includes a large living area, terrace, internal windows or appliances requiring detailed work.",
    "The quote form is designed to capture these differences. Property size, layout, bathrooms, furnishings, supplies, access and optional tasks are reviewed before a final price is confirmed. Customers may also upload a limited number of non-sensitive property photographs when they want to provide clearer context.",
    "For safety, exterior glass is considered only where it can be reached securely from inside or from a safe terrace. Detailed tasks should be agreed before the appointment so the selected provider can plan enough time, suitable products and the appropriate number of team members.",
  ],
  suitableTitle: "Muratpaşa cleaning requests", suitableFor: ["One- and two-bedroom apartments", "Larger furnished family homes", "One-off deep-cleaning requests", "Holiday and second homes", "Move-in or move-out preparation", "Homes requiring terrace and interior-window cleaning"],
  scopeTitle: "Available cleaning options", scope: ["Regular home cleaning", "Detailed one-off deep cleaning", "Bathroom and kitchen detailing", "Interior windows and frames", "Balcony and terrace cleaning", "Inside oven and fridge", "Empty cupboard and drawer interiors", "Move-in and move-out cleaning"],
  areasTitle: "Muratpaşa service area", areasIntro: "Requests can be considered across central Muratpaşa. Exact availability depends on the address, date and selected service provider.", areas: ["Muratpaşa", "Lara", "Fener", "Şirinyalı", "Çağlayan", "Güzeloba", "Kızılarık", "Meydankavağı"],
  faqs: [
    { question: "Can I request deep cleaning for a furnished Muratpaşa apartment?", answer: "Yes. Describe the current condition and select all required extras so the workload can be reviewed before the final quote." },
    { question: "Can the team clean a terrace and interior windows?", answer: "These tasks can be requested. Exterior glass is limited to surfaces that can be reached safely without unsafe work at height." },
    { question: "Will I receive a fixed price immediately?", answer: "The website shows an indicative range. A final quote follows after the request, extras and availability have been reviewed." },
    { question: "Can I be at home when the cleaners arrive?", answer: "Yes. You can state this in the access details. Alternative access arrangements must be agreed before booking." },
  ],
  related: [{ href: "/deep-cleaning-antalya", label: "Deep cleaning" }, { href: "/apartment-cleaning-antalya", label: "Apartment cleaning" }, { href: "/move-in-move-out-cleaning-antalya", label: "Move in / move out" }, { href: "/cleaning-service-konyaalti", label: "Konyaaltı" }],
  ctaTitle: "Get a Muratpaşa cleaning quote", ctaText: "Share the layout, approximate size, preferred time and full task list so the request can be reviewed with an appropriate local provider.",
};
export default function CleaningServiceMuratpasaPage() { return <SeoServicePage config={config} />; }
