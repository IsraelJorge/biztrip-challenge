import { Meta } from '@storybook/react'

import { Icon, IconName, IconProps } from '@/components/Icon'

const iconsName: IconName[] = [
  'AArrowDown',
  'BadgeAlertIcon',
  'CableCarIcon',
  'FacebookIcon',
  'InstagramIcon',
]

export default {
  title: 'components/Icon',
  component: Icon,
  args: {
    name: 'AArrowDown',
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      options: iconsName,
    },
  },
} as Meta<typeof Icon>

export const Default = (args: IconProps) => <Icon {...args} />
