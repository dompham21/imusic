import React, { useState,useEffect } from 'react';
import './Gallery.css';
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectCoverflow,Autoplay,Navigation} from 'swiper';
import { useDispatch } from 'react-redux'
import { getGallery } from '../../../_actions/playlist_action';
import { resizeImg } from '../../../util';



function Gallery() {
    const [galleryData, setGalleryData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const  fetchData = async () =>{
            try {
                let response = await dispatch(getGallery())
                if(response.payload.data){
                    setGalleryData(response.payload.data.items[0].items)
                }
            } catch (error) {
                console.log(error);
            }   
        }
        fetchData()
    }, [])

    SwiperCore.use([Navigation,EffectCoverflow,Autoplay]);
    return (
        <div>
            {
            galleryData && galleryData.length && 
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
                        delay:5000000,
                        disableOnInteraction:false
                    }}
                >
                    {
                        galleryData.map(gallery=>{
                            return (
                                <SwiperSlide className="swiper-slide swiper-slide-gallery" style={{backgroundImage:`url(${resizeImg(gallery.thumbnail,600,'16x9')})`}} key={gallery.encodeId}>
                                    <div className="card-content">
                                        <div className="title">{gallery.title}</div>
                                        <h3 className="subtitle">{gallery.description}</h3>
                                    </div>
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
