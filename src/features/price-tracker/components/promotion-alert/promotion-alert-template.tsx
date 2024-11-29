'use client'

import {
  Meta,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '@/components/meta'
import { Button } from '@/components/shadcn/button'
import React from 'react'

import Bell from '@/assets/icons/bell.svg'
import { isWebView } from '@/lib/bridge/is-webview'

type PromotionAlertTemplateProps = {
  title: string
  description: string
  link: string
}
const PromotionAlertTemplate = ({
  title,
  description,
  link,
}: PromotionAlertTemplateProps) => {
  return (
    <div className="p-16 shadow bg-white rounded-16">
      <Meta>
        <Bell />
        <MetaContent className="space-y-4">
          <MetaTitle className="text-blue-600 text-12">{title}</MetaTitle>
          <MetaDescription className="text-gray-500 font-semibold text-14">
            {description}
          </MetaDescription>
        </MetaContent>
        <MetaExtra>
          <Button variant="secondary">혜택 받기</Button>
        </MetaExtra>
      </Meta>
    </div>
  )
}

export default PromotionAlertTemplate
