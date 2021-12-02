import axios from "axios"

//  Kena CORS
// export const getGlobalData = async () => {
//     let response = await axios.get(`https://api.quarantine.country/`)
//     return response.data
// }

export const getDailyAndTotalProvinceData = async () => {
    let response = await axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more`)
    return response.data
}

export const getIndonesiaCOVIDStats = async () => {
    let response = await axios.get(`https://apicovid19indonesia-v2.vercel.app/api/indonesia/more`)
    return response.data
}

export const getProvinceData = async () => {
    let response = await axios.get('https://rs-bed-covid-api.vercel.app/api/get-provinces')
    return await response.data
}

export const getAllCitiesInProvince = async (provID) => {
    let response = await axios.get(`https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${provID}`)
    return response.data
}

export const getHospitalDetail = async (provID, cityID) => {
    let response = await axios.get(`https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${provID}&cityid=${cityID}&type=1`)
    return response.data
}

export const getHospitalAvailability = async (hospitalID) => {
    let response = await axios.get(`https://rs-bed-covid-api.vercel.app/api/get-bed-detail?hospitalid=${hospitalID}&type=1`)
    return response.data
}

export const getListLogoProvince = async () => {
    let response = await axios.get(`https://feriirawan-api.herokuapp.com/list/symbols/province/150`)
    return response.data
}