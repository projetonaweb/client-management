import React from 'react'
import { Services } from '../types/Services'
import { useFetch } from './useFetch'

const useService = (id: string | undefined) => {
  return useFetch<{data: Services}>(`/servicos/${id}`)
}

export default useService