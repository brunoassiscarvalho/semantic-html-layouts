import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 5000,
    origin: "http://localhost:5000",
  },
  base: "http://localhost:5000",
  plugins: [react()],
  build: {
    target: "chrome89",
  },
});
