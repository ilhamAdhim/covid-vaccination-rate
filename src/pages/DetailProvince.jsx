import { Breadcrumb, Col, Row, Skeleton, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { normalizeProvinceName, uppercaseEachWord } from '../utils/Common';
import { getAllCitiesInProvince, getListLogoProvince, getProvinceData } from '../utils/DataCRUD';

import '../styles/detail-province.css'
import { Link } from 'react-router-dom';
import CaseItem from '../components/CaseItem';
import SearchComponent from '../components/SearchComponent';
import { ReactComponent as CitySVG } from '../assets/city.svg';

const getProvinceName = () => {
    return window.location.pathname.split('/')[2].replace('-', ' ')
}

const DetailProvince = props => {
    const [normalizedProvince, setNormalizedProvince] = useState("");
    const [provID, setProvID] = useState("");
    const [cityList, setCityList] = useState("");

    // Province Data
    const [provinceCaseData, setProvinceCaseData] = useState("");

    // Logo
    const [logoList, setLogoList] = useState([]);
    const [logoThisProvinceURL, setLogoThisProvinceURL] = useState("");

    // State loading
    const [isLogoLoaded, setIsLogoLoaded] = useState(false);
    const [isDataProvinceLoaded, setIsDataProvinceLoaded] = useState(false);

    useEffect(() => {
        let province = normalizeProvinceName(getProvinceName())
        setNormalizedProvince(province)

        // Fetch logo province
        getListLogoProvince()
            .then(responseData => setLogoList(responseData))
    }, []);

    const setIDProvince = useCallback(() => {
        // Fetch ID Provinsi dari provinsi ini
        if (normalizedProvince.length > 0) {
            getProvinceData().then(response => setProvID(response?.provinces?.find(item => item.name.toLowerCase().includes(getProvinceName())).id))
            setIsDataProvinceLoaded(true)
        }
    }, [normalizedProvince])

    const getAllCities = useCallback(() => {
        // Fetch kota yang ada di provinsi ini
        if (provID.length > 0)
            getAllCitiesInProvince(provID).then(response => setCityList(response?.cities))
    }, [provID])

    useEffect(() => {
        // Get ID Province and all cities inside the province 
        setIDProvince()
        getAllCities()
    }, [setIDProvince, getAllCities]);

    useEffect(() => {
        // Fetch lambang provinsi
        if (logoList?.status === "success") {
            setLogoThisProvinceURL(logoList?.lambang?.find(item => item.title.toLowerCase().includes(normalizedProvince.toLowerCase())).url)
            setIsLogoLoaded(true)
        }
    }, [logoList, normalizedProvince]);

    useEffect(() => {
        // Fetch rumah sakit yang ada di masing2 kota
        console.log(cityList)
    }, [cityList]);

    return (
        // TODO : Ngerjain UI untuk detail Province
        <div className="detail-province-page">
            <Breadcrumb style={{ marginBottom: '3em' }}>
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
                    <Typography.Paragraph style={{ fontWeight: 'bold', fontSize: '1.3em' }}>
                        Total Case di {isDataProvinceLoaded ? uppercaseEachWord(normalizedProvince) : "Loading.."}
                    </Typography.Paragraph>

                    <Row justify="space-between" gutter={20} style={{ marginBottom: '2em' }}>
                        {/* {Object.entries(totalCaseIndoData).map(item => */}
                        {/* <CaseItem key={item[0]} caseCondition={item[0]} number={item[1]} isLoading={isLoadingTotal} /> */}
                        <CaseItem caseCondition={"lalala"} number={2} isLoading={false} />
                        <CaseItem caseCondition={"Sembuh"} number={2} isLoading={false} />
                        <CaseItem caseCondition={"Dirawat"} number={2} isLoading={false} />
                        <CaseItem caseCondition={"Meninggal"} number={2} isLoading={false} />

                        {/* )} */}
                    </Row>

                    <Row justify="space-between">
                        <Col>
                            <Typography.Paragraph style={{ fontWeight: 'bold', fontSize: '1.3em' }} >
                                Kasus Harian di {isDataProvinceLoaded ? uppercaseEachWord(normalizedProvince) : "Loading.."}
                            </Typography.Paragraph>
                        </Col>
                        <Col style={{ fontWeight: 'bold' }}>
                            {/* Per tanggal {dailyCaseIndoData?.tanggal} */}
                        </Col>
                    </Row>
                    <Row justify="space-between" gutter={20} style={{ marginBottom: '2em' }}>
                        {/* {Object.entries(dailyCaseIndoData).map(item => */}
                        <CaseItem caseCondition={"lalala"} number={2} isLoading={false} />
                        <CaseItem caseCondition={"Sembuh"} number={2} isLoading={false} />
                        <CaseItem caseCondition={"Dirawat"} number={2} isLoading={false} />
                        <CaseItem caseCondition={"Meninggal"} number={2} isLoading={false} />
                        {/* )} */}
                    </Row>
                </Col>
            </Row>
            <SearchComponent role="hospital" dataSource={[1, 2, 3, 4, 5, 6, 67]} />

        </div>
    );
};


export default DetailProvince;