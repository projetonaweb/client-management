import React from 'react'
import { useFetch } from './useFetch'
import { Client } from '../types/Client'

const useClients = () => {
  return useFetch<Client[]>('/clientes')
}

export default useClients