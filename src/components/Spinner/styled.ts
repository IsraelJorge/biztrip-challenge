import { keyframes, styled } from '@/styles/stitches.config'

import { Icon } from '../Icon'

const rotation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Loader = styled(Icon, {
  width: '48px',
  height: '48px',
  backgroundColor: 'transparent',
  animation: `${rotation} 1s linear infinite`,
  variants: {
    color: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      tertiary: {
        color: '$primaryForeground',
      },
    },
    size: {
      sm: {
        size: '$6',
      },
      md: {
        size: '$8',
      },
      lg: {
        size: '$12',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
