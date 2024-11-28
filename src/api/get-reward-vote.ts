import { SubClassification } from './get-reward-content'

export type RewardVoteResponse = {
  riseCount: number
  fallCount: number
}
export const getRewardVote = async (
  subClassification: SubClassification
): Promise<RewardVoteResponse> => {
  const response = await fetch(
    `http://192.168.103.223:8080/api/v1/reward/vote?subClassification=${subClassification}`,
    { cache: 'no-store' }
  )
  if (!response.ok) {
    throw new Error('데이터를 가져오는 중 오류가 발생했습니다.')
  }
  return response.json()
}