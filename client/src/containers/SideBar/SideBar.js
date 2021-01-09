import React,{ useState }  from 'react';
import './SideBar.css';
import { Row, Col , Menu } from 'antd';
import { AiOutlineLineChart, AiOutlineStar,AiOutlineYoutube,AiOutlineAppstoreAdd,AiOutlineRight,AiOutlineLeft,AiOutlineSetting } from 'react-icons/ai'
import { IoMdMusicalNotes } from 'react-icons/io'
import { RiUserHeartLine } from 'react-icons/ri'
import { BiAlbum,BiUser } from 'react-icons/bi';
import SidebarLoading from '../../components/SidebarLoading/SidebarLoading';
import { useSelector } from 'react-redux';
import logo from '../../assets/Images/logo.png';
let siderBarArr = [
    {
        title: "Khám phá",
        key: 1,
        icon: <BiAlbum/>
    },
    {
        title: "Bảng xếp hạng",
        key: 2,
        icon: <AiOutlineLineChart/>
    },
    {
        title: "Mới phát hành",
        key: 3,
        icon: <IoMdMusicalNotes/>
    },
    {
        title: "MV",
        key: 4,
        icon: <AiOutlineYoutube/>
    },
    {
        title: "Chủ đề",
        key: 5,
        icon: <AiOutlineAppstoreAdd/>
    },
    {
        title: "Top 100",
        key: 6,
        icon: <AiOutlineStar/>
    },
    {
        title: "Fanzone",
        key: 7,
        icon: <RiUserHeartLine/>
    },
]

let headerArr = [
    // {
    //     title: "Đăng nhập",
    //     key: 8,
    //     icon: <BiUser/>
    // },
    {
        title: "Thông tin tài khoản",
        key: 9,
        icon: <BiUser/>
    },
    {
        title: "Cài đặt",
        key: 10,
        icon: <AiOutlineSetting/>
    },
]
function SideBar() {
    const showLoading = useSelector(state => state.ui.showLoading);
    const [showSidebar, setShowSidebar] = useState(false)

  
    return (
        <Col className={`side-bar${showSidebar?' is-expand':''}`}>
            <Row className="side-bar-header">
                <img className="logo" alt="logo" src={logo}/>
            </Row>
            <Row style={{height: "100%", paddingBottom: "150px"}}>
                <div className="scroll-container">
                    <div className="scroll-content">
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            className="side-bar-menu"
                        >   
                            <Menu.ItemGroup className="hide-menu" key="g1" title="">
                                { headerArr.map(menu => {
                                    return (
                                        showLoading ? 
                                            <Menu.Item key={menu.key}>  
                                                <SidebarLoading/>
                                            </Menu.Item>
                                        :
                                        <Menu.Item key={menu.key}>{menu.icon}<span>{menu.title}</span></Menu.Item>
                                    )
                                })}  
                            </Menu.ItemGroup> 
                            <Menu.ItemGroup key="g2" title="Imusic">
                                { siderBarArr.map(menu => {
                                    return (
                                        showLoading ? 
                                            <Menu.Item key={menu.key}>  
                                                <SidebarLoading/>
                                            </Menu.Item>
                                        :
                                        <Menu.Item key={menu.key}>{menu.icon}<span>{menu.title}</span></Menu.Item>
                                    )
                                })} 
                            </Menu.ItemGroup> 
                        </Menu>
                        <div className="login-sidebar-container">
                            <div>Đăng nhập để khám phá những playlist dành riêng cho chính bạn.</div>
                            <button className="btn-login"><span>Đăng Nhập</span></button>
                        </div>
                        <div className="wapper-btn-center-right">
                            <button className="btn-circle btn-expand" onClick={()=>setShowSidebar(!showSidebar)}>
                                {   !showSidebar ? <AiOutlineRight/> : <AiOutlineLeft/>  }
                            </button>
                        </div>
                    </div>
                </div>
            </Row>
            
        </Col>
    )
}

export default SideBar
