import React, { useState, useEffect } from 'react'
import { Drawer,Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { hideDrawerQueue, showDrawerQueue } from '../../actions/ui_action';
import InfiniteScroll from 'react-infinite-scroller';
import './DrawerQueue.css';
import { List, Avatar, Spin } from 'antd';
import ListSongQueue from '../../components/ListSongQueue';
import { getSongPlaylist } from '../../apis/song_api';

function DrawerQueue() {
    const toggeShowDrawerQueue = useSelector(state => state.ui.toggeShowDrawerQueue)
    const queues = useSelector(state => state.queue.queues)
    const currSong = useSelector(state => state.song.currSong)
    const suggestedSongs = useSelector(state => state.song.suggestedSongs);
    const currSongInfo = JSON.parse(localStorage.getItem('imusic_currSongInfo'));
    const {playlistEncodeId} = JSON.parse(localStorage.getItem('imusic_queue'));

    // const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const dispatch = useDispatch()
    const [toggleBtn,setToggleBtn] = useState(false);
    let nextPlaylistSongs =  queues.filter(i => i.encodeId !== currSong.encodeId)//remove current song 
 
    const handleInfiniteOnLoad = (page) => {
      console.log(playlistEncodeId)
      setLoading(true)
      if (nextPlaylistSongs.length > 100) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      // fetchData(res => {
      //   let a = data.concat(res.results);
      //   console.log(data);
      //   setData(a)
      //   setLoading(false);
      // });
    };
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
              {/* <div className="previous-song">
                <ListSongQueue 
                  thumbnail="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/8/e/c/4/8ec47ce61b4e4a84f566ecbdb3f898cd.jpg" 
                  artistsNames={'Dương Hoàng Yến, Quân A.P'} 
                  title={'Tự Nắm Tay Mình'}
                />
              </div> */}
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
                {/* {loading && hasMore && (
                  <div className="demo-loading-container">
                    <Spin/>
                  </div>
                )} */}
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
                {/* {loading && hasMore && (
                  <div className="demo-loading-container">
                    <Spin/>
                  </div>
                )} */}
              </List>
            </div>
          </div>
            
          </div>

        </Drawer>
    )
}

export default DrawerQueue
