import TrendIcon from '@/assets/icons/icon-park-solid_trend.svg'
import TrendDownIcon from '@/assets/icons/icon-park-solid_trend_down.svg'
import TrendUpIcon from '@/assets/icons/icon-park-solid_trend_up.svg'
import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import { Meta, MetaContent, MetaExtra, MetaTitle } from '@/components/meta'

const DetailSummaryCard = () => {
  return (
    <div className="bg-gray-50 px-24 py-16 w-full rounded-16 space-y-32">
      <Meta>
        <MoneyIcon />
        <MetaContent>
          <MetaTitle>오늘의 환율</MetaTitle>
        </MetaContent>
        <MetaExtra>1,398.2원</MetaExtra>
      </Meta>
      <Meta>
        <TrendIcon />
        <MetaContent>
          <MetaTitle>최근 30일 평균</MetaTitle>
        </MetaContent>
        <MetaExtra>1,398.2원</MetaExtra>
      </Meta>
      <Meta>
        <TrendUpIcon />
        <MetaContent>
          <MetaTitle>최근 30일 최고가</MetaTitle>
        </MetaContent>
        <MetaExtra className="text-end">
          1,398.2원
          <br />
          <span className="text-12 text-gray-400">24.11.01</span>
        </MetaExtra>
      </Meta>
      <Meta>
        <TrendDownIcon />
        <MetaContent>
          <MetaTitle>최근 30일 최저가</MetaTitle>
        </MetaContent>
        <MetaExtra className="text-end">
          1,398.2원
          <br />
          <span className="text-12 text-gray-400">24.11.01</span>
        </MetaExtra>
      </Meta>
    </div>
  )
}

export default DetailSummaryCard
