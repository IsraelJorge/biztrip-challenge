import { Icon } from '@/components/Icon'
import { styled } from '@/styles/stitches.config'

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingY: '$6',
  paddingX: '$8',
  borderBottom: '1px solid $neutral-300',
  backgroundColor: '$primaryForeground',

  '@lg': {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

export const Title = styled('h1', {
  fontSize: '$2xl',
  color: '$black',
  fontWeight: '600',
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$6',
  '@lg': {
    flexWrap: 'nowrap',
  },
})

export const Section = styled('section', {
  flex: 'auto',
  padding: '$4',
  '@lg': {
    padding: '$8',
  },
})
export const IconService = styled(Icon, {
  width: '100%',
  color: '$neutral-500',
  margin: '0 auto',
})
