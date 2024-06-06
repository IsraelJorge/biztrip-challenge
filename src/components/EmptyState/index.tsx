import { Container, Span } from './styled'

export type EmptyStateProps = React.ComponentProps<typeof Container> & {
  message?: string
}

export function EmptyState({ message, ...props }: EmptyStateProps) {
  if (!message) return null

  return (
    <Container {...props}>
      <Span>{message}</Span>
    </Container>
  )
}
