'use client'

import { PRICE_TRACKER_INFO } from '../../constants'
import useCurrentPriceTrackerType from '../../hooks/use-current-price-tracker-type'
import ExchangeRates from './exchange-rates'

const PriceInfoTitle = () => {
  const { currentType } = useCurrentPriceTrackerType()

  const title = PRICE_TRACKER_INFO.find(
    (item) => item.key === currentType
  )?.title
  return (
    <h3 className="whitespace-pre-line text-24 font-bold mb-32">{title}</h3>
  )
}

const PriceInfoContent = () => {
  return <ExchangeRates />
}

const PriceInfo = () => {
  return (
    <section className="mb-20">
      <p className="text-blue-500 text-16 mb-2 font-semibold">
        2024.11.22 기준
      </p>
      <PriceInfoTitle />
      <PriceInfoContent />
    </section>
  )
}

export default PriceInfo
