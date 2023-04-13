/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "./src/UI"),
      "@entities": path.resolve(__dirname, "src/app/entities"),
      "@services": path.resolve(__dirname, "src/app/services"),
    },
  },
});
