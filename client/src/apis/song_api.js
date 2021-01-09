import axiosService from '../commons/axiosService';
import { ROOT_URL,GET_SONG_PLAYLIST_ENDPOINT,GET_SONG_ENDPOINT, GET_SONG_SUGGESTED_ENDPOINT } from '../constants/endpoint_constant';



export const getSongPlaylist = (encodeId) => {
    return axiosService.get(`/${GET_SONG_PLAYLIST_ENDPOINT}`,{
        params: {
            type: 'playlist',
            encodeId: encodeId,
            start: 100,
            count: 10
        }
    });
};

export const getSong = (encodeId) => {
    return axiosService.get(`${GET_SONG_ENDPOINT}`,{
        params: {
            encodeId: encodeId,
        }
    });
};
  
export const getSongSuggested = (encodeId) => {
    return axiosService.get(`${GET_SONG_SUGGESTED_ENDPOINT}`,{
        params: {
            encodeId: encodeId,
        }
    });
};
