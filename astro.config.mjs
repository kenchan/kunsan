import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: vercel({
    analytics: true
  }),
  site: "https://diary.shu-cream.net/",
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});