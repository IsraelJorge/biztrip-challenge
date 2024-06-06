import { render, screen } from '@testing-library/react'

import { Button, ButtonProps } from '@/components/Button'

describe('<Button />', () => {
  const defaultProps: ButtonProps = {
    children: 'Click me',
    isLoading: false,
  }

  it('should render with the correct children', () => {
    render(<Button {...defaultProps} />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should render with the spinner when isLoading is true', () => {
    render(<Button {...defaultProps} isLoading={true} />)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('should not render the spinner when isLoading is false', () => {
    render(<Button {...defaultProps} isLoading={false} />)
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
  })

  it('should render button disable', () => {
    render(<Button {...defaultProps} disabled />)
    expect(screen.getByText('Click me')).toBeDisabled()
  })
})
