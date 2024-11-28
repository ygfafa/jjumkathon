/* eslint-disable @typescript-eslint/no-explicit-any */
import { isWebView } from './bridge/is-webview'

export const openWebview = (path: string) => {
  if (typeof window === 'undefined' || !isWebView()) return

  callWebview('goTo', {
    type: 'WEB',
    style: 'PUSH',
    landing: window.location.origin + path,
  })
}

export const callWebview = (method: string, data: any) => {
  if (typeof window === 'undefined' || !isWebView()) return

  window.WebBridge.send({
    method,
    data,
  })
}
