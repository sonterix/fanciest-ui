import { Color, Shape, Size, TextWeight, Layout, TextFamiy } from 'types'

export interface ButtonProps extends React.ComponentProps<'button'> {
  layout?: Layout
  shape?: Shape
  size?: Size | 'xs' | 'lg'
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}

export interface ButtonLinkProps extends React.ComponentProps<'a'> {
  layout?: Layout
  shape?: Shape
  size?: Size | 'xs' | 'lg'
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}
