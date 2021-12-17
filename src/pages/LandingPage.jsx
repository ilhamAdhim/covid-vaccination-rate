import { Card, Col, Divider, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderJumbotron from '../components/HeaderJumbotron';
import SearchComponent from '../components/SearchComponent';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import VisualizeBarChart from '../components/charts/VisualizeBarChart';

import CaseItem from '../components/CaseItem';
import { getHospitalDetail, getIndonesiaCOVIDStats, getLastWeekCOVIDGraph, getProvinceData } from '../utils/DataCRUD';

import { ReactComponent as CustomBlobSVG } from '../assets/custom-blob.svg';
import { ReactComponent as IndonesiaSVG } from '../assets/indonesia-map.svg';

import logo from '../assets/mockup-graph.png'
import '../styles/style.css'
import '../styles/landingpage.css'
import '../styles/svg-style.css'
import { getFormattedDate } from '../utils/Common';

const LandingPage = props => {
    const [provinceData, setProvinceData] = useState([''])
    const [dailyCaseIndoData, setDailyCaseIndoData] = useState([])
    const [totalCaseIndoData, setTotalCaseIndoData] = useState([])
    const [hospitalMalang, setHospitalMalang] = useState([])

    const [lastMonthGraph, setLastMonthGraph] = useState([])

    const [isLoadingDaily, setIsLoadingDaily] = useState(true)
    const [isLoadingTotal, setIsLoadingTotal] = useState(true)
    const [isHospitalLoaded, setIsHospitalLoaded] = useState(false)

    useEffect(() => {
        getProvinceData().then(responseData => setProvinceData(responseData))

        getIndonesiaCOVIDStats().then(responseData => {
            setDailyCaseIndoData(responseData.penambahan)
            setTotalCaseIndoData(responseData.total)

            setIsLoadingDaily(false)
            setIsLoadingTotal(false)
        })

        getLastWeekCOVIDGraph().then(responseData => {
            let updatedData = responseData.map(item => {
                return {
                    ...item,
                    tanggal: getFormattedDate(new Date(item.tanggal).toLocaleDateString())
                }
            })

            setLastMonthGraph(updatedData)
        })

        // ? Default : Kota Malang
        getHospitalDetail("35prop", 3573)
            .then(responseData => {
                setIsHospitalLoaded(true)
                setHospitalMalang(responseData?.hospitals)
            })
    }, []);

    useEffect(() => {
        document.title = "COVID-19 Vaccination Web"
    }, []);

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
                <Row className="new-row" justify="center">
                    <Col sm={24} md={12} >
                        <div className="svg-blob-landing-page">
                            <CustomBlobSVG />
                        </div>
                        <div className="svg-indonesia-landing-page">
                            <IndonesiaSVG />
                        </div>

                    </Col>
                    <Col sm={24} md={12} >
                        <Typography.Title className="text-total-case-landing-page" level={4} >
                            Total Case di Indonesia
                        </Typography.Title>

                        <Row justify="center" gutter={[20, 20]} className="new-row">
                            {Object.entries(totalCaseIndoData).map(item =>
                                <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingTotal} />
                            )}
                        </Row>

                        <div className="text-daily-case-landing-page">
                            <Typography.Title level={4} >
                                Kasus Harian di Indonesia
                            </Typography.Title>
                            <Typography.Title level={5}>
                                Per tanggal {dailyCaseIndoData?.tanggal}
                            </Typography.Title>
                        </div>

                        <Row justify="center" gutter={[20, 20]} className="new-row">
                            {Object.entries(dailyCaseIndoData).map(item =>
                                <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingDaily} />
                            )}
                        </Row>

                    </Col>
                </Row>

                {/* Ini grafik kasus covid19 hari ini dan grafik prediksi vaksinasi COVID-19 */}
                <Row className="new-row" justify="center">
                    <Col>
                        <Divider className="normal-divider" > Pantauan COVID-19 Seminggu Terakhir </Divider>
                        <VisualizeBarChart data={lastMonthGraph} />
                    </Col>
                </Row>
                <Row className="new-row" justify="center" >
                    <Col>
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

                <CardList dataSource={hospitalMalang} role="hospital" isDataLoaded={isHospitalLoaded} />

                {/* Bagian Search Provinsi */}
                <SearchComponent role="provinsi" dataSource={provinceData} isDataLoaded={true} />
            </div >
            <Footer />
        </>
    );
};

export default LandingPage;