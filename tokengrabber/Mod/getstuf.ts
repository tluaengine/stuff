//@ts-ignore
declare const Il2Cpp: any;
declare const Java: any;

Il2Cpp.perform(() => {
    const acImage = Il2Cpp.domain.assembly("AnimalCompany").image;
    const AnimalCompanyAPI = acImage.class("AnimalCompany.API.AnimalCompanyAPI");
    const apiSession = AnimalCompanyAPI.method("get_session").invoke();

    const bearer = apiSession.method("get_AuthToken").invoke();
    const refresh = apiSession.method("get_RefreshToken").invoke();

    const Mag = "\x1b[35m";
    const B = "\x1b[34m";
    const Reset = "\x1b[0m";
    console.log(`${Reset}made by squishy; modified by ${Mag}HollowPC ${Reset}`);

    setTimeout(() => {
        console.log(`${Mag}token:${B} ` + bearer);
        console.log(`${Mag}refresh:${B} ` + refresh);
        console.log(`${Reset}hav fun using the tokens! ${Mag}<3`)
    }, 0);
});