import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rawPlugin from "vite-plugin-raw";

export default defineConfig({
  plugins: [
    react(),
    rawPlugin({
      extensions: ["md"], // Treat .md files as raw strings
    }),
  ],
});
