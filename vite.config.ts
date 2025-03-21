import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/wordle-react-nico-rithner/",
  build: {
    outDir: "dist",
  },
});
