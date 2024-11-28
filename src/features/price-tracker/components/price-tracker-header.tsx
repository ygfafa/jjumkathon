'use client'

import dayjs from 'dayjs'
import { PRICE_TRACKER_TYPE } from '../constants'
import useCurrentPriceTrackerType from '../hooks/use-current-price-tracker-type'
import AddressSelectBottomSheet from '@/components/address-select-bottom-sheet'
import { cn } from '@/lib/utils'
import OilSelectBottomSheet from '@/components/oil-select-bottom-sheet'

const PriceTrackerHeader = () => {
  const { currentType } = useCurrentPriceTrackerType()

  const title = PRICE_TRACKER_TYPE.find(
    (item) => item.key === currentType
  )?.title
  return (
    <section className="mb-20">
      <p className="text-blue-500 text-16 font-semibold">
        {dayjs().format('YYYY.MM.DD')} 기준
      </p>
      <h3
        className={cn(
          'whitespace-pre-line text-24 font-bold',
          currentType === 'OIL' ? 'mb-16' : 'mb-32'
        )}
      >
        {title}
      </h3>

      {currentType === 'OIL' && (
        <div className="mb-24 flex gap-8">
          <AddressSelectBottomSheet />
          <OilSelectBottomSheet />
        </div>
      )}
    </section>
  )
}

export default PriceTrackerHeader
