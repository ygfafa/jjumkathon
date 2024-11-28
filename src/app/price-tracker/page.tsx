import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'
import PriceTrackerContent from '@/features/price-tracker/components/price-tracker-content/price-tracker-content'
import PriceTrackerFilterButtonGroup from '@/features/price-tracker/components/price-tracker-filter-button-group'
import PriceTrackerHeader from '@/features/price-tracker/components/price-tracker-header'
import PromotionAlert from '@/features/price-tracker/components/promotion-alert/promotion-alert'
import { Suspense } from 'react'

const PriceTrackerPage = () => {
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
            <PriceTrackerContent />
          </Suspense>
        </div>
        <div className="flex-1 px-18 bg-gray-50 py-24">
          <Suspense>
            <PromotionAlert />
          </Suspense>
        </div>
      </PageBody>
    </Page>
  )
}

export default PriceTrackerPage
