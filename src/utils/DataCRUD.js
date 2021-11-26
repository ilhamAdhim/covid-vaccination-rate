import axios from "axios"

export const getHospitalData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.json()
}

export const getIndonesiaDailyCOVID = async (link) => {
    let response = await axios.get(`${link}`)
    return response.json()
}

export const getGlobalData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.json()
}

export const getDailyProvinceData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.json()
}

export const getTotalProvinceData = async (link) => {
    let response = await axios.get(`${link}`)
    return response.json()
}