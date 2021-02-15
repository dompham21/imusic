import React, { useState, useRef } from 'react'
import iconPlaying from '../../assets/Images/icon-playing.gif'
import { BsFillPlayFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylistSong, pauseSongAction } from '../../actions/song_action';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PlaylistItem(props) {
    const { thumbnail, alias, title, encodeId} = props

    const dispatch = useDispatch();
    const refBtnPlaying = useRef([]);
    const refBtnPlay = useRef([]);
    const refOpacityBg = useRef([]);
    const currentEncodePlaylist = localStorage.getItem('imusic_queue').playlistEncodeId

    const handlePlaySong = (id) => {
        if(currentEncodePlaylist === id){
            
        }
        
        dispatch(fetchPlaylistSong(id,1))
            refBtnPlaying.current[id].style.display = "flex";
            refBtnPlaying.current[id].style.opacity = "1";
            refBtnPlay.current[id].style.display = "none";
            refOpacityBg.current[id].style.opacity = "1";
        

    } 
    
    const handleStopSong = (id) => {
        dispatch(pauseSongAction())

        refBtnPlaying.current[id].style.opacity = "0";
        refBtnPlay.current[id].style.display = "flex";
        refBtnPlaying.current[id].style.display = "none";
        refOpacityBg.current[id].style.opacity = "0";

    }
    return (
        <div className="carousel-item">
            <div className="carousel-card">
                <div className="card-wrapper">
                    <div className="card-container">
                        <LazyLoadImage
                            effect="blur"
                            alt={alias}
                            height={'100%'}
                            src={thumbnail} 
                            width={'100%'}
                            className="card-img" 
                        />
                        <div className="opacity" ref={el => (refOpacityBg.current[encodeId] = el)}/>
                        <div className="action-container">
                            <button 
                                className="action-btn-play"  
                                ref={el => (refBtnPlay.current[encodeId] = el)}
                                onClick={()=>handlePlaySong(encodeId)}
                            >
                                <BsFillPlayFill/>                                                
                            </button>
                            <button 
                                style={{display:"none"}}
                                className="action-btn-play"  
                                ref={el => (refBtnPlaying.current[encodeId] = el)}
                                onClick={()=>handleStopSong(encodeId)}
                            >
                                <img src={iconPlaying}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <h4 className="card-title">{title}</h4>
                </div>         
            </div>
        </div>   
    )
}

export default PlaylistItem
