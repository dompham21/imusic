import React from 'react';
import './Player.css';
import { BsMusicNoteBeamed,BsMusicNote } from 'react-icons/bs';
import { Slider } from 'antd';
import { FiVolume2 } from 'react-icons/fi'
import { BsFillSkipEndFill,BsFillSkipStartFill,BsFillPlayFill,BsMusicNoteList } from 'react-icons/bs';
import { converMinToSecond } from '../../util';


function Player() {
    return (
        <div className="player-controls">
            <div className="player-container">
                <div className="player-controls-left">
                    <div className="media-animate">
                        <div className="media-left">
                            <div className="thumbnail-wrapper">
                                <div className="thumbnail">
                                    <img className="img-rounded" src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg"/>
                                </div>
                                <div className="note note1"><BsMusicNoteBeamed/></div>
                                <div className="note note2"><BsMusicNote/></div>
                                <div className="note note3"><BsMusicNoteBeamed/></div>
                                <div className="note note4"><BsMusicNote/></div>
                            </div>
                        </div>
                        <div className="media-content">
                            <div className="title">Đánh Mất Em</div>
                            <h3 className="subtitle">Quang Đăng Trần</h3>
                        </div>
                        <div className="media-right"></div>
                    </div>
                </div>
                <div className="player-controls-bar">
                    <div className="player-action">
                        <button className="action-btn-play btn-skip-pre">
                            <BsFillSkipStartFill/>
                        </button>
                        <button className="action-btn-play btn-player">
                            <BsFillPlayFill/>
                        </button>
                        <button className="action-btn-play btn-skip-next">
                            <BsFillSkipEndFill/>
                        </button>
                    </div>
                    <div className="progress-bar">
                        <div className="time left">01:21</div>
                        <Slider className="silder" defaultValue={converMinToSecond('01:21')/converMinToSecond('03:48')*100} tooltipVisible={false} />
                        <div className="time right">03:48</div>
                    </div>
                </div>
                <div className="player-controls-right">
                    <div className="volume">
                        <button className="action-btn-play btn-volume"><FiVolume2/></button>
                        <Slider  className="silder" defaultValue={100} tooltipVisible={false} />
                    </div>
                    <div className="divide">
                        
                    </div>
                    <div className="list-music">
                        <button className="action-btn-play btn-list-music"><BsMusicNoteList/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
