'use client'

import ChipButton from '@/components/chip-button'
import { cn } from '@/lib/utils'
import { PRICE_TRACKER_TYPE } from '../constants'
import useCurrentPriceTrackerType from '../hooks/use-current-price-tracker-type'
import { useQuerySync } from '@/hooks/use-query-sync'

type PriceTrackerFilterButtonGroupProps = Omit<
  React.ComponentProps<'section'>,
  'children'
>
const PriceTrackerFilterButtonGroup = ({
  className,
  ...props
}: PriceTrackerFilterButtonGroupProps) => {
  const { updateType, currentType } = useCurrentPriceTrackerType()

  const { updateQuery } = useQuerySync()

  return (
    <section className={cn('flex gap-6', className)} {...props}>
      {PRICE_TRACKER_TYPE.map(({ key, label }) => (
        <ChipButton
          key={key}
          selected={currentType === key}
          onClick={() => {
            if (currentType === 'OIL') {
              updateQuery({
                type: key,
                subClassification: 'GASOLINE',
                locations: 'GANGNAM_GU',
              })

              return
            }

            updateType(key)
          }}
        >
          {label}
        </ChipButton>
      ))}
    </section>
  )
}

export default PriceTrackerFilterButtonGroup
