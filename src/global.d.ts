/* eslint-disable @typescript-eslint/no-explicit-any */
export declare global {
  interface Window {
    AndroidWebViewBridge: any
    FlutterWebViewBridge: any
    WebBridge: WebBridge | undefined
  }
}
