export type SubClassification =
  | 'DIESEL'
  | 'GASOLINE'
  | 'KEROSENE'
  | 'LPG'
  | 'PREMIUM_GASOLINE'
  | 'RICE'
  | 'POTATO'
  | 'CABBAGE'
  | 'APPLE'
  | 'LETTUCE'
  | 'USD'
  | 'JPY'
  | 'CNY'
  | 'EUR'
  | 'PORK'
export type RewardContentItem = {
  subClassification: SubClassification
  voteFlag: boolean
  desc: string
}
export type RewardContentResponse = {
  list: RewardContentItem[]
}

export const getRewardContent = async (
  userId: number
): Promise<RewardContentResponse> => {
  const response = await fetch(
    `http://192.168.103.223:8080/api/v1/reward/content?userId=${userId}`,
    { cache: 'no-store' }
  )
  if (!response.ok) {
    throw new Error('데이터를 가져오는 중 오류가 발생했습니다.')
  }
  return response.json()
}
