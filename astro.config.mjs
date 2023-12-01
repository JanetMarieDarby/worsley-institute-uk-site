import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), astroImageTools, mdx()]
  // output: "server",
  // adapter: netlify()
});