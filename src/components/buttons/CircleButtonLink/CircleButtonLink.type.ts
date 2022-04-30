import { Color, Layout, Size } from 'types/commonProps'

export interface CircleButtonLinkProps extends React.ComponentProps<'a'> {
  color?: Color
  size?: Size
  layout?: Layout
}
