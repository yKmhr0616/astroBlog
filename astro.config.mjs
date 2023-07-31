import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from '@astrojs/vercel/edge';
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://yu-astro-blog.pages.dev/",
  integrations: [mdx(), sitemap(), tailwind(), vue(), image(), react()],
  tailwindConfig: "./tailwindConfig.js",
  build: {
    inlineStylesheets:"auto"
  }
  // output: 'server',
  // adapter: vercel()
});