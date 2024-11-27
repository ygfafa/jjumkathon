'use client'

import BottomSheet from '@/components/bottom-sheet'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ExchangeRateGameBottomSheet = () => {
  const [open, setOpen] = useState(true)
  return (
    <BottomSheet
      open={open}
      onClose={() => setOpen(false)}
      style={{
        backgroundImage: 'linear-gradient(0deg, #9F58FA 3.5%, #750BFC 103.68%)',
      }}
      className="px-20 py-24"
      height="auto"
    >
      <div className="text-center">
        <p className="mb-4 text-white text-16 font-bold">내일 환율 맞추고</p>
        <h5 className="text-24 font-bold text-yellow-300">10만 포인트 받기</h5>
      </div>

      <Image
        src="/images/exchange-rate-game-avatar.png"
        alt="avatar"
        width={1000}
        height={140}
        objectFit="cover"
        layout="responsive"
      />
      <Link
        href="/games/exchange-rate"
        className="block text-center rounded-16 p-16 bg-white text-[#6164FA] font-bold w-full text-16"
      >
        게임 참여하기
      </Link>
    </BottomSheet>
  )
}
export default ExchangeRateGameBottomSheet
