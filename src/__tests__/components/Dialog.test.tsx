import { render, screen, fireEvent } from '@testing-library/react'

import { Dialog } from '@/components/Dialog'

describe('<Dialog />', () => {
  it('should render the DialogTrigger correctly', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Container>
          <Dialog.Header title="Dialog Title" />
          <Dialog.Content>
            <p>Dialog Content</p>
          </Dialog.Content>
          <Dialog.Footer>
            <button>Close</button>
          </Dialog.Footer>
        </Dialog.Container>
      </Dialog>,
    )
    expect(screen.getByText('Open Dialog')).toBeInTheDocument()
  })

  it('should render the DialogHeader with title and close button', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Container>
          <Dialog.Header title="Dialog Title" />
        </Dialog.Container>
      </Dialog>,
    )
    fireEvent.click(screen.getByText('Open Dialog'))
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('opens and closes the dialog correctly', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Container>
          <Dialog.Header title="Dialog Title" />
          <Dialog.Content>
            <p>Dialog Content</p>
          </Dialog.Content>
          <Dialog.Footer>
            <button>Close</button>
          </Dialog.Footer>
        </Dialog.Container>
      </Dialog>,
    )

    fireEvent.click(screen.getByText('Open Dialog'))
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('Dialog Content')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('icon'))
    expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument()
  })
})
