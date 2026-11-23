// Astro settings. Fonts are downloaded at build time and served from this site.
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://espositosice.net",
  trailingSlash: "always", // keeps the same URLs as the old site, e.g. /freezer-rental/
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    { provider: fontProviders.google(), name: "Zilla Slab", cssVariable: "--font-zilla", weights: [500, 700], styles: ["normal"], fallbacks: ["Georgia", "serif"] },
    { provider: fontProviders.google(), name: "Public Sans", cssVariable: "--font-public", weights: ["400 800"], styles: ["normal"], fallbacks: ["system-ui", "sans-serif"] },
  ],
});
