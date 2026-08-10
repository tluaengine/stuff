try {
	Il2Cpp.perform(() => {
		const ac = Il2Cpp.domain.assembly("AnimalCompany").image;
		const vrConnectedClass = ac.class("AnimalCompany.EACClientManager");
		const getPhaseMethod = vrConnectedClass.method("IsClientValidated")
		getPhaseMethod.implementation = function () {
			return true
		};
	});
} catch (err) {
	console.error("[SteamVR] Error:", err);
}