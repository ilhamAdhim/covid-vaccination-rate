import React, { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import GlobalCases from '../pages/GlobalCases';
import TipsKesehatan from '../pages/TipsKesehatan';
import LandingPage from '../pages/LandingPage';
import DetailProvince from '../pages/DetailProvince';

import '../styles/navbar.css'
import { Col, Row } from 'antd';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { MenuUnfoldOutlined, UpOutlined } from '@ant-design/icons';

import logo from '../assets/logo.png'

const routes = [
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '/tips-kesehatan',
        name: 'Tips Kesehatan'
    },
    {
        link: '/global',
        name: 'Global'
    }
]

const Navbar = props => {
    const [toggle, setToggle] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (width < 641)
            setIsSmallScreen(true)
        else
            setIsSmallScreen(false)
    }, [width]);

    const onToggle = () => setToggle(prevToggleVal => !prevToggleVal)

    return (
        <Router>
            <Row justify="space-around" gutter={20} style={{ marginBottom: '2em' }} id="navbar">
                <Col span={8}>
                    <img src={logo} alt="lalaa" style={{ width: 150}} />
                </Col>
                {isSmallScreen &&
                    <Col span={16} className="btn-container">
                        <button onClick={onToggle} className="btn-small-screen">
                            {toggle ?
                                <UpOutlined />
                                :
                                <MenuUnfoldOutlined />
                            }
                        </button>
                    </Col>
                }

                <Col span={isSmallScreen ? 24 : 8}
                    style={{
                        display:
                            isSmallScreen ?
                                (toggle ? 'block' : 'none')
                                : 'inline-block', paddingTop: 'inherit'
                    }}>

                    <Row justify={isSmallScreen ? "center" : "space-around"}>
                        {routes.map(item =>
                            <Col span={isSmallScreen ? 24 : 8} style={{  display: 'inline-flex', justifyContent: 'center' }}>
                                <Link to={item.link}>
                                    <p className="menu">{item.name}</p>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
            <Routes>
                <Route path="/" element={<LandingPage />}>
                </Route>
                <Route path="/tips-kesehatan" element={<TipsKesehatan />}>
                </Route>
                <Route path="/global" element={<GlobalCases />}>
                </Route>
                <Route path="/province/:name" element={<DetailProvince />}>
                </Route>
            </Routes>
        </Router>
    );
};




export default Navbar;