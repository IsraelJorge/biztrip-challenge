import { Meta } from '@storybook/react'

import { Input, InputProps } from '@/components/Input'

export default {
  title: 'components/Input',
  component: Input,
  args: {
    required: true,
    label: 'Nome',
    name: 'name',
    disabled: false,
  },
  argTypes: {
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    name: {
      table: { disable: true },
    },
    iconProps: {
      table: { disable: true },
    },
  },
} as Meta<typeof Input>

export const Default = (args: InputProps) => <Input {...args} />

export const WithIcon = () => (
  <Input
    required
    label="Nome"
    name="name"
    iconProps={{
      name: 'Eye',
    }}
  />
)

export const WithError = () => (
  <Input required label="Nome" name="name">
    <Input.Error message="Campo obrigatório" />
  </Input>
)
