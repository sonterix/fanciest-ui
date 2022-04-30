import { Color, Shape, Size, TextWeight, Layout } from 'types'

export interface ButtonLinkProps extends React.ComponentProps<'a'> {
  color?: Color
  shape?: Shape
  size?: Size | 'xs' | 'lg'
  layout?: Layout
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}
