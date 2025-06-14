import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), autoprefixer()],
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // this is required!
});
