import { ClassificationType } from '@/api/fetch-live-cost-classification'

export type PriceTackerType = ClassificationType | 'living-benefits'
export const PRICE_TRACKER_TYPE: {
  key: PriceTackerType
  label: string
  title: string
}[] = [
  {
    key: 'EXCHANGE_RATE',
    label: '환율 정보',
    title: '환율 정보를\n확인해보세요!',
  },
  {
    key: 'FOOD',
    label: '식재료',
    title: '오늘 장보기 전\n참고해보세요!',
  },
  {
    key: 'OIL',
    label: '기름값',
    title: '우리집 근처 저렴한\n주유소를 확인하세요!',
  },
  {
    key: 'living-benefits',
    label: '생활혜택',
    title: '생활에 도움이 될만한\n혜택들을 알려드려요!',
  },
] as const

export const PRICE_TRACKER_PROMOTIONS: {
  title: string
  description: string
  link: string
  target: PriceTackerType
}[] = [
  {
    title: '최대 99만원 세액공제 받기',
    description: '카카오페이증권 연금저축 이벤트',
    target: 'EXCHANGE_RATE',
    link: '/',
  },
  {
    title: '긴급 물가지원 혜택',
    description: '최저가로 장보고 쇼핑환급금 까지!',
    target: 'FOOD',
    link: '/',
  },
  {
    title: '최대 10만원까지 돌려받는',
    description: '주유비 지원 체크카드 도착!',
    target: 'OIL',
    link: '/',
  },
]
