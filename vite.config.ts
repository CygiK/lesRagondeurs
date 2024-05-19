import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/lesragondeurs/",
  plugins: [
    remix({
      basename: '/lesragondeurs/',
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
