import { Button } from '../Button'
import {
  PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationButton,
} from './styled'

export type PaginationProps = {
  totalPages: number | undefined
  page: number | string | undefined
  onPaginate: (page: string) => void
}

const MAX_BUTTONS = 7
const SIDE_WIDTH = 3 // 3 buttons on each side

const range = (start: number, end: number) => {
  return Array.from(Array(end - start + 1), (_, i) => i + start)
}

const getPageList = ({
  totalPages,
  currentPage,
}: {
  totalPages: number
  currentPage: number
}) => {
  const leftWidth = (MAX_BUTTONS - SIDE_WIDTH * 2 - 3) >> 1
  const rightWidth = (MAX_BUTTONS - SIDE_WIDTH * 2 - 2) >> 1

  if (totalPages <= MAX_BUTTONS) {
    return range(1, totalPages)
  }

  if (currentPage <= MAX_BUTTONS - SIDE_WIDTH - 1 - rightWidth) {
    return range(1, MAX_BUTTONS - SIDE_WIDTH - 1).concat(
      0,
      range(totalPages - SIDE_WIDTH + 1, totalPages),
    )
  }

  if (currentPage >= totalPages - SIDE_WIDTH - 1 - rightWidth) {
    return range(1, SIDE_WIDTH).concat(
      0,
      range(totalPages - SIDE_WIDTH - 1 - rightWidth - leftWidth, totalPages),
    )
  }

  return range(1, SIDE_WIDTH).concat(
    0,
    range(currentPage - leftWidth, currentPage + rightWidth),
    0,
    range(totalPages - SIDE_WIDTH + 1, totalPages),
  )
}

export function Pagination({ totalPages, page, onPaginate }: PaginationProps) {
  const currentPage = Number(page ?? '1')
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const pageList = getPageList({ totalPages: totalPages ?? 1, currentPage })

  return (
    <PaginationContainer>
      <Button
        disabled={isFirstPage}
        color="tertiary"
        onClick={() => onPaginate(String(currentPage - 1))}
      >
        Anterior
      </Button>

      <PaginationContent>
        {pageList.map((pageNumber, index) => {
          const isEllipsis = pageNumber === 0

          return isEllipsis ? (
            <PaginationEllipsis key={index}>...</PaginationEllipsis>
          ) : (
            <PaginationButton
              key={index}
              active={pageNumber === currentPage}
              onClick={() => onPaginate(String(pageNumber))}
            >
              {pageNumber}
            </PaginationButton>
          )
        })}
      </PaginationContent>

      <Button
        disabled={isLastPage}
        color="tertiary"
        onClick={() => onPaginate(String(currentPage + 1))}
      >
        Próximo
      </Button>
    </PaginationContainer>
  )
}
