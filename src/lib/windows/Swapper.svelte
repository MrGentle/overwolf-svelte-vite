<script lang="ts">
    import { WINDOWS_NAMES } from "@/consts";
    import BackgroundWindow from "./BackgroundWindow.svelte";
    import DesktopWindow from "./DesktopWindow.svelte";
    import InGameWindow from "./InGameWindow.svelte";

    let { currentWindow = null }: { currentWindow?: string | null } = $props();
</script>

{#if currentWindow === WINDOWS_NAMES.BACKGROUND}
    <BackgroundWindow />
{:else if currentWindow === WINDOWS_NAMES.DESKTOP}
    <DesktopWindow />
{:else if currentWindow === WINDOWS_NAMES.IN_GAME}
    <InGameWindow />
{:else}
    <div>Not any page</div>
{/if}
