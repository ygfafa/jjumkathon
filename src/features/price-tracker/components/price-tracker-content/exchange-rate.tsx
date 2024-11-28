import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'

import MoneyBagGreen from '@/assets/icons/money_bag_green.svg'
import {
  PriceTrackerAvatarWrapper,
  PriceTrackerContentWrapper,
  PriceTrackerRateWrapper,
} from './price-tracker-content-template'
import Link from 'next/link'

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

const ExchangeRate = () => {
  return (
    <PriceTrackerContentWrapper>
      {DUMMY_DATA.map((data, index) => (
        <Link
          href={`/price-tracker/exchange-rates/${data.currency}`}
          key={index}
        >
          <Meta>
            <PriceTrackerAvatarWrapper>
              <MoneyBagGreen />
            </PriceTrackerAvatarWrapper>
            <MetaContent>
              <MetaTitle>
                <span className="font-bold">{data.nation}</span> {data.currency}
              </MetaTitle>
              <MetaDescription>
                <span className="font-bold mr-8">
                  {data.price.toLocaleString()}원{' '}
                </span>
                <PriceTrackerRateWrapper up={data.rate > 0}>
                  {data.rate}%
                </PriceTrackerRateWrapper>
              </MetaDescription>
            </MetaContent>
            <MetaExtra>
              <ChevronRightIcon />
            </MetaExtra>
          </Meta>
        </Link>
      ))}
    </PriceTrackerContentWrapper>
  )
}

export default ExchangeRate
