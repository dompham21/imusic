import React from 'react';
import './SideBar.css';
import { Row, Col , Menu } from 'antd';
import { AiOutlineLineChart, AiOutlineStar,AiOutlineYoutube,AiOutlineAppstoreAdd } from 'react-icons/ai'
import { IoMdMusicalNotes } from 'react-icons/io'
import {RiUserHeartLine} from 'react-icons/ri'
import { BiAlbum } from 'react-icons/bi';

function SideBar() {
    return (
        <Col id="side-bar">
            <Row className="side-bar-header">
                <img className="logo" alt="logo" src="https://res.cloudinary.com/dmriwkfll/image/upload/v1607765173/3461f142-c16c-4727-ae1c-b2bdd968e7b7_200x200_r0fhst.png"/>
            </Row>
            <Row>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    className="side-bar-menu"
                >            
                    <Menu.Item key="1"><BiAlbum/> <span>Khám phá</span></Menu.Item>
                    <Menu.Item key="2"><AiOutlineLineChart/><span>Bảng xếp hạng</span></Menu.Item>
                    <Menu.Item key="3"><IoMdMusicalNotes/><span>Mới phát hành</span></Menu.Item>
                    <Menu.Item key="4"><AiOutlineYoutube/><span>MV</span></Menu.Item>   
                    <Menu.Item key="5"><AiOutlineAppstoreAdd/><span>Chủ đề</span></Menu.Item>
                    <Menu.Item key="6"><AiOutlineStar/><span>Top 100</span></Menu.Item>
                    <Menu.Item key="7"><RiUserHeartLine/><span>Fanzone</span></Menu.Item>       
                </Menu>
                <div className="login-sidebar-container">
                    <div>Đăng nhập để khám phá những playlist dành riêng cho chính bạn.</div>
                    <button className="btn-login"><span>Đăng Nhập</span></button>
                </div>
            </Row>
        </Col>
    )
}

export default SideBar
