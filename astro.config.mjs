// Astro settings. Fonts are downloaded at build time and served from this site.
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";

// The chatbot switch lives in src/data/site.ts (chatbot.enabled). Read it here so the build can leave
// the widget's code out entirely when it is off (the built site is then identical to one without it).
const chatbotEnabled = /export const chatbot = \{\s*enabled:\s*true/.test(readFileSync(new URL("./src/data/site.ts", import.meta.url), "utf8"));

export default defineConfig({
  site: "https://espositosice.net",
  trailingSlash: "always", // keeps the same URLs as the old site, e.g. /freezer-rental/
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()], define: { "import.meta.env.CHATBOT_ENABLED": JSON.stringify(chatbotEnabled) } },
  fonts: [
    { provider: fontProviders.google(), name: "Zilla Slab", cssVariable: "--font-zilla", weights: [500, 700], styles: ["normal"], fallbacks: ["Georgia", "serif"] },
    { provider: fontProviders.google(), name: "Public Sans", cssVariable: "--font-public", weights: ["400 800"], styles: ["normal"], fallbacks: ["system-ui", "sans-serif"] },
  ],
});
