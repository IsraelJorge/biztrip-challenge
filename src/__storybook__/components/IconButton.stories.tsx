import { Meta } from '@storybook/react'

import { IconName } from '@/components/Icon'
import { IconButton, IconButtonProps } from '@/components/IconButton'

const sizes: IconButtonProps['size'][] = ['sm', 'md']
const iconsName: IconName[] = [
  'Heart',
  'BadgeAlertIcon',
  'CableCarIcon',
  'FacebookIcon',
  'InstagramIcon',
]

export default {
  title: 'components/IconButton',
  component: IconButton,
  args: {
    iconName: 'Heart',
    size: 'md',
  },
  argTypes: {
    iconName: {
      control: {
        type: 'select',
      },
      options: iconsName,
    },
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
  },
} as Meta<typeof IconButton>

export const Default = (args: IconButtonProps) => <IconButton {...args} />
