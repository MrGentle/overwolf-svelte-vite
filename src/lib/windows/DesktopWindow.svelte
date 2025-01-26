<script lang="ts">
    import { WINDOWS_NAMES } from "@/consts";
    import { createWindowDragHandler } from "@/utils/createWindowDragHandler";
    import { getWindow } from "@/utils/getWindow";
    import type { HeaderMouseEventHandlers, HeaderWindowFunctions, HeaderMeta } from "../components/Header.svelte";
    import Header from "../components/Header.svelte";
    import Cross from "lucide-svelte/icons/cross";

    const { onDragStart, onMouseMove } = createWindowDragHandler(WINDOWS_NAMES.DESKTOP);

    async function minimizeWindow() {
        (await getWindow(WINDOWS_NAMES.DESKTOP)).minimize();
    }

    async function closeWindow() {
        (await getWindow(WINDOWS_NAMES.DESKTOP)).close();
    }

    const headerMeta: HeaderMeta = { title: "Desktop window", logoSrc: "overwolf/IconMouseOver.png" };
    const headerMouseEventHandlers: HeaderMouseEventHandlers = { onmousedown: onDragStart, onmousemove: onMouseMove };
    const headerWindowFunctions: HeaderWindowFunctions = { minimizeWindow, closeWindow };
</script>

<div class="flex flex-col h-screen max-h-screen bg-white">
    <Header meta={headerMeta} mouseEventHandlers={headerMouseEventHandlers} windowFunctions={headerWindowFunctions} />
    <div class="flex flex-col justify-center items-center w-full h-full gap-2">
        <div class="flex justify-center items-center w-full gap-2">
            <div class="bg-black p-2 rounded-md">
                <img src="/overwolf.svg" alt="Overwolf Icon" width="60" height="60" />
            </div>
            <Cross />
            <img src="/svelte.svg" alt="Svelte Icon" width="60" height="60" />
            <Cross />
            <img src="/vite.svg" alt="Vite Icon" width="60" height="60" />
        </div>
        <div class="flex justify-center items-center w-full">
            <span class="text-xl">Overwolf + Svelte + Vite</span>
        </div>
    </div>
</div>
