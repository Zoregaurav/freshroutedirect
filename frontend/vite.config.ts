// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: {
      https: isDev,           // ✔ HTTPS only for local dev
      host: "localhost",      // ✔ Dev server not exposed publicly
      port: 8080,
    },

    plugins: [
      react(),
      isDev && mkcert(),           // ✔ Only in dev mode
      isDev && componentTagger(),  // ✔ Only in dev mode
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // ✅ Safe alias
      },
    },

    build: {
      sourcemap: false,    // ❌ Disable source maps in production for security
      minify: "esbuild",   // ✅ Minify JS for performance
      outDir: "dist",      // ✅ Production build output folder
      assetsDir: "assets", // Optional: where static assets go
    },

    define: {
      "process.env": {},   // ❌ Prevent accidental exposure of process.env
    },
  };
});
