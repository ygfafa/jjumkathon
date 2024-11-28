'use client'

import { isWebView } from '@/lib/bridge/is-webview'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import ArrowLeft from '@/assets/icons/arrow_left.svg'
import { useRouter } from 'next/navigation'
import { callWebview } from '@/lib/webview'

type AppBarProps = {
  color?: string
  backgroundColor?: string
  backgroundEnabled?: boolean
  overlay?: boolean
  themeColor?: string
}
type PageHeaderProps = {
  title?: string
  appBar?: AppBarProps
} & Omit<React.ComponentProps<'div'>, 'children'>
export const PageHeader = ({
  title,
  appBar,
  className,
  ...props
}: PageHeaderProps) => {
  const router = useRouter()

  useEffect(() => {
    if (isWebView()) {
      callWebview('newAppBar', {
        title,
        ...appBar,
      })
    }
  }, [title, appBar])

  if (isWebView()) {
    return (
      <div
        className="h-16"
        style={{ height: 16 + (appBar?.overlay ? 56 : 0) }}
      />
    )
  }

  return (
    <div
      className={cn(
        'sticky top-0 h-[56px] flex justify-center items-center mb-16 bg-white',
        className
      )}
      {...props}
    >
      <div className="absolute left-20">
        <button
          className={cn('text-gray-900', className)}
          onClick={router.back}
        >
          <ArrowLeft />
        </button>
      </div>
      <h1 className="text-16 font-bold absolute left-1/2 -translate-x-1/2">
        {title}
      </h1>
    </div>
  )
}
