import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import ChipButton from '@/components/chip-button'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'

import CopyButton from '@/components/copy-button'
import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'
import { Button } from '@/components/shadcn/button'
import AdListCard from '@/features/price-tracker/components/ad-list-card'
import DetailSummaryCard from '@/features/price-tracker/components/detail-summary-card'
import Recent30DaysChart from '@/features/price-tracker/components/recent-30-days-chart'

const ExchangeRateDetailPage = () => {
  return (
    <Page>
      <PageHeader title="생활물가 알리미" />

      <PageBody noBodyPadding>
        <div className="px-20 w-full">
          <ChipButton selected className="mb-4">
            휘발유
          </ChipButton>
          <div className="mb-32">
            <div className="flex items-end gap-4">
              <h2 className="text-24 font-bold">SK 서광주유소</h2>
              <CopyButton
                className="text-12 font-bold p-6 underline"
                copyText="zzzz"
              >
                주소복사
              </CopyButton>
            </div>
            <p className="text-16 font-semibold text-primary">
              어제보다 12.18원 비싸요
            </p>
          </div>

          <DetailSummaryCard
            type="주유가격"
            recent30DaysAvg={1000}
            recent30DaysMax={1000}
            recent30DaysMaxDate="11.11.11"
            recent30DaysMin={1000}
            recent30DaysMinDate="11.11.11"
            today={1200}
          />

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
                주유소
                <b className="font-bold text-green-500"> 가격이 바뀌면 </b>
                알려드릴까요?
              </MetaTitle>
            </MetaContent>
            <MetaExtra>
              <Button size="sm">알림받기</Button>
            </MetaExtra>
          </Meta>
        </div>

        <AdListCard
          title="지금 보신 주유소에서 사용 가능한 쿠폰"
          description="최대 3,000원 아낄 수 있어요"
          items={[
            {
              image: '/images/sk.png',
              title: '15초 영상광고 보면',
              description: '1,000원 주유 쿠폰 지급',
            },
            {
              image: '/images/sk.png',
              title: '10초 이내 광고 보면',
              description: '2,000원 세차 할인권 지급',
            },
          ]}
        />
      </PageBody>
    </Page>
  )
}

export default ExchangeRateDetailPage
