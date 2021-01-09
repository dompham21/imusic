import React from 'react'
import './PlaylistLoading.css'
import Skeleton from 'react-loading-skeleton';


function PlaylistLoading() {
    let arr = [1,2,3,4,5,6]
    return (
        <section className="playlist-section">
            <div className="container">
                <h3 className="title" >        
                    <Skeleton width={300} height={30}/>
                </h3>
                <div className="carousel-wrapper">
                    {
                        arr.map(item => {
                            return (
                                <div className="carousel-item top100" key={item}>
                                    <div className="carousel-card">
                                        <div className="card-wrapper">
                                            <div className="card-container">
                                                <Skeleton style={{paddingBottom: "100%",width: "100%"}}/>                                       
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <Skeleton style={{width: "100%"}}/> 
                                            <Skeleton style={{width: "60%"}}/>     
                                        </div>         
                                    </div>
                                </div>   
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default PlaylistLoading
