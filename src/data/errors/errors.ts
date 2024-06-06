import { yup } from '@/lib/yup'

export class SchemaValidationError extends Error {
  error!: yup.ValidationError
  extra: Record<string, unknown>

  constructor(error: yup.ValidationError, options: Record<string, unknown>) {
    super(error.message)
    this.error = error
    this.extra = options
  }
}
