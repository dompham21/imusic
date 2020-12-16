import React, { useState } from 'react'
import './Playlist.css'
import { BsFillPlayFill } from 'react-icons/bs';
function Playlist(props) {
    const [animation, setAnimation] = useState(false)
    const {title} = props;
    const handleBtnPlay = (e) => {
        setAnimation(true)
        document.documentElement.style.setProperty("--width-bottom",(window.innerWidth - e.clientX - 50) + 'px');
        document.documentElement.style.setProperty("--height-bottom", (window.innerHeight - e.clientY - 50) + 'px');

        setTimeout(()=> {
            setAnimation(false)
        },2000)
    }

    return (
        <section className="playlist-section">
            <div className="container">
                <h3 className="title" >{title}</h3>
                <div className="carousel-wrapper">
                    <div className="carousel-item">
                        <div className="carousel-card">
                            <div className="card-wrapper">
                                <div className="card-container">
                                    <img className="card-img" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                    <div className="opacity"></div>
                                    <div className="action-container">
                                        <button className="action-btn-play" onClick={handleBtnPlay}>
                                            <BsFillPlayFill/>
                                        </button>
                                    </div>
                                </div>
                                <div className="animation-action-click" style={{display: animation && 'block', animationPlayState:animation && "running"  }}>
                                    <img className="card-img img-animation" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                </div>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Top 100 Nhạc Hàn Quốc Hay Nhất</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-card">
                            <div className="card-wrapper">
                                <div className="card-container">
                                    <img className="card-img" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                    <div className="opacity"></div>
                                    <div className="action-container">
                                        <button className="action-btn-play" onClick={handleBtnPlay}>
                                            <BsFillPlayFill/>
                                        </button>
                                    </div>
                                </div>
                                <div className="animation-action-click" style={{display: animation && 'block', animationPlayState:animation && "running"  }}>
                                    <img className="card-img img-animation" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                </div>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Top 100 Nhạc Hàn Quốc Hay Nhất</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-card">
                            <div className="card-wrapper">
                                <div className="card-container">
                                    <img className="card-img" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                    <div className="opacity"></div>
                                    <div className="action-container">
                                        <button className="action-btn-play" onClick={handleBtnPlay}>
                                            <BsFillPlayFill/>
                                        </button>
                                    </div>
                                </div>
                                <div className="animation-action-click" style={{display: animation && 'block', animationPlayState:animation && "running"  }}>
                                    <img className="card-img img-animation" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                </div>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Top 100 Nhạc Hàn Quốc Hay Nhất</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-card">
                            <div className="card-wrapper">
                                <div className="card-container">
                                    <img className="card-img" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                    <div className="opacity"></div>
                                    <div className="action-container">
                                        <button className="action-btn-play" onClick={handleBtnPlay}>
                                            <BsFillPlayFill/>
                                        </button>
                                    </div>
                                </div>
                                <div className="animation-action-click" style={{display: animation && 'block', animationPlayState:animation && "running"  }}>
                                    <img className="card-img img-animation" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                </div>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Top 100 Nhạc Hàn Quốc Hay Nhất</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-card">
                            <div className="card-wrapper">
                                <div className="card-container">
                                    <img className="card-img" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                    <div className="opacity"></div>
                                    <div className="action-container">
                                        <button className="action-btn-play" onClick={handleBtnPlay}>
                                            <BsFillPlayFill/>
                                        </button>
                                    </div>
                                </div>
                                <div className="animation-action-click" style={{display: animation && 'block', animationPlayState:animation && "running"  }}>
                                    <img className="card-img img-animation" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                </div>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Top 100 Nhạc Hàn Quốc Hay Nhất</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-card">
                            <div className="card-wrapper">
                                <div className="card-container">
                                    <img className="card-img" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                    <div className="opacity"></div>
                                    <div className="action-container">
                                        <button className="action-btn-play" onClick={handleBtnPlay}>
                                            <BsFillPlayFill/>
                                        </button>
                                    </div>
                                </div>
                                <div className="animation-action-click" style={{display: animation && 'block', animationPlayState:animation && "running"  }}>
                                    <img className="card-img img-animation" src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg"></img>
                                </div>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">Top 100 Nhạc Hàn Quốc Hay Nhất</h4>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Playlist
