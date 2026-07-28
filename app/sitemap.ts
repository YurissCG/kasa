import type { MetadataRoute } from "next";
import { serviceCategories } from "@/data/services";

const siteUrl = "https://kasabeauty.vercel.app"; // trocar pelo domínio real ao publicar

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contato"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = serviceCategories.map((s) => ({
    url: `${siteUrl}/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
