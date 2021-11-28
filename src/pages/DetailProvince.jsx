import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { splitByUppercase, uppercaseFirst } from '../utils/Common';
import { getAllCitiesInProvince, getListLogoProvince, getProvinceData } from '../utils/DataCRUD';

const getNormalizedProvince = () => {
    let normalized = ''

    let getCurrentProvince = window.location.pathname.split('/')[2].split('-')

    getCurrentProvince.map(item => normalized += uppercaseFirst(item))
    return normalized
}

const DetailProvince = props => {
    const [normalizedProvince, setNormalizedProvince] = useState("");
    const [provID, setProvID] = useState("");
    const [cityList, setCityList] = useState("");
    const [logoList, setLogoList] = useState([]);

    const [logoThisProvinceURL, setLogoThisProvinceURL] = useState("");

    useEffect(() => {
        let normalized = getNormalizedProvince()
        setNormalizedProvince(splitByUppercase(normalized))

        // Fetch logo province
        getListLogoProvince()
            .then(responseData => setLogoList(responseData))
    }, []);

    useEffect(() => {
        // Fetch ID Provinsi dari provinsi ini
        if (normalizedProvince.length > 0)
            getProvinceData().then(response => setProvID(response?.provinces?.filter(item => item.name.includes(normalizedProvince))[0].id))
    }, [logoList, normalizedProvince]);

    useEffect(() => {
        // Fetch lambang provinsi
        if (logoList?.status === "success")
            setLogoThisProvinceURL(logoList?.lambang?.filter(item => item.title === normalizedProvince)[0].url)
    }, [logoList]);

    useEffect(() => {
        // Fetch kota yang ada di provinsi ini
        if (provID.length > 0)
            getAllCitiesInProvince(provID).then(response => setCityList(response?.cities))
    }, [provID]);

    useEffect(() => {
        // Fetch rumah sakit yang ada di masing2 kota
        console.log(cityList)
    }, [cityList]);

    return (
        // TODO : Ngerjain UI untuk detail Province
        <div className="detail-province-page">
            <Row>
                <img src={logoThisProvinceURL} />
            </Row>
        </div>
    );
};


export default DetailProvince;