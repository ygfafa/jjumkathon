'use client'

import useCurrentPriceTrackerType from '../../hooks/use-current-price-tracker-type'
import ExchangeRate from './exchange-rate'
import FuelPrices from './fuel-prices'
import GroceryPrices from './grocery-prices'
import LivingBenefits from './living-benefits'

const PriceTrackerContent = () => {
  const { currentType } = useCurrentPriceTrackerType()

  return (
    <div className="mb-20">
      {(() => {
        if (currentType === 'exchange-rates') return <ExchangeRate />
        if (currentType === 'fuel-prices') return <FuelPrices />
        if (currentType === 'grocery-prices') return <GroceryPrices />
        if (currentType === 'living-benefits') return <LivingBenefits />
        return null
      })()}
    </div>
  )
}

export default PriceTrackerContent
