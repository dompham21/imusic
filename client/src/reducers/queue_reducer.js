import * as queueTypes from '../constants/queue_constant';
import { removeSongFromQueue } from '../actions/queue_action';


const initialState = {
  queues: [],
  ids: [],
  idPlaylist: null
};

  
const reducer = (state = initialState, action) => {

    switch (action.type) {
      case queueTypes.ADD_SONG_TO_QUEUE: {
        return addSongToQueue(state, action);
      }
      case queueTypes.ADD_PLAYLIST_TO_QUEUE: {
        return addPlaylistToQueue(state,action);
      }
      case queueTypes.REMOVE_SONG_FROM_QUEUE: {
        // return removeSongFromQueue(state,action);
        return {...state,queues: state.queues.filter(i => i.encodeId !== action.encodeId)}
      }
      default:
        return state;
    }
  };
  
  

  const addSongToQueue = (state, action) => {
      return {...state,queues: state.queues.concat(action.data.items),ids: action.encodeId }
    
  }

  const addPlaylistToQueue = (state,action) => {
    if(state.idPlaylist !== action.encodeId){
      return {...state,queues: state.queues.concat(action.data.items),idPlaylist: action.encodeId }
    }
    return state;
  }

  // const removeSongFromQueue = (state,action) => {
  //   return {...state,queues: state.queues.filter(i => i.encodeId !== action.encodeId)}
  //   const con = state.ids.find(id => id === action.encodeId);
  //   if (typeof con === 'undefined') {
  //     return {...state,queues: state.queues.concat(action.data.items),ids: action.encodeId }
  //   }
  //   return state;
  // }
  export default reducer;
