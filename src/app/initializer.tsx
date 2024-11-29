'use client'

import createWebviewBridge from '@/lib/bridge/create-webview-bridge'
import { isWebView } from '@/lib/bridge/is-webview'
import { useEffect } from 'react'

const Initializer = () => {
  useEffect(() => {
    if (isWebView()) {
      window.WebBridge = createWebviewBridge()
    }
  }, [])

  return null
}

export default Initializer
