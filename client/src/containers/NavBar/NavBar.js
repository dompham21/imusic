import React,{useEffect,useState} from 'react';
import './NavBar.css';
import { Row, Col, Input,Tooltip } from 'antd';
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io'
import avatar from '../../assets/Images/avatar-default.jpeg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
function NavBar() {
    const [sticky, setSticky] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>10){
                setSticky(true);
            }
            else setSticky(false);
        })
        // return ()=>{
        //     window.removeEventListener("scroll");
        // }
    },[])
    return (
        <Row className={`header ${sticky &&'is-sticky'}`}>
            <Col className="header-left">
                <Input
                    className="search"
                    placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV…"
                    prefix={<AiOutlineSearch className="site-form-item-icon" />}  
                />
            </Col>
            <Col className="header-right">
                <ul>
                    <Tooltip title="Thông báo" placement="bottom" overlayStyle={{fontSize:'12px'}}>
                        <li className="btn-circle">
                            <IoMdNotificationsOutline/>
                        </li>
                    </Tooltip>
                    <Tooltip title="Cài đặt" placement="bottom" overlayStyle={{fontSize:'12px'}}>
                        <li className="btn-circle">                        
                            <AiOutlineSetting/>                       
                        </li>
                    </Tooltip>
                    <Tooltip title="Thông tin tài khoản" placement="bottom" overlayStyle={{fontSize:'12px'}}>
                        <li className="btn-circle avt-img">
                            <LazyLoadImage
                                effect="blur"
                                alt='avt'
                                height={'100%'}
                                src={avatar} 
                                width={'100%'} 
                            /> 
                        </li>
                    </Tooltip>
                    <li>
                        <button className="btn-login login">Đăng nhập</button>
                    </li>
                </ul>
            </Col>     
        </Row>
    )
}

export default NavBar
