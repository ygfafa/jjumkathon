import { ClassificationType } from './fetch-live-cost-classification'
import { SubClassification } from './get-reward-content'

export type LiveCostNotiDetailChart = {
  baseDate: string
  amount: number
}
export type LiveCostNotiDetailResponse = {
  classification: ClassificationType
  subClassification: SubClassification
  name: string
  unit: string
  amount: number
  diffAmount: number
  avgAmount: number
  highAmount: number
  lowAmount: number
  highDate: string
  lowDate: string
  list: LiveCostNotiDetailChart[]
}

export const fetchLiveCostClassificationDetail = async (
  id: number
): Promise<LiveCostNotiDetailResponse> => {
  const response = await fetch(
    `http://192.168.103.223:8080/api/v1/live-cost/classification/detail?id=${id}`,
    { cache: 'no-store' }
  )
  if (!response.ok) {
    throw new Error('데이터를 가져오는 중 오류가 발생했습니다.')
  }
  return response.json()
}
