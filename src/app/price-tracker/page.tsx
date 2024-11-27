import PriceTrackerFilterButtonGroup from '../../features/price-tracker/components/price-tracker-filter-button-group'

import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import {
  PageHeader,
  PageHeaderLeftSlot,
  PageHeaderTitle,
} from '@/components/layouts/page-header'
import PageBackButton from '@/components/page-back-button'
import PriceTrackerContent from '@/features/price-tracker/components/price-tracker-content/price-tracker-content'
import PriceTrackerHeader from '@/features/price-tracker/components/price-tracker-header'
import PromotionAlert from '@/features/price-tracker/components/promotion-alert/promotion-alert'
import { Suspense } from 'react'

const PriceTrackerPage = () => {
  return (
    <Page>
      <PageHeader>
        <PageHeaderLeftSlot>
          <PageBackButton />
        </PageHeaderLeftSlot>
        <PageHeaderTitle>생활물가 알리미</PageHeaderTitle>
      </PageHeader>

      <PageBody noBodyPadding>
        <div className="px-20">
          <Suspense>
            <PriceTrackerFilterButtonGroup className="mb-24" />
          </Suspense>
          <Suspense>
            <PriceTrackerHeader />
            <PriceTrackerContent />
          </Suspense>
        </div>
        <div className="flex-1 px-18 bg-gray-50 pt-24">
          <Suspense>
            <PromotionAlert />
          </Suspense>
        </div>
      </PageBody>

      {/* <Tabs defaultValue="환율" className="mb-5">
                <TabsList>
                    <TabsTrigger value="환율">환율</TabsTrigger>
                    <TabsTrigger value="기름값">기름값</TabsTrigger>
                    <TabsTrigger value="식재료">식재료</TabsTrigger>
                </TabsList>
            </Tabs> */}
      {/* <div className="px-5">
        <h3 className="text-2xl whitespace-pre-line font-semibold mb-3">
          오늘의 환율을
          <br />
          확인해보세요!
        </h3>

        <p className="text-muted-foreground">2024.11.11 기준, 전일 대비</p>
      </div>
      <section className="h-[64px] flex flex-col justify-center px-5 py-2 fixed bottom-0 w-full max-w-[460px]">
        <Button className="w-full h-full text-lg">
          오늘의 생활 시세 알아보기
        </Button>
      </section> */}
    </Page>
  )
}

export default PriceTrackerPage
