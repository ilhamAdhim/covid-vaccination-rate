import axios from "axios"

export const getHospitalData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.data
}

export const getIndonesiaDailyCOVID = async (link) => {
    let response = await axios.get(`${link}`)
    return response.data
}

export const getGlobalData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.data
}

export const getDailyProvinceData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.data
}

export const getProvinceData = async () => {
    let response = await axios.get('https://rs-bed-covid-api.vercel.app/api/get-provinces')
    return await response.data
}

export const getTotalProvinceData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.data
}