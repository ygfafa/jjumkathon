'use client'

import { SubClassification } from '@/api/get-reward-content'
import { postRewardVote } from '@/api/post-reward-vote'
import NoIcon from '@/assets/icons/no.svg'
import YesIcon from '@/assets/icons/yes.svg'
import { Button } from '@/components/shadcn/button'
import { cn, getUserId } from '@/lib/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type GameChoiceButtonsProps = {
  subClassification: SubClassification
}

const GameChoiceButtons = ({ subClassification }: GameChoiceButtonsProps) => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const handleVote = async (riseFlag: boolean) => {
    const userId = getUserId()

    try {
      await postRewardVote({ riseFlag, userId, subClassification })
      setOpen(true)
    } catch (error) {
      alert('살살 다뤄주세요.')
    }
  }

  const handleClose = () => {
    setOpen(false)
    router.refresh()
    router.replace('/games')
  }

  return (
    <>
      <div className="flex flex-col ">
        <SelectButton onClick={() => handleVote(true)}>
          <NoIcon />
        </SelectButton>
        <p className="text-[#D2CEFF] text-center font-bold my-4">vs</p>
        <SelectButton onClick={() => handleVote(true)}>
          <YesIcon />
        </SelectButton>
      </div>

      <AlertDialog open={open} onClose={handleClose} />
    </>
  )
}

const SelectButton = ({
  className,
  ...props
}: React.ComponentProps<'button'>) => (
  <button
    className={cn(
      'h-[160px] flex justify-center items-center rounded-16',
      className
    )}
    style={{
      background: 'rgba(92, 71, 182, 0.30)',
      boxShadow: '0px 1px 4.5px 0px rgba(255, 255, 255, 0.15) inset',
    }}
    {...props}
  />
)

type AlertDialogProps = {
  onClose: () => void
  open?: boolean
}

const AlertDialog = ({ open, onClose }: AlertDialogProps) => {
  return (
    <AlertDialogPrimitive.Root open={open}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <AlertDialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-[327px] translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-white p-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="flex justify-center items-center flex-col mb-24 gap-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
            >
              <circle cx="28.4234" cy="43.2915" r="9.4136" fill="#FBB62D" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.0468 47.0795C37.5556 45.9217 37.8379 44.642 37.8379 43.2963C37.8379 39.5924 35.6989 36.3882 32.5888 34.8516H24.2599C21.1498 36.3882 19.0107 39.5924 19.0107 43.2963C19.0107 44.642 19.2931 45.9217 19.8019 47.0795H37.0468Z"
                fill="#F1A205"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.708 8.11147C32.7378 5.75535 30.8519 3.82117 28.4958 3.79136C26.1397 3.76156 24.2055 5.64741 24.1757 8.00354L24.1696 8.48655C24.1693 8.50782 24.1692 8.52905 24.1692 8.55024C16.1388 10.4626 10.1667 17.6835 10.1667 26.2994L10.1667 35.6759L6.09778 41.9649C5.28286 43.2244 6.18696 44.8862 7.68714 44.8862H49.1385C50.6387 44.8862 51.5428 43.2244 50.7279 41.9649L46.6565 35.6722V26.2994C46.6565 17.7008 40.7084 10.4915 32.7023 8.5618L32.708 8.11147Z"
                fill="#FCCC6B"
              />
            </svg>

            <AlertDialogPrimitive.Title className="text-center text-20 font-bold">
              참여해주셔서 감사합니다.
            </AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Description className="text-center text-16 text-[#606A76]">
              내일 오전 9시 결과를 알려드릴게요
            </AlertDialogPrimitive.Description>
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              onClose()
            }}
          >
            다른 게임도 구경하기
          </Button>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  )
}

export default GameChoiceButtons
