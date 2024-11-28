export const isWebView = () => {
  if (typeof window === 'undefined') return false
  return Boolean(window.navigator.userAgent.match(/3o3_android|3o3_ios/i))
}
