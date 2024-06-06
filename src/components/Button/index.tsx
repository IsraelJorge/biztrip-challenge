import { forwardRef } from 'react'

import { Spinner } from '../Spinner'
import { Container } from './styled'

export type ButtonProps = React.ComponentPropsWithRef<typeof Container> & {
  isLoading?: boolean
}

export const Button = forwardRef<
  React.ElementRef<typeof Container>,
  ButtonProps
>(({ children, isLoading, ...props }, ref) => {
  return (
    <Container ref={ref} {...props}>
      {isLoading ? (
        <Spinner data-testid="spinner" color="tertiary" />
      ) : (
        children
      )}
    </Container>
  )
})
