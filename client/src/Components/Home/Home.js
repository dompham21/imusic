import React, { useEffect,useState } from 'react'
import Gallery from './Gallery/Gallery'
import './Home.css'
import Playlist from './Playlist/Playlist'
import Top100 from './Top100/Top100'

import { useDispatch } from 'react-redux'
import { getPlaylist } from '../../_actions/playlist_action'
import PlaylistChart from './PlaylistChart/PlaylistChart'
function Home() {
    const dispatch = useDispatch();
    const [playlist, setPlaylist] = useState([])
    useEffect(() => {
        const  fetchData = async () =>{
            try {
                let response = await dispatch(getPlaylist())
                if(response.payload.data){
                    setPlaylist(response.payload.data.items)
                }
            } catch (error) {
                console.log(error);
            }   
        }
        fetchData()
    },[])
    console.log(playlist);
    return (
        <div className="main-container">
            <Gallery/>
            <Top100/>
            {
                playlist && playlist.length && playlist.map((list,index) => {
                    if(list.sectionType === "playlist" || list.sectionType === "genre_mood"){
                        return (
                            <Playlist title={list.title} data={list.items} sectionType={list.sectionType} key={index}/>
                        )
                    }
                    else if(list.sectionType === "RTChart"){
                        return (
                            <PlaylistChart  key={index} chart={list.chart} items={list.items}/>
                            // <Chart key={index} chart={list.chart} items={list.items}/>
                        )
                    }
                })
            }
        </div>
    )
}

export default Home
