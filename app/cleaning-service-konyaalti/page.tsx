import type { Metadata } from "next";
import SeoServicePage, { type SeoPageConfig } from "@/components/seo/SeoServicePage";

const canonical = "https://www.cleannestpro.com/cleaning-service-konyaalti";
export const metadata: Metadata = {
  title: "Cleaning Service in Konyaaltı | Hurma & Nearby Areas",
  description: "Home and apartment cleaning in Konyaaltı, Antalya, including Hurma, Liman and Sarısu. Clear quotes and multilingual coordination for international clients.",
  alternates: { canonical },
  openGraph: { title: "Cleaning Service in Konyaaltı | CleanNestPro", description: "Apartment, deep and holiday-home cleaning across Konyaaltı, including Hurma.", url: canonical, siteName: "CleanNestPro", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cleaning service in Konyaaltı Antalya" }] },
};

const config: SeoPageConfig = {
  canonical, breadcrumb: "Cleaning Service in Konyaaltı", eyebrow: "Hurma, Liman, Sarısu and nearby", title: "Cleaning Service in Konyaaltı", intro: "Apartment, deep-cleaning and holiday-home support for Konyaaltı residents and overseas owners, with English, Russian and Turkish communication.",
  benefits: [
    { title: "Hurma enquiries welcome", text: "Hurma and nearby residential neighbourhoods are included when provider availability can be confirmed for the requested date." },
    { title: "International communication", text: "A written quote process makes it easier for English- and Russian-speaking residents to explain the property and required tasks." },
    { title: "Different service levels", text: "Choose regular home cleaning, a one-off deep clean, holiday-home preparation or move-in and move-out cleaning." },
  ],
  contentTitle: "Cleaning for Konyaaltı’s international residential community",
  paragraphs: [
    "Konyaaltı is one of Antalya’s most popular areas for international residents, long-term renters, second-home owners and people managing homes from abroad. Neighbourhoods such as Hurma, Liman and Sarısu include a wide range of furnished apartments and seasonal properties, each with different cleaning and access requirements.",
    "A useful cleaning request should identify the neighbourhood, property size, number of bathrooms, furnishings and any tasks beyond a standard visit. Balconies, interior windows, oven and fridge interiors, cupboards and detailed bathroom work can materially increase the time required and should be included before the final price is confirmed.",
    "CleanNestPro coordinates requests with selected local providers rather than presenting an anonymous open marketplace. This allows the request to be reviewed around the actual property and preferred timing. Coverage is not automatic for every date, so availability is confirmed after the quote form is received.",
  ],
  suitableTitle: "Services available by request", suitableFor: ["Regular apartment cleaning", "One-off deep cleaning", "Holiday-home preparation", "Cleaning before owner arrival", "Move-in and move-out cleaning", "Airbnb and guest-ready turnovers"],
  scopeTitle: "What to include in your request", scope: ["Exact Konyaaltı neighbourhood", "Apartment or villa size", "Number of bedrooms and bathrooms", "Whether the property is furnished", "Interior windows or balcony requirements", "Oven, fridge or cupboard interiors", "Cleaning supplies and equipment", "Access and preferred appointment time"],
  areasTitle: "Konyaaltı neighbourhood coverage", areasIntro: "The following areas can be considered subject to provider availability, property requirements and travel time.", areas: ["Hurma", "Liman", "Sarısu", "Gürsu", "Altınkum", "Uncalı", "Arapsuyu", "Pınarbaşı"],
  faqs: [
    { question: "Do you provide cleaning in Hurma?", answer: "Hurma requests are welcome. Availability and the final quote depend on the date, property details and selected local provider." },
    { question: "Can Russian-speaking customers request a quote?", answer: "Yes. Russian is available as a preferred communication language in the quote form." },
    { question: "Do you clean furnished apartments in Konyaaltı?", answer: "Yes. Please describe the furnishings and identify any detailed tasks such as sofa cleaning, cupboards, oven, fridge, windows or balcony work." },
    { question: "Is online booking available for overseas owners?", answer: "The request and quote process can be handled online. Access arrangements must be practical and agreed before the appointment is confirmed." },
  ],
  related: [{ href: "/apartment-cleaning-antalya", label: "Apartment cleaning" }, { href: "/deep-cleaning-antalya", label: "Deep cleaning" }, { href: "/airbnb-cleaning-antalya", label: "Airbnb cleaning" }, { href: "/cleaning-service-muratpasa", label: "Muratpaşa" }],
  ctaTitle: "Request cleaning in Konyaaltı", ctaText: "Include your neighbourhood—such as Hurma, Liman or Sarısu—together with the property details and preferred date for an accurate review.",
};
export default function CleaningServiceKonyaaltiPage() { return <SeoServicePage config={config} />; }
