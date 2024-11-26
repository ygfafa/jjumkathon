import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'
import { Button } from '@/components/shadcn/button'

import MoneyBagGreen from '@/assets/icons/money_bag_green.svg'

const DUMMY_DATA = [
  {
    nation: '미국',
    currency: 'USD',
    rate: -0.35,
    price: 1403,
  },
  {
    nation: '유럽',
    currency: 'EUR',
    rate: 0.15,
    price: 1450,
  },
  {
    nation: '일본',
    currency: 'JPY',
    rate: -0.25,
    price: 855,
  },
  {
    nation: '중국',
    currency: 'CNY',
    rate: -0.11,
    price: 192,
  },
]

const ExchangeRates = () => {
  return (
    <div className="flex flex-col gap-y-32">
      {DUMMY_DATA.map((data, index) => (
        <Meta key={index}>
          <div className="w-[40px] h-[40px] bg-gray-100 flex-shrink-0 rounded-full flex justify-center items-center">
            <MoneyBagGreen />
          </div>
          <MetaContent>
            <MetaTitle>
              <span className="font-bold">{data.nation}</span> {data.currency}
            </MetaTitle>
            <MetaDescription>
              <span className="font-bold mr-8">
                {data.price.toLocaleString()}원{' '}
              </span>
              <span
                className={`${
                  data.rate > 0 ? 'text-red-600' : 'text-blue-600'
                }`}
              >
                {data.rate}%
              </span>
            </MetaDescription>
          </MetaContent>
          <MetaExtra className="flex-shrink-0">
            <Button size="sm">알림받기</Button>
          </MetaExtra>
        </Meta>
      ))}
    </div>
  )
}

export default ExchangeRates
