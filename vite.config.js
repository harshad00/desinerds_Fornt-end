import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/auth": "https://property-listing-ns44.onrender.com",
      "/user": "https://property-listing-ns44.onrender.com",
      "/property": "https://property-listing-ns44.onrender.com",
      // "/admin":  "https://property-listing-ns44.onrender.com",
    },
  },
  plugins: [react()],
});
