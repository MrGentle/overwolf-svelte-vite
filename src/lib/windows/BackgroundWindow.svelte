<script lang="ts">
    import { GAME_ID, LAUNCER_IDS, LAUNCHER_REQUIRED_FEATURES, WINDOWS_NAMES } from "@/consts";
    import { getWindow } from "@/utils/getWindow";
    import { runningGameAtom } from "overwolf-nanostores";
    import { setLauncherEventRequiredFeatures } from "overwolf-nanostores";

    runningGameAtom.subscribe((runningGame) => {
        const isGameRunning = runningGame && Object.values(GAME_ID).includes(runningGame.classId);

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

    setLauncherEventRequiredFeatures(LAUNCER_IDS.LOL_LAUNCHER, LAUNCHER_REQUIRED_FEATURES);
</script>

<h3>Background</h3>
