import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { BsFillPlayFill } from 'react-icons/bs';
import { truncate } from '../../../util';

function Top100() {
    const getGallery = useSelector(state => state.playlist.getGallerySuccess);
    let playlistTop;
    if(getGallery&&getGallery.data){
        playlistTop = getGallery.data.items[2].items
    }
    return (
        <section className="playlist-section">
            <div className="container">
                <h3 className="title" >Playlist Nghe Là Thích</h3>
                <div className="carousel-wrapper">
                    {
                        playlistTop && playlistTop.length && playlistTop.map(track => {
                            return (
                                <div className="carousel-item top100" key={track.encodeId}>
                                    <div className="carousel-card">
                                        <div className="card-wrapper">
                                            <div className="card-container">
                                                <img className="card-img" src={track.thumbnail} alt={track.title} title={track.title} ></img>
                                                <div className="opacity"></div>
                                                <div className="action-container">
                                                    <button className="action-btn-play">
                                                        <BsFillPlayFill/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">{track.title}</span>
                                        </div>         
                                    </div>
                                </div>   
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Top100
