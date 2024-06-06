import { Meta } from '@storybook/react'

import { Form } from '@/components/Form'
import { Select, SelectProps } from '@/components/Select'
import { LoginSchema } from '@/data/schemas/Login'

export default {
  title: 'components/Select',
  component: Select,
  args: {
    placeholder: 'Select an option',
    label: 'Password',
    required: false,
    noPadding: false,
    disabled: false,
  },
  argTypes: {
    data: {
      table: { disable: true },
    },
    control: {
      table: { disable: true },
    },
    name: {
      table: { disable: true },
    },
    displayKey: {
      table: { disable: true },
    },
    valueKey: {
      table: { disable: true },
    },
    defaultValue: {
      table: { disable: true },
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    noPadding: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof Select>

const options = [
  {
    id: '1',
    name: 'Option 1',
  },
  {
    id: '2',
    name: 'Option 2',
  },
  {
    id: '3',
    name: 'Option 3',
  },
]

export const Default = (args: SelectProps<any, any>) => {
  return (
    <Form schema={LoginSchema}>
      {({ control }) => (
        <Select
          {...args}
          data={options}
          displayKey="name"
          name="password"
          valueKey="id"
          control={control}
        />
      )}
    </Form>
  )
}

export const WithError = (args: SelectProps<any, any>) => {
  return (
    <Form schema={LoginSchema}>
      {({ control }) => (
        <Select
          {...args}
          data={options}
          displayKey="name"
          name="password"
          valueKey="id"
          control={control}
        >
          <Select.Error message="Campo obrigatório" />
        </Select>
      )}
    </Form>
  )
}
