import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-roan-ten.vercel.app/',
  integrations: [mdx(), sitemap(), tailwind(), vue()],
  tailwindConfig: "./tailwindConfig.js",
  output: "server",
  adapter: vercel()
});