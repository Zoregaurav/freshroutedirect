
// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import mkcert from "vite-plugin-mkcert";


export default defineConfig(({ mode }) => ({
  server: {
    https: true,       // ✅ Enable HTTPS
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mkcert(),          // ✅ Add mkcert plugin
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
