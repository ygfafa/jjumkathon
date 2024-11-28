import {
  ClassificationType,
  fetchLiveCostClassification,
} from '@/api/fetch-live-cost-classification'
import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

import Link from 'next/link'

import ChevronRightIcon from '@/assets/icons/chevron-right.svg'

import { SubClassification } from '@/api/get-reward-content'
import CalcIcon from '@/assets/icons/grocery_prices.svg'
import MoneyBagGreen from '@/assets/icons/money_bag_green.svg'
import OilIcon from '@/assets/icons/original_ic_basic_outline.svg'

type PriceTackerInfoProps = {
  type: ClassificationType
  subType?: SubClassification
  locations?: string
}

const ICON: Record<ClassificationType, React.ReactNode> = {
  EXCHANGE_RATE: <MoneyBagGreen />,
  FOOD: <CalcIcon />,
  OIL: <OilIcon />,
}

const PriceTackerInfo = async ({
  type,
  subType,
  locations,
}: PriceTackerInfoProps) => {
  const data = await fetchLiveCostClassification({
    classification: type,
    subClassification: subType,
    locations,
  })

  return (
    <div className="flex flex-col gap-y-32 pb-24">
      {data.list.map((data, index) => (
        <Link href={`/price-tracker/${data.id}`} key={index}>
          <Meta>
            <div className="w-[40px] h-[40px] bg-gray-100 flex-shrink-0 rounded-full flex justify-center items-center">
              {ICON[type]}
            </div>
            <MetaContent>
              <MetaTitle>
                <span className="font-bold">{data.name}</span> {data.unit}
              </MetaTitle>
              <MetaDescription>
                <span className="font-bold mr-8">
                  {data.amount.toLocaleString()}원{' '}
                </span>
                <span
                  className={`${
                    data.diffRate ? 'text-red-600' : 'text-blue-600'
                  }`}
                >
                  {data.diffRate}%
                </span>
              </MetaDescription>
            </MetaContent>
            <MetaExtra>
              <ChevronRightIcon />
            </MetaExtra>
          </Meta>
        </Link>
      ))}
    </div>
  )
}

export default PriceTackerInfo
