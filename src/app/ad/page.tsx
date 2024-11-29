'use client'

import Page from '@/components/layouts/page'
import PageBottomFixedArea from '@/components/layouts/page-bottom-fixed-area'
import { Button } from '@/components/shadcn/button'
import useCountdown from '@/hooks/use-countdown'
import { isWebView } from '@/lib/bridge/is-webview'
import { callWebview } from '@/lib/webview'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useRef } from 'react'

const AD_DELAY = 5

const AdPage = () => {
  const count = useCountdown(AD_DELAY) // 5초 카운트다운
  const params = useSearchParams()
  const redirectTo = params.get('redirectTo') || '/games'
  const videoRef = useRef<HTMLVideoElement>(null)

  const router = useRouter()

  const handleMove = () => {
    router.replace(redirectTo)
  }

  useEffect(() => {
    if (isWebView()) {
      callWebview('newAppBar', {
        overlay: true,
        enabled: true,
      })
    }
  }, [])

  return (
    <Page>
      <div className="flex justify-center items-center h-screen bg-gray-950">
        <video
          ref={videoRef}
          className="max-w-full h-auto"
          src="/ad.mp4"
          autoPlay
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <PageBottomFixedArea className="bg-transparent">
        {count === 0 ? (
          <Button size="lg" className="w-full" onClick={handleMove}>
            시작하기
          </Button>
        ) : (
          <Button size="lg" className="w-full" disabled>
            {count}초 후 게임을 시작합니다
          </Button>
        )}
      </PageBottomFixedArea>
    </Page>
  )
}

const SuspensedAdPage = () => {
  return (
    <Suspense fallback={<div>광고를 불러오고 있습니다...</div>}>
      <AdPage />
    </Suspense>
  )
}

export default SuspensedAdPage
