import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import ChipButton from '@/components/chip-button'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'

import { ClassificationType } from '@/api/fetch-live-cost-classification'
import { fetchLiveCostClassificationDetail } from '@/api/fetch-live-cost-classification-detail'
import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'
import NotificationButton from '@/components/notification-button'
import AdListCard from '@/features/price-tracker/components/ad-list-card'
import DetailSummaryCard from '@/features/price-tracker/components/detail-summary-card'
import Recent30DaysChart from '@/features/price-tracker/components/recent-30-days-chart'
import dayjs from 'dayjs'
import Image from 'next/image'

const TITLE: Record<ClassificationType, string> = {
  FOOD: '식료품',
  EXCHANGE_RATE: '환율',
  OIL: '유가',
}

type PriceTrackerDetailPageProps = {
  params: Promise<{ id: string }>
}
const PriceTrackerDetailPage = async ({
  params,
}: PriceTrackerDetailPageProps) => {
  const { id } = await params
  const data = await fetchLiveCostClassificationDetail(Number(id))
  const chartData = data.list.map((d) => ({ date: d.baseDate, rate: d.amount }))
  const classification = data.classification
  const title = TITLE[classification]
  return (
    <Page>
      <PageHeader title="생활물가 알리미" />
      <PageBody noBodyPadding>
        <div className="px-20 w-full">
          <ChipButton selected className="mb-4">
            {title}
          </ChipButton>
          <div className="mb-32">
            <h2 className="text-24 font-bold">
              {data.name} {data.unit}
            </h2>
            <p className="text-16 font-semibold text-primary">
              어제보다 12.18원 비싸요
            </p>
          </div>

          <DetailSummaryCard
            type={title}
            recent30DaysAvg={data.avgAmount}
            recent30DaysMax={data.highAmount}
            recent30DaysMaxDate={dayjs(data.highDate).format('YY.MM.DD')}
            recent30DaysMin={data.lowAmount}
            recent30DaysMinDate={dayjs(data.lowDate).format('YY.MM.DD')}
            today={data.amount}
          />

          <p className="mt-24 mb-12 text-16 text-gray-500">
            최근 30일간의 추이를 보여드려요
          </p>
          <Recent30DaysChart data={chartData} />
        </div>
        <div className="px-20 py-12 w-full bg-[#E9F7E8]">
          <Meta>
            <MoneyIcon />
            <MetaContent>
              <MetaTitle className="text-gray-500">
                {title}{' '}
                <b className="font-bold text-green-500">정보가 바뀌면 </b>
                알려드릴까요?
              </MetaTitle>
            </MetaContent>
            <MetaExtra>
              <NotificationButton />
            </MetaExtra>
          </Meta>
        </div>

        {classification === 'EXCHANGE_RATE' && (
          <AdListCard
            title="환율 우대 혜택 받기"
            description="시중 은행보다 저렴하게 환전하세요"
            items={[
              {
                image: '/images/hana.png',
                title: '15초 영상광고 보면',
                description: '95% 환율우대 쿠폰 지급',
              },
              {
                image: '/images/travel-wallet.png',
                title: '트래블월렛 카드 사용하면',
                description: '100% 환전 수수료 무료',
              },
            ]}
          />
        )}

        {classification === 'FOOD' && (
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
        )}
        {classification === 'OIL' && (
          <AdListCard
            title="지금 보신 주유소에서 사용 가능한 쿠폰"
            description="최대 3,000원 아낄 수 있어요"
            items={[
              {
                image: '/images/sk.png',
                title: '15초 영상광고 보면',
                description: '1,000원 주유 쿠폰 지급',
              },
              {
                image: '/images/sk.png',
                title: '10초 이내 광고 보면',
                description: '2,000원 세차 할인권 지급',
              },
            ]}
          />
        )}
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

export default PriceTrackerDetailPage
