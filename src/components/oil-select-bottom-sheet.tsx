'use client'

import { useQuerySync } from '@/hooks/use-query-sync'
import SelectDialog from './select-bottom-sheet'

const items = [
  { label: '휘발유', value: 'GASOLINE' },
  { label: '고급 휘발유', value: 'PREMIUM_GASOLINE' },
  { label: '경유', value: 'DIESEL' },
  { label: '등유', value: 'KEROSENE' },
  { label: '가스', value: 'LPG' },
]

const OilSelectBottomSheet = () => {
  const { query, updateQuery } = useQuerySync()

  const value = query.subClassification || items[0].value

  const handleChange = (value: string) => {
    updateQuery({ subClassification: value })
  }
  return <SelectDialog value={value} items={items} onChange={handleChange} />
}

export default OilSelectBottomSheet
