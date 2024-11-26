'use client'

import ChipButton from '@/components/chip-button'
import { useQuerySync } from '@/hooks/use-query-sync'
import { cn } from '@/lib/utils'
import { PRICE_TRACKER_INFO } from '../constants'

type PriceTrackerFilterButtonGroupProps = Omit<
  React.ComponentProps<'section'>,
  'children'
>
const PriceTrackerFilterButtonGroup = ({
  className,
  ...props
}: PriceTrackerFilterButtonGroupProps) => {
  const { updateQuery, query } = useQuerySync()

  const currentType = query.type || PRICE_TRACKER_INFO[0].key

  return (
    <section className={cn('flex gap-6', className)} {...props}>
      {PRICE_TRACKER_INFO.map(({ key, label }) => (
        <ChipButton
          key={key}
          selected={currentType === key}
          onClick={() => {
            updateQuery({ type: key })
          }}
        >
          {label}
        </ChipButton>
      ))}
    </section>
  )
}

export default PriceTrackerFilterButtonGroup
