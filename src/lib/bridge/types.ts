/* eslint-disable @typescript-eslint/no-explicit-any */
type WebBridgeSendFunction = (
  data: WebBridgeSendData,
  callback?: (...param: any) => void
) => void

/**
 * @interface WebBridgeSendData
 * @description 앱-웹 브릿지 송신 데이터 형태
 * @property {string} method 요청 함수명
 * @property {object?} data 요청 데이터
 */
export interface WebBridgeSendData {
  method: string
  data?: object
}

/**
 * @interface WebBridge
 * @description 앱-웹 브릿지
 * @property {WebBridgeSendFunction} send
 * @property {WebBridgeDispatchFunction} dispatch
 */
export interface WebBridge {
  send: WebBridgeSendFunction
}
