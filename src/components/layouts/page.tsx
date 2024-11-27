import { cn } from '@/lib/utils'
import { PAGE_BOTTOM_FIXED_AREA_HEIGHT } from './page-bottom-fixed-area'

type PageProps = React.ComponentProps<'div'> & {
  hasFixedBottomArea?: boolean
}
const Page = ({ className, hasFixedBottomArea, ...props }: PageProps) => {
  return (
    <main
      className={cn('flex flex-col h-full flex-1 ', className)}
      style={{
        paddingBottom: hasFixedBottomArea ? PAGE_BOTTOM_FIXED_AREA_HEIGHT : 0,
      }}
      {...props}
    />
  )
}

export default Page
