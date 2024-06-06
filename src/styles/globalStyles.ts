import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: 'Inter, sans-serif',
    '-webkit-text-size-adjust': 'none',
    '-webkit-font-smoothing': 'antialiased',
    '::-webkit-scrollbar': {
      size: '$4',
      backgroundColor: '$neutral-100',
    },
    '::-webkit-scrollbar-thumb': {
      width: '$2',
      overflow: 'hidden',
      border: '$space$1 solid $neutral-100',
      borderRadius: '$full',
      backgroundColor: '$neutral-400',
    },
  },
  body: {
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    backgroundColor: '$secondaryForeground',
  },
})
