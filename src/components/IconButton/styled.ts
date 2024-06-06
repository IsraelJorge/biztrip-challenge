import { styled } from '@/styles/stitches.config'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '$base',
  padding: '$1',
  border: 'none',
  borderRadius: '$md',
  lineHeight: '1',
  color: '$neutral-500',
  backgroundColor: '$primaryForeground',
  outline: 'none',
  transition: 'all 150ms ease-in-out',
  '&:hover': {
    backgroundColor: '$neutral-100',
    color: '$black',
  },
  '&:focus': {
    outline: '2px solid $accent',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.32',
  },
  variants: {
    size: {
      sm: {
        size: '$6',
      },
      md: {
        size: '$8',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
