import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'
import PriceTrackerFilterButtonGroup from '@/features/price-tracker/components/price-tracker-filter-button-group'
import PriceTrackerHeader from '@/features/price-tracker/components/price-tracker-header'
import PromotionAlert from '@/features/price-tracker/components/promotion-alert/promotion-alert'
import { Suspense } from 'react'

import { SubClassification } from '@/api/get-reward-content'
import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'
import NotificationButton from '@/components/notification-button'
import LivingBenefits from '@/features/price-tracker/components/living-benefits'
import PriceTackerInfo from '@/features/price-tracker/components/price-tracker-info'
import { PriceTackerType } from '@/features/price-tracker/constants'
type PriceTrackerPageProps = {
  searchParams: Promise<{
    type: PriceTackerType
    subClassification?: SubClassification
    location?: string
  }>
}

const PriceTrackerPage = async ({ searchParams }: PriceTrackerPageProps) => {
  const params = await searchParams

  return (
    <Page>
      <PageHeader title="생활물가 알리미" />
      <PageBody noBodyPadding>
        <div className="px-20">
          <Suspense>
            <PriceTrackerFilterButtonGroup className="mb-24" />
          </Suspense>
          <Suspense>
            <PriceTrackerHeader />
          </Suspense>
        </div>

        <div className="w-full bg-[#E9F7E8] py-12 px-20 mb-20">
          <Meta>
            <MoneyIcon />
            <MetaContent>
              {params.type === 'EXCHANGE_RATE' && (
                <MetaTitle className="text-gray-500">
                  바뀌는
                  <b className="font-bold text-green-500"> 환율 정보 </b>
                  들을 알려드릴까요?
                </MetaTitle>
              )}
              {params.type === 'FOOD' && (
                <MetaTitle className="text-gray-500">
                  우리동네
                  <b className="font-bold text-green-500"> 식재료 가격 </b>
                  알려드릴까요?
                </MetaTitle>
              )}
              {params.type === 'OIL' && (
                <MetaTitle className="text-gray-500">
                  우리동네
                  <b className="font-bold text-green-500"> 최저가 주유소 </b>
                  알려드릴까요?
                </MetaTitle>
              )}
              {params.type === 'living-benefits' && (
                <MetaTitle className="text-gray-500">
                  새로 생길
                  <b className="font-bold text-green-500"> 생활 혜택 </b>
                  들을 알려드릴까요?
                </MetaTitle>
              )}
            </MetaContent>
            <MetaExtra>
              <NotificationButton />
            </MetaExtra>
          </Meta>
        </div>

        <section className="px-20">
          {params.type === 'living-benefits' ? (
            <LivingBenefits />
          ) : (
            <Suspense fallback={<div />}>
              <PriceTackerInfo
                type={params.type || 'EXCHANGE_RATE'}
                location={params?.location}
                subClassification={params?.subClassification}
              />
            </Suspense>
          )}
        </section>

        <Suspense>
          <PromotionAlert />
        </Suspense>
      </PageBody>
    </Page>
  )
}

export default PriceTrackerPage
