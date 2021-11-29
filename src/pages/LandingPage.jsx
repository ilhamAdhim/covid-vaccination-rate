import { Col, Divider, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderJumbotron from '../components/HeaderJumbotron';
import SearchComponent from '../components/SearchComponent';
import Footer from '../components/Footer';
import CardList from '../components/CardList';

import CaseItem from '../components/CaseItem';
import { getIndonesiaCOVIDStats, getProvinceData } from '../utils/DataCRUD';

import { ReactComponent as CustomBlobSVG } from '../assets/custom-blob.svg';
import { ReactComponent as IndonesiaSVG } from '../assets/indonesia-map.svg';

import logo from '../assets/mockup-graph.png'
import '../styles/style.css'
import '../styles/landingpage.css'
import '../styles/svg-style.css'

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

                <Divider className="colored-divider"> Statistics </Divider>
                <Row align="center" style={{ marginBottom: '4em' }}>
                    <Typography.Title level={3}>
                        Corona Virus Overview
                    </Typography.Title>
                </Row>

                {/* Ini bagian map dan statistiknya */}
                <Row className="new-row">
                    <Col flex="2" sm={{ span: 12 }}>
                        <div className="svg-blob-landing-page">
                            <CustomBlobSVG />
                        </div>
                        <IndonesiaSVG />

                    </Col>
                    <Col flex="2" >
                        <Typography.Title level={4}>
                            Total Case di Indonesia
                        </Typography.Title>

                        <Row justify="space-between" gutter={20} className="new-row">
                            {Object.entries(totalCaseIndoData).map(item =>
                                <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingTotal} />
                            )}
                        </Row>
                        <Row justify="space-between" className="new-row">
                            <Col>
                                <Typography.Title level={4} >
                                    Kasus Harian di Indonesia
                                </Typography.Title>
                            </Col>
                            <Col >
                                <Typography.Title level={5}>
                                    Per tanggal {dailyCaseIndoData?.tanggal}
                                </Typography.Title>
                            </Col>
                        </Row>
                        <Row justify="space-between" gutter={20} className="new-row">
                            {Object.entries(dailyCaseIndoData).map(item =>
                                <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingDaily} />
                            )}
                        </Row>

                    </Col>
                </Row>

                {/* Ini grafik kasus covid19 hari ini dan grafik prediksi vaksinasi COVID-19 */}
                <Row className="new-row" >
                    <Col flex="1">
                        <Divider className="normal-divider" > Pantauan COVID-19 Hari Ini </Divider>
                        <img src={logo} alt="lalaa" width={600} className="img-center" />
                    </Col>
                    <Col flex="1">
                        <Divider className="normal-divider" > Prediksi Vaksinasi COVID-19 </Divider>
                        <img src={logo} alt="lalaa" width={600} className="img-center" />
                    </Col>
                </Row>
                <Divider className="colored-divider"> Info Rumah Sakit</Divider>
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