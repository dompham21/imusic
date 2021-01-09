import * as playlistConstants from '../constants/playlist_constants';

export const fetchPlaylist =  () => {
    return {
        type: playlistConstants.FETCH_PLAYLIST
    };
}

export const fetchPlaylistSuccess = data => {
    return {
      type: playlistConstants.FETCH_PLAYLIST_SUCCESS,
      payload: {
        data,
      },
    };
};
  
export const fetchPlaylistFailed = error => {
    return {
      type: playlistConstants.FETCH_PLAYLIST_FAILED,
      payload: {
        error,
      },
    };
};


export const fetchGallery =  () => {
    return {
        type: playlistConstants.FETCH_GALLERY
    };
}

export const fetchGallerySuccess = data => {
    return {
      type: playlistConstants.FETCH_GALLERY_SUCCESS,
      payload: {
        data,
      },
    };
};
  
export const fetchGalleryFailed = error => {
    return {
      type: playlistConstants.FETCH_GALLERY_FAILED,
      payload: {
        error,
      },
    };
};