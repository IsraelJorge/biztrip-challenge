import { buildApi } from '../buildApi'
import {
  CredentialProviderFormSchema,
  CredentialPageSchema,
  CredentialProviderParameterSchema,
  CredentialSchema,
  CredentialEditForm,
} from '../schemas/Credential'
import { IdSchema } from '../schemas/Shared'

const url = '/credentials'

export const CredentialApi = {
  get: buildApi({
    url: url,
    method: 'GET',
    responseSchema: CredentialPageSchema,
  }),
  getById: buildApi({
    url: url,
    method: 'GET',
    responseSchema: CredentialSchema,
  }),
  getProviderParameter: buildApi({
    url: `${url}/providers`,
    method: 'GET',
    responseSchema: CredentialProviderParameterSchema,
  }),
  post: buildApi({
    url: `${url}/providers`,
    method: 'POST',
    requestSchema: CredentialProviderFormSchema,
  }),
  active: buildApi({
    url: `${url}/:id/active`,
    method: 'PATCH',
    requestSchema: IdSchema,
  }),
  inactive: buildApi({
    url: `${url}/:id/inactive`,
    method: 'PATCH',
    requestSchema: IdSchema,
  }),
  put: buildApi({
    url: url,
    method: 'PUT',
    requestSchema: CredentialEditForm,
  }),
}
