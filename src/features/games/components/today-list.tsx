'use client'

import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

import {
  ClassificationType,
  LiveCostNotiResponse,
} from '@/api/fetch-live-cost-classification'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import { isWebView } from '@/lib/bridge/is-webview'
import { openWebview } from '@/lib/webview'
import { useRouter } from 'next/navigation'

import CalcIcon from '@/assets/icons/grocery_prices.svg'
import MoneyBagGreen from '@/assets/icons/money_bag_green.svg'
import OilIcon from '@/assets/icons/original_ic_basic_outline.svg'

type TodayListProps = {
  data: LiveCostNotiResponse
}

const CLASSIFICATION_ICON: Record<ClassificationType, React.ReactNode> = {
  EXCHANGE_RATE: <MoneyBagGreen />,
  FOOD: <CalcIcon />,
  OIL: <OilIcon />,
}

const TodayList = ({ data }: TodayListProps) => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-24 mb-8">
      {data.list.map(({ id, amount, diffRate, name, unit, classification }) => (
        <Meta
          key={id}
          onClick={() => {
            const path = `/price-tracker/${id}`
            if (isWebView()) {
              openWebview(path)
              return
            }

            router.push(path)
          }}
        >
          <div className="w-[40px] h-[40px] bg-gray-100 flex-shrink-0 rounded-full flex justify-center items-center">
            {CLASSIFICATION_ICON[classification]}
          </div>
          <MetaContent>
            <MetaTitle>
              <span className="font-bold">{name}</span> {unit}
            </MetaTitle>
            <MetaDescription>
              <span className="font-bold mr-8">
                {amount.toLocaleString()}원{' '}
              </span>
              <span
                className={`${diffRate > 0 ? 'text-red-600' : 'text-blue-600'}`}
              >
                {diffRate}%
              </span>
            </MetaDescription>
          </MetaContent>
          <MetaExtra>
            <ChevronRightIcon />
          </MetaExtra>
        </Meta>
      ))}
    </div>
  )
}

export default TodayList
