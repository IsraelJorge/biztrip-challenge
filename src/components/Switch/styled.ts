import * as Switch from '@radix-ui/react-switch'

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const SwitchRoot = styled(Switch.Root, {
  width: '$12',
  height: '$6',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '$full',
  backgroundColor: '$primaryForeground',
  border: '2px solid $neutral-500',
  cursor: 'pointer',
  '&[data-state="checked"]': {
    backgroundColor: '$secondaryForeground',
    borderColor: '$primary',
  },
  '&:focus': {
    outline: '2px solid $accent',
  },
  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
    backgroundColor: '$neutral-400',
    border: '2px solid $neutral-500',
    '& span': {
      backgroundColor: '$neutral-500',
    },
  },
})

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  lineHeight: '1',
  position: 'absolute',
  size: '$4',
  borderRadius: '$full',
  transform: 'translateY(-50%) translateX(4px)',
  backgroundColor: '$neutral-500',
  transition: 'all 150ms',
  '&[data-state="checked"]': {
    transform: 'translateX(24px) translateY(-50%)',
    backgroundColor: '$primary',
  },
  '&:hover': {
    boxShadow: '0px 0px 0px 8px hsla(210, 100%, 39%, 0.08)',
  },
  '& svg': {
    color: '$primaryForeground',
  },
})

export const SwitchLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$xs',
  color: '$neutral-700',
  fontWeight: 700,
  cursor: 'pointer',
})
