import * as songTypes from '../constants/song_constant';


export const pauseSongAction = () => {
    return {
        type: songTypes.PAUSE_SONG
    };
}
export const togglePausePlaySongAction =  id => {
  return {
      type: songTypes.TOGGLE_PLAY_PAUSE_SONG
  };
}


export const fetchSong =  info => {
    return {
        type: songTypes.FETCH_SONG,
        songInfo: info
    };
}

export const fetchSongSuccess = data => {
    return {
      type: songTypes.FETCH_SONG_SUCCESS,
      payload: {
        data,
      },
    };
};
  
export const fetchSongFailed = error => {
    return {
      type: songTypes.FETCH_SONG_FAILED,
      payload: {
        error,
      },
    };
};


export const fetchSongSuggested = encodeId => {
    return {
        type: songTypes.FETCH_SUGGESTED_SONG,
        encodeId: encodeId
    };
}

export const fetchSongSuggestedSuccess = data => {
    return {
      type: songTypes.FETCH_SUGGESTED_SONG_SUCCESS,
      payload: {
        data,
      },
    };
};
  
export const fetchSongSuggestedFailed = error => {
    return {
      type: songTypes.FETCH_SUGGESTED_SONG_FAILED,
      payload: {
        error,
      },
    };
};

export const fetchPlaylistSong = (encodeId) => {
    return {
        type: songTypes.FETCH_PLAYLIST_SONG,
        encodeId: encodeId
    };
}

export const fetchPlaylistSongSuccess = data => {
    return {
      type: songTypes.FETCH_PLAYLIST_SONG_SUCCESS,
      payload: {
        data,
      },
    };
};
  
export const fetchPlaylistSongFailed = error => {
    return {
      type: songTypes.FETCH_PLAYLIST_SONG_FAILED,
      payload: {
        error,
      },
    };
};