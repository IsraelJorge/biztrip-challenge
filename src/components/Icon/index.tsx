import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'

type Keys = keyof typeof LucideIcons
export type IconName = Exclude<
  Keys,
  'icons' | 'createLucideIcon' | 'LucideIcon'
>

export type IconProps = LucideProps & {
  name: IconName
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent: React.ElementType = LucideIcons[name]

  return <IconComponent data-testid="icon" {...props} />
}
