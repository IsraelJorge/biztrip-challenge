import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import { Form } from '@/components/Form'
import { Switch, SwitchProps } from '@/components/Switch'
import { ToggleSchema } from '@/data/schemas/Toggle'

describe('<Switch />', () => {
  type FormValues = {
    switchField: boolean
  }

  const useRenderComponent = (props?: Partial<SwitchProps<FormValues>>) => {
    return render(
      <Form schema={ToggleSchema}>
        {({ control }) => (
          <Switch
            {...props}
            control={control}
            name="enabled"
            label="Switch Label"
          />
        )}
      </Form>,
    )
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the switch component correctly', () => {
    useRenderComponent()
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeInTheDocument()
    expect(screen.getByText('Switch Label')).toBeInTheDocument()
  })

  it('calls onChange when the switch is clicked', () => {
    useRenderComponent()
    const switchElement = screen.getByTestId('switch') as HTMLInputElement
    fireEvent.click(switchElement)
    expect(switchElement.value).toBe('on')
  })

  it('calls onClick callback when provided', () => {
    const onClick = vi.fn()
    useRenderComponent({ onClick })
    const switchElement = screen.getByRole('switch') as HTMLInputElement
    fireEvent.click(switchElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('disables the switch when disabled prop is true', () => {
    useRenderComponent({ disabled: true })
    const switchElement = screen.getByRole('switch') as HTMLInputElement
    expect(switchElement).toBeDisabled()
  })
})
