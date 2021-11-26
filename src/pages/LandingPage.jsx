import { Col, Divider, Row, Typography } from 'antd';
import React from 'react';
import HeaderJumbotron from '../components/HeaderJumbotron';
import SearchComponent from '../components/SearchComponent';
import Footer from '../components/Footer';
import CardList from '../components/CardList';

import { ReactComponent as CustomBlobSVG } from '../assets/custom-blob.svg';
import { ReactComponent as IndonesiaSVG } from '../assets/indonesia-map.svg';

import logo from '../assets/mockup-graph.png'
import '../styles/style.css'

const LandingPage = props => {
    return (
        <>
            <div className="landing-page">
                <HeaderJumbotron />

                <Divider style={{ justifyContent: 'center', color: '#ff725e', marginTop: '5em' }}> Statistics </Divider>
                <Row align="center">
                    <Typography.Title level={3}>
                        Corona Virus Overview
                    </Typography.Title>
                </Row>

                {/* Ini bagian map dan statistiknya */}
                <Row style={{ marginTop: '2em' }} >
                    <Col flex="2" sm={{ span: 12 }}>
                        <div style={{ position: 'absolute', marginLeft: '-10em', marginTop: '-4em' }}>
                            <CustomBlobSVG />
                        </div>
                        <IndonesiaSVG />

                    </Col>
                    <Col flex="2" sm={{ span: 12 }}> Lorem </Col>
                </Row>

                {/* Ini grafik kasus covid19 hari ini dan grafik prediksi vaksinasi COVID-19 */}
                <Row style={{ marginTop: '2em' }} >
                    <Col flex="1">
                        <Divider style={{ justifyContent: 'center' }}> Pantauan COVID-19 Hari Ini </Divider>
                        <img src={logo} alt="lalaa" width={600} />
                    </Col>
                    <Col flex="1">
                        <Divider style={{ justifyContent: 'center' }}> Prediksi Vaksinasi COVID-19 </Divider>
                        <img src={logo} alt="lalaa" width={600} />
                    </Col>
                </Row>
                <Divider style={{ justifyContent: 'center', color: '#ff725e', marginTop: '5em' }}> Info Rumah Sakit</Divider>
                <Row align="center">
                    <Typography.Title level={3}>
                        Rumah Sakit Penyedia Vaksinasi
                    </Typography.Title>
                </Row>

                <CardList products={[1, 2, 3, 4, 5, 6, 7, 8]} />

                {/* Bagian Search Provinsi */}
                <SearchComponent role="provinsi" />
            </div >
            <Footer />
        </>
    );
};

export default LandingPage;