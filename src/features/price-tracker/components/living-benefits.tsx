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
    <div className="flex flex-col gap-y-32 pb-12">
      {DUMMY_DATA.map((data, index) => (
        <Link href="https://naver.com" key={index}>
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
