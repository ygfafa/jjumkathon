import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        as="style"
        type="font/woff2"
      />
      <body>
        <div className="max-w-[460px] w-full mx-auto border-l border-r min-h-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
