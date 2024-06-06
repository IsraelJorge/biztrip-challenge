import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  position: 'relative',
  paddingBottom: '$5',
  '&:has(input:disabled)': {
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

export const InputContainer = styled('div', {
  width: '100%',
  height: '$12',
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  backgroundColor: '$primaryForeground',
  border: '2px solid $neutral-300',
  borderRadius: '$md',
  transition: 'all 150ms ease-in-out',
  '&:hover': {
    borderColor: '$primary',
  },
  '&:focus-within': {
    outline: '$space$1 solid $accent',
  },
  '& svg': {
    color: '$neutral-500',
  },
  variants: {
    iconRight: {
      true: {
        flexDirection: 'row-reverse',
      },
    },
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

export const InputPrimitive = styled('input', {
  width: '100%',
  height: '$4',
  fontSize: '$base',
  fontWeight: '500',
  border: 'none',
  outline: 'none',
  '&::placeholder': {
    color: '$neutral-300',
  },
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
