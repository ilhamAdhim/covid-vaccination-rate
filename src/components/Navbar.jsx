import React from 'react';

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

const Navbar = props => {
    // TODO : Ini belum ada logonya

    return (
        <Router>
            <Row justify="space-around" style={{ marginBottom: '2em' }} id="navbar">
                <Col flex={2}>
                    Logo
                </Col>
                <Col flex={0.5}>
                    <Row justify="space-around">
                        <Col>
                            <Link to="/">
                                <p className="menu">Home</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/tips-kesehatan">
                                <p className="menu">Tips Kesehatan</p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/global">
                                <p className="menu">Global</p>
                            </Link>
                        </Col>
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