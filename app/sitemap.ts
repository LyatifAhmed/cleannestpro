import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cleannestpro.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },

    // 🔥 SEO PAGES (çok önemli)
    {
      url: `${baseUrl}/villa-cleaning-antalya`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/airbnb-cleaning-antalya`,
      lastModified: new Date(),
    },
  ];
}