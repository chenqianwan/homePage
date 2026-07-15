import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import { sites } from "./build/sites-vite-plugin";

const isProductionBuild = process.env.SITE_BUILD === "1";
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "1";

export default defineConfig({
  output: isProductionBuild ? "server" : "static",
  adapter: isProductionBuild ? cloudflare() : undefined,
  site: isGitHubPagesBuild ? "https://chenqianwan.github.io" : undefined,
  base: isGitHubPagesBuild ? "/homePage" : undefined,
  vite: {
    plugins: isGitHubPagesBuild ? [] : [sites()],
    build: {
      sourcemap: true,
    },
  },
});
