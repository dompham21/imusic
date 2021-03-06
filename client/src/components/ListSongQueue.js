import React from 'react'
import iconPlaying from '../assets/Images/icon-playing.gif'
import { BsFillPlayFill } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ListSongQueue(props) {
    const {thumbnail, title, artistsNames, alias} = props
    return (
        <div className="list song-data queue">
            <div className="song-left">
                <LazyLoadImage
                    effect="blur"
                    alt={alias}
                    height={40}
                    src={thumbnail} 
                    width={40} 
                />
                <div className="opacity"/>
                <div className="action-container">
                    <button 
                        className="action-btn-play"  
                    >
                        <BsFillPlayFill/>                                                
                    </button>
                    <button 
                        style={{display:"none"}}
                        className="action-btn-play"  
                    >
                        {/* <img src={iconPlaying}/> */}
                    </button>
                </div>
            </div>
            <div className="song-info">
                <span className="song-title">{title}</span>
                <span className="song-artists">{artistsNames}</span>
            </div>
      </div>
    )
}

export default ListSongQueue
