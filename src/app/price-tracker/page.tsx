import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'
import PriceTrackerFilterButtonGroup from '@/features/price-tracker/components/price-tracker-filter-button-group'
import PriceTrackerHeader from '@/features/price-tracker/components/price-tracker-header'
import PromotionAlert from '@/features/price-tracker/components/promotion-alert/promotion-alert'
import { Suspense } from 'react'

import { SubClassification } from '@/api/get-reward-content'
import LivingBenefits from '@/features/price-tracker/components/living-benefits'
import PriceTackerInfo from '@/features/price-tracker/components/price-tracker-info'
import { PriceTackerType } from '@/features/price-tracker/constants'
type PriceTrackerPageProps = {
  searchParams: Promise<{
    type: PriceTackerType
    subType?: SubClassification
    locations?: string
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

          {params.type === 'living-benefits' ? (
            <LivingBenefits />
          ) : (
            <Suspense fallback={<div />}>
              <PriceTackerInfo
                type={params.type || 'EXCHANGE_RATE'}
                locations={params?.locations}
                subType={params?.subType}
              />
            </Suspense>
          )}
        </div>

        <Suspense>
          <PromotionAlert />
        </Suspense>
      </PageBody>
    </Page>
  )
}

export default PriceTrackerPage
