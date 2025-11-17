import { BASE_URL, VERSION } from "./config";

function getChampionImageUrl(championId) {
    return BASE_URL+"/"+VERSION+"/img/champion/"+championId+".png";
}
function getChampionSplashUrl(championId, skinNumber){
    if (!skinNumber) {
        skinNumber =0;
    }
    return BASE_URL +"/img/champion/loading/"+championId+"_"+skinNumber+".jpg";
}
function getAbilityImageUrl(abilityId){
    return BASE_URL +"/"+VERSION+"/img/spell/" +abilityId+".png";
}
function getPassiveImageUrl(passiveId) {
     return BASE_URL +"/"+VERSION+"/img/passive/" +passiveId+".png";
}

export default{
    getChampionImageUrl,
    getChampionSplashUrl,
    getAbilityImageUrl,
    getPassiveImageUrl
}