import React, { useState,useEffect } from 'react';
import './Gallery.css';
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectCoverflow,Autoplay,Navigation} from 'swiper';
import { useDispatch, useSelector } from 'react-redux'
import { LazyLoadComponent } from 'react-lazy-load-image-component';



function Gallery(props) {
   
    const { gallery } = props

    SwiperCore.use([Navigation,EffectCoverflow,Autoplay]);
    return (
        <div>
            {
                gallery && gallery.length && 
                <Swiper
                    navigation
                    className="swiper-container swiper-gallery"
                    effect= "coverflow"
                    grabCursor= {true}
                    centeredSlides= {true}
                    slidesPerView= "auto"
                    coverflowEffect= {{ 
                        rotate: 0,
                        stretch: 20,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay:5000,
                        disableOnInteraction:false
                    }}
                >
                    {
                        gallery.map(track=>{
                            return (
                                <SwiperSlide className="swiper-slide swiper-slide-gallery" style={{backgroundImage:`url(${track.banner})`}} key={track.encodeId}>
                                    <LazyLoadComponent>
                                        <div className="card-content">
                                            <div className="title">{track.title}</div>
                                            <h3 className="subtitle">{track.description}</h3>
                                        </div>
                                    </LazyLoadComponent>  
                                </SwiperSlide>
                            )
                        })
                    }   
                </Swiper>
        }
       
        </div>
        
        
        
        
    )
}

export default Gallery
