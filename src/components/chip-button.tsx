import { cn } from '@/lib/utils'

export type ChipButtonProps = React.ComponentProps<'button'> & {
  selected?: boolean
}
const ChipButton = ({ className, selected, ...props }: ChipButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-250 font-bold border px-12 py-4',
        selected
          ? 'bg-gray-900 border-gray-900 text-white'
          : 'text-gray-500 border-gray-300',
        className
      )}
      {...props}
    />
  )
}

export default ChipButton
