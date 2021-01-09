import * as playlistConstants from '../constants/playlist_constants';
import { toastError } from '../helpers/toastHelper';


const initialState = {
    listPlaylist: [],
    listGallery: []
};
  
const reducer = (state = initialState, action) => {
    switch(action.type){
        case playlistConstants.FETCH_PLAYLIST: {
            return {
                ...state,
                listPlaylist: []
            };
        }
        case playlistConstants.FETCH_PLAYLIST_SUCCESS: {
            const { data } = action.payload;

            return {
                ...state,
                listPlaylist: data.items
            }
        }   
        case playlistConstants.FETCH_PLAYLIST_FAILED: {

            toastError("🦄 Xảy ra lỗi!");
            return {
                ...state,
                listPlaylist: []
            }
        }
        case playlistConstants.FETCH_GALLERY: {
            return {
                ...state,
                listGallery: [],
                listTop100: []
            };
        }
        case playlistConstants.FETCH_GALLERY_SUCCESS: {
            const { data } = action.payload;

            return {
                ...state,
                listGallery: data.items
            }
        }
        case playlistConstants.FETCH_GALLERY_FAILED: {
            
            toastError("🦄 Xảy ra lỗi!");
            return {
                ...state,
                listGallery: []
            }
        } 
        default:
            return state;
    }
}


export default reducer;