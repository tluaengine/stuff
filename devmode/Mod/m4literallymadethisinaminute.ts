declare const Il2Cpp: any;

Il2Cpp.perform(() => {
    function UnlockAll() {
        const appClass = Il2Cpp.domain
            .assembly("AnimalCompany")
            .image
            .class("AnimalCompany.App");

        const appStateClass = Il2Cpp.domain
            .assembly("AnimalCompany")
            .image
            .class("AnimalCompany.AppState");

        const netSessionStateClass = Il2Cpp.domain
            .assembly("AnimalCompany")
            .image
            .class("AnimalCompany.UserState");

        const netSessionStateClass2 = Il2Cpp.domain
            .assembly("AnimalCompany")
            .image
            .class("AnimalCompany.UserInventoryState");

        const stateObject = appClass
            .method("get_state")
            .invoke();

        const netSessionObject = appStateClass
            .method("get_user")
            .bind(stateObject)
            .invoke();

        const invObject = netSessionStateClass
            .method("get_inventory")
            .bind(netSessionObject)
            .invoke();

        const moderateRoomObject = netSessionStateClass
            .method("get_isDeveloper")
            .bind(netSessionObject)
            .invoke();

        const devallitemsObject = netSessionStateClass2
            .method("get_devOwnAllAvatarItemsOverride")
            .bind(invObject)
            .invoke();

        moderateRoomObject
            .method("set_value")
            .invoke(true);

        devallitemsObject
            .method("set_value")
            .invoke(true);
    }

    function sleep(ms: number) {
        const start = Date.now();

        while (Date.now() - start < ms) {
            // Wait
        }
    }

    // Wait indefinitely until UnlockAll succeeds
    while (true) {
        try {
            UnlockAll();
            break;
        } catch (error) {
            console.log("Not ready yet, retrying...");
            sleep(1000);
        }
    }

    // It worked
    for (let i = 0; i < 100; i++) {
        console.log("DEVELOPER MODE ENABLED");
    }

    // Keep applying it every second
    while (true) {
        sleep(1000);

        try {
            UnlockAll();
        } catch (error) {
            console.log("UnlockAll failed, retrying...");
        }
    }
});