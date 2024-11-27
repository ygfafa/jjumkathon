'use client'

import ArrowLeft from '@/assets/icons/arrow_left.svg'
import { cn } from '@/lib/utils'

import React from 'react'

type PageBackButtonProps = Omit<React.ComponentProps<'button'>, 'onClick'>
const PageBackButton = ({ className }: PageBackButtonProps) => {
  const handleClick = () => {}
  return (
    <button className={cn('text-gray-900', className)} onClick={handleClick}>
      <ArrowLeft />
    </button>
  )
}

export default PageBackButton
