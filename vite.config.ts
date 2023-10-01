import { defineConfig } from 'vite'
import ViteReact from "@vitejs/plugin-react";
import svgr from "@svgr/rollup"
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'REACT_APP_',
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [
    ViteReact(),
    envCompatible({}),
    svgr()
  ],
});