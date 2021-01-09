import React,{ useRef,useState, useEffect } from 'react';
import './Player.css';
import { BsMusicNoteBeamed,BsMusicNote } from 'react-icons/bs';
import { FiVolume1,FiVolume2,FiVolumeX } from 'react-icons/fi'
import { BsFillSkipEndFill,BsFillSkipStartFill,BsFillPlayFill,BsMusicNoteList,BsPauseFill } from 'react-icons/bs';
import {  formatTimeAudio } from '../../commons/util';
import { useSelector,useDispatch } from 'react-redux';
import {  showDrawerQueue } from '../../actions/ui_action';
import TimeSlider from "react-input-slider";
import { fetchSongSuggested, pauseSongAction, togglePausePlaySongAction, fetchSong } from '../../actions/song_action';


function Player() {
    const urlSongStorage = JSON.parse(localStorage.getItem('imusic_urlSong'))
    const hasPlayer = localStorage.getItem('imusic_hasPlayer');
    const currSongInfo = JSON.parse(localStorage.getItem('imusic_currSongInfo'));
    const queues = useSelector(state => state.queue.queues)

    const isPlaying = useSelector(state => state.song.isPlaying)
    const [currentTime,setCurrentTime] = useState(0);
    const [volume,setVolume] = useState(1);
    const urlSongRedux = useSelector(state => state.song.urlSong)
    const idCurrSong = useSelector(state => state.song.idSong)
    const toggeShowDrawerQueue = useSelector(state => state.ui.toggeShowDrawerQueue)
    const [duration,setDuration] = useState(0);
    const dispatch = useDispatch()

    const audioRef = useRef(null)
    let urlSong = urlSongStorage || urlSongRedux
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
         } else {
            audioRef.current.pause();
        }
    }, [isPlaying])

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlaying) audioRef.current.play();
    };

    const handleTimeSliderChange = ({ x }) => {
        if(isPlaying){
            audioRef.current.currentTime = x;
            setCurrentTime(x);
        }
    };

    const handleTimeSliderVolume = ({x}) => {
        audioRef.current.volume = x;
        setVolume(x);
        
    }

    const handlePausePlayClick = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        dispatch(togglePausePlaySongAction());
      };

    const handleShowDrawerQueue = () => {
        if(!toggeShowDrawerQueue){
            dispatch(fetchSongSuggested(idCurrSong || currSongInfo.encodeId));
        }
        dispatch(showDrawerQueue());
    }
    const handleOffVolume = () => {
        localStorage.setItem('imusic-volume',JSON.stringify({
            beforeMuteVolume: audioRef.current.volume
        }));
        audioRef.current.volume = 0;
        setVolume(0);
    }
    const handleOnVolume = () => {
        let beforeVolume = JSON.parse(localStorage.getItem('imusic-volume')).beforeMuteVolume
        audioRef.current.volume  = beforeVolume;
        setVolume(beforeVolume)
    }
    const handleQualitySource = () => {
        if(urlSong){
            if( (urlSong['320'] !== 'VIP') || !urlSong['320']){
                return urlSong['320'];
            }
            else {
                return urlSong['128'];
            }
        }
    }

    const playPrevOrNextSong = (prevOrnext) => {
        console.log(prevOrnext)
        const prevOrNextSong = findSong(prevOrnext);

        if (!prevOrNextSong) return;
        dispatch(fetchSong(prevOrNextSong));
        
    }

    const findSong = (prevOrnext) => {
        let index = queues.map(i => i.encodeId).indexOf(idCurrSong)

        if(index === -1) return null;
        let length = queues.length

        switch (prevOrnext) {
            case "next":
                if(index === length-1){
                    return null;
                }
                return queues[index + 1] ;
            case "prev":
               if(index === 0){
                   return null;
               }
                // play the last song in the queue if the index is 0 otherwise play the prev song
                return queues[index - 1];
            default:
                return null;
        }
    }
    const handleEnded = () => {

    }
    return (
        <div className="player-controls" style={{display: (hasPlayer === "true") || isPlaying ? "unset":"none"}}>
            <div className="player-container">
            <audio
                onEnded={handleEnded}
                ref={audioRef}
                src={handleQualitySource()}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={() => dispatch(pauseSongAction())}
            />
                <div className="player-controls-left">
                    <div className="media-animate">
                        <div className="media-left">
                            <div className="thumbnail-wrapper">
                                <div className="thumbnail">
                                    <img 
                                        className="img-rounded" 
                                        src={currSongInfo && currSongInfo.thumbnail} 
                                        alt={currSongInfo && currSongInfo.alias} 
                                        style={{animationPlayState: isPlaying ? "running" : "paused" }}
                                    />
                                </div>
                                <div className="note note1" style={{animationPlayState: isPlaying ? "running" : "paused" }}><BsMusicNoteBeamed/></div>
                                <div className="note note2" style={{animationPlayState: isPlaying ? "running" : "paused" }}><BsMusicNote/></div>
                                <div className="note note3" style={{animationPlayState: isPlaying ? "running" : "paused" }}><BsMusicNoteBeamed/></div>
                                <div className="note note4" style={{animationPlayState: isPlaying ? "running" : "paused" }}><BsMusicNote/></div>
                            </div>
                        </div>
                        <div className="media-content">
                            <div className="title">{currSongInfo && currSongInfo.title}</div>
                            <h3 className="subtitle">{currSongInfo && currSongInfo.artistsNames}</h3>
                        </div>
                        <div className="media-right"></div>
                    </div>
                </div>
                <div className="player-controls-bar ">
                    <div className="player-action">
                        <button className="action-btn-play btn-skip-pre"
                            onClick={()=>playPrevOrNextSong("prev")}
                        >
                            <BsFillSkipStartFill/>
                        </button>
                        <button className="action-btn-play btn-player" 
                            style={{display:isPlaying ? "none" : "flex"}}
                            onClick={()=>handlePausePlayClick()}
                        >
                            <BsFillPlayFill/>
                        </button>
                        <button className="action-btn-play btn-player" 
                            style={{display:isPlaying ? "flex" : "none"}}
                            onClick={()=>handlePausePlayClick()}
                        >
                            <BsPauseFill/>
                        </button>
                        <button className="action-btn-play btn-skip-next"
                            onClick={()=>playPrevOrNextSong("next")}
                        >
                            <BsFillSkipEndFill/>
                        </button>
                    </div>
                    <div className="progress-bar">
                        <div className="time left">{formatTimeAudio(currentTime)}</div>
                        <div className="time-slider-bar">
                            <TimeSlider
                                axis="x"
                                xmax={duration}
                                x={currentTime}
                                onChange={handleTimeSliderChange}
                                styles={{
                                    track: {
                                        backgroundColor: "#ffffff",
                                        height: "3px",
                                    },
                                    active: {
                                        backgroundColor: "#333",
                                        height: "2px",
                                    },
                                    thumb: {
                                        marginTop: "-3px",
                                        width: "8px",
                                        height: "8px",
                                        backgroundColor: "#333",
                                        borderRadius: 0,
                                    },
                                }}
                            />
                        </div>
                        <div className="time right">{formatTimeAudio(duration)}</div>
                    </div>
                </div>
                <div className="player-controls-right">
                    <div className="volume">
                        <button className="action-btn-play btn-volume" style={{display:volume<0.5&&volume>0 ? "flex" : "none"}} onClick={handleOffVolume}><FiVolume1/></button>
                        <button className="action-btn-play btn-volume" style={{display:volume>=0.5 ? "flex" : "none"}} onClick={handleOffVolume}><FiVolume2/></button>
                        <button className="action-btn-play btn-volume" style={{display:volume==0 ? "flex" : "none"}} onClick={handleOnVolume}><FiVolumeX/></button>
                        <div className="time-slider-bar">
                            <TimeSlider
                                xstep={0.01}
                                axis="x"
                                xmax={1}
                                x={volume}
                                xmin={0}
                                onChange={handleTimeSliderVolume}
                                styles={{
                                    track: {
                                        backgroundColor: "#ffffff",
                                        height: "3px",
                                    },
                                    active: {
                                        backgroundColor: "#333",
                                        height: "2px",
                                    },
                                    thumb: {
                                        marginTop: "-3px",
                                        width: "8px",
                                        height: "8px",
                                        backgroundColor: "#333",
                                        borderRadius: 0,
                                    },
                                }}
                            />
                        </div>       
                    </div>
                    <div className="divide">
                        
                    </div>
                    <div className="list-music" onClick={handleShowDrawerQueue}>
                        <button className="action-btn-play btn-list-music"><BsMusicNoteList/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
