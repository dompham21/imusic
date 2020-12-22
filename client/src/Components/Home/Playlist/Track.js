import React from 'react'
import {  SwiperSlide  } from 'swiper/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { resizeImg } from '../../../util';


function Track(props) {
    const { title,id,artists,artists_names,alias,streaming_status,thumbnail } = props;
    return (
        <SwiperSlide className="swiper-slide swiper-slide-playlist" >
            <div className="carousel-item">
                <div className="carousel-card">
                    <div className="card-wrapper">
                        <div className="card-container">
                            <img className="card-img" src={resizeImg(thumbnail)} alt={alias} title={title}></img>
                            <div className="opacity"></div>
                            <div className="action-container">
                                <button className="action-btn-play">
                                    <BsFillPlayFill/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">{title}</h4>
                    </div>         
                </div>
            </div>   
        </SwiperSlide>      
    )
}

export default Track
