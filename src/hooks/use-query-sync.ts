'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { create } from 'zustand'

type QueryState = {
  query: Record<string, string>
  setQuery: (newQuery: Record<string, string>) => void
}

export const useQueryStore = create<QueryState>((set) => ({
  query: {},
  setQuery: (newQuery) => set(() => ({ query: newQuery })),
}))

export const useQuerySync = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { query, setQuery } = useQueryStore()

  // 쿼리 상태와 URL 동기화
  const updateQuery = (newQuery: Record<string, string>) => {
    const updatedQuery = {
      ...Object.fromEntries(searchParams.entries()),
      ...newQuery,
    }
    setQuery(updatedQuery)

    const params = new URLSearchParams(updatedQuery)
    router.replace(`?${params.toString()}`) // URL 업데이트 (App Router에서 상태 유지됨)
  }

  // URL -> Zustand 초기 동기화
  useEffect(() => {
    const initialQuery = Object.fromEntries(searchParams.entries())
    setQuery(initialQuery)
  }, [searchParams, setQuery])

  return { query, updateQuery }
}
