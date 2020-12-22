import React, { useState,useEffect } from 'react'
import './Playlist.css'
import { BsFillPlayFill } from 'react-icons/bs';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import { useDispatch } from 'react-redux'
import Track from './Track.js';

function Playlist(props) {
    const {title, data, sectionType} = props;

    SwiperCore.use([Navigation]);
    const dispatch = useDispatch()
    console.log(data);
    return (
        <section className="playlist-section">
            <div className="container">
                <h3 className="title" >{title}</h3>
                <div className="carousel-wrapper">
                    <Swiper
                        className="swiper-container swiper-playlist"
                        slidesPerGroup="6"
                        slidesPerView="6"
                        spaceBetween={30}
                        navigation
                        allowTouchMove={false}
                    >
                        {data.map(track => {
                        return (
                           <SwiperSlide className="swiper-slide swiper-slide-playlist" key={track.id}>
                            <div className="carousel-item">
                                <div className="carousel-card">
                                    <div className="card-wrapper">
                                        <div className="card-container">
                                            <img className="card-img" src={track.thumbnail} alt={track.alias} title={track.title}></img>
                                            <div className="opacity"></div>
                                            <div className="action-container">
                                                <button className="action-btn-play">
                                                    <BsFillPlayFill/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">{track.title}</h4>
                                    </div>         
                                </div>
                            </div>   
                        </SwiperSlide>  
                        ) } 
                        )}                     
                    </Swiper>    
                </div>
            </div>
        </section>
    )
}

export default Playlist
