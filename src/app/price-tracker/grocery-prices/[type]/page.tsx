import ChipButton from '@/components/chip-button'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'
import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'

import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'
import { Button } from '@/components/shadcn/button'
import DetailSummaryCard from '@/features/price-tracker/components/detail-summary-card'
import PromotionAlertTemplate from '@/features/price-tracker/components/promotion-alert/promotion-alert-template'
import Recent30DaysChart from '@/features/price-tracker/components/recent-30-days-chart'
import { PRICE_TRACKER_PROMOTIONS } from '@/features/price-tracker/constants'
import Image from 'next/image'

const ExchangeRateDetailPage = () => {
  return (
    <Page>
      <PageHeader title="생활물가 알리미" />

      <PageBody noBodyPadding>
        <div className="px-20 w-full">
          <ChipButton selected className="mb-4">
            식재료
          </ChipButton>
          <div className="mb-32">
            <h2 className="text-24 font-bold">삼겹살 100g</h2>
            <p className="text-16 font-semibold text-primary">
              어제보다 12.18원 비싸요
            </p>
          </div>

          <DetailSummaryCard
            type="가격"
            recent30DaysAvg={1000}
            recent30DaysMax={1000}
            recent30DaysMaxDate="11.11.11"
            recent30DaysMin={1000}
            recent30DaysMinDate="11.11.11"
            today={1200}
          />

          <p className="mt-24 mb-12 text-16 text-gray-500">
            최근 30일간의 추이를 보여드려요
          </p>
          <Recent30DaysChart />
        </div>

        <div className="px-20 py-12 w-full bg-[#E9F7E8]">
          <Meta>
            <MoneyIcon />
            <MetaContent>
              <MetaTitle className="text-gray-500">
                식재료{' '}
                <b className="font-bold text-green-500">가격이 바뀌면 </b>
                알려드릴까요?
              </MetaTitle>
            </MetaContent>
            <MetaExtra>
              <Button size="sm">알림받기</Button>
            </MetaExtra>
          </Meta>
        </div>

        <section className="px-20 py-32 bg-gray-50">
          <h3 className="mb-6 text-20 font-bold">정육각 삼겹살데이 기획전</h3>
          <p className="text-16 text-primary mb-20">
            시중가 보다 2,900원 이상 저렴해요
          </p>
          <div className="flex gap-16 overflow-scroll scrollbar-hide px-20">
            <ProductCard
              image="/images/meet-1.png"
              title="초신선 돼지 삼겹살 + 목살 세트"
              description="27,600 원 (900g)"
            />
            <ProductCard
              image="/images/meet-2.png"
              title="초신선 무항생제 돼지 삼겹살"
              description="31,400 원 (600g)"
            />
            <ProductCard
              image="/images/meet-3.png"
              title="초신선 돼지 삼겹살 + 목살 세트"
              description="19,900 원"
            />
            <ProductCard
              image="/images/meet-1.png"
              title="초신선 돼지 삼겹살 + 목살 세트"
              description="27,600 원 (900g)"
            />
            <ProductCard
              image="/images/meet-2.png"
              title="초신선 무항생제 돼지 삼겹살"
              description="31,400 원 (600g)"
            />
            <ProductCard
              image="/images/meet-3.png"
              title="초신선 돼지 삼겹살 + 목살 세트"
              description="19,900 원"
            />
          </div>
        </section>
      </PageBody>
    </Page>
  )
}

type ProductCardProps = {
  image: string
  title: string
  description: string
}
const ProductCard = ({ description, image, title }: ProductCardProps) => {
  return (
    <div className="flex-shrink-0 max-w-[140px]">
      <div className="mb-16">
        <Image src={image} alt={title} width={140} height={140} />
      </div>
      <span className="break-keep text-[#3A4047]">{title}</span>
      <p className="text-12 text-[#87929E]">{description}</p>
    </div>
  )
}

export default ExchangeRateDetailPage
