import EnvelopeIcon from '@/assets/icons/envelope.svg'
import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import PageBottomFixedArea from '@/components/layouts/page-bottom-fixed-area'
import { PageHeader } from '@/components/layouts/page-header'
import { Button } from '@/components/shadcn/button'
import Image from 'next/image'
import Link from 'next/link'

const ExchangeRateGamePage = () => {
  return (
    <Page
      style={{
        background: 'linear-gradient(180deg, #6403DF 11.96%, #240151 96.81%)',
      }}
    >
      <PageHeader
        title="환율 맞추기 게임"
        className="bg-transparent text-white"
        appBar={{ overlay: true, themeColor: '#ffffff' }}
      />

      <PageBody noBodyPadding>
        <h2 className="font-bold text-24 text-white text-center">
          내일자 환율 예측하고 <br />
          <b className="text-[#FBB62D]">10만 포인트</b> 받아요
        </h2>

        <Image
          src="/images/exchange-rate-game-counter.png"
          alt="avatar"
          width={1000}
          height={404}
          objectFit="cover"
          layout="responsive"
        />

        <div className="px-24 mt-32">
          <div className="flex gap-8 items-center">
            <MoneyIcon />
            <span className="text-[#D4D5FE]">
              10만 포인트를 승리팀이 나눠가져요
            </span>
          </div>

          <div className="h-[1px] bg-[#4F119C] my-12" />

          <div className="flex gap-8 items-center">
            <EnvelopeIcon />
            <span className="text-[#D4D5FE]">
              결과는 다음 날 오전 9시 확인 가능해요
            </span>
          </div>
        </div>
      </PageBody>

      <PageBottomFixedArea>
        <Link href="/games/exchange-rate/play">
          <Button size="lg" className="w-full">
            게임 참여하기
          </Button>
        </Link>
      </PageBottomFixedArea>
    </Page>
  )
}

export default ExchangeRateGamePage
