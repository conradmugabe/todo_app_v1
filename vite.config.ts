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
      "@ui": path.resolve(__dirname, "src/UI"),
      "@utils": path.resolve(__dirname, "src/app/web"),
      "@tasks": path.resolve(__dirname, "src/app/tasks"),
      "@comments": path.resolve(__dirname, "src/app/comments"),
      "@web": path.resolve(__dirname, "src/app/web"),
      "@pages": path.resolve(__dirname, "src/UI/pages"),
      "@forms": path.resolve(__dirname, "src/UI/forms"),
      "@components": path.resolve(__dirname, "src/UI/components"),
    },
  },
});
