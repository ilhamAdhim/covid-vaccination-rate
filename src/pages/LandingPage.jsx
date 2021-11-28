import { Col, Divider, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderJumbotron from '../components/HeaderJumbotron';
import SearchComponent from '../components/SearchComponent';
import Footer from '../components/Footer';
import CardList from '../components/CardList';

import { ReactComponent as CustomBlobSVG } from '../assets/custom-blob.svg';
import { ReactComponent as IndonesiaSVG } from '../assets/indonesia-map.svg';

import logo from '../assets/mockup-graph.png'
import '../styles/style.css'
import '../styles/landingpage.css'
import CaseItem from '../components/CaseItem';
import { getIndonesiaCOVIDStats, getProvinceData } from '../utils/DataCRUD';

const LandingPage = props => {
    const [provinceData, setProvinceData] = useState([])
    const [dailyCaseIndoData, setDailyCaseIndoData] = useState([])
    const [totalCaseIndoData, setTotalCaseIndoData] = useState([])

    const [isLoadingDaily, setIsLoadingDaily] = useState(true)
    const [isLoadingTotal, setIsLoadingTotal] = useState(true)

    useEffect(() => {
        getProvinceData().then(item => setProvinceData(item))

        getIndonesiaCOVIDStats().then(responseData => {
            setDailyCaseIndoData(responseData.penambahan)
            setTotalCaseIndoData(responseData.total)

            setIsLoadingDaily(false)
            setIsLoadingTotal(false)
        })
    }, []);

    useEffect(() => {
        console.log(dailyCaseIndoData)
    }, [dailyCaseIndoData]);

    return (
        <>
            <div className="landing-page">
                <HeaderJumbotron />

                <Divider style={{ justifyContent: 'center', color: '#ff725e', marginTop: '5em' }}> Statistics </Divider>
                <Row align="center" style={{ marginBottom: '4em' }}>
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
                    <Col flex="2" >
                        <Typography.Paragraph style={{ fontWeight: 'bold', fontSize: '1.3em' }}>
                            Total Case di Indonesia
                        </Typography.Paragraph>

                        <Row justify="space-between" gutter={20} style={{ marginBottom: '2em' }}>
                            {Object.entries(totalCaseIndoData).map(item =>
                                <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingTotal} />
                            )}
                        </Row>

                        <Row justify="space-between">
                            <Col>
                                <Typography.Paragraph style={{ fontWeight: 'bold', fontSize: '1.3em' }} >
                                    Kasus Harian di Indonesia
                                </Typography.Paragraph>
                            </Col>
                            <Col style={{ fontWeight: 'bold' }}>
                                Per tanggal {dailyCaseIndoData?.tanggal}
                            </Col>
                        </Row>
                        <Row justify="space-between" gutter={20} style={{ marginBottom: '2em' }}>
                            {Object.entries(dailyCaseIndoData).map(item =>
                                <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingDaily} />
                            )}
                        </Row>

                    </Col>
                </Row>

                {/* Ini grafik kasus covid19 hari ini dan grafik prediksi vaksinasi COVID-19 */}
                <Row style={{ marginTop: '2em' }} >
                    <Col flex="1">
                        <Divider style={{ justifyContent: 'center' }}> Pantauan COVID-19 Hari Ini </Divider>
                        <img src={logo} alt="lalaa" width={600} className="img-center" />
                    </Col>
                    <Col flex="1">
                        <Divider style={{ justifyContent: 'center' }}> Prediksi Vaksinasi COVID-19 </Divider>
                        <img src={logo} alt="lalaa" width={600} className="img-center" />
                    </Col>
                </Row>
                <Divider style={{ justifyContent: 'center', color: '#ff725e', marginTop: '5em' }}> Info Rumah Sakit</Divider>
                <Row align="center">
                    <Typography.Title level={3}>
                        Rumah Sakit Penyedia Vaksinasi
                    </Typography.Title>
                </Row>

                <CardList dataSource={[1, 2, 3, 4, 5, 6, 7, 8]} role="Hospital" />

                {/* Bagian Search Provinsi */}
                <SearchComponent role="provinsi" dataSource={provinceData} />
            </div >
            <Footer />
        </>
    );
};

export default LandingPage;