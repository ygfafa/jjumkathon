import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import Cookies from 'js-cookie'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-10',
        'text-12',
        'text-14',
        'text-16',
        'text-18',
        'text-20',
        'text-24',
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}

export const getUserId = () => Cookies.get('userId')!
