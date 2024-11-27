import { cn } from '@/lib/utils'

export const PageHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'sticky top-0 h-[56px] flex justify-center items-center mb-16',
        className
      )}
      {...props}
    />
  )
}

export const PageHeaderTitle = ({
  className,
  ...props
}: React.ComponentProps<'h1'>) => (
  <h1
    className={cn(
      'text-lg font-bold absolute left-1/2 -translate-x-1/2',
      className
    )}
    {...props}
  />
)

export const PageHeaderLeftSlot = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return <div className={cn('absolute left-20', className)} {...props} />
}
