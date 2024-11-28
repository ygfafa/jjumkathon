import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'
import { fetchLiveCostClassification } from '@/api/fetch-live-cost-classification'
import PriceTrackerFilterButtonGroup from '@/features/price-tracker/components/price-tracker-filter-button-group'
import PriceTrackerHeader from '@/features/price-tracker/components/price-tracker-header'
import PromotionAlert from '@/features/price-tracker/components/promotion-alert/promotion-alert'
import { Suspense } from 'react'

import LivingBenefits from '@/features/price-tracker/components/living-benefits'
import PriceTackerInfo from '@/features/price-tracker/components/price-tracker-info'
type PriceTrackerPageProps = {
  searchParams: Promise<{ type: string }>
}

const PriceTrackerPage = async ({ searchParams }: PriceTrackerPageProps) => {
  const params = await searchParams

  const data = await fetchLiveCostClassification('EXCHANGE_RATE')
  // const data = await fetchLiveCostClassification(params.type || 'EXCHANGE_RATE')

  return (
    <Page>
      <PageHeader title="생활물가 알리미" />
      <PageBody noBodyPadding>
        <div className="px-20">
          <Suspense>
            <PriceTrackerFilterButtonGroup className="mb-24" />
          </Suspense>
          <Suspense>
            <PriceTrackerHeader baseDate={data.baseDate} />
          </Suspense>

          {params.type === 'living-benefits' ? (
            <LivingBenefits />
          ) : (
            <PriceTackerInfo data={data} />
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
