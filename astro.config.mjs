import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://eaglequarter.co.uk",
  // integrations: [sitemap()],
  output: "static",
  trailingSlash: "always"
});
