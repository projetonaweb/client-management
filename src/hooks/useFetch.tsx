import React, { useEffect, useState } from 'react'
import { api } from '../services/api'

export const useFetch = (url: string) => {

const [clients, setClient] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getDataClient = async () => {
      try {
        setLoading(true)
        const { data: jsonClient } = await api.get(url)
        setClient(jsonClient)
      } catch (error) {
        console.error('ERRO: ', error)
      }finally {
        setLoading(false)
      }
    }
    getDataClient()
  }, [url])

  return {
    clients,
    loading
  }
}

/* 
const [clientsData, setClientsData] = useState([])
  
const getClientsData = async () => {
  const data = await fetch('https://acaobikeapi.projetonaweb.com.br/clientes')
  const res = await data.json()
  setClientsData(res)
}

useEffect(() => {
  getClientsData()
},[]) */