import jsonFile from '../assets/Games.JSON'
import axios from "axios";
export  default  class GamesService{

    static async getAll(){
        const [response] = await Promise.all([axios.get(jsonFile)]);
        console.log(response)
        return response;
    }
}