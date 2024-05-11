import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://valbuilds.gay',
  output: "server",
  adapter: netlify(),
  redirects: {
    '/teapot': '/418'
  }
});