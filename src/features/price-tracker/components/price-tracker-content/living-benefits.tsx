import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

import LivingBenefitsIcon from '@/assets/icons/living_benefits.svg'
import {
  PriceTrackerAvatarWrapper,
  PriceTrackerContentWrapper,
} from './price-tracker-content-template'
import Link from 'next/link'

const DUMMY_DATA = [
  {
    title: '생활 속 급전 필요할 때',
    description: '비상금 대출비교',
  },
  {
    title: '최저가로 장보고',
    description: '쇼핑환급금 받기',
  },
  {
    title: '다음날 난방비 아끼기',
    description: '에너지 캐시백',
  },
  {
    title: '출퇴근없이',
    description: '월급만큼 버는 N잡',
  },
]

const LivingBenefits = () => {
  return (
    <PriceTrackerContentWrapper>
      {DUMMY_DATA.map((data, index) => (
        <Link href="https://naver.com" key={index}>
          <Meta>
            <PriceTrackerAvatarWrapper>
              <LivingBenefitsIcon />
            </PriceTrackerAvatarWrapper>
            <MetaContent>
              <MetaTitle className="text-primary">{data.title}</MetaTitle>
              <MetaDescription className="font-semibold">
                {data.description}
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

export default LivingBenefits
