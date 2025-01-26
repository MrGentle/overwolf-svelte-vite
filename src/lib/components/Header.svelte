<script module lang="ts">
    import type { MouseEventHandler } from "svelte/elements";
    import { Settings, Minus, X } from "lucide-svelte";

    export interface HeaderMeta {
        logoSrc: string;
        title: string;
    }

    export interface HeaderMouseEventHandlers {
        onmousedown: MouseEventHandler<HTMLElement>;
        onmousemove: MouseEventHandler<HTMLElement>;
    }

    export interface HeaderWindowFunctions {
        minimizeWindow?: Function;
        closeWindow?: Function;
    }
</script>

<script lang="ts">
    let {
        meta,
        mouseEventHandlers,
        windowFunctions,
    }: { meta: HeaderMeta; mouseEventHandlers: HeaderMouseEventHandlers; windowFunctions: HeaderWindowFunctions } = $props();
</script>

<header
    class="flex justify-between items-center cursor-move bg-slate-100 select-none"
    onmousedown={mouseEventHandlers.onmousedown}
    onmousemove={mouseEventHandlers.onmousemove}
>
    <div class="px-3 flex items-center">
        {#if meta.logoSrc}
            <img src={meta.logoSrc} alt="Window logo" class="aspect-square h-8 w-8 mr-1" />
        {/if}
        <h1>{meta.title}</h1>
    </div>
    <div class="flex">
        <button class="py-2 px-3 hover:bg-zinc-200 transition-colors" onclick={() => (window.location.href = "overwolf://settings")}>
            <Settings size={20} strokeWidth={1} />
        </button>
        {#if windowFunctions.minimizeWindow}
            <button
                class="py-2 px-3 hover:bg-zinc-200 transition-colors"
                aria-label="Minimize window"
                onclick={() => {
                    windowFunctions.minimizeWindow!();
                }}
            >
                <Minus size={20} strokeWidth={1} />
            </button>
        {/if}
        {#if windowFunctions.closeWindow}
            <button
                class="py-2 px-3 hover:bg-red-400 hover:text-white transition-colors"
                aria-label="Close window"
                onclick={() => {
                    windowFunctions.closeWindow!();
                }}
            >
                <X size={20} strokeWidth={1} />
            </button>
        {/if}
    </div>
</header>
