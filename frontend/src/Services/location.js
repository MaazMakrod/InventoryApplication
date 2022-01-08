import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/locations'//change to /api/locations on build

const getAllLocations = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newItem) => {
    const response = await axios.post(baseUrl, newItem)
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${ baseUrl }/${id}`)
    return response.data
}

const update = async (id, newItem) => {
    const response = await axios.put(`${ baseUrl }/${id}`, newItem)
    return response.data
}

export default { getAllLocations, create, remove, update}