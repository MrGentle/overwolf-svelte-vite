<script lang="ts">
    import { REQUIRED_FEATURES, WINDOWS_NAMES } from "@/consts";
    import { createWindowDragHandler } from "@/utils/createWindowDragHandler";
    import { getWindow } from "@/utils/getWindow";
    import { gameEventAtom, setGameEventRequiredFeatures, gameInfoAtom, setLogLevel } from "overwolf-nanostores";
    import type { HeaderMeta, HeaderMouseEventHandlers, HeaderWindowFunctions } from "../components/Header.svelte";
    import Header from "../components/Header.svelte";

    let minimize = false;

    // remove this in production to not display debug log
    if (import.meta.env.OVERWOLF_ENV == "development") {
        setLogLevel("debug");
    }

    // set require event features
    setGameEventRequiredFeatures(REQUIRED_FEATURES);

    //Header
    const { onDragStart, onMouseMove } = createWindowDragHandler(WINDOWS_NAMES.IN_GAME);

    async function closeWindow() {
        (await getWindow(WINDOWS_NAMES.IN_GAME)).close();
    }

    const headerMeta: HeaderMeta = { title: "Ingame window", logoSrc: "overwolf/IconMouseOver.png" };
    const headerMouseEventHandlers: HeaderMouseEventHandlers = { onmousedown: onDragStart, onmousemove: onMouseMove };
    const headerWindowFunctions: HeaderWindowFunctions = { closeWindow };
</script>

<div class="flex flex-col h-screen max-h-screen">
    <Header meta={headerMeta} mouseEventHandlers={headerMouseEventHandlers} windowFunctions={headerWindowFunctions} />
    <div>Ingame window</div>
    <div class={`flex h-full flex-col p-2 overflow-y-hidden ${minimize && "hidden"}`}>
        <div class="h-1/2 flex flex-col">
            <div>Events</div>
            <p class="flex-grow textarea bg-transparent w-full overflow-y-auto">
                {JSON.stringify($gameEventAtom)}
            </p>
        </div>
        <div class="h-1/2 flex flex-col">
            <div>Infos</div>
            <p class="flex-grow textarea bg-transparent w-full overflow-y-auto">
                {JSON.stringify($gameInfoAtom)}
            </p>
        </div>
    </div>
</div>
