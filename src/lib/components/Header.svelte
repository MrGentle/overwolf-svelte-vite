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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<header
    class="flex justify-between items-center cursor-move bg-slate-300 select-none"
    onmousedown={mouseEventHandlers.onmousedown}
    onmousemove={mouseEventHandlers.onmousemove}
>
    <div class="p-2 flex items-center">
        {#if meta.logoSrc}
            <img src={meta.logoSrc} alt="Window logo" class="aspect-square h-8 w-8 object-contain flex-shrink-0 mr-1" />
        {/if}
        <h3 class="font-bold">{meta.title}</h3>
    </div>
    <div class="">
        <button class="p-2" onclick={() => (window.location.href = "overwolf://settings")}>
            <Settings size={20} />
        </button>
        {#if windowFunctions.minimizeWindow}
            <button
                class="p-2"
                aria-label="Minimize window"
                onclick={() => {
                    windowFunctions.minimizeWindow!();
                }}
            >
                <Minus size={20} />
            </button>
        {/if}
        {#if windowFunctions.closeWindow}
            <button
                class="p-2"
                aria-label="Close window"
                onclick={() => {
                    windowFunctions.closeWindow!();
                }}
            >
                <X size={20} />
            </button>
        {/if}
    </div>
</header>
