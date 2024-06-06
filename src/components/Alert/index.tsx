import { forwardRef, useState } from 'react'

import { Icon, IconName } from '../Icon'
import { AlertContainer, AlertSpan } from './styled'

export type TypeAlert = 'error' | 'warning' | 'success' | 'info'

export type AlertProps = {
  type: TypeAlert
  message?: string
  hasIcon?: boolean
  size?: 'sm' | 'md'
}

const iconType: { [key in TypeAlert]: IconName } = {
  error: 'CircleAlert',
  warning: 'TriangleAlert',
  success: 'CircleCheckIcon',
  info: 'InfoIcon',
}

export const Alert = forwardRef<
  React.ElementRef<typeof AlertContainer>,
  AlertProps
>(({ type, hasIcon, message, size }, ref) => {
  const [messageState, setMessageState] = useState<string | undefined>(message)

  if (!messageState) return null

  const handleRemove = () => {
    setMessageState(undefined)
  }

  return (
    <AlertContainer ref={ref} variant={type} size={size}>
      {hasIcon && <Icon data-testid="icon-type" name={iconType[type]} />}
      <AlertSpan>{messageState}</AlertSpan>
      <Icon data-testid="icon-x" name="X" onClick={handleRemove} />
    </AlertContainer>
  )
})
