import { yup } from '@/lib/yup'

export const ToggleSchema = yup.object().shape({
  enabled: yup.boolean().required(),
})
