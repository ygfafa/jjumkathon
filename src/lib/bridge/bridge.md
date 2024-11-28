# bridge 함수

## 사용 방법

```tsx
import { webView } from '@3o3/app-bridge'

/** WEBVIEW init */
webView.init()
```

## getUserInfo

유저 아이디와 토큰을 앱 브릿지를 통해서 전달을 받기 위한 함수입니다.

토큰이 존재하지 않을 경우 앱에서 받은 데이터를 `resolve` 시키지 않습니다.

### 사용처

- 웹뷰 로그인 시 사용합니다.

```tsx
import {} from '@3o3/app-bridge'

useEffect(() => {
  webView.getUserInfo(callback).then(async (result) => {
    if (!result) return

    const { userId } = result
    if (userId) return await signInAfter(userId)
  })
}, [])
```

## refreshUserInfo

유저 아이디와 토큰을 앱 브릿지를 통해서 전달을 받기 위한 함수입니다.

`getUserInfo` 와 마찬가지로 웹뷰 환경에서 유저 아이디와 토큰을 앱 브릿지를 통해서 전달받습니다.

`getUserInfo` 와 차이점은 토큰이 존재하지 않을 경우를 상정하지 않습니다.

### 사용처

- 웹뷰 환경에서 유저 토큰 만료 시 재로그인을 위하여 사용합니다.

```tsx
import {} from '@3o3/app-bridge'

async function refreshByWebview<T>(createRequest: () => Request<T>) {
  startRefresh()
  const data = await webView.refreshUserInfo()
  endRefresh()

  if (!data?.token) return unauthenticated()
  signIn({ accessToken: data.token })

  return notifyRetry(createRequest)
}
```

## getPaymentFee

앱에서 결제 금액을 웹뷰 환경으로 전달 받기 위해 사용합니다.

<span style={{"color":"red"}}>\* 웹에서 Storage 저장 시 데이터 유실되는 이슈가 있습니다.</span>

### 사용처

- 웹(뷰) 환경에서 앱으로 전달한 결제 금액을 다시 돌려받을 때 사용합니다.

```tsx
import { webView } from '@3o3/app-bridge'

webView.getPaymentFee((value) => {
  logRevenue(pg, value).then()
})
```

## onError

웹뷰 환경에서 에러 발생 시 앱에 에러를 전달합니다.

```tsx
const handleErrorClear = useCallback(() => {
  webView.onError(error?.message || '문제가 생겼어요. 다시 시도해주세요.')
}, [error?.message])
```

## clearStack

웹뷰 환경에서 모든 웹뷰 히스토리를 지워줍니다.

### Example

```tsx
useEffect(() => {
  webView.stackClear()
}, [])
```

## shareInvitationLink

초대링크를 네이티브로 전달합니다.

<span style={{"color":"red"}}>\* 웹뷰 환경에서 친구초대 화면에서 링크 공유하기 버튼시 웹과 앱에 상이한 동작으로 인하여 사용합니다.</span>

### Example

```tsx
import { webView } from '@3o3/app-bridge'

const handleShareAction = () => {
  const inviteUrl = 'https://app.expert.3o3.co.kr/landing'

  return webView.shareInvitationLink(inviteUrl)
}
```

## taxReturnPv

환급액과 결제금액을 모바일에 전달합니다.

### 사용처 (현재 사용여부 모바일과 싱크 필요)

- 웹뷰 환경의 워크쓰루화면에서 환급액 조회하기 클릭 후 결제페이지 접근 시 호출합니다.
- 모바일에서 앱스플라이어 이벤트 발송을 위해서 사용합니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.taxReturnPv(refundTax, paymentFee)
```

## revenue

결제금액을 모바일에 전달합니다.

<span style={{"color":"red"}}>\* revenue 호출 후 앱에서는 앰플리튜드 revenue 이벤트가 발생합니다.</span>

### 사용처

- 웹뷰환경에서 결제 완료시 사용합니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.revenue(price)
```

## openApp

웹뷰 환경에서 다른 앱 실행이 필요할 경우 호출합니다.

### 사용처

- 간편인증에서 카카오톡, pass, 네이버 앱 열때 사용합니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.openApp(EASY_SIGN_TYPE_NAVER)
webView.openApp(EASY_SIGN_TYPE_PASS)
webView.openApp(EASY_SIGN_TYPE_KAKAO)
```

## openBrowser

웹뷰 환경에서 브라우저(사파리, 크롬 등)를 열 필요가 있을 때 사용합니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.openBrowser('https://3o3.co.kr')
```

## appBar

웹뷰 환경에서 앱에서 제공하는 AppBar(NavBar)를 사용할 때 호출합니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.appBar({
  title: '마이페이지',
  backgrounColor: '#ffffff',
})
```

### requestCameraPermission

웹뷰 환경에서 카메라 및 사진 활용 권한을 사용자에게 요청하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

const hanldeAllowCamera = async () => {
  const response = await webView.requestCameraPermission()
  const isGranted = response?.granted

  return
}
```

## checkPushNotificationPermission

웹뷰 환경에서 알림 권한이 있는지 확인하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'
useEffect(() => {
  webView.checkPushNotificationPermission().then(async (result) => {
    if (!result) return

    const { granted } = result
  })
}, [])
```

## requestPushNotificationPermission

웹뷰 환경에서 알림 및 노티 권한을 사용자에게 요청하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'
useEffect(() => {
  webView.requestPushNotificationPermission('SZS')
}, [])
```

## accountDeleted

웹뷰 환경에서 탈퇴 완료 시 호출하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'
useEffect(() => {
  webView.accountDeleted()
}, [])
```

## goToOnboarding

웹뷰 환경에서 앱 홈 화면으로 이동할 경우 사용합니다.

### Example

```tsx
useEffect(() => {
  webView.goToOnboarding()
}, [])
```

## redirectToPreviousPage

웹뷰 환경에서 이전 페이지로 이동할 경우 사용합니다.

<span style={{"color":"red"}}>\* 앱의 navigation stack 에서 pop 동작이 실행됩니다.</span>

### Example

```tsx
useEffect(() => {
  webView.goToOnboarding()
}, [])
```

## connectOnPayment

결제금액을 모바일에 저장합니다.

<span style={{"color":"red"}}>\* 웹에서 Storage 저장 시 데이터 유실되는 이슈가 있습니다.</span>

### Example

```tsx
webView.connectOnPayment(paymentFee)
```

## connectOnRevenue

결제금액을 모바일에서 전달받을 때 사용합니다.

### Example

```tsx
webView.connectOnRevenue((value) => {
  logRevenue(pg, value).then()
})
```

## storeWebData

웹뷰 환경에서 데이터를 앱에 저장할 때 사용합니다.

`webDataKey` 를 key 값으로 webData 를 앱에 저장한다.

`isPersistent` true 일 경우 SharedPreferences에 저장

`isPersistent` false 일 경우 앱의 전역 메모리에 저장

<span style={{"color":"red"}}>\* SharedPreferences에 저장시에 webDataKey 값은 (서비스명 Prefix을 붙여서 사용합니다.)</span>

### Example

```tsx
webView.storeWebData('SZS_KEY', { data: 'data' }, true)
```

## removeWebData

앱 스토리지에 저장된 데이터 삭제합니다.

`webDataKey` 를 key 값으로 webData 를 앱에서 삭제한다.

`isPersistent` 가 true 일 경우 SharedPreferences로 부터 삭제

`isPersistent` 가 false 일 경우 전역 메모리에서 삭제한다.

### Example

```tsx
webView.removeWebData('key', true)
```

## removeWebDataAll

웹뷰 스토리지 데이터를 모두 삭제한다.

webDataKeyPrefix가 있을 경우 해당 webDataKeyPrefix를 가진 데이터만 모두 삭제한다.

### Example

```tsx
webView.removeWebDataAll('SZS') // SZS 서비스 스토리지 전부 삭제
webView.removeWebDataAll('SSR') // SSR 서비스 스토리지 전부 삭제
webView.removeWebDataAll() // 전부 삭제
```

## retrieveWebData

웹뷰 환경에서 앱에 저장한 데이터를 다시 불러올 때 사용합니다.

`retrieveWebData` 호출시 webDataKey로 webData를 찾아서 반환한다.

`isPersistent` 가 true 일 경우 SharedPreferences에서 반환

`isPersistent` 가 false 일 경우 전역 메모리에서 반환

### Example

```tsx
webView.retrieveWebData(key, (data) => {
  console.log(data)
})
```

## sendWebEventLog

웹뷰 환경에서 앱에서 이벤트를 직접 호출해야 할 경우 사용합니다.

### Example

```tsx
webView.sendWebEventLog(eventName, {
  property1: 'property1',
  property2: 'property2',
})
```

## newAppBar

웹뷰 환경에서 앱에서 제공하는 AppBar(NavBar)를 사용할 때 호출합니다.

<span style={{"color":"red"}}>\* newAppBar 는 아직 적용이 되어있지 않습니다. 추후 appBar 는 deprecated 되고 newAppBar 를 사용해야만 합니다.</span>

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.newAppBar({
  title: '마이페이지',
  backgrounColor: '#ffffff',
})
```

웹뷰 환경에서 모바일앱바를 사용하지 않고 Web 앱바를 사용합니다. 모든 모바일 전체 영역에 web으로 통제합니다.
(네브바영역에 커스텀영역이 필요시에만 사용합니다.)

```tsx
import { webView } from '@3o3/app-bridge'

webView.newAppBar({
  overlay: true,
})
```

```tsx
import { webView } from '@3o3/app-bridge'
// backgroundColor 값을 undefined 로 주입시 앱 네브바가 투명으로 노출됩니다.
webView.newAppBar({
  title: '마이페이지',
})
```

## updateZendeskKey

웹뷰 환경에서 서비스 별로 zendesk 처리하기 위한 처리입니다,

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.updateZendeskKey('ssr-service')
```

## downloadFile

웹뷰 환경에서 파일 다운로드 처리가 필요할때 사용합니다.

ios: 앱 저장소에 다운로드 후 `success: true`를 반환하고 네이티브 바텀시트를 노출합니다.

aos: 다운로드 권한을 묻고 권한 취득을 거절하면 `success: false`를 반환합니다. 권한이 있으면 다운로드를 진행합니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.downloadFile({
  url: 'https://3o3.co.kr/image.jpg',
  fileName: '이미지 파일 저장할 이름',
})
```

## goNext

웹뷰 환경에서 다음 페이지에 native에서 처리가 필요할때 호출하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.goNext()
```

## containerColor

웹뷰 환경에서 웹뷰의 컨테이너 Color 색상 변경이 필요할때 호출하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.containerColor('#ffffff')
```

## requestPhotosPermission

웹뷰 환경에서 갤러리 저장 권한 요청 및 결과 전달이 필요할때 호출하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.requestPhotosPermission()
```

## goTo

웹뷰 환경에서 앱내 원하는 페이지로 이동이 필요할때 호출하는 함수입니다.

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.goTo({
  type: 'NATIVE',
  style: 'PUSH',
  landing: 'INVITE_FRIEND',
  args: ['test_argument'],
})
```

## shareKakako

웹뷰 환경에서 카카오 공유하기 기능 제공 (웹 카카오 이슈 해결을 위한 대책)

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.shareKakao({
  templateId: 100550,
  link: 'https://app.3o3.co.kr',
})
```

## vibrate

진동 또는 햅틱 피드백

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.vibrate({
  type: 'haptic',
})

webView.vibrate({
  pattern: [100, 30, 100, 30],
})
```

## requestInAppReview

앱 리뷰 팝업

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.requestInAppReview()
```

## tryScrap

웹뷰내에 스크래핑 시도

### Example

```tsx
import { webView } from '@3o3/app-bridge'

const response = await tryScrap('community')
if (response?.scrapDone) {
  //성공
} else {
  //실패 or 종료
}
```

## getDeviceInfo

웹뷰내에 앱 deviceId 정보 가져오기

### Example

```tsx
import { webView } from '@3o3/app-bridge'

const response = await getDeviceInfo()
if (response.deviceId) {
  console.log(response.deviceId)
}
```

## close

웹뷰 즉시 종료

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.close()
```

## showToast

토스트 호출

### Example

```tsx
import { webView } from '@3o3/app-bridge'

webView.showToast({
  type: 'success',
  text: '쿠폰이 등록되었어요',
})
```
