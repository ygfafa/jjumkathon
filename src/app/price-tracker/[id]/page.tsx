import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import ChipButton from '@/components/chip-button'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'

import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'
import { Button } from '@/components/shadcn/button'
import { fetchLiveCostClassificationDetail } from '@/api/fetch-live-cost-classification-detail'
import AdListCard from '@/features/price-tracker/components/ad-list-card'
import DetailSummaryCard from '@/features/price-tracker/components/detail-summary-card'
import Recent30DaysChart from '@/features/price-tracker/components/recent-30-days-chart'
import dayjs from 'dayjs'
import { ClassificationType } from '@/api/fetch-live-cost-classification'

const TITLE: Record<ClassificationType, string> = {
  FOOD: '식료품',
  EXCHANGE_RATE: '환율',
  OIL: '유가',
}

type PriceTrackerDetailPageProps = {
  params: Promise<{ id: string }>
}
const PriceTrackerDetailPage = async ({
  params,
}: PriceTrackerDetailPageProps) => {
  const { id } = await params
  console.log('🚀 ~ id:', id)

  const data = await fetchLiveCostClassificationDetail(id)
  console.log('🚀 ~ data:', data)
  const chartData = data.list.map((d) => ({ date: d.baseDate, rate: d.amount }))

  const classification = data.classification
  return (
    <Page>
      <PageHeader title="생활물가 알리미" />
      <PageBody noBodyPadding>
        <div className="px-20 w-full">
          <ChipButton selected className="mb-4">
            {TITLE[classification]}
          </ChipButton>
          <div className="mb-32">
            <h2 className="text-24 font-bold">
              {data.name} {data.unit}
            </h2>
            <p className="text-16 font-semibold text-primary">
              어제보다 12.18원 비싸요
            </p>
          </div>

          <DetailSummaryCard
            type={TITLE[classification]}
            recent30DaysAvg={data.avgAmount}
            recent30DaysMax={data.highAmount}
            recent30DaysMaxDate={dayjs(data.highDate).format('YY.MM.DD')}
            recent30DaysMin={data.lowAmount}
            recent30DaysMinDate={dayjs(data.lowDate).format('YY.MM.DD')}
            today={data.amount}
          />

          <p className="mt-24 mb-12 text-16 text-gray-500">
            최근 30일간의 추이를 보여드려요
          </p>
          <Recent30DaysChart data={chartData} />
        </div>
        <div className="px-20 py-12 w-full bg-[#E9F7E8]">
          <Meta>
            <MoneyIcon />
            <MetaContent>
              <MetaTitle className="text-gray-500">
                환율 <b className="font-bold text-green-500">정보가 바뀌면 </b>
                알려드릴까요?
              </MetaTitle>
            </MetaContent>
            <MetaExtra>
              <Button size="sm">알림받기</Button>
            </MetaExtra>
          </Meta>
        </div>
        <AdListCard
          title="환율 우대 혜택 받기"
          description="시중 은행보다 저렴하게 환전하세요"
          items={[
            {
              image: '/images/hana.png',
              title: '15초 영상광고 보면',
              description: '95% 환율우대 쿠폰 지급',
            },
            {
              image: '/images/travel-wallet.png',
              title: '트래블월렛 카드 사용하면',
              description: '100% 환전 수수료 무료',
            },
          ]}
        />
      </PageBody>
    </Page>
  )
}

export default PriceTrackerDetailPage
