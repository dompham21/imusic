import {   GET_GALLERY, GET_PLAYLIST } from "../_actions/types";

export default function(state={},action){
    switch(action.type){
        case GET_PLAYLIST:
            return {...state,getPlaylistSuccess: action.payload}
        case GET_GALLERY:
            return {...state,getGallerySuccess: action.payload}
        default:
            return state;
    }
}
