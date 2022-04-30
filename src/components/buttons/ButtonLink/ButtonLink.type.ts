import { Color, Shape, Size, TextWeight, Layout } from 'types/commonProps'

export interface ButtonLinkProps extends React.ComponentProps<'button'> {
  color?: Color
  shape?: Shape
  size?: Size | 'xs' | 'lg'
  layout?: Layout
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}
