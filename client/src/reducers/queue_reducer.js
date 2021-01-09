import * as queueTypes from '../constants/queue_constant';


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
        console.log(action.data);

        return addPlaylistToQueue(state,action);
      }
      default:
        return state;
    }
  };
  
  

  const addSongToQueue = (state, action) => {
    const con = state.ids.find(id => id === action.song.id);
    // only add a song to the queue if this song isn't added before
    if (typeof con === 'undefined') {
      return { queues: [...state.queues, action.song], ids: [...state.ids, action.song.id] };
    }
    return state;
  }

  const addPlaylistToQueue = (state,action) => {
    if(state.idPlaylist !== action.encodeId){
      return {...state,queues: state.queues.concat(action.data.items),idPlaylist: action.encodeId }
      // return { queues: [...state.queues, action.data.items], idPlaylist: action.encodeId };
    }
    return state;
  }

  export default reducer;
