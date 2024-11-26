import { cn } from '@/lib/utils'

type PageBodyProps = {
  noBodyPadding?: boolean
} & React.ComponentProps<'div'>
export const PageBody = ({
  className,
  noBodyPadding,
  ...props
}: PageBodyProps) => {
  return (
    <div
      className={cn(
        'flex flex-col px-20 flex-1',
        noBodyPadding && 'px-0',
        className
      )}
      {...props}
    />
  )
}
