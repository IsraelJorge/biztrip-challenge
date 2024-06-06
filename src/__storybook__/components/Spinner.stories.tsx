import { Meta } from '@storybook/react'

import { Spinner } from '@/components/Spinner'

export default {
  title: 'components/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>

export const Default = () => <Spinner />
