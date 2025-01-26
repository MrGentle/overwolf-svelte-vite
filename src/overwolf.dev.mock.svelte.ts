/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { START_WINDOW } from "./consts";

class MockGepMethods {
    static addListener(callback: (payload?: any) => void): void {}
    static removeListener(callback: (payload?: any) => void): void {}
}
class MockCommonMethods {
    static addListener(callback: (payload?: any) => void): void {
        callback();
    }
    static removeListener(callback: (payload?: any) => void): void {
        callback();
    }
    static simpleRequestInterval(interval: number, callback: overwolf.CallbackFunction<overwolf.Result>): void {
        console.info(`Callback interval ${interval}`);
        callback({ success: true });
    }
}

interface OverwolfMockWindowInfo {
    currentWindow: string | null;
}

export const overwolfMockWindowInfo: OverwolfMockWindowInfo = $state({
    currentWindow: START_WINDOW,
});

/**
 *
 * Overwolf Mock
 *
 * Reference: https://github.com/AlbericoD/overwolf-modern-react-boilerplate/blob/master/template/src/overwolf.dev.mock.ts
 *
 * Progress:
 * benchmarking: 100%
 * windows: 10%
 * games: 70%,
 * utils: 10%
 */

//@ts-ignore
const overwolfMock: typeof overwolf = {
    version: "BROWSER DEV",
    benchmarking: {
        onFpsInfoReady: MockCommonMethods,
        onHardwareInfoReady: MockCommonMethods,
        onProcessInfoReady: MockCommonMethods,
        requestFpsInfo: MockCommonMethods.simpleRequestInterval,
        requestHardwareInfo: MockCommonMethods.simpleRequestInterval,
        requestProcessInfo: MockCommonMethods.simpleRequestInterval,
        requestPermissions: (callback: overwolf.CallbackFunction<overwolf.Result>) => {
            callback({ success: true });
        },
        stopRequesting: () => {},
    },
    //@ts-ignore
    settings: {
        language: {
            get: (callback: (result: overwolf.settings.language.GetLanguageResult) => void) => {
                console.info("get language");
                callback({ language: "en", success: true });
            },
            onLanguageChanged: {
                addListener: (callback: (payload: overwolf.settings.language.LanguageChangedEvent) => void) => {
                    console.log("onLanguageChanged addListener");
                    callback({ language: "en" });
                },
                removeListener: (callback: (payload: overwolf.settings.language.LanguageChangedEvent) => void) => {
                    callback({ language: "en" });
                },
            },
        },
    },
    //@ts-ignore
    utils: {
        openUrlInDefaultBrowser: (url: string) => {
            window.open(url);
        },
    },
    //@ts-ignore
    windows: {
        getCurrentWindow(callback: (result: any) => void): void {
            callback({ window: { name: overwolfMockWindowInfo.currentWindow }, success: overwolfMockWindowInfo.currentWindow != null });
        },
        //@ts-ignore
        getMainWindow: () => ({ reduxStore }),
        //@ts-ignore
        obtainDeclaredWindow(windowName: string, callback: (response: any) => void): void {
            callback({ window: { name: windowName, id: windowName }, success: windowName != null });
        },
        //@ts-ignore
        restore(windowId: string, callback: (result: any) => void): void {
            overwolfMockWindowInfo.currentWindow = windowId;
            console.info(`Mock - Restore window ${windowId}`);
        },
        //@ts-ignore
        maximize(windowId: string, callback: (result: any) => void): void {
            console.info("Mock maximize");
        },
        //@ts-ignore
        close(windowId: string, callback: () => void): void {
            console.info(`Mock - Close window ${windowId}`);
        }, //@ts-ignore
        minimize(windowId: string, callback: (result: any) => void): void {
            console.info("Mock - Minimize window");
        },
        //@ts-ignore
        onStateChanged: {
            removeListener: () => {},
            addListener: () => {},
        },
    },
    //@ts-ignore
    games: {
        //@ts-ignore
        events: {
            onInfoUpdates2: MockGepMethods,
            onNewEvents: MockGepMethods,
            onInfoUpdates: MockGepMethods,
            onError: MockGepMethods,
            setRequiredFeatures: (features, callback) => {
                //@ts-ignore
                callback({ success: true, features });
            },
            getInfo: (callback: (payload?: any) => void) => {
                callback();
            },
        },
        onGameInfoUpdated: MockGepMethods,
        //@ts-ignore
        inputTracking: {
            onKeyDown: MockCommonMethods,
            onKeyUp: MockCommonMethods,
            onMouseDown: MockCommonMethods,
            onMouseUp: MockCommonMethods,
            getMousePosition: (callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>) => {
                callback({
                    success: true,
                    activity: {
                        aTime: 0,
                        apm: 0,
                        iTime: 0,
                        keyboard: {
                            keys: [],
                            total: 0,
                        },
                        mouse: {
                            dist: 0,
                            keys: 0,
                            total: 0,
                        },
                    },
                });
            },
            getActivityInformation: (callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>) => {
                callback({
                    success: true,
                    activity: {
                        aTime: 0,
                        apm: 0,
                        iTime: 0,
                        keyboard: {
                            keys: [],
                            total: 0,
                        },
                        mouse: {
                            dist: 0,
                            keys: 0,
                            total: 0,
                        },
                    },
                });
            },
            getEyeTrackingInformation: (callback: overwolf.CallbackFunction<overwolf.games.inputTracking.GetActivityResult>) => {
                callback({
                    success: true,
                    activity: {
                        aTime: 0,
                        apm: 0,
                        iTime: 0,
                        keyboard: {
                            keys: [],
                            total: 0,
                        },
                        mouse: {
                            dist: 0,
                            keys: 0,
                            total: 0,
                        },
                    },
                });
            },
            pauseEyeTracking: () => {},
            resumeEyeTracking: () => {},
        },
        getRunningGameInfo: (cb: (payload: overwolf.games.GetRunningGameInfoResult) => void) => {},
        launchers: {
            //@ts-ignore
            events: {
                onInfoUpdates2: MockGepMethods,
                onNewEvents: MockGepMethods,
                onInfoUpdates: MockGepMethods,
                onError: MockGepMethods,
                //@ts-ignore
                setRequiredFeatures: (features, callback) => {
                    //@ts-ignore
                    if (typeof callback === "function") callback({ success: true, features });
                },
                //@ts-ignore
                getInfo: (callback: (payload?: any) => void) => {
                    callback();
                },
            },
            getRunningLaunchersInfo: () => {},
        },
    },
};

// will using mock if env is development (which add by vite)
export default import.meta.env.MODE === "development" &&
    Object.defineProperty(window, "overwolf", {
        writable: true,
        value: overwolfMock,
    });
