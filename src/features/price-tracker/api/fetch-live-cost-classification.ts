const a = {
  baseDate: '2024-11-28',
  list: [
    { id: 1, name: '미국', unit: 'USD', amount: 1403, diffRate: -0.35 },
    { id: 2, name: '유럽', unit: 'EUR', amount: 1450, diffRate: 0.15 },
    { id: 3, name: '중국', unit: 'CNY', amount: 192, diffRate: -0.11 },
    { id: 4, name: '일본', unit: 'JPY', amount: 855, diffRate: -0.25 },
  ],
}

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

export const fetchLiveCostClassification = async (
  classification: string
): Promise<LiveCostNotiResponse> => {
  const response = await fetch(
    `http://192.168.103.223:8080/api/v1/live-cost/classification?classification=${classification}`,
    { cache: 'no-store' }
  )
  if (!response.ok) {
    throw new Error('데이터를 가져오는 중 오류가 발생했습니다.')
  }
  return response.json()
}
