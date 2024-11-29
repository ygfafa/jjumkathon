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
import { cookies } from 'next/headers'
const GamesPage = async () => {
  const data = await fetchLiveCostClassification()

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
            {data.list.map(({ id, amount, diffRate, name, unit }) => (
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
            ))}
          </div>
        </div>

        <div>
          <h3 className=" text-20 font-bold">오늘의 게임</h3>
          <p className="mb-18 text-primary">
            모두 참여하고 최대 100만 포인트 받기
          </p>

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
  DIESEL: '내일 경유값 맞추기',
  GASOLINE: '내일 휘발유값 맞추기',
  KEROSENE: '내일 등유값 맞추기',
  LPG: '내일 가스값 맞추기',
  PREMIUM_GASOLINE: '내일 고급 휘발유값 맞추기',
  RICE: '내일 쌀값 맞추기',
  POTATO: '내일 감자값 맞추기',
  CABBAGE: '내일 배추값 맞추기',
  PORK: '내일 삼겹살값 맞추기',
  APPLE: '내일 사과값 맞추기',
  LETTUCE: '내일 상추값 맞추기',
  USD: '내일 달러 환율 맞추기',
  JPY: '내일 엔화 환율 맞추기',
  CNY: '내일 위안 환율 맞추기',
  EUR: '내일 유로 환율 맞추기',
}

const RewardContent = async () => {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value || 1
  const data = await getRewardContent(Number(userId))
  const tomorrow = dayjs().add(1, 'day').startOf('day')

  const gameCount = data.list.filter((item) => item.voteFlag).length

  return (
    <div className="flex flex-col gap-24">
      {data.list.map(({ subClassification, voteFlag }, index) => {
        const gameBlocked = gameCount <= index
        const currentBlockedGame = data.list[gameCount]

        const isCurrentGame =
          currentBlockedGame.subClassification !== subClassification

        return (
          <Meta key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M12.4575 8.09717H28.1114L26.1547 12.6286H14.4143L12.4575 8.09717Z"
                fill="#5CC257"
              />
              <path
                d="M35.1138 23.5134C35.1138 30.8903 28.4744 33.6365 20.2842 33.6365C12.094 33.6365 5.45459 30.8903 5.45459 23.5134C5.45459 16.1364 13.4978 10.1562 20.2842 10.1562C26.901 10.1562 35.1138 16.1364 35.1138 23.5134Z"
                fill="#85D880"
              />
              <path
                d="M16.165 7.27246H24.4039L22.6875 11.8038H17.8815L16.165 7.27246Z"
                fill="#85D880"
              />
              <path
                d="M20.2317 15.5112C21.4679 15.5112 22.4628 15.8361 23.2163 16.4858C23.9814 17.1355 24.3768 18.0521 24.4026 19.2355C24.4263 20.3261 24.0867 21.1789 23.3838 21.7938C22.6921 22.3971 21.763 22.7045 20.5964 22.7161L20.5381 24.0214H17.9386L17.7816 20.7844H18.8214C19.711 20.7844 20.3844 20.6742 20.8418 20.4537C21.3107 20.2333 21.5388 19.833 21.5262 19.2529C21.5173 18.8468 21.4006 18.5278 21.1761 18.2957C20.9515 18.0637 20.6428 17.9477 20.25 17.9477C19.8341 17.9477 19.5133 18.0695 19.2875 18.3131C19.0615 18.5452 18.9529 18.8642 18.9617 19.2703H16.1716C16.1331 18.5626 16.2636 17.9245 16.5632 17.356C16.8743 16.7875 17.3383 16.3408 17.9551 16.0159C18.5832 15.6795 19.3421 15.5112 20.2317 15.5112ZM19.3715 28.5462C18.8516 28.5462 18.4208 28.3954 18.0792 28.0937C17.7489 27.7805 17.5788 27.3976 17.569 26.9451C17.5589 26.481 17.7122 26.0924 18.0289 25.7791C18.3571 25.4658 18.7812 25.3092 19.3011 25.3092C19.8094 25.3092 20.2287 25.4658 20.559 25.7791C20.9009 26.0924 21.0769 26.481 21.087 26.9451C21.0968 27.3976 20.9376 27.7805 20.6094 28.0937C20.2925 28.3954 19.8798 28.5462 19.3715 28.5462Z"
                fill="#308F2B"
              />
            </svg>
            <MetaContent>
              <MetaTitle className="text-16 font-bold">
                {GAME_TITLE[subClassification]}
              </MetaTitle>

              {gameBlocked && (
                <MetaDescription className="text-14 text-primary">
                  30초 광고보고 게임에 참여하세요
                </MetaDescription>
              )}

              {voteFlag && (
                <MetaDescription className="text-14 text-[#949DA8]">
                  {tomorrow.format('YY.MM.DD')} 결과발표 예정
                </MetaDescription>
              )}
            </MetaContent>

            {!voteFlag && (
              <MetaExtra>
                <Button disabled={isCurrentGame && gameBlocked}>
                  <Link
                    href={
                      isCurrentGame
                        ? `/games/${subClassification}`
                        : `/ad?redirectTo=/games/${subClassification}`
                    }
                  >
                    참여
                  </Link>
                </Button>
              </MetaExtra>
            )}
          </Meta>
        )
      })}
    </div>
  )
}

export default GamesPage
