import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://eaglequarter.co.uk",
  output: "static",
  build: {
    format: "directory"
  }
});
