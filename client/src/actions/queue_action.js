import * as queueTypes from '../constants/queue_constant';


export const addSongToQueue =  () => {
    return {
        type: queueTypes.ADD_SONG_TO_QUEUE
    };
}

export const addPlaylistToQueue =  (data,encodeId) => {
    return {
        type: queueTypes.ADD_PLAYLIST_TO_QUEUE,
        data: data,
        encodeId: encodeId
    };
}