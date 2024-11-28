import { cn } from '@/lib/utils'

export const PAGE_BOTTOM_FIXED_AREA_HEIGHT = 88

type PageBottomFixedAreaProps = React.ComponentProps<'div'>
const PageBottomFixedArea = ({
  className,
  style = {},
  ...props
}: PageBottomFixedAreaProps) => {
  return (
    <div
      className={cn(
        'fixed bottom-0 w-full h-[88px] px-20 py-16 max-w-[460px]',
        className
      )}
      style={{ height: PAGE_BOTTOM_FIXED_AREA_HEIGHT, ...style }}
      {...props}
    />
  )
}

export default PageBottomFixedArea
