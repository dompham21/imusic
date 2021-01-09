import React, { Suspense, useEffect } from 'react';
import { Row, Col } from 'antd';
import {Switch} from "react-router-dom";
import PublicRouter from '../../commons/Routers/PublicRouter';

import { ToastContainer } from 'react-toastify';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Home from '../Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Player = React.lazy(()=> import('../Player/Player'))
const DrawerQueue = React.lazy(()=> import('../DrawerQueue/DrawerQueue'))

function App() {
  useEffect(() => {

      !localStorage.getItem('imusic_queue') && localStorage.setItem('imusic_queue',JSON.stringify({
          currentEncodeId: "",
          encodeIds: [],
          recommend: {},
        }));

      !localStorage.getItem('imusic_player') && localStorage.setItem('imusic_player',JSON.stringify({
        volume: 1,
        beforeMuteVolume: 1
      }));
      !localStorage.getItem('imusic_currSongInfo') && localStorage.setItem('imusic_currSongInfo',JSON.stringify({}))


      !localStorage.getItem('imusic_hasPlayer') && localStorage.setItem('imusic_hasPlayer',false)
  }, [])
  return (
    <Suspense fallback={(<div></div>)}>
      <Row>
        <Col className="sidebar-layout">
          <PublicRouter exact path="*" component={SideBar}/>
        </Col>
        <Col className="main-layout">
          <div className="background"></div>
          <PublicRouter exact path="*" component={NavBar}/>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <DrawerQueue/>

          <PublicRouter exact path="/" component={Home}/>
        </Col>
        <Player/>
      </Row>         
    </Suspense>
  );
}

export default App;