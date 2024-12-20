import { useQuerySync } from '@/hooks/use-query-sync'
import { PRICE_TRACKER_TYPE, PriceTackerType } from '../constants'

const useCurrentPriceTrackerType = () => {
  const { updateQuery, query } = useQuerySync()
  const currentType = (query.type ||
    PRICE_TRACKER_TYPE[0].key) as PriceTackerType

  const updateType = (type: PriceTackerType) => {
    updateQuery({ type })
  }

  return { currentType, updateType }
}

export default useCurrentPriceTrackerType
