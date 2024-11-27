import { cn } from '@/lib/utils'

const Page = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <main className={cn('flex flex-col h-full flex-1', className)} {...props} />
  )
}

export default Page
