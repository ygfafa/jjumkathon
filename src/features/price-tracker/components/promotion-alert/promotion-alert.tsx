'use client'

import { PRICE_TRACKER_PROMOTIONS } from '../../constants'
import useCurrentPriceTrackerType from '../../hooks/use-current-price-tracker-type'
import PromotionAlertTemplate from './promotion-alert-template'

const PromotionAlert = () => {
  const { currentType } = useCurrentPriceTrackerType()

  const currentPromotion = PRICE_TRACKER_PROMOTIONS.find(
    (promotion) => promotion.target === currentType
  )

  if (!currentPromotion) return null

  return <PromotionAlertTemplate {...currentPromotion} />
}

export default PromotionAlert
