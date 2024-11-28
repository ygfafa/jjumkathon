import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import { PageHeader } from '@/components/layouts/page-header'
import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'

import MoneyBagGreenIcon from '@/assets/icons/money_bag_green.svg'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'
import { fetchLiveCostClassification } from '@/api/fetch-live-cost-classification'
import dayjs from 'dayjs'
import CountdownTimer from '@/components/count-down-timer'
import { getRewardContent, SubClassification } from '@/api/get-reward-content'
import { Suspense } from 'react'
import { Button } from '@/components/shadcn/button'
import Link from 'next/link'
const GamesPage = async () => {
  // const data = await fetchLiveCostClassification()
  // console.log('🚀 ~ GamesPage ~ data:', data)

  return (
    <Page>
      <PageHeader title="생활물가 맞추기" />

      <div className="px-20 py-12 w-full bg-[#E9F7E8] mb-14">
        <Meta>
          <MoneyIcon />
          <MetaContent>
            <MetaTitle className="text-gray-500">
              생활 물가를 맞출 시
              <b className="font-bold text-green-500"> 100,000P </b>를 나눠
              받아요
            </MetaTitle>
          </MetaContent>
        </Meta>
      </div>

      <PageBody>
        <div className="shadow p-20 rounded-16 mb-32">
          <p className="text-primary mb-4">2024.11.29 기준</p>
          <h3 className="text-24 font-bold mb-28">오늘의 생활물가</h3>

          <div className="flex flex-col gap-24 mb-8">
            {/* {data.list.map(({ id, amount, diffRate, name, unit }) => (
              <Meta key={id}>
                <div className="w-[40px] h-[40px] bg-gray-100 flex-shrink-0 rounded-full flex justify-center items-center">
                  <MoneyBagGreenIcon />
                </div>
                <MetaContent>
                  <MetaTitle>
                    <span className="font-bold">{name}</span> {unit}
                  </MetaTitle>
                  <MetaDescription>
                    <span className="font-bold mr-8">
                      {amount.toLocaleString()}원{' '}
                    </span>
                    <span
                      className={`${
                        diffRate > 0 ? 'text-red-600' : 'text-blue-600'
                      }`}
                    >
                      {diffRate}%
                    </span>
                  </MetaDescription>
                </MetaContent>
                <MetaExtra>
                  <ChevronRightIcon />
                </MetaExtra>
              </Meta>
            ))} */}
          </div>
        </div>

        <div>
          <h3 className="mb-18 text-20 font-bold">오늘의 게임</h3>

          <div className="shadow p-20 rounded-16">
            <div className="text-16 text-[#606A76] mb-24">
              <CountdownTimer
                className="font-bold"
                targetTime={dayjs().endOf('day').toISOString()}
              />{' '}
              내에 참여하지 않으면 사라져요
            </div>
            <Suspense>
              <RewardContent />
            </Suspense>
          </div>
        </div>
      </PageBody>
    </Page>
  )
}

const GAME_TITLE: Record<SubClassification, string> = {
  DIESEL: 'DIESEL',
  GASOLINE: 'GASOLINE',
  KEROSENE: 'KEROSENE',
  LPG: 'LPG',
  PREMIUM_GASOLINE: 'PREMIUM_GASOLINE',
  RICE: 'RICE',
  POTATO: 'POTATO',
  CABBAGE: 'CABBAGE',
  APPLE: 'APPLE',
  LETTUCE: 'LETTUCE',
  USD: 'USD',
  JPY: 'JPY',
  CNY: 'CNY',
  EUR: 'EUR',
}

const GAME_ICON: Record<SubClassification, React.ReactNode> = {
  DIESEL: <MoneyBagGreenIcon />,
  GASOLINE: <MoneyBagGreenIcon />,
  KEROSENE: <MoneyBagGreenIcon />,
  LPG: <MoneyBagGreenIcon />,
  PREMIUM_GASOLINE: <MoneyBagGreenIcon />,
  RICE: <MoneyBagGreenIcon />,
  POTATO: <MoneyBagGreenIcon />,
  CABBAGE: <MoneyBagGreenIcon />,
  APPLE: <MoneyBagGreenIcon />,
  LETTUCE: <MoneyBagGreenIcon />,
  USD: <MoneyBagGreenIcon />,
  JPY: <MoneyBagGreenIcon />,
  CNY: <MoneyBagGreenIcon />,
  EUR: <MoneyBagGreenIcon />,
}
const RewardContent = async () => {
  const data = await getRewardContent('1')
  const tomorrow = dayjs().add(1, 'day').startOf('day')

  return (
    <div className="flex flex-col gap-24">
      {data.list.map(({ desc, subClassification, voteFlag }, index) => (
        <Meta key={index}>
          {GAME_ICON[subClassification]}
          <MetaContent>
            <MetaTitle className="text-16 font-bold">
              {GAME_TITLE[subClassification]}
            </MetaTitle>
            <MetaDescription className="text-14 text-[#949DA8]">
              {voteFlag ? `${tomorrow.format('YY.MM.DD')} 결과발표 예정` : desc}
            </MetaDescription>
          </MetaContent>

          {!voteFlag && (
            <MetaExtra>
              <Link href={`/games/${subClassification}`}>
                <Button>참여</Button>
              </Link>
            </MetaExtra>
          )}
        </Meta>
      ))}
    </div>
  )
}

export default GamesPage
