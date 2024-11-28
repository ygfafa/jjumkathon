export const isWebView = () => {
  if (typeof window === 'undefined') return true
  return Boolean(window.navigator.userAgent.match(/3o3_android|3o3_ios/i))
}
