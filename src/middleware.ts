import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// 4자리 랜덤 ID 생성 함수
const generateRandomId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function middleware(request: NextRequest) {
  const userId = request.cookies.get('userId')

  if (!userId) {
    const response = NextResponse.next()
    response.cookies.set({
      name: 'userId',
      value: generateRandomId(),
      httpOnly: false,
      path: '/',
    })

    return response
  }

  return NextResponse.next()
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
