import { render, screen } from '@testing-library/react'

import { Input, InputProps } from '@/components/Input'

describe('<Input />', () => {
  const defaultProps: InputProps = {
    name: 'test-input',
    label: 'Test Label',
    required: true,
    iconProps: { name: 'AArrowUpIcon', position: 'right' },
  }

  it('should render with the correct label', () => {
    render(<Input {...defaultProps} />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('should render the required span when required is true', () => {
    render(<Input {...defaultProps} required={true} />)
    expect(screen.getByText('Obrigatório')).toBeInTheDocument()
  })

  it('should render the icon when iconProps are provided', () => {
    render(<Input {...defaultProps} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('does not render the required span when required is false', () => {
    render(<Input {...defaultProps} required={false} />)
    expect(screen.queryByText('Obrigatório')).not.toBeInTheDocument()
  })

  it('should render the InputPrimitive with correct props', () => {
    render(<Input {...defaultProps} placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })
})

describe('<InputError />', () => {
  it('should render null when message is not provided', () => {
    const { container } = render(<Input.Error />)
    expect(container).toBeEmptyDOMElement()
  })

  it('should render the error message and icon when message is provided', () => {
    render(<Input.Error message="Error message" />)
    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
