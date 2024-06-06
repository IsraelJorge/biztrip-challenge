import { Meta } from '@storybook/react'

import { Alert, TypeAlert, AlertProps } from '@/components/Alert'

const types: TypeAlert[] = ['error', 'warning', 'success', 'info']
const sizes: AlertProps['size'][] = ['sm', 'md']

export default {
  title: 'components/Alert',
  component: Alert,
  args: {
    message: 'Alert message',
    hasIcon: true,
    type: 'error',
  },
  argTypes: {
    hasIcon: {
      control: 'boolean',
    },
    message: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: types,
    },
    size: {
      control: 'select',
      options: sizes,
    },
  },
} as Meta<typeof Alert>

export const Default = (args: AlertProps) => <Alert {...args} />
