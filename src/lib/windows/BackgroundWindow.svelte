<script lang="ts">
    import { GAME_ID, LAUNCHER_REQUIRED_FEATURES, WINDOWS_NAMES } from "@/consts";
    import { getWindow } from "@/utils/getWindow";
    import { runningGameAtom } from "overwolf-nanostores";
    import { setLauncherEventRequiredFeatures } from "overwolf-nanostores";
    import DesktopWindow from "./DesktopWindow.svelte";

    runningGameAtom.subscribe((runningGame) => {
        const isGameRunning = runningGame && runningGame.classId === GAME_ID.NOITA;

        if (isGameRunning) {
            getWindow(WINDOWS_NAMES.IN_GAME).then((window) => {
                window.restore();
            });
        } else {
            getWindow(WINDOWS_NAMES.DESKTOP).then((window) => {
                window.restore();
            });
        }
    });

    setLauncherEventRequiredFeatures(GAME_ID.NOITA, LAUNCHER_REQUIRED_FEATURES);
</script>

<DesktopWindow />
