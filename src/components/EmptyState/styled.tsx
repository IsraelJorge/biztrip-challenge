import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '96px',
  backgroundColor: '$neutral-100',
  borderRadius: '$md',
  border: '2px dashed $neutral-400',
})

export const Span = styled('span', {
  color: '$black',
  fontWeight: '400',
  textAlign: 'center',
})
