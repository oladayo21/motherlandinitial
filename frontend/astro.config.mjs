// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: 'https://oladayo21.github.io',
  base: '/motherlandinitial',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["motherlandfc.com"],
    },
  },
});
