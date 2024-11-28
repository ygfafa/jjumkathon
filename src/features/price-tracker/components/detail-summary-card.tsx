import TrendIcon from '@/assets/icons/icon-park-solid_trend.svg'
import TrendDownIcon from '@/assets/icons/icon-park-solid_trend_down.svg'
import TrendUpIcon from '@/assets/icons/icon-park-solid_trend_up.svg'
import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'

type DetailSummaryCardProps = {
  type: string
  today: number
  recent30DaysAvg: number
  recent30DaysMax: number
  recent30DaysMaxDate: string
  recent30DaysMin: number
  recent30DaysMinDate: string
}
const DetailSummaryCard = ({
  recent30DaysAvg,
  recent30DaysMax,
  recent30DaysMaxDate,
  recent30DaysMin,
  recent30DaysMinDate,
  today,
  type,
}: DetailSummaryCardProps) => {
  return (
    <div className="bg-gray-50 px-24 py-16 w-full rounded-16 space-y-32">
      <Meta>
        <MoneyIcon />
        <MetaContent>
          <MetaTitle>오늘의 {type}</MetaTitle>
        </MetaContent>
        <MetaExtra>{today.toLocaleString()}원</MetaExtra>
      </Meta>
      <Meta>
        <TrendIcon />
        <MetaContent>
          <MetaTitle>최근 30일 평균</MetaTitle>
        </MetaContent>
        <MetaExtra>{recent30DaysAvg.toLocaleString()}원</MetaExtra>
      </Meta>
      <Meta>
        <TrendUpIcon />
        <MetaContent>
          <MetaTitle>최근 30일 최고가</MetaTitle>
        </MetaContent>
        <MetaExtra className="text-end">
          {recent30DaysMax.toLocaleString()}원
          <br />
          <span className="text-12 text-gray-400">{recent30DaysMaxDate}</span>
        </MetaExtra>
      </Meta>
      <Meta>
        <TrendDownIcon />
        <MetaContent>
          <MetaTitle>최근 30일 최저가</MetaTitle>
        </MetaContent>
        <MetaExtra className="text-end">
          {recent30DaysMin.toLocaleString()}원
          <br />
          <span className="text-12 text-gray-400">{recent30DaysMinDate}</span>
        </MetaExtra>
      </Meta>
    </div>
  )
}

export default DetailSummaryCard
