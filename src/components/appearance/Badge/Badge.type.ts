import { Color, Shape, Size, TextFamiy, TextWeight } from 'types'

export interface BadgeProps extends React.ComponentProps<'div'> {
  shape?: Shape
  size?: Size
  color?: Color
  bgOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
  hoverable?: boolean
  textFamily?: TextFamiy
  textSize?: string | number
  textWeight?: TextWeight
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}
