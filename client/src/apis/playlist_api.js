import axiosService from '../commons/axiosService';
import { ROOT_URL,PLAYLIST_ENDPOINT,GALLERY_ENDPOINT } from '../constants/endpoint_constant';

export const getPlaylist = () => {
    return axiosService.get(`/${PLAYLIST_ENDPOINT}`,{
        params: {
            page: 2
        }
    });
};

export const getGallery = () => {
    return axiosService.get(`/${GALLERY_ENDPOINT}`,{
        params: {
            page: 1
        }
    });
};
  