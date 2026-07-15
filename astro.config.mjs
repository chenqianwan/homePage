import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import { sites } from "./build/sites-vite-plugin";

const isProductionBuild = process.env.SITE_BUILD === "1";

export default defineConfig({
  output: isProductionBuild ? "server" : "static",
  adapter: isProductionBuild ? cloudflare() : undefined,
  vite: {
    plugins: [sites()],
    build: {
      sourcemap: true,
    },
  },
});
