import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'
import Image from 'next/image'

import NoIcon from '@/assets/icons/no.svg'
import YesIcon from '@/assets/icons/yes.svg'
import CountdownTimer from '@/components/count-down-timer'
import { cn } from '@/lib/utils'
import dayjs from 'dayjs'

const ExchangeRateGamePlayPage = () => {
  const endOfDay = dayjs().endOf('day').toISOString()

  return (
    <Page
      className="bg-red-50"
      style={{
        background: 'linear-gradient(180deg, #6403DF 11.96%, #240151 96.81%)',
      }}
    >
      <PageHeader title="" className="bg-transparent" />

      <PageBody>
        <h2 className="font-bold text-20 text-white  mb-8">
          내일 환율을 예측하세요
        </h2>

        <div className="text-white">
          <p>24.11.21 기준 환율 1,398.2원</p>
          <p>최근 30일 평균 1,386 원</p>
          <p>최근 30일 최고가 1,399.1원</p>
          <p>최근 30일 최저가 1,304.2원</p>
        </div>

        <div className="flex flex-col gap-14 mb-32">
          <Image
            src="/images/exchange-rate-game-flag.png"
            alt="avatar"
            width={1000}
            height={404}
            objectFit="cover"
            layout="responsive"
          />
          <CountdownTimer className="text-[#AEB0F1]" targetTime={endOfDay} />
        </div>

        <SelectButton>
          <NoIcon />
        </SelectButton>
        <SelectButton>
          <YesIcon />
        </SelectButton>
      </PageBody>
    </Page>
  )
}

const SelectButton = ({
  className,
  ...props
}: React.ComponentProps<'button'>) => (
  <button className={cn('', className)} {...props} />
)

export default ExchangeRateGamePlayPage
