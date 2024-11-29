'use client'

import React from 'react'
import { Button } from './shadcn/button'
import { isWebView } from '@/lib/bridge/is-webview'

const NotificationButton = () => {
  return (
    <Button
      size="sm"
      onClick={() => {
        if (isWebView()) {
          window.WebBridge.send({
            method: 'showToast',
            data: { type: 'success', text: '알림 설정이 완료되었습니다' },
          })
          return
        }

        alert('알림 설정이 완료되었습니다')
      }}
    >
      알림받기
    </Button>
  )
}

export default NotificationButton
