'use client'

import createWebviewBridge from '@/lib/bridge/create-webview-bridge'
import { isWebView } from '@/lib/bridge/is-webview'
import { useEffect } from 'react'

const Initializer = () => {
  useEffect(() => {
    if (isWebView()) {
      window.WebBridge = createWebviewBridge()
      window.WebBridge.send({
        method: 'showToast',
        data: { type: 'success', text: '웹뷰를 시작합니다' },
      })
    }
  }, [])

  return null
}

export default Initializer
