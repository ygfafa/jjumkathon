export type PRiceTackerType =
  | 'exchange-rates'
  | 'grocery-prices'
  | 'fuel-prices'
  | 'living-benefits'
export const PRICE_TRACKER_TYPE: {
  key: PRiceTackerType
  label: string
  title: string
}[] = [
  {
    key: 'exchange-rates',
    label: '환율 정보',
    title: '환율 정보를\n확인해보세요!',
  },
  {
    key: 'grocery-prices',
    label: '식재료',
    title: '오늘 장보기 전\n참고해보세요!',
  },
  {
    key: 'fuel-prices',
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
  target: PRiceTackerType
}[] = [
  {
    title: '최대 99만원 세액공제 받기',
    description: '카카오페이증권 연금저축 이벤트',
    target: 'exchange-rates',
    link: '/',
  },
  {
    title: '긴급 물가지원 혜택',
    description: '최저가로 장보고 쇼핑환급금 까지!',
    target: 'grocery-prices',
    link: '/',
  },
  {
    title: '최대 10만원까지 돌려받는',
    description: '주유비 지원 체크카드 도착!',
    target: 'fuel-prices',
    link: '/',
  },
]
