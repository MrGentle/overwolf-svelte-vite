<script lang="ts">
    import { WINDOWS_NAMES } from "@/consts";
    import { getWindow } from "@/utils/getWindow";

    const swapWindow = (windowName: string) => {
        getWindow(windowName).then((window) => {
            window.restore();
        });
    };
</script>

<div class="fixed bottom-0 flex justify-between items-center cursor-move select-none">
    <select
        onchange={(e: Event) => {
            const target = e.target as HTMLSelectElement;
            if (!target) {
                console.error("Target value does not exist");
                return;
            }
            console.log(`Swapping to ${target.value} window`);
            swapWindow(target.value);
        }}
    >
        {#each Object.entries(WINDOWS_NAMES) as keyval}
            <option value={keyval[1]}>{keyval[0]}</option>
        {/each}
    </select>
</div>
