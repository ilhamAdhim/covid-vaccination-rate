import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Col, Empty, Row, Skeleton, Typography } from 'antd';
import { normalizeProvinceName, uppercaseEachWord } from '../utils/Common';
import { getAllCitiesInProvince, getDailyAndTotalProvinceData, getListLogoProvince, getProvinceData } from '../utils/DataCRUD';

import CaseItem from '../components/CaseItem';
import SearchComponent from '../components/SearchComponent';
import { ReactComponent as CitySVG } from '../assets/city.svg';
import { ReactComponent as NotFoundSVG } from '../assets/404_image.svg';

import '../styles/detail-province.css'
import '../styles/svg-style.css'

const getProvinceName = () => {
    return window.location.pathname.split('/')[2].replace('-', ' ')
}

const DetailProvince = props => {
    const [normalizedProvince, setNormalizedProvince] = useState("");
    const [provID, setProvID] = useState("");
    const [cityList, setCityList] = useState("");

    // Province Data
    const [provinceCaseData, setProvinceCaseData] = useState("");
    const [provinceTotalData, setProvinceTotalData] = useState({});
    const [provinceDailyData, setProvinceDailyData] = useState({});

    // Logo
    const [logoList, setLogoList] = useState([]);
    const [logoThisProvinceURL, setLogoThisProvinceURL] = useState("");

    // State loading
    const [isLogoLoaded, setIsLogoLoaded] = useState(false);
    const [isDataProvinceLoaded, setIsDataProvinceLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        let province = normalizeProvinceName(getProvinceName())
        setNormalizedProvince(province)

        console.log(getProvinceName())
        // Fetch logo province
        getListLogoProvince()
            .then(responseData => setLogoList(responseData))

        getDailyAndTotalProvinceData()
            .then(responseData => {
                setProvinceCaseData(responseData.find(item => {
                    if (!getProvinceName().includes("sumatera"))
                        return item.provinsi.toLowerCase().includes(province.toLowerCase())
                    else
                        return item.provinsi.toLowerCase().includes(getProvinceName().toLowerCase())
                }))
                setIsDataProvinceLoaded(true)
            })

    }, []);

    const setIDProvince = useCallback(() => {
        if (normalizedProvince.length > 0) {
            getProvinceData().then(response => setProvID(response?.provinces?.find(item => item.name.toLowerCase().includes(getProvinceName()))?.id))
        }
    }, [normalizedProvince])

    const setLogo = useCallback(() => {
        if (logoList?.status === "success") {
            setLogoThisProvinceURL(logoList?.lambang?.find(item => item.title.toLowerCase().includes(normalizedProvince.toLowerCase()))?.url)
            setIsLogoLoaded(true)
        }
    }, [logoList, normalizedProvince])

    const getAllCities = useCallback(() => {
        if (provID?.length > 0)
            getAllCitiesInProvince(provID).then(response => setCityList(response?.cities))
    }, [provID])

    const getCaseDailyAndTotalProvince = useCallback(() => {
        setProvinceTotalData({
            kasus: provinceCaseData?.kasus,
            sembuh: provinceCaseData?.sembuh,
            dirawat: provinceCaseData?.dirawat,
            meninggal: provinceCaseData?.meninggal,
        })

        setProvinceDailyData(provinceCaseData?.penambahan)
    }, [provinceCaseData])

    useEffect(() => {
        // Fetch ID Provinsi dari provinsi ini
        setIDProvince()
        // Fetch kota yang ada di provinsi ini
        getAllCities()
        // Fetch lambang provinsi
        setLogo()
        getCaseDailyAndTotalProvince()
    }, [setIDProvince, getAllCities, setLogo, getCaseDailyAndTotalProvince]);

    // TODO: Ini Dipakai untuk data rumah sakit
    // useEffect(() => {
    //     // Fetch rumah sakit yang ada di masing2 kota
    //     console.log(provinceCaseData)
    // }, [provinceCaseData]);

    return (
        <div className="detail-province-page">
            {
                provID === undefined ?
                    <>
                        <Empty
                            image={<NotFoundSVG />}
                            imageStyle={{ height: '300px' }}
                            description={
                                <Typography.Title level={5} style={{ marginTop: '2em' }}
                                    children={`Provinsi ${getProvinceName()} tidak ditemukan`} />}
                        />
                        <Row justify="center" >
                            <Col>
                                <Link to="/">
                                    <Button style={{ textAlign: 'center' }} className="btn-cta-2nd"> Kembali </Button>
                                </Link>
                            </Col>
                        </Row>
                    </> :
                    <>
                        <Breadcrumb style={{ marginBottom: '3em', marginTop: '-2em' }}>
                            <Breadcrumb.Item>
                                <Link to="/">Home</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to="">Province</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to="">{isDataProvinceLoaded ? uppercaseEachWord(normalizedProvince) : "Loading.."}</Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <Row justify="space-between">
                            <Col flex={1} md={12}>
                                {isLogoLoaded ?
                                    <>
                                        <img src={logoThisProvinceURL} className="logo-province" alt={`logo ${normalizedProvince}`} />
                                        <div className="city-svg">
                                            <CitySVG />
                                        </div>
                                    </>
                                    :
                                    <Skeleton active />
                                }
                            </Col>
                            <Col flex={1} md={12}>
                                <Typography.Title level={4}>
                                    Total Case di {isDataProvinceLoaded ? uppercaseEachWord(normalizedProvince) : "Loading.."}
                                </Typography.Title>

                                <Row justify="space-between" gutter={20} style={{ marginBottom: '2em' }}>
                                    {isDataProvinceLoaded && provinceTotalData !== undefined ? Object.entries(provinceTotalData).map(item =>
                                        <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={false} />
                                    )
                                        : <Skeleton active />
                                    }
                                </Row>

                                <Row justify="space-between">
                                    <Col>
                                        <Typography.Title level={4} >
                                            Kasus Harian di {isDataProvinceLoaded ? uppercaseEachWord(normalizedProvince) : "Loading.."}
                                        </Typography.Title>
                                    </Col>
                                    <Col className="text-bold">
                                        {`Per tanggal ${provinceCaseData?.last_date ?? " loading ..."}`}
                                    </Col>
                                </Row>
                                <Row justify="space-between" gutter={20} style={{ marginBottom: '2em' }}>
                                    {isDataProvinceLoaded && provinceDailyData !== undefined ? Object.entries(provinceDailyData).map(item =>
                                        <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={false} />
                                    )
                                        : <Skeleton active />
                                    }

                                </Row>
                            </Col>
                        </Row>
                        <SearchComponent role="hospital" dataSource={[1, 2, 3, 4, 5, 6, 67]} />
                    </>
            }
        </div>
    );
};


export default DetailProvince;