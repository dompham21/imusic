import axios from 'axios';
import { GET_PLAYLIST } from './types';
import { hashParam } from '../util';
const URL_API = 'https://beta.zingmp3.vn';
const API_KEY = '38e8643fb0dc04e8d65b99994d3dafff';
const SERCRET_KEY = '10a01dcf33762d3a204cb96429918ff6';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';



export const getPlaylist = async () => {
    try {
        let time = Math.floor(Date.now() / 1000);
        console.log(hashParam('/api/v2/home?page=1',SERCRET_KEY,time))
        console.log(time);
        const request =  await axios.get(`${URL_API}/api/v2/home?page=1&ctime=${time}&sig=${hashParam('/api/v2/home?page=1',SERCRET_KEY,time)}&apiKey=${API_KEY}`,{
            headers: {
                "Access-Control-Allow-Origin":"*"
            }
        })
        .then(response => response.data);
        console.log(request)
        return {
            type: GET_PLAYLIST,
            payload: request
        }
    } catch (error) {
        console.log(error);
    }
}