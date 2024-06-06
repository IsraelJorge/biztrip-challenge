import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
})

export const CardContainer = styled('div', {
  width: '100%',
  maxWidth: '41.5rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  backgroundColor: '$primaryForeground',
  borderRadius: '$md',
  border: '1px solid $accent',
  textAlign: 'center',
  '@lg': {
    padding: '$10',
    textAlign: 'start',
  },
})

export const CardTitle = styled('h1', {
  color: '$black',
  fontSize: '$5xl',
  marginBottom: '$6',
})

export const CardDescription = styled('p', {
  fontSize: '$lg',
  fontWeight: '400',
  color: '$neutral-700',
  marginBottom: '$10',
  maxWidth: '26rem',
})

export const Logo = styled('img', {
  width: '100px',
  padding: '$2',
  margin: '0 auto',

  '@lg': {
    margin: '0',
    width: '70px',
  },
})

export const SectionForm = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const ButtonContainer = styled('div', {
  marginTop: '$4',
  width: '100%',
  '& button': {
    width: '100%',
  },
})
