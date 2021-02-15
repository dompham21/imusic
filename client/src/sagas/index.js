import {
    call,
    delay,
    put,
    select,
    takeEvery,
    takeLatest,
    take,
    all
} from 'redux-saga/effects';
import * as songTypes from '../constants/song_constant';
import * as playlistTypes from '../constants/playlist_constants';
import { STATUS_CODE } from '../constants/index';

import {
    fetchPlaylistSuccess,
    fetchPlaylistFailed,
    fetchGallerySuccess,
    fetchGalleryFailed,
} from '../actions/playlist_action';
import { 
    showLoading,
    hideLoading,
} from '../actions/ui_action';
import { playSongAction,pauseSongAction,fetchPlaylistSongSuccess, fetchPlaylistSongFailed, fetchSong, fetchSongSuccess, fetchSongFailed, fetchSongSuggestedSuccess } from '../actions/song_action';

import { getPlaylist,getGallery } from '../apis/playlist_api';
import { getSongPlaylist,getSong, getSongSuggested } from '../apis/song_api';
import { addPlaylistToQueue, addSongToQueue } from '../actions/queue_action';






function* fetchPlaylistSaga() {    
    yield put(showLoading());
    
    const resp = yield call(getPlaylist);

    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(fetchPlaylistSuccess(data));
    } else {
        yield put(fetchPlaylistFailed(data));
    }
    yield delay(500);

    yield put(hideLoading());

}

function* fetchGallerySaga() {
    yield put(showLoading());

    const resp = yield call(getGallery);

    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
        yield put(fetchGallerySuccess(data));
    } else {
        yield put(fetchGalleryFailed(data));
    }

    yield delay(500);
    yield put(hideLoading());
}

function* fetchSongSaga(payload) {
    const {songInfo}  = payload;

    const resp = yield call(getSong,songInfo.encodeId)
    const { status, data } = resp;

    if (status === STATUS_CODE.SUCCESS) {
        yield put(fetchSongSuccess(data));       
        localStorage.setItem('imusic_hasPlayer',true)
        localStorage.setItem('imusic_urlSong',JSON.stringify(data))
    } else {
        yield put(fetchSongFailed(data));
    }
}

function* fetchSuggestedSongSaga(payload) {
    const {encodeId}  = payload;

    const resp = yield call(getSongSuggested,encodeId)
    const { status, data } = resp;
    console.log(data)
    if (status === STATUS_CODE.SUCCESS) {
        let queue = JSON.parse(localStorage.getItem('imusic_queue'))

        localStorage.setItem('imusic_queue',JSON.stringify({...queue,recommend: data}))
        yield  put(addSongToQueue(data,encodeId))    
        yield put(fetchSongSuggestedSuccess(data));   
    } else {
        yield put(fetchSong(data));
    }

}

function* fetchSongPlaylistSaga(payload) { 
    const {encodeId}  = payload;

    const resp = yield call(getSongPlaylist,encodeId)
    
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
        const {items} = data;
        //fetch first song streaming of playlist and add to queue
        yield put(fetchPlaylistSongSuccess(data))
        yield put(fetchSong(items[0]))
        yield  put(addPlaylistToQueue(data,encodeId))
        // save data song to queue local storage
        let queue = JSON.parse(localStorage.getItem('imusic_queue'))

        localStorage.setItem('imusic_queue',JSON.stringify({...queue,
            currentEncodeId: items[0].encodeId,
            encodeIds: items.map(i=>i.encodeId),
            itemsMap: items,
            playlistEncodeId: encodeId,
            preSong: []
        }));
    } else {
        yield put(fetchPlaylistSongFailed(data));
    }

}

function* rootSaga() {
    yield takeLatest(playlistTypes.FETCH_GALLERY, fetchGallerySaga);
    yield takeLatest(playlistTypes.FETCH_PLAYLIST, fetchPlaylistSaga);
    yield takeLatest(songTypes.FETCH_PLAYLIST_SONG, fetchSongPlaylistSaga);
    yield takeLatest(songTypes.FETCH_SONG,fetchSongSaga)
    yield takeLatest(songTypes.FETCH_SUGGESTED_SONG, fetchSuggestedSongSaga);

}

export default rootSaga;