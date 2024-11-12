import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/DSAQuiz/", // This line is critical to fix the paths for deployment on GitHub Pages
  plugins: [react()],
});
