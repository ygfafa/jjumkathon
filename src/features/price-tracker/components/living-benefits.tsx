import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

import LivingBenefitsIcon from '@/assets/icons/living_benefits.svg'

import Link from 'next/link'

const items = [
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
  {
    title: '최대 48만원 현금으로 돌려받는',
    description: '인터넷 지원금 이벤트',
  },
]

const LivingBenefits = () => {
  return (
    <div className="flex flex-col gap-y-32 pb-24">
      {items.map((data, index) => (
        <Link href="/price-tracker/living-benefits" key={index}>
          <Meta>
            <div className="w-[40px] h-[40px] bg-gray-100 flex-shrink-0 rounded-full flex justify-center items-center">
              <LivingBenefitsIcon />
            </div>
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
    </div>
  )
}

export default LivingBenefits
