/* eslint-disable no-console */
import axios from 'axios'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
  baseURL: 'https://66c9d94959f4350f064d9e3d.mockapi.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, {
      params
    })
    return response.data
  } catch (error) {
    toast.error(error.response?.data?.message || error?.message)
  }
}

export const post = async (url, data = {}, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config)
    return response.data
  } catch (error) {
    toast.error(error.response?.data?.message || error?.message)
  }
}
