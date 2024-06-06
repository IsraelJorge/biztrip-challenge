import { render, screen, fireEvent } from '@testing-library/react'

import { Alert, AlertProps } from '@/components/Alert'

describe('<Alert />', () => {
  const defaultProps: AlertProps = {
    type: 'info',
    message: 'This is an alert message',
    hasIcon: true,
    size: 'md',
  }

  it('should render with the correct message', () => {
    render(<Alert {...defaultProps} />)
    expect(screen.getByText('This is an alert message')).toBeInTheDocument()
  })

  it('should render with an icon when hasIcon is true', () => {
    render(<Alert {...defaultProps} />)
    expect(screen.getByTestId('icon-type')).toBeInTheDocument()
  })

  it('removes the message when the close icon is clicked', () => {
    render(<Alert {...defaultProps} />)
    fireEvent.click(screen.getByTestId('icon-x'))

    expect(
      screen.queryByText('This is an alert message'),
    ).not.toBeInTheDocument()
  })

  it('should not render the alert when message is not provided', () => {
    render(<Alert {...defaultProps} message={undefined} />)
    expect(
      screen.queryByText('This is an alert message'),
    ).not.toBeInTheDocument()
  })
})
