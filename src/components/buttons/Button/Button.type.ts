import { Color, Shape, Size, TextWeight, Layout } from 'types'

export interface ButtonProps extends React.ComponentProps<'button'> {
  color?: Color
  shape?: Shape
  size?: Size | 'xs' | 'lg'
  layout?: Layout
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}
