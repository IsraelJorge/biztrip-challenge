import { Meta } from '@storybook/react'

import { Form } from '@/components/Form'
import { Switch, SwitchProps } from '@/components/Switch'
import { LoginSchema } from '@/data/schemas/Login'

export default {
  title: 'components/Switch',
  component: Switch,
  args: {
    disabled: false,
    defaultValue: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    defaultValue: {
      table: { disable: true },
    },
    control: {
      table: { disable: true },
    },
    name: {
      table: { disable: true },
    },
  },
} as Meta<typeof Switch>

export const Default = (args: SwitchProps<any>) => {
  return (
    <Form schema={LoginSchema}>
      {({ control, watch }) => {
        const email = watch('email')

        return (
          <Switch
            {...args}
            name="email"
            control={control}
            label={email ? 'Ativo' : 'Inativo'}
          />
        )
      }}
    </Form>
  )
}
