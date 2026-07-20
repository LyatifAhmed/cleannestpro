import type { Metadata } from "next";
import SeoServicePage, { type SeoPageConfig } from "@/components/seo/SeoServicePage";

const canonical = "https://www.cleannestpro.com/move-in-move-out-cleaning-antalya";
export const metadata: Metadata = {
  title: "Move In & Move Out Cleaning in Antalya",
  description: "Move-in and move-out cleaning in Antalya for tenants, landlords and property owners. Detailed property-transition cleaning with clear online quotes.",
  alternates: { canonical },
  openGraph: { title: "Move In & Move Out Cleaning in Antalya", description: "Detailed cleaning for property handovers, new tenants and fresh starts in Antalya.", url: canonical, siteName: "CleanNestPro", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Move-in and move-out cleaning in Antalya" }] },
};

const config: SeoPageConfig = {
  canonical, breadcrumb: "Move In & Move Out Cleaning", eyebrow: "Property transition cleaning", title: "Move In & Move Out Cleaning in Antalya", intro: "Detailed cleaning for tenants, landlords, homeowners and international clients preparing a property for handover, occupation or a fresh start.",
  benefits: [
    { title: "Designed for transitions", text: "The scope can be planned around an empty, partly furnished or fully furnished property before keys change hands." },
    { title: "Detailed optional tasks", text: "Cupboards, drawers, oven, fridge, interior windows and balconies can be included when identified before quoting." },
    { title: "Clear timing", text: "Share the handover, move or arrival date so availability and realistic working time can be considered." },
  ],
  contentTitle: "A cleaner start for the next stage of the property",
  paragraphs: [
    "Move-in and move-out cleaning has a different purpose from routine home cleaning. The focus is on leaving the property ready for inspection, handover, a new tenant or the owner’s arrival. Empty rooms may provide better access to floors and surfaces, while furnished properties require more time around belongings and detailed areas.",
    "The correct checklist depends on the agreement between tenant, landlord or owner. Inside cupboards and drawers, appliances, window frames, skirting boards and balconies are often important during a transition but are not automatically assumed. Listing these tasks in the quote request helps avoid disagreement close to the handover date.",
    "CleanNestPro can coordinate requests from clients already in Antalya or from overseas owners preparing a home before arrival. The service date is confirmed only after a suitable local provider accepts the scope and the final quote has been agreed.",
  ],
  suitableTitle: "Suitable situations", suitableFor: ["Tenant move-out and landlord handover", "Cleaning before moving into a new home", "Preparation for a new tenant", "Second homes before owner arrival", "Empty or partly furnished properties", "International owners coordinating remotely"],
  scopeTitle: "Typical transition-cleaning checklist", scope: ["Floors and accessible surfaces", "Bathrooms and sanitary fittings", "Kitchen worktops, tiles and sink", "Cabinet and drawer interiors when empty", "Inside oven and fridge when requested", "Doors, switches and skirting boards", "Interior windows and frames", "Balcony or terrace when selected"],
  areasTitle: "Move cleaning across Antalya", areasIntro: "Central Antalya requests are reviewed by neighbourhood, timing and scope. Early enquiries are recommended when a fixed handover date is involved.", areas: ["Muratpaşa", "Konyaaltı", "Hurma", "Lara", "Liman", "Sarısu"],
  faqs: [
    { question: "Should the property be empty?", answer: "It does not have to be empty, but you should state whether it is furnished. Empty cupboards and clear surfaces make detailed cleaning more practical." },
    { question: "Does this guarantee the return of a rental deposit?", answer: "No. Deposit decisions depend on the tenancy agreement, property condition and landlord. The service provides cleaning, not a guarantee about deposit outcomes." },
    { question: "How far in advance should I request a quote?", answer: "As early as possible, especially where a key handover or moving date is fixed. Availability cannot be guaranteed until the booking is confirmed." },
    { question: "Can keys be collected?", answer: "Access arrangements are considered individually and must be agreed before booking. Do not send keys until a specific arrangement has been confirmed." },
  ],
  related: [{ href: "/deep-cleaning-antalya", label: "Deep cleaning" }, { href: "/apartment-cleaning-antalya", label: "Apartment cleaning" }, { href: "/cleaning-service-muratpasa", label: "Muratpaşa" }, { href: "/cleaning-service-konyaalti", label: "Konyaaltı" }],
  ctaTitle: "Plan your property handover cleaning", ctaText: "Tell us whether the property is empty or furnished, identify the handover date and list appliance, cupboard, window or balcony requirements.",
};
export default function MoveInMoveOutCleaningAntalyaPage() { return <SeoServicePage config={config} />; }
