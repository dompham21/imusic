import React, { useState,useEffect,useRef } from 'react'
import './Playlist.css'
import { BsFillPlayFill } from 'react-icons/bs';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import { useDispatch,useSelector } from 'react-redux'
import iconPlaying from '../../assets/Images/icon-playing.gif'
import { fetchPlaylistSong,pauseSongAction } from '../../actions/song_action';
function Playlist(props) {
    const {title, data} = props;
    const isPlaying = useSelector(state => state.song.isPlaying)

    const dispatch = useDispatch();
    // const [playing, setPlaying] = useState(false)
    SwiperCore.use([Navigation]);
    const refBtnPlaying = useRef([]);
    const refBtnPlay = useRef([]);
    const refOpacityBg = useRef([]);

    const currentEncodePlaylist = localStorage.getItem('imusic_queue').playlistEncodeId

    const handlePlaySong = (id) => {
        console.log(id);
        dispatch(fetchPlaylistSong(id,1))
            // refBtnPlaying.current[id].style.display = "flex";
            // refBtnPlaying.current[id].style.opacity = "1";
            // refBtnPlay.current[id].style.display = "none";
            // refOpacityBg.current[id].style.opacity = "1";
        

    } 

    const handleStopSong = (id) => {
        dispatch(pauseSongAction())

        // refBtnPlaying.current[id].style.opacity = "0";
        // refBtnPlay.current[id].style.display = "flex";
        // refBtnPlaying.current[id].style.display = "none";
        // refOpacityBg.current[id].style.opacity = "0";

    }

 return (
        <section className="playlist-section">
            <div className="container">
                <h3 className="title" >{title}</h3>
                <div className="carousel-wrapper">
                    { data && data.length &&  
                        <Swiper
                        className="swiper-container swiper-playlist"
                        slidesPerGroup="6"
                        slidesPerView="6"
                        spaceBetween={30}
                        navigation={data.length <=6 ? false : true}
                        allowTouchMove={false}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            480: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                spaceBetween: 24
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 24
                            },
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 4,
                              slidesPerGroup: 4,
                              spaceBetween: 24
                            },
                            991: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                                spaceBetween: 24
                            },
                            1199: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 30
                            }
                        }}
                    >
                        {data.map(track => {
                        return (
                           <SwiperSlide className="swiper-slide swiper-slide-playlist" key={track.encodeId}>
                            <div className="carousel-item">
                                <div className="carousel-card">
                                    <div className="card-wrapper">
                                        <div className="card-container">
                                            <img className="card-img" src={track.thumbnail} alt={track.alias} title={track.title}></img>
                                            <div className="opacity" ref={el => (refOpacityBg.current[track.encodeId] = el)}/>
                                            <div className="action-container">
                                                <button 
                                                    className="action-btn-play"  
                                                    ref={el => (refBtnPlay.current[track.encodeId] = el)}
                                                    onClick={()=>handlePlaySong(track.encodeId)}
                                                >
                                                    <BsFillPlayFill/>                                                
                                                </button>
                                                <button 
                                                    style={{display:"none"}}
                                                    className="action-btn-play"  
                                                    ref={el => (refBtnPlaying.current[track.encodeId] = el)}
                                                    onClick={()=>handleStopSong(track.encodeId)}
                                                >
                                                    <img src={iconPlaying}/>
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
                    } 
                </div>
            </div>
        </section>
    )
}

export default Playlist
