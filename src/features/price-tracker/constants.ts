export type PriceTrackerKeys =
  | 'exchange-rates'
  | 'grocery-prices'
  | 'fuel-prices'
  | 'living-benefits'
export const PRICE_TRACKER_INFO: {
  key: PriceTrackerKeys
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
