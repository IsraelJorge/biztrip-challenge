import { buildApi } from '../buildApi'
import { AuthUserSchema } from '../schemas/AuthUser'
import { LoginSchema } from '../schemas/Login'

const url = '/login'

export const AuthApi = {
  login: buildApi({
    url: url,
    method: 'POST',
    requestSchema: LoginSchema,
    responseSchema: AuthUserSchema,
  }),
}
