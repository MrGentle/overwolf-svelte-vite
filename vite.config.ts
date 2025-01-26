import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
// Lets you import lucide icons as a deconstructor.
// import { A, B C } from "lucide-svelte" | as opposed to | import A from "lucide-svelte/icons/A"
import lucidePreprocess from "vite-plugin-lucide-preprocess";

// https://vite.dev/config/
export default defineConfig(() => ({
    plugins: [lucidePreprocess(), svelte()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@components": path.resolve(__dirname, "./src/lib/components"),
            "@windows": path.resolve(__dirname, "./src/lib/windows"),
        },
    },
    build: {
        minify: false,
    },
}));
