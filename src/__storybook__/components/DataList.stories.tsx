import { Meta } from '@storybook/react'

import { DataList } from '@/components/DataList'
import { Form } from '@/components/Form'
import { IconButton } from '@/components/IconButton'
import { Switch } from '@/components/Switch'
import { Tooltip } from '@/components/Tooltip'
import { ToggleSchema } from '@/data/schemas/Toggle'

export default {
  title: 'components/DataList',
  component: DataList,
} as Meta<typeof DataList>

const mockData = [
  {
    id: '1',
    name: 'Alice Smith',
    age: 28,
    email: 'alice.smith@example.com',
    phone: '123-456-7890',
  },
  {
    id: '2',
    name: 'Bob Johnson',
    age: 34,
    email: 'bob.johnson@example.com',
    phone: '123-456-7890',
  },
  {
    id: '3',
    name: 'Carol Williams',
    age: 45,
    email: 'carol.williams@example.com',
    phone: '123-456-7890',
  },
  {
    id: '4',
    name: 'David Brown',
    age: 22,
    email: 'david.brown@example.com',
    phone: '123-456-7890',
  },
  {
    id: '5',
    name: 'Eva Davis',
    age: 30,
    email: 'eva.davis@example.com',
    phone: '123-456-7890',
  },
]

export const Default = () => (
  <DataList
    data={mockData}
    columns={{
      name: {
        header: 'Name',
      },
      age: {
        header: 'Age',
      },
      email: {
        header: 'Email',
      },
      phone: {
        header: 'Phone',
      },
    }}
    actionColumns={[
      {
        action: () => (
          <Tooltip text="Editar">
            <IconButton size="sm" iconName="PenIcon" />
          </Tooltip>
        ),
      },
      {
        action: () => (
          <Form schema={ToggleSchema}>
            {({ control, watch }) => (
              <Switch
                name="enabled"
                label={watch('enabled') ? 'Ativo' : 'Inativo'}
                control={control}
              />
            )}
          </Form>
        ),
      },
    ]}
    disabledPredicate={(item) => item.age < 30}
    keyExtractor={(item) => `${item.id}-${item.name}`}
  />
)
