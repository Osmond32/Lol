import axios from "axios";
import { BASE_URL, LANGUAGE, VERSION } from "./config";

function getAllChampions(){
    return axios.get(BASE_URL + "/"+VERSION+"/data/"+LANGUAGE+"/champion.json")
}

function getChampionDetail(championId){
    return axios.get(BASE_URL + "/"+VERSION+"/data/"+LANGUAGE+"/champion/"+championId+".json")
}

export default{
   getAllChampions,
   getChampionDetail 
} 