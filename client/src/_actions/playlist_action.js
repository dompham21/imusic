import axios from 'axios';
import { GET_GALLERY, GET_PLAYLIST } from './types';

export const getGallery = async () => {
    let config = {
        method: 'get',
        url: `/api/media/gallery`,
    };

    try {
        let request = await axios(config)
        return {
            payload: request,
            type: GET_GALLERY,
        }
    } catch (error) {
        console.log(error);
    }
}


export const getPlaylist = async () => {
    let config = {
        method: 'get',
        url: `/api/media/playlist`,
    };
    try {
        let request  = await axios(config)
        console.log(request);
        return {
            payload: request,
            type: GET_PLAYLIST,
        }
    } catch (error) {
        console.log(error);
    }
}