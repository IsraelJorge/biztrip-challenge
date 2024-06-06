import { styled } from '@/styles/stitches.config'

export const Table = styled('table', {
  tableLayout: 'auto',
  borderCollapse: 'separate',
  width: '100%',
  borderRadius: '$md',
  marginBottom: '$md',
  borderSpacing: '0 $space$6',
})

export const TableBody = styled('tbody', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  '@lg': {
    display: 'table-row-group',
  },
})

export const TableRow = styled('tr', {
  display: 'block',
  backgroundColor: '$primaryForeground',
  borderRadius: '$md',
  '&:hover': {
    boxShadow: '0px 8px 16px 0px hsla(0, 0%, 11%, 0.16)',
  },
  '@lg': {
    display: 'table-row',
  },
})

export const TableCell = styled('td', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$6',
  textWrap: 'nowrap',
  '&:before': {
    content: 'attr(data-label)',
    fontSize: '$sm',
    fontWeight: '500',
    lineHeight: '$sm',
    color: '$neutral-500',
  },
  borderX: '2px solid $primary',
  '&:first-child': {
    borderTop: '2px solid $primary',
    roundedTop: '$md',
  },
  '&:last-child': {
    borderBottom: '2px solid $primary',
    roundedBottom: '$md',
  },
  '@lg': {
    display: 'table-cell',
    borderX: 'none',
    '&:before': {
      display: 'none',
    },
    borderY: '2px solid $primary',
    '&:first-child': {
      roundedTop: '0',
      borderLeft: '2px solid $primary',
      borderTopLeftRadius: '$md',
      borderBottomLeftRadius: '$md',
    },
    '&:last-child': {
      roundedBottom: '0',
      borderRight: '2px solid $primary',
      borderTopRightRadius: '$md',
      borderBottomRightRadius: '$md',
    },
  },
  variants: {
    disabled: {
      true: {
        border: 'none',
        '&:first-child': {
          border: 'none',
        },
        '&:last-child': {
          border: 'none',
        },
        '& .data-span': {
          color: '$neutral-500',
        },
      },
    },
  },
})

export const DataItemContainer = styled('div', {
  display: 'flex',
  '@lg': {
    flex: '1',
  },
})

export const DataItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$4',
})

export const Header = styled('span', {
  display: 'none',
  '@lg': {
    display: 'block',
    fontSize: '$sm',
    fontWeight: '500',
    lineHeight: '$sm',
    color: '$neutral-500',
  },
})

export const DataSpan = styled('span', {
  fontWeight: '600',
  lineHeight: '$sm',
  color: '$black',
})

export const ActionContainer = styled('div', {
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$6',
})
