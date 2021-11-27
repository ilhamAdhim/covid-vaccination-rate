import React, { useEffect, useState } from 'react';
import { splitByUppercase, uppercaseFirst } from '../utils/Common';
import { getAllCitiesInProvince, getProvinceData } from '../utils/DataCRUD';

const getNormalizedProvince = () => {
    let normalized = ''

    let getCurrentProvince = window.location.pathname.split('/')[2].replace('-', ' ').split(' ')

    getCurrentProvince.map(item => {
        normalized += uppercaseFirst(item)
    })
    return normalized
}

const DetailProvince = props => {
    const [normalizedProvince, setNormalizedProvince] = useState("");
    const [provID, setProvID] = useState("");
    const [cityList, setCityList] = useState("");

    useEffect(() => {
        let normalized = getNormalizedProvince()
        setNormalizedProvince(splitByUppercase(normalized))
    }, []);

    useEffect(() => {
        getProvinceData().then(response => setProvID(response?.provinces?.filter(item => item.name.includes(normalizedProvince))[0].id))
        console.log(normalizedProvince)
    }, [normalizedProvince]);

    useEffect(() => {
        // Fetch kota yang ada di provinsi ini
        if (provID.length > 0)
            getAllCitiesInProvince(provID).then(response => setCityList(response?.cities))
    }, [provID]);

    useEffect(() => {
        // Fetch kota yang ada di provinsi ini
        console.log(cityList)
    }, [cityList]);

    return (
        <div className="detail-province-page">
            Ini DetailProvince
        </div>
    );
};


export default DetailProvince;