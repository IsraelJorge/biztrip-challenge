import { styled } from '@/styles/stitches.config'

export const PaginationContainer = styled('div', {
  position: 'sticky',
  bottom: '0',
  display: 'flex',
  paddingX: '$4',
  paddingY: '$4',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$primaryForeground',
  borderTop: '1px solid $neutral-400',
  '@lg': {
    paddingX: '$8',
  },
})

export const PaginationContent = styled('div', {
  display: 'flex',
  gap: '$2',
  '@lg': {
    gap: '$4',
  },
})

export const PaginationButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  size: '$11',
  padding: '$2',
  borderRadius: '$md',
  backgroundColor: '$neutral-100',
  border: 'none',
  color: '$neutral-500',
  transition: 'all 150ms ease-in-out',
  fontWeight: '600',
  fontSize: '$base',
  lineHeight: '$md',
  cursor: 'pointer',
  '&:hover': {
    color: '$secondary',
  },
  '&:focus': {
    outline: '$space$1 solid $accent',
  },
  variants: {
    active: {
      true: {
        color: '$primary',
        backgroundColor: '$secondaryForeground',
      },
    },
  },
})

export const PaginationEllipsis = styled(PaginationButton, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primaryForeground',
  color: '$black',
})
