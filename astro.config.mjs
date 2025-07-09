// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  trailingSlash: "ignore", // or "always" depending on your setup

  // For static sites deployed to platforms like Netlify/Vercel
  output: "static",

  // If you need custom 404 handling

  redirects: {},
});
