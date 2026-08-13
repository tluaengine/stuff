
Il2Cpp.perform(() => {
	Il2Cpp.domain.assembly("AnimalCompany").image.class("AnimalCompany.App").method("get_state").invoke().method("get_user").invoke().method("get_isDeveloper").invoke().method("set_value").invoke(true);
	console.log("okay if you see this then it worked, you have developer mode enabled now.");
});