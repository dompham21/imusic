import React from 'react';
import './Gallery.css';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, {EffectCoverflow,Autoplay,Navigation} from 'swiper';



function Gallery() {
    SwiperCore.use([Navigation,EffectCoverflow,Autoplay]);

    return (
        <Swiper
            navigation
            className="swiper-container"
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
            <SwiperSlide className="swiper-slide" style={{backgroundImage:"url(https://photo-zmp3.zadn.vn/banner/4/b/c/f/4bcf92658596deacb9a3122de440260c.jpg)"}}>
                <div className="card-content">
                    <div className="title">Chiều Thu Họa Bóng Nàng</div>
                    <h3 className="subtitle">Lời tâm sự của anh chàng lụy tình DatKaa khiến người nghe không khỏi chạnh lòng</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" style={{backgroundImage:"url(https://photo-zmp3.zadn.vn/banner/5/6/7/1/5671980f5103a81415a69704087254ab.jpg)"}}>
            <div className="card-content">
                    <div className="title">Chiều Thu Họa Bóng Nàng</div>
                    <h3 className="subtitle">Lời tâm sự của anh chàng lụy tình DatKaa khiến người nghe không khỏi chạnh lòng</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" style={{backgroundImage:"url(https://res.cloudinary.com/dmriwkfll/image/upload/v1606453689/ldqrdtobbetoxasja2go.jpg)"}}>
            <div className="card-content">
                    <div className="title">Chiều Thu Họa Bóng Nàng</div>
                    <h3 className="subtitle">Lời tâm sự của anh chàng lụy tình DatKaa khiến người nghe không khỏi chạnh lòng</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" style={{backgroundImage:"url(https://res.cloudinary.com/dmriwkfll/image/upload/v1606453689/ldqrdtobbetoxasja2go.jpg)"}}>
            <div className="card-content">
                    <div className="title">Chiều Thu Họa Bóng Nàng</div>
                    <h3 className="subtitle">Lời tâm sự của anh chàng lụy tình DatKaa khiến người nghe không khỏi chạnh lòng</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" style={{backgroundImage:"url(https://res.cloudinary.com/dmriwkfll/image/upload/v1606453689/ldqrdtobbetoxasja2go.jpg)"}}>
            <div className="card-content">
                    <div className="title">Chiều Thu Họa Bóng Nàng</div>
                    <h3 className="subtitle">Lời tâm sự của anh chàng lụy tình DatKaa khiến người nghe không khỏi chạnh lòng</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" style={{backgroundImage:"url(https://res.cloudinary.com/dmriwkfll/image/upload/v1606453689/ldqrdtobbetoxasja2go.jpg)"}}>
            <div className="card-content">
                    <div className="title">Chiều Thu Họa Bóng Nàng</div>
                    <h3 className="subtitle">Lời tâm sự của anh chàng lụy tình DatKaa khiến người nghe không khỏi chạnh lòng</h3>
                </div>
            </SwiperSlide>
         
        </Swiper>
        
        
    )
}

export default Gallery
