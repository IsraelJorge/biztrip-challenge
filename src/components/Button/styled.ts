import { styled } from '@/styles/stitches.config'

export const Container = styled('button', {
  width: 'max-content',
  height: '$13',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '$4',
  fontSize: '$base',
  fontWeight: '600',
  whiteSpace: 'nowrap',
  border: 'none',
  borderRadius: '$md',
  lineHeight: '$sm',
  transition: 'all 150ms ease-in-out',
  cursor: 'pointer',
  '&:focus': {
    outline: '$space$1 solid $accent',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.32',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$primaryForeground',
        '&:hover': {
          backgroundColor: '$secondary',
          color: '$secondaryForeground',
        },
      },
      secondary: {
        backgroundColor: '$neutral-700',
        color: '$primaryForeground',
        '&:hover': {
          backgroundColor: '$black',
          color: '$primaryForeground',
        },
      },
      tertiary: {
        backgroundColor: '$neutral-100',
        color: '$black',
        '&:hover': {
          backgroundColor: '$neutral-300',
          color: '$black',
        },
      },
    },
    size: {
      sm: {
        height: '$12',
      },
      md: {
        height: '$13',
      },
      lg: {
        height: '$20',
      },
      'icon-sm': {
        size: '$12',
        padding: '0',
      },
      'icon-md': {
        size: '$13',
        padding: '0',
      },
      'icon-lg': {
        size: '$20',
        padding: '0',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'sm',
  },
})
