import React from 'react'
import { useFetch } from './useFetch'
import { Adress } from '../types/Adress'

const useAdress = (id: string | undefined) => {
  return useFetch<{data: Adress}>(`/endereco/${id}`)
}

export default useAdress