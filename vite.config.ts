import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [svelte()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@components": path.resolve(__dirname, "./src/lib/components"),
            "@windows": path.resolve(__dirname, "./src/lib/windows"),
            overwolf: mode === "development" ? "/src/overwolf.dev.mock.ts" : "overwolf",
        },
    },
    build: {
        minify: false,
    },
}));
