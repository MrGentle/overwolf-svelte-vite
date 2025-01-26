<script lang="ts">
    import { overwolfMockWindowInfo } from "@/overwolf.dev.mock.svelte";
    import { currentWindowInfoAtom } from "overwolf-nanostores";
    import DevBar from "../components/DevBar.svelte";
    import Swapper from "./Swapper.svelte";

    let currentWindow = $state(() => (import.meta.env.MODE == "development" ? overwolfMockWindowInfo.currentWindow : $currentWindowInfoAtom?.name));
</script>

{#if import.meta.env.MODE == "development"}
    <DevBar />
{/if}

<Swapper currentWindow={currentWindow()} />
