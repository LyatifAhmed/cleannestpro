import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cleannestpro.com";
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: `${baseUrl}/`, ru: `${baseUrl}/ru`, "x-default": `${baseUrl}/` } },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/villa-cleaning-antalya`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/airbnb-cleaning-antalya`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/deep-cleaning-antalya`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: { en: `${baseUrl}/deep-cleaning-antalya`, ru: `${baseUrl}/ru/generalnaya-uborka-antaliya`, "x-default": `${baseUrl}/deep-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/apartment-cleaning-antalya`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/apartment-cleaning-antalya`, ru: `${baseUrl}/ru/uborka-kvartir-antaliya`, "x-default": `${baseUrl}/apartment-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/cleaning-service-konyaalti`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/cleaning-service-konyaalti`, ru: `${baseUrl}/ru/klining-konyaalti`, "x-default": `${baseUrl}/cleaning-service-konyaalti` } },
    },
    {
      url: `${baseUrl}/cleaning-service-muratpasa`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/move-in-move-out-cleaning-antalya`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ru`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/`, ru: `${baseUrl}/ru`, "x-default": `${baseUrl}/` } },
    },
    {
      url: `${baseUrl}/ru/uborka-kvartir-antaliya`, lastModified: now, changeFrequency: "weekly", priority: 0.85,
      alternates: { languages: { en: `${baseUrl}/apartment-cleaning-antalya`, ru: `${baseUrl}/ru/uborka-kvartir-antaliya`, "x-default": `${baseUrl}/apartment-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/ru/generalnaya-uborka-antaliya`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/deep-cleaning-antalya`, ru: `${baseUrl}/ru/generalnaya-uborka-antaliya`, "x-default": `${baseUrl}/deep-cleaning-antalya` } },
    },
    {
      url: `${baseUrl}/ru/klining-konyaalti`, lastModified: now, changeFrequency: "weekly", priority: 0.85,
      alternates: { languages: { en: `${baseUrl}/cleaning-service-konyaalti`, ru: `${baseUrl}/ru/klining-konyaalti`, "x-default": `${baseUrl}/cleaning-service-konyaalti` } },
    },
  ];
}
