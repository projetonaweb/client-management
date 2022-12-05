import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://acaobikeapi.projetonaweb.com.br',
  headers: { "Content-Type": "application/json" },
})

export const api = {
  get(endpoint: string) {
    return axiosInstance.get(endpoint)
  },
  post(endpoint: string, data: any) {
    return axiosInstance.post(endpoint, JSON.stringify(data))
  }
}