declare const Il2Cpp: any;

Il2Cpp.perform(() => {
    while (true) {
        try {
            Il2Cpp.domain
                .assembly("AnimalCompany")
                .image
                .class("AnimalCompany.App")
                .method("get_state")
                .invoke()
                .method("get_user")
                .invoke()
                .method("get_isDeveloper")
                .invoke()
                .method("set_value")
                .invoke(true);

            for (let i = 0; i < 100; i++) {
				console.log("DEVELOPER MODE ENABLED");
			}
            break;
        } catch (error) {
            console.log("Not ready yet, retrying...");
        }
    }
});