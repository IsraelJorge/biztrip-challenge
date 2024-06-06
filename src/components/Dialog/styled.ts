import * as DialogPrimitive from '@radix-ui/react-dialog'

import { keyframes, styled } from '@/styles/stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'hsla(0, 0%, 0%, 0.5)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$6',
  borderBottom: '1px solid $neutral-300',
  '& svg': {
    size: '$4',
    fontSize: '$xs',
  },
})

export const Container = styled(DialogPrimitive.Content, {
  backgroundColor: '$primaryForeground',
  borderRadius: '$md',
  boxShadow: '0px 8px 16px 0px hsla(0, 0%, 11%, 0.16)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '90vh',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  variants: {
    size: {
      sm: {
        width: '80vw',
        maxWidth: '448px',
      },
      md: {
        width: '90vw',
        maxWidth: '744px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const Content = styled('div', {
  width: '100%',
  overflowY: 'auto',
  minHeight: '60vh',
  maxHeight: '60vh',
  padding: '$6',
  backgroundColor: '$neutral-100',
})

export const Title = styled(DialogPrimitive.Title, {
  fontWeight: '600',
  color: '$black',
  fontSize: '$2xl',
})

export const Footer = styled('footer', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '$8',
  gap: '$4',
  borderTop: '1px solid $neutral-300',
})
