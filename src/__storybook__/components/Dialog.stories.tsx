import { Meta } from '@storybook/react'

import { Button } from '@/components/Button'
import { Dialog } from '@/components/Dialog'

export default {
  title: 'components/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>

export const Default = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Abrir Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Container>
        <Dialog.Header title="Dialog Titulo" />
        <Dialog.Content>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            similique corporis voluptate nemo velit aliquid odit esse obcaecati
            aperiam sint voluptatibus, ratione beatae reprehenderit incidunt
            sequi atque, fugiat consectetur labore.
          </p>
        </Dialog.Content>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button color="tertiary">Cancelar</Button>
          </Dialog.Close>
          <Button>Salvar</Button>
        </Dialog.Footer>
      </Dialog.Container>
    </Dialog>
  )
}
