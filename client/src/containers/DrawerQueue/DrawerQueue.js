import React, { useState, useEffect } from 'react'
import { Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { showDrawerQueue } from '../../actions/ui_action';
import './DrawerQueue.css';
import { List } from 'antd';
import ListSongQueue from '../../components/ListSongQueue';


function DrawerQueue() {
    const toggeShowDrawerQueue = useSelector(state => state.ui.toggeShowDrawerQueue)
    let queues = JSON.parse(localStorage.getItem('imusic_queue')).itemsMap
    let suggestedSongs = useSelector(state => state.song.suggestedSongs);

    let { recommend } = JSON.parse(localStorage.getItem('imusic_queue')) 
    let queue = JSON.parse(localStorage.getItem('imusic_queue'));
    const currSong = useSelector(state => state.song.currSong)
    const currSongInfo = JSON.parse(localStorage.getItem('imusic_currSongInfo'));
    let { preSong } = JSON.parse(localStorage.getItem('imusic_queue'));
    preSong =  preSong ? preSong.filter(i=>i.encodeId !== currSongInfo.encodeId) : '';
    queues = queues.filter(i=>i.encodeId !== currSongInfo.encodeId);
    
    
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const dispatch = useDispatch()
    const [toggleBtn,setToggleBtn] = useState(false);

    let nextPlaylistSongs = queues
    
  
    const onClose = () => {
      dispatch(showDrawerQueue())
    };
    
    return (
        <Drawer
          width={320}
          closable={false}
          maskClosable={true}
          onClose={onClose}
          zIndex={7}
          visible={toggeShowDrawerQueue}
          mask={true}
          className="drawer-queue-container"
        > 
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="drawer-queue-header">
              <div className={`drawer-queue-header-right${toggleBtn ? '' : ' is-active'}`} onClick={()=>setToggleBtn(false)}>
                <span>Danh sách phát</span>
              </div> 
              <div className={`drawer-queue-header-left${toggleBtn ? ' is-active' : ''}`} onClick={()=>setToggleBtn(true)}>
                <span>Nghe gần đây</span>
              </div>
            </div>
          </div>
          <div className="drawer-queue-scroll">
          <div className="scroll-container">
            <div className="scroll-content">
      
              <List
                style={{display: preSong && preSong.length ? "unset" : "none"}}
                dataSource={preSong}
                renderItem={item => (
                  <List.Item key={item.encodeId} className="previous-song">
                      <ListSongQueue thumbnail={item.thumbnail} alias={item.alias} artistsNames={item.artistsNames} title={item.title} />
                  </List.Item>
                )}
              >
              </List>
              <div className="current-song">
                <ListSongQueue 
                  thumbnail={currSong.thumbnail || currSongInfo.thumbnail}
                  artistsNames={currSong.artistsNames || currSongInfo.artistsNames} 
                  title={currSong.title || currSongInfo.title}
                />
              </div>
              <div className="title-next-song" style={{display:nextPlaylistSongs.length? "unset": "none"}}>
                <div className="title">Tiếp theo</div>
                <div className="sub-title">Từ playlist <span>Top 100 Pop Âu Mỹ Hay Nhất</span></div>
              </div>
             
              <List
                style={{display:nextPlaylistSongs.length? "unset": "none"}}
                dataSource={nextPlaylistSongs}
                renderItem={item => (
                  <List.Item key={item.encodeId} className="next-song">
                      <ListSongQueue thumbnail={item.thumbnail} alias={item.alias} artistsNames={item.artistsNames} title={item.title} />
                  </List.Item>
                )}
              >
              </List>
             
              <div className="title-next-song">
                <div className="title">Tiếp theo</div>
                <div className="sub-title">Từ gợi ý <span>{currSong.title || currSongInfo.title}</span></div>
              </div>
              <List
                dataSource={suggestedSongs}
                renderItem={item => (
                  <List.Item key={item.encodeId} className="next-song">
                      <ListSongQueue thumbnail={item.thumbnail} alias={item.alias} artistsNames={item.artistsNames} title={item.title} />
                  </List.Item>
                )}
              >
              </List>
            </div>
          </div>
            
          </div>

        </Drawer>
    )
}

export default DrawerQueue
