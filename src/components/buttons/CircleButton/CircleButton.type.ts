import { Color, Layout, Size, TextFamiy, TextWeight } from 'types'

export interface CircleButtonProps extends React.ComponentProps<'button'> {
  layout?: Layout
  size?: Size
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
}

export interface CircleButtonLinkProps extends React.ComponentProps<'a'> {
  layout?: Layout
  size?: Size
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
}
