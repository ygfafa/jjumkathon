import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

import GroceryPricesIcon from '@/assets/icons/grocery_prices.svg'
import {
  PriceTrackerAvatarWrapper,
  PriceTrackerContentWrapper,
  PriceTrackerRateWrapper,
} from './price-tracker-content-template'
import Link from 'next/link'

const DUMMY_DATA = [
  {
    title: '쌀',
    description: '20kg',
    rate: -0.35,
    price: 1403,
  },
  {
    title: '삼겹살',
    description: '100g',
    rate: 0.15,
    price: 1450,
  },
  {
    title: '계란',
    description: '20구',
    rate: -0.25,
    price: 855,
  },
  {
    title: '배추',
    description: '1포기',
    rate: -0.11,
    price: 192,
  },
]

const GroceryPrices = () => {
  return (
    <PriceTrackerContentWrapper>
      {DUMMY_DATA.map((data, index) => (
        <Link href={`/price-tracker/grocery-prices/${index}`} key={index}>
          <Meta key={index}>
            <PriceTrackerAvatarWrapper>
              <GroceryPricesIcon />
            </PriceTrackerAvatarWrapper>
            <MetaContent>
              <MetaTitle>
                <span className="font-bold">{data.title}</span>{' '}
                {data.description}
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

export default GroceryPrices
