'use client'

import dayjs from 'dayjs'
import { PRICE_TRACKER_TYPE } from '../constants'
import useCurrentPriceTrackerType from '../hooks/use-current-price-tracker-type'

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
      <h3 className="whitespace-pre-line text-24 font-bold mb-32">{title}</h3>

      {/* <SelectDialog
        items={[
          { label: '1900', value: '1900' },
          { label: '1901', value: '1901' },
          { label: '1902', value: '1902' },
        ]}
      /> */}
    </section>
  )
}

export default PriceTrackerHeader
