import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://acaobikeapi.projetonaweb.com.br',
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer 5|GQC3SSNCpTW5xHoVmbwBUdJoLUXzB42wQ4ozliZc`
  },
})

export const api = {
  get(endpoint: string) {
    return axiosInstance.get(endpoint)
  },
  post(endpoint: string, data: any) {
    return axiosInstance.post(endpoint, JSON.stringify(data))
  }
}