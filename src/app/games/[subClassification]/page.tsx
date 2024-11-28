import { SubClassification } from '@/api/get-reward-content'
import { getRewardVote } from '@/api/get-reward-vote'
import EnvelopeIcon from '@/assets/icons/envelope.svg'
import MoneyIcon from '@/assets/icons/original_ic_basic_outline.svg'
import Page from '@/components/layouts/page'
import { PageBody } from '@/components/layouts/page-body'
import PageBottomFixedArea from '@/components/layouts/page-bottom-fixed-area'
import { PageHeader } from '@/components/layouts/page-header'
import { Button } from '@/components/shadcn/button'
import VoteBar from '@/components/vote-bar'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

type GameLandingPageProps = {
  params: Promise<{ subClassification: SubClassification }>
}

const GameLandingPage = async ({ params }: GameLandingPageProps) => {
  const { subClassification } = await params

  const data = await getRewardVote(subClassification)
  return (
    <Page
      style={{
        background: 'linear-gradient(180deg, #6403DF 11.96%, #240151 96.81%)',
      }}
    >
      <PageHeader
        title={`${subClassification} 맞추기 게임`}
        className="bg-transparent text-white"
        appBar={{ overlay: true, themeColor: '#ffffff' }}
      />

      <PageBody>
        <h2 className="font-bold text-24 text-white text-center">
          내일자 {subClassification} 예측하고 <br />
          <b className="text-[#FBB62D]">10만 포인트</b> 받아요
        </h2>

        <div className="mb-32">
          <Image
            className="relative -mb-[64px] -z-1"
            src="/images/vote-bar-avatar.png"
            alt="avatar"
            width={340}
            height={220}
            objectFit="cover"
            layout="responsive"
          />

          <div className="relative z-1 rounded-14 bg-white px-24 pt-[52px] pb-24">
            <VoteBar votesAgainst={data.fallCount} votesFor={data.riseCount} />
            <div className="flex justify-between text-[#33383E] font-bold mt-4">
              <span>{data.riseCount.toLocaleString()}명</span>
              <span>{data.fallCount.toLocaleString()}명</span>
            </div>
          </div>
        </div>

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

      <PageBottomFixedArea className="bg-transparent">
        <Link href={`/games/${subClassification}/play`}>
          <Button size="lg" className="w-full">
            게임 참여하기
          </Button>
        </Link>
      </PageBottomFixedArea>
    </Page>
  )
}

export default GameLandingPage
