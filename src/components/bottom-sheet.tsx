'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Drawer } from 'vaul'

type BottomSheetProps = {
  className?: string
  children?: React.ReactNode
  open?: boolean
  onClose?(): void
  hideHandle?: boolean
  maskClosable?: boolean
  height?: number | string
  handleOnly?: boolean
}

const BottomSheet = ({
  className,
  open,
  children,
  onClose,
  height,
  maskClosable = true,
}: BottomSheetProps) => {
  return (
    <Drawer.Root open={open} onClose={onClose} noBodyStyles>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 z-50 bg-black/30"
          onClick={maskClosable ? onClose : () => {}}
        />
        <Drawer.Content
          className={cn(
            'fixed inset-x-0 bottom-0 z-50 mx-auto mt-24 h-[50%] max-w-[460px] overflow-hidden rounded-t-2xl bg-white px-4 outline-none',
            className
          )}
          style={{ height }}
        >
          <div className="mx-auto w-full">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default BottomSheet
