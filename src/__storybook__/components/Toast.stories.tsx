import { Meta } from '@storybook/react'

import { Button } from '@/components/Button'
import { Toast } from '@/components/Toast'
import { useToast } from '@/contexts/ToastProvider/useToast'

export default {
  title: 'components/Toast',
  component: Toast,
} as Meta<typeof Toast>

export const Default = () => {
  const { showToast } = useToast()

  const handleShowToast = () => {
    showToast({ message: 'Toast message', type: 'success' })
  }

  return (
    <>
      <Button onClick={handleShowToast}>show toast</Button>
    </>
  )
}
