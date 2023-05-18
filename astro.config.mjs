import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from '@astrojs/vercel/edge';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-pearl.vercel.app/",
  integrations: [mdx(), sitemap(), tailwind(), vue(), image()],
  tailwindConfig: "./tailwindConfig.js",
  output: 'server',
  adapter: vercel()
});