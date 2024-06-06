import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import { Pagination, PaginationProps } from '@/components/Pagination'

describe('<Pagination />', () => {
  const defaultProps: PaginationProps = {
    totalPages: 10,
    page: '1',
    onPaginate: vi.fn(),
  }

  const renderComponent = (props?: Partial<PaginationProps>) => {
    const mergedProps = { ...defaultProps, ...props }
    return render(<Pagination {...mergedProps} />)
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the pagination buttons correctly', () => {
    renderComponent()
    expect(screen.getByText('Anterior')).toBeInTheDocument()
    expect(screen.getByText('Próximo')).toBeInTheDocument()
  })

  it('disables the previous button on the first page', () => {
    renderComponent({ page: '1' })
    const previousButton = screen.getByText('Anterior')
    expect(previousButton).toBeDisabled()
  })

  it('disables the next button on the last page', () => {
    renderComponent({ page: '10' })
    const nextButton = screen.getByText('Próximo')
    expect(nextButton).toBeDisabled()
  })

  it('enables the previous button when not on the first page', () => {
    renderComponent({ page: '2' })
    const previousButton = screen.getByText('Anterior')
    expect(previousButton).not.toBeDisabled()
  })

  it('enables the next button when not on the last page', () => {
    renderComponent({ page: '9' })
    const nextButton = screen.getByText('Próximo')
    expect(nextButton).not.toBeDisabled()
  })

  it('calls onPaginate with the correct page when previous button is clicked', () => {
    renderComponent({ page: '3' })
    const previousButton = screen.getByText('Anterior')
    fireEvent.click(previousButton)
    expect(defaultProps.onPaginate).toHaveBeenCalledWith('2')
  })

  it('calls onPaginate with the correct page when next button is clicked', () => {
    renderComponent({ page: '8' })
    const nextButton = screen.getByText('Próximo')
    fireEvent.click(nextButton)
    expect(defaultProps.onPaginate).toHaveBeenCalledWith('9')
  })
})
