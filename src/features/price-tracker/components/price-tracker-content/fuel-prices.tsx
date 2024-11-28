import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

import FuelPricesIcon from '@/assets/icons/fuel_prices.svg'
import {
  PriceTrackerAvatarWrapper,
  PriceTrackerContentWrapper,
} from './price-tracker-content-template'
import Link from 'next/link'

const DUMMY_DATA = [
  {
    title: '오일프러스 셀프',
    price: 1403,
  },
  {
    title: '방죽주유소',
    price: 1450,
  },
  {
    title: 'SK 서광주유소',
    price: 855,
  },
  {
    title: '일원주유소',
    price: 192,
  },
]

const FuelPrices = () => {
  return (
    <PriceTrackerContentWrapper>
      {DUMMY_DATA.map((data, index) => (
        <Link href={`/price-tracker/fuel-prices/${index}`} key={index}>
          <Meta key={index}>
            <PriceTrackerAvatarWrapper>
              <FuelPricesIcon />
            </PriceTrackerAvatarWrapper>
            <MetaContent>
              <MetaTitle>
                <span className="font-bold">{data.title}</span>
              </MetaTitle>
              <MetaDescription className="font-bold">
                {data.price.toLocaleString()}원{' '}
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

export default FuelPrices
