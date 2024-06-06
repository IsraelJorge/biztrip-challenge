import { styled } from '@/styles/stitches.config'

export const AlertContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$md',
  gap: '$4',
  '& svg:last-child': {
    strokeWidth: '1',
    color: '$neutral-700',
  },
  variants: {
    variant: {
      error: {
        backgroundColor: '$error-100',
        border: '1px solid $error-500',
        color: '$error-500',
      },
      warning: {
        backgroundColor: '$warning-100',
        border: '1px solid $warning-900',
        color: '$warning-900',
      },
      success: {
        backgroundColor: '$success-100',
        border: '1px solid $success-900',
        color: '$success-900',
      },
      info: {
        backgroundColor: '$info-100',
        border: '1px solid $info-900',
        color: '$info-900',
      },
    },
    size: {
      sm: {
        maxWidth: '429px',
        minHeight: '$12',
        paddingX: '$3',
      },
      md: {
        maxWidth: '567px',
        minHeight: '$20',
        paddingX: '$3',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const AlertSpan = styled('span', {
  display: 'block',
  flex: 'auto',
  color: '$neutral-700',
  wordWrap: 'anywhere',
})
