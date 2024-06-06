import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { Alert } from '@/components/Alert'
import { Button } from '@/components/Button'
import { CredentialForm } from '@/components/CredentialForm'
import { DataList } from '@/components/DataList'
import { Dialog } from '@/components/Dialog'
import { Form } from '@/components/Form'
import { Icon, IconName } from '@/components/Icon'
import { IconButton } from '@/components/IconButton'
import { Input } from '@/components/Input'
import { ContainerLayout } from '@/components/layouts/styled'
import { Pagination } from '@/components/Pagination'
import { Switch } from '@/components/Switch'
import { Tooltip } from '@/components/Tooltip'
import { useToast } from '@/contexts/ToastProvider/useToast'
import { buildSearchParams } from '@/data/buildParams'
import { useCredentialActive } from '@/data/hooks/useCredentialActive'
import { useCredentialCreate } from '@/data/hooks/useCredentialCreate'
import { useCredentialEdit } from '@/data/hooks/useCredentialEdit'
import { useCredentialFind } from '@/data/hooks/useCredentialFind'
import { useCredentialGet } from '@/data/hooks/useCredentialGet'
import { useCredentialInactive } from '@/data/hooks/useCredentialInactive'
import { useQueryState } from '@/data/hooks/useQueryState'
import {
  CredentialEditForm,
  CredentialProviderForm,
} from '@/data/schemas/Credential'
import { ToggleSchema } from '@/data/schemas/Toggle'

import { Container, Header, IconService, Section, Title } from './styled'

const serviceTypeIcon: { [key: string]: IconName } = {
  vehicle: 'CarFront',
  hotel: 'Hotel',
  airway: 'PlaneIcon',
  road: 'BusFront',
}

type CredencialParams = {
  page?: string
  name?: string
  id?: string
}

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [nameQuery, setNameQuery] = useQueryState('')
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [defaultValuesForm, setDefaultValuesForm] = useState<
    CredentialProviderForm | undefined
  >()
  const [typeForm, setTypeForm] = useState<'create' | 'edit'>('create')

  const { showToast } = useToast()

  const params = buildSearchParams<CredencialParams>(searchParams)

  const {
    data: credentials,
    isFetching,
    error: errorCredentials,
  } = useCredentialFind({
    searchParams: { page: params.page ?? '1', name: nameQuery },
  })

  const { data: credential } = useCredentialGet({
    params: { id: params?.id ?? '' },
    enabled: Boolean(params?.id),
  })

  const { mutate: credentialActive, error: errorCredentialById } =
    useCredentialActive({
      onError: (error) => {
        showToast({ type: 'error', message: error.message })
      },
    })
  const { mutate: credentialInactive } = useCredentialInactive({
    onError: (error) => {
      showToast({ type: 'error', message: error.message })
    },
  })

  const { mutate: credentialCreate, isPending: isLoadingCreate } =
    useCredentialCreate({
      onSuccess: () => {
        showToast({ type: 'success', message: 'Credencial criada com sucesso' })
        setIsOpenDialog(false)
      },
      onError: (error) => {
        showToast({ type: 'error', message: error.message })
      },
    })

  const { mutate: credentialEdit, isPending: isLoadingEdit } =
    useCredentialEdit({
      onSuccess: () => {
        showToast({
          type: 'success',
          message: 'Credencial editada com sucesso',
        })
        setIsOpenDialog(false)
      },
      onError: (error) => {
        showToast({ type: 'error', message: error.message })
      },
    })

  const handleSearch = (value: string) => {
    setNameQuery(value)
    setSearchParams({ ...params, name: value })
  }

  const handlePagination = (page: string) => {
    const newParams = { ...params, page }
    setSearchParams(newParams)
  }

  const handleOpenFormDialog = (typeForm: 'create' | 'edit') => {
    setIsOpenDialog((prevState) => !prevState)
    setTypeForm(typeForm)
  }

  const handleToggleCredentialStatusSubmit = (
    id: string,
    isActive: boolean,
  ) => {
    if (isActive) {
      credentialInactive({ id })
    } else {
      credentialActive({ id })
    }
  }

  const handleCredentialSubmit = (data: CredentialProviderForm) => {
    if (typeForm === 'edit') {
      const dataEdit: CredentialEditForm = {
        ...data,
        providerId: data.providerId,
        credentials:
          data?.parameters?.map((item) => ({
            uuid: item.credential_parameter_uuid,
            value: item.value,
          })) || [],
      }

      credentialEdit(dataEdit)
      return
    }
    credentialCreate(data)
  }

  const handleEditCredential = (id: string) => {
    setSearchParams({ ...params, id })
    handleOpenFormDialog('edit')
  }

  useEffect(() => {
    if (credential?.credentialUuid) {
      setDefaultValuesForm({
        description: credential.description,
        providerId: credential.provider?.uuid,
        service_type: credential.serviceType,
        parameters:
          credential.credentialValues?.map((item) => ({
            credential_parameter_uuid: item?.uuid || '',
            value: item?.value || '',
          })) || [],
      })
    }
  }, [credential])

  return (
    <ContainerLayout>
      <Header>
        <Title>Credenciais</Title>
        <Container>
          <Input
            name="description"
            placeholder="Buscar Credencial"
            iconProps={{
              name: 'Search',
            }}
            noPadding
            onChange={(e) => handleSearch(e.target.value)}
          />

          <Button onClick={() => handleOpenFormDialog('create')}>
            <Icon name="CirclePlus" />
            <span>Nova Credencial</span>
          </Button>
        </Container>
      </Header>
      <Alert
        type="error"
        message={errorCredentials?.message || errorCredentialById?.message}
      />
      <Section>
        <DataList
          data={credentials?.data}
          columns={{
            description: {
              header: 'Nome',
            },
            provider: {
              header: 'Fornecedor',
              transform: (value) => value.name,
            },
            serviceType: {
              header: 'Serviço',
              transform: (value) => (
                <IconService name={serviceTypeIcon[value]} size="18" />
              ),
            },
          }}
          actionColumns={[
            {
              action: (item) => (
                <Tooltip text="Editar">
                  <IconButton
                    size="sm"
                    onClick={() => handleEditCredential(item.credentialUuid)}
                    iconName="PenIcon"
                  />
                </Tooltip>
              ),
            },
            {
              action: (item) => (
                <Form schema={ToggleSchema}>
                  {({ control }) => (
                    <Switch
                      key={item.credentialUuid}
                      name="enabled"
                      label={item.active ? 'Ativo' : 'Inativo'}
                      defaultValue={item.active}
                      control={control}
                      onClick={() =>
                        handleToggleCredentialStatusSubmit(
                          item.credentialUuid,
                          item.active,
                        )
                      }
                    />
                  )}
                </Form>
              ),
            },
          ]}
          keyExtractor={(row) => row.credentialUuid}
          emptyMessage={
            isFetching ? 'Carregando...' : 'Nenhum resultado encontrado'
          }
          disabledPredicate={(row) => !row.active}
        />
      </Section>
      <Pagination
        page={credentials?.meta.currentPage}
        totalPages={credentials?.meta.lastPage}
        onPaginate={handlePagination}
      />
      <Dialog
        open={isOpenDialog}
        onOpenChange={(open) => {
          if (!open) {
            delete params.id
            setSearchParams({ ...params })
            setDefaultValuesForm(undefined)
          }
          handleOpenFormDialog('create')
        }}
      >
        <Dialog.Container>
          <Dialog.Header title="Nova Credencial" />
          <Dialog.Content>
            <CredentialForm
              onCredentialSubmit={handleCredentialSubmit}
              defaultValues={defaultValuesForm}
              id="credential"
            />
          </Dialog.Content>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button color="tertiary">Cancelar</Button>
            </Dialog.Close>
            <Button
              type="submit"
              disabled={isLoadingCreate || isLoadingEdit}
              form="credential"
            >
              Salvar
            </Button>
          </Dialog.Footer>
        </Dialog.Container>
      </Dialog>
    </ContainerLayout>
  )
}
