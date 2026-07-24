import { SITE_URL } from "@/lib/constants";

const routes = ["", "/services", "/about", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-07-24"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
