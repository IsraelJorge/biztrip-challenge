import type { Preview } from '@storybook/react'

import { globalStyles } from '@/styles/globalStyles'

import { withRouter } from 'storybook-addon-remix-react-router'
import { ToastProvider } from '@/contexts/ToastProvider'
import { Toast } from '@/components/Toast'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withRouter,
    (Story) => {
      globalStyles()

      return (
        <ToastProvider>
          <Toast />
          <Story />
        </ToastProvider>
      )
    },
  ],
}

export default preview
