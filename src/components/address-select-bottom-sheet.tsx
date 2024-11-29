'use client'

import { useQuerySync } from '@/hooks/use-query-sync'
import SelectDialog from './select-bottom-sheet'

const items = [
  { label: '강남구', value: 'GANGNAM_GU' },
  { label: '종로구', value: 'JONGNO_GU' },
  { label: '중구', value: 'JUNG_GU' },
  { label: '동대문구', value: 'DONGDAEMUN_GU' },
  { label: '성동구', value: 'SEONGDONG_GU' },
  { label: '성북구', value: 'SEONGBUK_GU' },
  { label: '도봉구', value: 'DOBONG_GU' },
  { label: '서대문구', value: 'SEODAEMUN_GU' },
  { label: '은평구', value: 'EUNPYEONG_GU' },
  { label: '마포구', value: 'MAPO_GU' },
  { label: '용산구', value: 'YONGSAN_GU' },
  { label: '영등포구', value: 'YEONGDEUNGPO_GU' },
  { label: '동작구', value: 'DONGJAK_GU' },
  { label: '강동구', value: 'GANGDONG_GU' },
  { label: '강서구', value: 'GANGSEO_GU' },
  { label: '구로구', value: 'GURO_GU' },
  { label: '관악구', value: 'GWANAK_GU' },
  { label: '노원구', value: 'NOWON_GU' },
  { label: '양천구', value: 'YANGCHEON_GU' },
  { label: '중랑구', value: 'JUNGRANG_GU' },
  { label: '서초구', value: 'SEOCHO_GU' },
  { label: '송파구', value: 'SONGPA_GU' },
  { label: '광진구', value: 'GWANGJIN_GU' },
  { label: '강북구', value: 'GANGBUK_GU' },
  { label: '금천구', value: 'GEUMCHEON_GU' },
]

const AddressSelectBottomSheet = () => {
  const { query, updateQuery } = useQuerySync()

  const value = query.location || items[0].value

  const handleChange = (value: string) => {
    updateQuery({ location: value })
  }
  return <SelectDialog value={value} items={items} onChange={handleChange} />
}

export default AddressSelectBottomSheet
