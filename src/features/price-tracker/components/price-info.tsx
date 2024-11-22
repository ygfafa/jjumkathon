'use client'

import { useQuerySync } from '@/hooks/use-query-sync'
import React from 'react'
import { PRICE_TRACKER_INFO } from '../constants'

const PriceInfoTitle = () => {
  const { query } = useQuerySync()

  const title = PRICE_TRACKER_INFO.find(
    (item) => item.key === query.type
  )?.title
  return <h3 className="whitespace-pre-line text-24 font-bold">{title}</h3>
}

const PriceInfo = () => {
  return (
    <section>
      <p className="text-blue-500 text-16 mb-2">2024.11.22 기준</p>
      <PriceInfoTitle />
    </section>
  )
}

export default PriceInfo
