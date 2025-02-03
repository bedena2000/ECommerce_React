import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error
import path from "path";

// @ts-expect-error
const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
});
