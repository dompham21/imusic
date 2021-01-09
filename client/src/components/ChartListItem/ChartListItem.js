import React from 'react'
import { getPercent } from '../../commons/util';

function ChartListItem(props) {
    const {items,chart} = props;
    let list  = items.slice(0,3);
    let arrPercent = getPercent(chart.items)
   
    return (
        <div className="chart-list">
            { list && list.length && list.map((track,index) => {
                return (
                    <div className="list song-data" key={track.encodeId}>
                        <div className="song-left">
                            <div className="ranking"><span className={`number${index+1}`}>{index + 1}</span></div>
                            <img src={track.thumbnail}  alt={track.alias}/>
                        </div>
                        <div className="song-info">
                            <span className="song-title">{track.title}</span>
                            <span className="song-artists">{track.artistsNames}</span>
                        </div>
                        <div className="song-right">{arrPercent[index]}%</div>
                    </div>
                )
                })   
            }
    </div>
    )
}

export default ChartListItem
