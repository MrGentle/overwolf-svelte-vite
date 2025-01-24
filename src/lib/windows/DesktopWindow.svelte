<script lang="ts">
    import { WINDOWS_NAMES } from "@/consts";
    import { createWindowDragHandler } from "@/utils/createWindowDragHandler";
    import { getWindow } from "@/utils/getWindow";
    import type { HeaderMouseEventHandlers, HeaderWindowFunctions, HeaderMeta } from "../components/Header.svelte";
    import Header from "../components/Header.svelte";

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
    <div class="flex justify-center items-center w-full h-full gap-2">
        <img src="/svelte.svg" alt="Svelte Icon" width="50" height="50" />
        <img src="/vite.svg" alt="Vite Icon" width="50" height="50" />
    </div>
</div>
