import { Color, Shape, Size, TextWeight, Layout, TextFamiy } from 'types'

export interface ButtonProps extends React.ComponentProps<'button'> {
  color?: Color
  shape?: Shape
  size?: Size | 'xs' | 'lg'
  layout?: Layout
  textFamily?: TextFamiy
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}

export interface ButtonLinkProps extends React.ComponentProps<'a'> {
  color?: Color
  shape?: Shape
  size?: Size | 'xs' | 'lg'
  layout?: Layout
  textFamily?: TextFamiy
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}
