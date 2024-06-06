import * as ToastPrimitive from '@radix-ui/react-toast'

import { useToast } from '@/contexts/ToastProvider/useToast'

import { TypeAlert } from '../Alert'
import { AlertContainer, AlertSpan } from '../Alert/styled'
import { Icon, IconName } from '../Icon'
import { ToastRoot, ToastViewport } from './styled'

const iconType: { [key in TypeAlert]: IconName } = {
  error: 'CircleAlert',
  warning: 'TriangleAlert',
  success: 'CircleCheckIcon',
  info: 'InfoIcon',
}

export const Toast = () => {
  const { toast, closeToast, onOpenChange } = useToast()
  const isOpen = !!toast?.open

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastRoot open={isOpen} onOpenChange={onOpenChange}>
        <AlertContainer variant={toast?.type}>
          {toast?.type && <Icon name={iconType[toast.type]} />}
          <AlertSpan>{toast?.message}</AlertSpan>
          <Icon name="X" onClick={closeToast} />
        </AlertContainer>
      </ToastRoot>
      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}
