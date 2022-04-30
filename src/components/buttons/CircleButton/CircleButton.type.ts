import { Color, Layout, Size } from 'types'

export interface CircleButtonProps extends React.ComponentProps<'button'> {
  color?: Color
  size?: Size
  layout?: Layout
}
