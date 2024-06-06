import { forwardRef } from 'react'

import { Icon, IconName } from '../Icon'
import { Container } from './styled'

export type IconButtonProps = React.ComponentPropsWithRef<typeof Container> & {
  iconName: IconName
}

export const IconButton = forwardRef<
  React.ElementRef<typeof Container>,
  IconButtonProps
>(({ iconName, ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      <Icon name={iconName} />
    </Container>
  )
})

IconButton.displayName = 'IconButton'
