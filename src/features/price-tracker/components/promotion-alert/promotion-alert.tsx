'use client'

import React from 'react'
import PromotionAlertTemplate from './promotion-alert-template'
import { PriceTrackerKeys } from '../../constants'
import { useQuerySync } from '@/hooks/use-query-sync'
import useCurrentPriceTrackerType from '../../hooks/use-current-price-tracker-type'

const promotions: {
  title: string
  description: string
  link: string
  target: PriceTrackerKeys
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
  {
    title: '최대 48만원 현금으로 돌려받는',
    description: '인터넷 지원금 이벤트',
    target: 'living-benefits',
    link: '/',
  },
]

const PromotionAlert = () => {
  const { currentType } = useCurrentPriceTrackerType()

  const currentPromotion = promotions.find(
    (promotion) => promotion.target === currentType
  )

  if (!currentPromotion) return null

  return <PromotionAlertTemplate {...currentPromotion} />
}

export default PromotionAlert
