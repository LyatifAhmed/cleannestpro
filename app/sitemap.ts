import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cleannestpro.com";

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: `${baseUrl}/`, ru: `${baseUrl}/ru`, "x-default": `${baseUrl}/` } },
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/apply`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/villa-cleaning-antalya`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/airbnb-cleaning-antalya`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/deep-cleaning-antalya`,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: { en: `${baseUrl}/deep-cleaning-antalya`, ru: `${baseUrl}/ru/generalnaya-uborka-antaliya`, "x-default": `${baseUrl}/deep-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/apartment-cleaning-antalya`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/apartment-cleaning-antalya`, ru: `${baseUrl}/ru/uborka-kvartir-antaliya`, "x-default": `${baseUrl}/apartment-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/cleaning-service-konyaalti`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/cleaning-service-konyaalti`, ru: `${baseUrl}/ru/klining-konyaalti`, "x-default": `${baseUrl}/cleaning-service-konyaalti` } },
    },
    {
      url: `${baseUrl}/cleaning-service-muratpasa`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/move-in-move-out-cleaning-antalya`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ru`, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/`, ru: `${baseUrl}/ru`, "x-default": `${baseUrl}/` } },
    },
    {
      url: `${baseUrl}/ru/uborka-kvartir-antaliya`, changeFrequency: "weekly", priority: 0.85,
      alternates: { languages: { en: `${baseUrl}/apartment-cleaning-antalya`, ru: `${baseUrl}/ru/uborka-kvartir-antaliya`, "x-default": `${baseUrl}/apartment-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/ru/generalnaya-uborka-antaliya`, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/deep-cleaning-antalya`, ru: `${baseUrl}/ru/generalnaya-uborka-antaliya`, "x-default": `${baseUrl}/deep-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/ru/klining-konyaalti`, changeFrequency: "weekly", priority: 0.85,
      alternates: { languages: { en: `${baseUrl}/cleaning-service-konyaalti`, ru: `${baseUrl}/ru/klining-konyaalti`, "x-default": `${baseUrl}/cleaning-service-konyaalti` } },
    },
  ];
}
