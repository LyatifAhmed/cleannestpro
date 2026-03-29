import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cleannestpro.com",
      lastModified: new Date(),
    },
    {
      url: "https://cleannestpro.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://cleannestpro.com/apply",
      lastModified: new Date(),
    },
    {
      url: "https://cleannestpro.com/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://cleannestpro.com/terms",
      lastModified: new Date(),
    },
  ];
}