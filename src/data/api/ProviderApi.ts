import { buildApi } from '../buildApi'
import { ProviderPageSchema } from '../schemas/Provider'

const url = '/providers'

export const ProviderApi = {
  get: buildApi({
    url: url,
    method: 'GET',
    responseSchema: ProviderPageSchema,
  }),
}
