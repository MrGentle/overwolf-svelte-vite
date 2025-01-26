<script lang="ts">
    import { HOTKEYS, REQUIRED_FEATURES, WINDOWS_NAMES } from "@/consts";
    import { createWindowDragHandler } from "@/utils/createWindowDragHandler";
    import { getWindow } from "@/utils/getWindow";
    import { gameEventAtom, setGameEventRequiredFeatures, gameInfoAtom, setLogLevel } from "overwolf-nanostores";
    import type { HeaderMeta, HeaderMouseEventHandlers, HeaderWindowFunctions } from "../components/Header.svelte";
    import Header from "../components/Header.svelte";
    import { OWHotkeys } from "@overwolf/overwolf-api-ts/dist";

    let minimize = false;

    // remove this in production to not display debug log
    if (import.meta.env.OVERWOLF_ENV == "development") {
        setLogLevel("debug");
    }

    // set require event features
    setGameEventRequiredFeatures(REQUIRED_FEATURES);

    //Header
    const { onDragStart, onMouseMove } = createWindowDragHandler(WINDOWS_NAMES.IN_GAME);

    const closeWindow = async () => {
        (await getWindow(WINDOWS_NAMES.IN_GAME)).close();
    };

    const toggleMinimizeWindow = () => {
        minimize = !minimize;
    };

    OWHotkeys.onHotkeyDown(HOTKEYS.HIDE_INGAME_WINDOW, toggleMinimizeWindow);

    const headerMeta: HeaderMeta = { title: "Ingame window (Hide with Ctrl + C)", logoSrc: "overwolf/IconMouseOver.png" };
    const headerMouseEventHandlers: HeaderMouseEventHandlers = { onmousedown: onDragStart, onmousemove: onMouseMove };
    const headerWindowFunctions: HeaderWindowFunctions = { closeWindow };
</script>

<div class={`flex flex-col h-screen max-h-screen ${minimize && "hidden"}`}>
    <Header meta={headerMeta} mouseEventHandlers={headerMouseEventHandlers} windowFunctions={headerWindowFunctions} />
    <div class={`flex h-full flex-col overflow-y-hidden`}>
        <div class="h-1/2 flex flex-col bg-zinc-900/[.55]">
            <div class="p-2 text-white text-md">Events</div>
            <p class="flex-grow p-2 text-white bg-zinc-800/[.55] w-full overflow-y-auto">
                {JSON.stringify($gameEventAtom)}
            </p>
        </div>
        <div class="h-1/2 flex flex-col bg-zinc-900/[.55]">
            <div class="p-2 text-white text-md">Infos</div>
            <p class="flex-grow p-2 text-white bg-zinc-800/[.55] w-full overflow-y-auto">
                {JSON.stringify($gameInfoAtom)}
            </p>
        </div>
    </div>
</div>
