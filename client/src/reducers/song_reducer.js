import * as songTypes from '../constants/song_constant';
import { toastError } from '../helpers/toastHelper';


const initialState = {
    idSong: null,
    idPlaylist: null,
    suggestedSongs: [],
    playlistSongs: [],
    currSong: {},
    urlSong: {},
    isFetching: false,
    isPlaying: false,
};

  
const reducer = (state = initialState, action) => {

    switch (action.type) {
      case songTypes.PAUSE_SONG: {
        return {
          ...state,
          isPlaying: false
        }
      }
      case songTypes.TOGGLE_PLAY_PAUSE_SONG: {
        return {
          ...state,
          isPlaying: !state.isPlaying
        }
      }
      case songTypes.FETCH_PLAYLIST_SONG: {
        console.log(action.encodeId);
        return {
          ...state,
          isFetching: true,
          idPlaylist: action.encodeId,
          isPlaying: false,
        };
      }
      case songTypes.FETCH_PLAYLIST_SONG_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          playlistSongs: data.items,
          isPlaying: true,
        };
      }
      case songTypes.FETCH_PLAYLIST_SONG_FAILED: {
        toastError("🦄 Xảy ra lỗi!");
        return {
            ...state,
            playlistSongs: [],
            isPlaying: false,
        }
      } 
      case songTypes.FETCH_SONG: {
        console.log(action.songInfo);
        localStorage.setItem('imusic_currSongInfo',JSON.stringify(action.songInfo))
        return {
          ...state,
          isFetching: true,
          idSong: action.songInfo.encodeId,
          currSong: action.songInfo
        };
      }
      case songTypes.FETCH_SONG_SUCCESS: {
        const { data } = action.payload;
        localStorage.setItem('imusic_urlSong',JSON.stringify(data))
        return {
          ...state,
          isFetching: false,
          urlSong: data,
          isPlaying: true,
        };
      }
      case songTypes.FETCH_SONG_FAILED: {
        toastError("🦄 Xảy ra lỗi!");
        return {
            ...state,
            isFetching: false,
            urlSong: {},
            currSongL: {},
            isPlaying: false,
        }
      }
      case songTypes.FETCH_SUGGESTED_SONG: {
        console.log(action.encodeId);
        return {
          ...state,
          suggestedSongs: []
        };
      }
      case songTypes.FETCH_SUGGESTED_SONG_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          suggestedSongs: data.items
        };
      }
      case songTypes.FETCH_SUGGESTED_SONG_FAILED: {
        toastError("🦄 Xảy ra lỗi!");
        return {
            ...state,
            suggestedSongs: []
        }
      } 
      default:
        return state;
    }
  };
  
  export default reducer;
  
