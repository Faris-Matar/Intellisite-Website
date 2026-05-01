import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    historyApiFallback: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
    historyApiFallback: true,
  },
  build: {
    target: "es2020",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion"],
          gsap: ["gsap"],
          router: ["react-router-dom"],
        },
      },
    },
  },
  assetsInclude: ["**/*.mp4", "**/*.webm"],
});
