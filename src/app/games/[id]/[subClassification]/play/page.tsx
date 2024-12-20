import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'

import { fetchLiveCostClassificationDetail } from '@/api/fetch-live-cost-classification-detail'
import { SubClassification } from '@/api/get-reward-content'
import { getRewardVote } from '@/api/get-reward-vote'
import CountdownTimer from '@/components/count-down-timer'
import VoteBar from '@/components/vote-bar'
import GameChoiceButtons from '@/features/games/components/game-choice-buttons'
import dayjs from 'dayjs'

type GameLandingPageProps = {
  params: Promise<{ subClassification: SubClassification; id: number }>
}

const TITLE: Record<SubClassification, string> = {
  DIESEL: '경유값',
  GASOLINE: '휘발유값',
  KEROSENE: '등유값',
  LPG: '가스값',
  PREMIUM_GASOLINE: '고급 휘발유값',
  RICE: '쌀값',
  POTATO: '감자값',
  CABBAGE: '배추값',
  PORK: '삼겹살값',
  APPLE: '사과값',
  LETTUCE: '상추값',
  USD: '달러 환율',
  JPY: '엔화 환율',
  CNY: '위안 환율',
  EUR: '유로 환율',
}

const GamePlayPage = async ({ params }: GameLandingPageProps) => {
  const { subClassification, id } = await params

  const endOfDay = dayjs().endOf('day').toISOString()
  const title = TITLE[subClassification]

  const detail = await fetchLiveCostClassificationDetail(Number(id))
  const vote = await getRewardVote(detail.subClassification)

  return (
    <Page
      className="bg-red-50"
      style={{
        background: 'linear-gradient(180deg, #6403DF 11.96%, #240151 96.81%)',
      }}
    >
      <PageHeader
        title={`${title} 맞추기 게임`}
        className="bg-transparent text-white"
        appBar={{ overlay: true, themeColor: '#ffffff' }}
      />

      <PageBody>
        <h2 className="font-bold text-20 text-white  mb-8">
          내일 {title}을 예측하세요
        </h2>

        <div className="text-white">
          <p>
            {dayjs().format('YYYY.MM.DD')} 기준 {title}{' '}
            {detail.amount.toLocaleString()}원
          </p>
          <p>최근 30일 평균 {detail.avgAmount.toLocaleString()}원</p>
          <p>최근 30일 최고가 {detail.highAmount.toLocaleString()}원</p>
          <p>최근 30일 최저가 {detail.lowAmount.toLocaleString()}원</p>
        </div>

        <div className="flex flex-col gap-14 mb-32">
          <VoteBar votesAgainst={vote.fallCount} votesFor={vote.riseCount} />
          <CountdownTimer className="text-[#AEB0F1]" targetTime={endOfDay} />
        </div>
        <GameChoiceButtons subClassification={subClassification} />
      </PageBody>
    </Page>
  )
}

export default GamePlayPage
