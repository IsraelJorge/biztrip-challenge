import * as SelectPrimitive from '@radix-ui/react-select'

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  position: 'relative',
  paddingBottom: '$5',
  '&:has(button:disabled)': {
    opacity: '0.32',
    pointerEvents: 'none',
  },
  variants: {
    noPadding: {
      true: {
        paddingBottom: 0,
      },
    },
  },
})

export const LabelContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '$2',
  fontSize: '$xs',
  fontWeight: '700',
  gap: '$2',
})

export const Label = styled('label', {
  display: 'block',
  color: '$neutral-700',
})

export const RequiredSpan = styled('span', {
  color: '$warning-900',
})

export const SelectTrigger = styled(SelectPrimitive.Trigger, {
  width: '100%',
  height: '$12',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  lineHeight: '1',
  justifyContent: 'space-between',
  gap: '$1',
  backgroundColor: '$primaryForeground',
  border: '2px solid $neutral-300',
  borderRadius: '$md',
  transition: 'all 150ms ease-in-out',
  color: '$neutral-700',
  cursor: 'pointer',
  '&:hover': {
    color: '$black',
  },
  '&:focus-within': {
    outline: '$space$1 solid $accent',
  },
  '& span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& svg': {
    size: '$4',
    fontSize: '$base',
    textAlign: 'center',
  },
  '&[data-state="open"] svg': {
    transition: 'transform 150ms ease-in-out',
    transform: 'rotate(180deg)',
  },
  variants: {
    error: {
      true: {
        border: '2px solid $error-500',
        backgroundColor: '$error-100',
        '&:hover': {
          borderColor: '$error-500',
        },
        '& input': {
          backgroundColor: '$error-100',
        },
      },
    },
  },
})

export const SelectContent = styled(SelectPrimitive.Content, {
  width: '100%',
  minWidth: 'var(--radix-select-trigger-width)',
  borderRadius: '$md',
  paddingY: '$3',
  border: '1px solid $neutral-300',
  backgroundColor: '$primaryForeground',
  boxShadow: '0px 24px 32px 0px hsla(0, 0%, 11%, 0.16)',
  transform: 'translateY(8px)',
})

export const SelectSearchContainer = styled('div', {
  paddingX: '$4',
  paddingBottom: '$3',
  borderBottom: '1px solid $neutral-300',
})

export const SelectItem = styled(SelectPrimitive.Item, {
  height: '$10',
  paddingX: '$4',
  paddingY: '$3',
  fontSize: '$sm',
  fontWeight: '500',
  color: '$neutral-700',
  cursor: 'pointer',
  transition: 'all 150ms ease-in-out',
  border: 'none',
  '&:focus-visible': {
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: '$neutral-100',
    color: '$black',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$secondaryForeground',
    color: '$secondary',
  },
})

export const SelectEmpty = styled('div', {
  ...SelectItem,
})

export const ErrorContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  fontSize: '$sm',
  color: '$warning-900',
  position: 'absolute',
  bottom: '0',
  '& span': {
    color: '$error-500',
  },
  '& svg': {
    color: '$error-900',
  },
})
