import React from 'react'

import { Avatar, AvatarProps } from './avatar'
import { cn } from '@/lib/utils'

type MetaProps = React.ComponentProps<'div'>

export const Meta = ({ className, ...props }: MetaProps) => {
  return (
    <div className={cn('flex items-center space-x-2', className)} {...props} />
  )
}

export type MetaAvatarProps = AvatarProps
export const MetaAvatar = ({
  className,
  size = 42,
  shape = 'square',
  ...props
}: MetaAvatarProps) => (
  <Avatar
    className={cn('shrink-0', className)}
    size={size}
    shape={shape}
    {...props}
  />
)

export type MetaContentProps = React.ComponentProps<'div'>
export const MetaContent = ({ className, ...props }: MetaDescriptionProps) => (
  <div className={cn('flex flex-1 flex-col space-y-8', className)} {...props} />
)

export type MetaDescriptionProps = React.ComponentProps<'p'>
export const MetaDescription = ({
  className,
  ...props
}: MetaDescriptionProps) => (
  <p
    className={cn('text-16 leading-none text-gray-800', className)}
    {...props}
  />
)

export type MetaTitleProps = React.ComponentProps<'h3'>
export const MetaTitle = ({ className, ...props }: MetaDescriptionProps) => (
  <h3
    className={cn('text-14 text-gray-900 leading-none', className)}
    {...props}
  />
)

export type MetaExtraProps = React.ComponentProps<'div'>
export const MetaExtra = ({ className, ...props }: MetaDescriptionProps) => (
  <div className={cn('shrink-0', className)} {...props} />
)
