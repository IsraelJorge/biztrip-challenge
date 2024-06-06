import { Loader } from './styled'

export type SpinnerProps = Omit<React.ComponentProps<typeof Loader>, 'name'>

export function Spinner({ ...props }: SpinnerProps) {
  return <Loader name="LoaderCircle" {...props} />
}
