import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import { Tooltip, TooltipProps } from '@/components/Tooltip'

describe('<Tooltip />', () => {
  const renderComponent = (props: TooltipProps) => {
    return render(<Tooltip {...props} />)
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the tooltip with correct content and behavior', async () => {
    const text = 'Tooltip Content'
    renderComponent({ text, children: <button>Hover me</button> })

    const triggerElement = screen.getByText('Hover me')
    await userEvent.hover(triggerElement)

    await waitFor(() => {
      screen.findAllByText(text).then((res) => {
        expect(res).toHaveLength(1)
      })
    })
  })
})
