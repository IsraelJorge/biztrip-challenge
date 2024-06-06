import { Meta } from '@storybook/react'

import { IconButton } from '@/components/IconButton'
import { Tooltip, TooltipProps } from '@/components/Tooltip'

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  args: {
    text: 'Adicionar aos Favoritos',
  },
  argTypes: {
    text: {
      control: 'text',
    },
    children: {
      table: { disable: true },
    },
  },
} as Meta<typeof Tooltip>

export const Default = (args: TooltipProps) => (
  <Tooltip {...args}>
    <IconButton iconName="Heart" />
  </Tooltip>
)
