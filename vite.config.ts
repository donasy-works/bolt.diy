import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    UnoCSS(),
    nodePolyfills({
      include: ["path", "stream", "util", "events", "buffer"],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  // هذا الجزء الجديد لحل مشكلة await
  build: {
    target: "esnext",
  },
});
