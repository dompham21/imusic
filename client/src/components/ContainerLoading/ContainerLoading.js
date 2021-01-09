import React from 'react'
import Skeleton from 'react-loading-skeleton';
import './ContainerLoading.css'
function ContainerLoading() {
    return (
        <div className="container-banner-loading">
            <Skeleton style={{paddingBottom: "68%"}} />
            <Skeleton style={{paddingBottom: "56%"}} />
            <Skeleton style={{paddingBottom: "68%"}}/>
        </div>
    )
}

export default ContainerLoading
