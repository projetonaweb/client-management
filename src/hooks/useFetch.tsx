import React, { useEffect, useState } from 'react'
import { api } from '../services/api'

export function useFetch<T> (url: string) {

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    api.get(url).then(response => setData(response.data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }, [url])

  return {
    data,
    loading,
    error
  }
}
