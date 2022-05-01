import { Color, Shape, Size, TextFamiy, TextWeight } from 'types'

export interface BadgeProps extends React.ComponentProps<'div'> {
  shape?: Shape
  size?: Size
  color?: Color
  textFamily?: TextFamiy
  textSize?: string | number
  textWeight?: TextWeight
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}
