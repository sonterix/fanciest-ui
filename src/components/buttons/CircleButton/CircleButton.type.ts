import { Color, Layout, Size, TextFamiy, TextWeight } from 'types'

export interface CircleButtonProps extends React.ComponentProps<'button'> {
  color?: Color
  size?: Size
  layout?: Layout
  textFamily?: TextFamiy
  textWeight: TextWeight
}

export interface CircleButtonLinkProps extends React.ComponentProps<'a'> {
  color?: Color
  size?: Size
  layout?: Layout
  textFamily?: TextFamiy
  textWeight: TextWeight
}
