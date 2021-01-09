import React, { useEffect,useState } from 'react';
import './Home.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylist, fetchGallery } from '../../actions/playlist_action';

import Gallery from '../../components/Gallery/Gallery';
import Playlist from '../../components/Playlist/Playlist';
import PlaylistChart from '../../components/PlaylistChart/PlaylistChart';
import PlaylistLoading from '../../components/PlaylistLoading/PlaylistLoading';
import ContainerLoading from '../../components/ContainerLoading/ContainerLoading';

function Home() {
    const dispatch = useDispatch();
    const listPlaylist = useSelector(state => state.playlist.listPlaylist);
    const listGallery  = useSelector(state => state.playlist.listGallery);
    const showLoading = useSelector(state => state.ui.showLoading);



    useEffect(() => {
        dispatch(fetchGallery());
        dispatch(fetchPlaylist());
    },[dispatch])

    let arr = [1,2,3,4,5,6,7]
    return (
        <div className="main-container">
            {   showLoading ? <ContainerLoading/> : 
                    listGallery && listGallery.length && listGallery.map((list,index) => {
                        if(list.sectionType === "banner"){
                            return (
                                <Gallery gallery={list.items} key={index}/>
                            )
                        }
                        else if(list.sectionType === "playlist"){
                            return ( 
                                 <Playlist title={list.title} data={list.items} key={index}/>
                            )
                        }
                    })
            }
            { showLoading ? arr.map(item => <PlaylistLoading key={item}/>)  :
                    listPlaylist && listPlaylist.length && listPlaylist.map((list,index) => {
                        if(list.sectionType === "playlist" || list.sectionType === "genre_mood"){
                            return (
                                <Playlist title={list.title} data={list.items}  key={index}/>
                            )
                        }
                        else if(list.sectionType === "RTChart"){
                            return (
                                <PlaylistChart  key={index} chart={list.chart} items={list.items}/>
                            )
                        }
                        else return null;
                    })
            }
        </div>
    )
}

export default Home
