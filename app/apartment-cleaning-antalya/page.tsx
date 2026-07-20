import type { Metadata } from "next";
import SeoServicePage, { type SeoPageConfig } from "@/components/seo/SeoServicePage";

const canonical = "https://www.cleannestpro.com/apartment-cleaning-antalya";
export const metadata: Metadata = {
  title: "Apartment Cleaning in Antalya | Clear Online Quotes",
  description: "Apartment cleaning in Antalya for residents, expats and remote property owners. One-off, regular and detailed cleaning with multilingual coordination.",
  alternates: { canonical },
  openGraph: { title: "Apartment Cleaning in Antalya | CleanNestPro", description: "Reliable apartment cleaning for residents and international homeowners in Antalya.", url: canonical, siteName: "CleanNestPro", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Apartment cleaning in Antalya" }] },
};

const config: SeoPageConfig = {
  canonical, breadcrumb: "Apartment Cleaning in Antalya", eyebrow: "For residents and remote owners", title: "Apartment Cleaning in Antalya", intro: "Flexible cleaning for lived-in apartments, second homes and holiday properties, with a detailed quote process designed for local and international clients.",
  benefits: [
    { title: "One-off or regular", text: "Request a single visit, a detailed reset or tell us if you are considering weekly, bi-weekly or monthly cleaning." },
    { title: "Property-specific quoting", text: "Apartment size, bathrooms, furnishings, current condition and optional tasks are considered before the final quote." },
    { title: "Remote-friendly process", text: "Share access information and timing online when arranging cleaning for a second home or property from abroad." },
  ],
  contentTitle: "Cleaning shaped around the actual apartment",
  paragraphs: [
    "Apartments in Antalya vary widely, from compact holiday flats to larger furnished homes used throughout the year. A useful quote therefore needs more than the number of bedrooms. Bathrooms, floor area, balconies, furnishings, pets, access and the current condition of kitchens and bathrooms can all change the workload.",
    "A regular apartment clean normally focuses on accessible surfaces, floors, kitchens and bathrooms. A deep clean is more appropriate where extra detail is required, while move-in or move-out cleaning is designed for a property transition. Selecting the correct service helps the local provider plan the visit and reduces confusion over what is included.",
    "CleanNestPro is particularly suited to expats, international residents and overseas property owners who value clear written communication. Requests are reviewed before payment, and optional photographs can be added where a visual assessment would help. The final service remains subject to provider availability in the requested Antalya neighbourhood.",
  ],
  suitableTitle: "Suitable apartment types", suitableFor: ["Studios and one-bedroom apartments", "Furnished two- and three-bedroom homes", "Second homes and seasonal properties", "Holiday apartments between owner stays", "Apartments occupied by international residents", "Properties managed remotely from abroad"],
  scopeTitle: "Common apartment-cleaning tasks", scope: ["Accessible surfaces and furniture", "Vacuuming and floor mopping", "Bathroom fixtures, tiles and mirrors", "Kitchen worktops, sink and exterior surfaces", "Interior doors and switches", "Interior windows when selected", "Balcony or terrace when requested", "Optional oven and fridge interiors"],
  areasTitle: "Apartment cleaning in central Antalya", areasIntro: "Coverage is confirmed for each request. Key enquiry areas include Muratpaşa and Konyaaltı, including neighbourhoods popular with international residents.", areas: ["Muratpaşa", "Konyaaltı", "Hurma", "Lara", "Liman", "Gürsu", "Altınkum"],
  faqs: [
    { question: "Can I request a one-off apartment clean?", answer: "Yes. One-time requests are welcome, including regular cleaning, deep cleaning and cleaning before an owner or guest arrival." },
    { question: "Can I arrange the service from outside Turkey?", answer: "Yes. Provide the access arrangement, local contact if applicable and the required date in the quote form so the practical details can be reviewed." },
    { question: "Is the displayed price range final?", answer: "No. It is indicative. The final price is confirmed after the property details, timing and requested extras have been reviewed." },
    { question: "Can the team bring supplies?", answer: "Yes, when requested and confirmed in the final quote." },
  ],
  related: [{ href: "/deep-cleaning-antalya", label: "Deep cleaning" }, { href: "/move-in-move-out-cleaning-antalya", label: "Move in / move out" }, { href: "/cleaning-service-konyaalti", label: "Konyaaltı" }, { href: "/cleaning-service-muratpasa", label: "Muratpaşa" }],
  ctaTitle: "Tell us about your Antalya apartment", ctaText: "Complete the quote form with the apartment size, preferred date and requested tasks. No payment is requested before the final quote is reviewed and accepted.",
};
export default function ApartmentCleaningAntalyaPage() { return <SeoServicePage config={config} />; }
