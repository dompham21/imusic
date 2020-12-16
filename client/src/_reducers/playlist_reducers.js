import { GET_PLAYLIST } from "../_actions/types";

export default function(state={},action){
    switch(action.type){
        case GET_PLAYLIST:
            return {...state,data: action.payload}
        default:
            return state;
    }
}
