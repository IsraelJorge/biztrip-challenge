import { render, screen } from '@testing-library/react'
import * as LucideIcons from 'lucide-react'

import { Icon, IconProps } from '@/components/Icon'

describe('<Icon />', () => {
  const renderComponent = (props: IconProps) => {
    return render(<Icon {...props} />)
  }

  it('should render the icon with the specified name', () => {
    const iconName = 'ArrowUp'
    renderComponent({ name: iconName })

    const renderedIcon = screen.getByTestId('icon')
    expect(renderedIcon).toBeInTheDocument()
    expect(renderedIcon.tagName).toBe('svg')

    const iconComponent = LucideIcons[iconName]
    expect(iconComponent).toBeDefined()
  })
})
