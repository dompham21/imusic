import * as queueTypes from '../constants/queue_constant';


export const addSongToQueue =  (data,encodeId) => {
    return {
        type: queueTypes.ADD_SONG_TO_QUEUE,
        data: data,
        encodeId: encodeId
    };
}

export const addPlaylistToQueue =  (data,encodeId) => {
    return {
        type: queueTypes.ADD_PLAYLIST_TO_QUEUE,
        data: data,
        encodeId: encodeId
    };
}

export const removeSongFromQueue = (encodeId) => {

    return {
        type: queueTypes.REMOVE_SONG_FROM_QUEUE,
        encodeId: encodeId
    }
}