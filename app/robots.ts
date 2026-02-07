import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://wrkks.site";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Keep your API routes private
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
