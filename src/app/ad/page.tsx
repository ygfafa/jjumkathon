'use client'

import Page from '@/components/layouts/page'
import PageBottomFixedArea from '@/components/layouts/page-bottom-fixed-area'
import { Button } from '@/components/shadcn/button'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useRef, useState } from 'react'

const AdPage = () => {
  const params = useSearchParams()
  const redirectTo = params.get('redirectTo') || '/games'
  const videoRef = useRef<HTMLVideoElement>(null)

  const router = useRouter()
  const [show, setShow] = useState(false)

  const handleMove = () => {
    router.replace(redirectTo)
  }

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 5) {
        setShow(true)
      }
    }

    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate)
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
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
        {show && (
          <Button size="lg" className="w-full" onClick={handleMove}>
            게임하기
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
