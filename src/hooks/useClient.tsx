import React from 'react'
import { useFetch } from './useFetch'
import { Client } from '../types/Client'

const useClient = (id: string | undefined) => {
  return useFetch<{data: Client}>(`/clientes/${id}`)
}

export default useClient