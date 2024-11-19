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
            <body>
                <main className="max-w-[640px] w-full mx-auto border-l border-r min-h-full">
                    {children}
                </main>
            </body>
        </html>
    )
}
