import React, { Suspense } from 'react';
import './App.css';
import {Switch} from "react-router-dom";
import { Row, Col } from 'antd';
import PublicRouter from './PublicRouter';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import Home from './Components/Home/Home';
import Gallery from './Components/Home/Gallery/Gallery';
import Player from './Components/Player/Player';
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Row>
        <Col className="sidebar-layout">
          <PublicRouter exact path="*" component={SideBar}/>
        </Col>
        <Col className="main-layout">
          <div className="background"></div>
          <PublicRouter exact path="*" component={NavBar}/>
          <PublicRouter exact path="/" component={Home}/>
        </Col>
        {/* <Player/> */}
      </Row>
      <Switch>
          <PublicRouter exact path="/test" component={Gallery}/>
      </Switch>
    </Suspense>
  );
}

export default App;