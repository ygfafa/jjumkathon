import qs from 'querystring'

export type LiveCostNotiItem = {
  id: number
  name: string
  unit: string
  amount: number
  diffRate: number
}
export type LiveCostNotiResponse = {
  baseDate: string
  list: LiveCostNotiItem[]
}

export type ClassificationType = 'EXCHANGE_RATE' | 'FOOD' | 'OIL'

export type LiveCostNotiQueryParams = {
  classification?: ClassificationType
}
export const fetchLiveCostClassification = async (
  params?: LiveCostNotiQueryParams
): Promise<LiveCostNotiResponse> => {
  const response = await fetch(
    `http://192.168.103.223:8080/api/v1/live-cost/classification?${qs.stringify(
      params
    )}`,
    { cache: 'no-store' }
  )
  if (!response.ok) {
    throw new Error('데이터를 가져오는 중 오류가 발생했습니다.')
  }
  return response.json()
}
