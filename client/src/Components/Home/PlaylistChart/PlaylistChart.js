import React from 'react'
import Chart from './Chart/Chart';
import './PlaylistChart.css'
import { Row, Col } from 'antd';
import ChartList from './ChartList';
function PlaylistChart(props) {

    return (
        <div className="chart-container">
            <div className="bg-img"></div>
            <div className="bg-gradient"></div>
            <div className="chart-header">Bảng Xếp Hạng</div>
            <Row className="chart-row">
                <Col className="chart-col-list">
                    <ChartList {...props}/>
                    <div className="chart-btn-center">
                        <button className="btn-show-more">Xem top 100</button>
                    </div>
                </Col>
                <Col className="chart-col-line">
                    <Chart  {...props}/>
                </Col>
            </Row>    
        </div>
    )
}

export default PlaylistChart
