import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@/components/Button'
import { Icon } from '@/components/Icon'

type Variant = ButtonProps['color']

const variants: Variant[] = ['primary', 'secondary', 'tertiary']
const sizes: ButtonProps['size'][] = [
  'sm',
  'md',
  'lg',
  'icon-sm',
  'icon-md',
  'icon-lg',
]

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    color: {
      control: 'select',
      options: variants,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof Button>

export const Default = (args: ButtonProps) => <Button {...args} />

type StoryWithIcon = StoryObj<ButtonProps>

export const WithIcon: StoryWithIcon = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <Icon name="AArrowDown" size="20" />
      {children}
    </Button>
  ),
}

export const OnlyIcon: StoryWithIcon = {
  args: {
    size: 'icon-lg',
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  render: (args) => (
    <Button {...args}>
      <Icon name="AArrowDown" size="20" />
    </Button>
  ),
}
