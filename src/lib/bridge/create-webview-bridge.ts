import { isWebView } from './is-webview'
import { WebBridge } from './types'

import { WebBridgeSendData } from './types'

export function createBridge(): WebBridge {
  const send = (data: WebBridgeSendData) => {
    const command = JSON.stringify(data)
    return window.FlutterWebViewBridge.postMessage(command)
  }

  return {
    send,
  }
}

function createWebviewBridge(): WebBridge | undefined {
  if (isWebView()) {
    return createBridge()
  }
  return undefined
}

export default createWebviewBridge
