import React from 'react'
import Skeleton from 'react-loading-skeleton';
import './sidebarLoading.css';
function SidebarLoading() {
    return (
        <div className="wrapper-loading side-bar-loading">
            <div className="media-left-loading">
                <Skeleton circle={true} height={27} width={27}/>
            </div>
            <div className="media-content-loading">
                <Skeleton height={17}/>
            </div>      
        </div>
    )
}

export default SidebarLoading
