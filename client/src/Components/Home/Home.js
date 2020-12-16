import React, { useEffect } from 'react'
import Gallery from './Gallery/Gallery'
import './Home.css'
import Playlist from './Playlist/Playlist'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylist } from '../../_actions/playlist_action'
function Home() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.playlist)
    useEffect(() => {
        dispatch(getPlaylist())
        .then(res=>{
            console.log(res)
        })
    }, [])
    console.log(state)
    return (
        <div className="main-container">
            <Gallery/>
            <Playlist title="Playlist Nghe Là Thích"/>
            <Playlist title="Radio Nổi Bật"/>
            <Playlist title="Cũ Mà Hay"/>
            <Playlist title="Tuyệt Đỉnh Bolero"/>
            <Playlist title="Zing Music Awards 2020"/>
           
        </div>
    )
}

export default Home
