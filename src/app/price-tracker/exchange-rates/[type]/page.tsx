import ChipButton from '@/components/chip-button'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'

import TrendIcon from '@/assets/icons/icon-park-solid_trend.svg'
import TrendDownIcon from '@/assets/icons/icon-park-solid_trend_down.svg'
import TrendUpIcon from '@/assets/icons/icon-park-solid_trend_up.svg'
import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'
import { Button } from '@/components/shadcn/button'
import ExchangeRateGameBottomSheet from '@/features/price-tracker/components/exchange-rate-game-bottom-sheet'
import PromotionAlertTemplate from '@/features/price-tracker/components/promotion-alert/promotion-alert-template'
import Recent30DaysChart from '@/features/price-tracker/components/recent-30-days-chart'
import { PRICE_TRACKER_PROMOTIONS } from '@/features/price-tracker/constants'

const ExchangeRateDetailPage = () => {
  const promotion = PRICE_TRACKER_PROMOTIONS.find(
    (promotion) => promotion.target === 'exchange-rates'
  )
  return (
    <Page>
      <PageHeader title="생활물가 알리미" />

      <PageBody noBodyPadding>
        <div className="px-20 w-full">
          <ChipButton selected className="mb-4">
            환율
          </ChipButton>
          <div className="mb-32">
            <h2 className="text-24 font-bold">미국 USD</h2>
            <p className="text-16 font-semibold text-primary">
              어제보다 12.18원 비싸요
            </p>
          </div>

          <DetailSummaryCard />

          <p className="mt-24 mb-12 text-16 text-gray-500">
            최근 30일간의 추이를 보여드려요
          </p>
          <Recent30DaysChart />
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

        {promotion && (
          <div className="flex-1 px-18 bg-gray-50 py-24">
            <PromotionAlertTemplate {...promotion} />
          </div>
        )}
      </PageBody>
      <ExchangeRateGameBottomSheet />
    </Page>
  )
}

const DetailSummaryCard = () => {
  return (
    <div className="bg-gray-50 px-24 py-16 w-full rounded-16 space-y-32">
      <Meta>
        <MoneyIcon />
        <MetaContent>
          <MetaTitle>오늘의 환율</MetaTitle>
        </MetaContent>
        <MetaExtra>1,398.2원</MetaExtra>
      </Meta>
      <Meta>
        <TrendIcon />
        <MetaContent>
          <MetaTitle>최근 30일 평균</MetaTitle>
        </MetaContent>
        <MetaExtra>1,398.2원</MetaExtra>
      </Meta>
      <Meta>
        <TrendUpIcon />
        <MetaContent>
          <MetaTitle>최근 30일 최고가</MetaTitle>
        </MetaContent>
        <MetaExtra className="text-end">
          1,398.2원
          <br />
          <span className="text-12 text-gray-400">24.11.01</span>
        </MetaExtra>
      </Meta>
      <Meta>
        <TrendDownIcon />
        <MetaContent>
          <MetaTitle>최근 30일 최저가</MetaTitle>
        </MetaContent>
        <MetaExtra className="text-end">
          1,398.2원
          <br />
          <span className="text-12 text-gray-400">24.11.01</span>
        </MetaExtra>
      </Meta>
    </div>
  )
}

export default ExchangeRateDetailPage
