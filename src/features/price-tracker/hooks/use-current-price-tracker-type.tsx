import { useQuerySync } from '@/hooks/use-query-sync'
import { PRICE_TRACKER_INFO, PriceTrackerKeys } from '../constants'

const useCurrentPriceTrackerType = () => {
  const { updateQuery, query } = useQuerySync()
  const currentType = query.type || PRICE_TRACKER_INFO[0].key

  const updateType = (type: PriceTrackerKeys) => {
    updateQuery({ type })
  }

  return { currentType, updateType }
}

export default useCurrentPriceTrackerType
