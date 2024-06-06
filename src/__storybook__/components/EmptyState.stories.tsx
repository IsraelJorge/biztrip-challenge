import { Meta } from '@storybook/react'

import { EmptyState, EmptyStateProps } from '@/components/EmptyState'

export default {
  title: 'components/EmptyState',
  component: EmptyState,
  args: {
    message: 'No data available',
  },
  argTypes: {
    message: {
      control: 'text',
    },
  },
} as Meta<typeof EmptyState>

export const Default = (args: EmptyStateProps) => <EmptyState {...args} />
