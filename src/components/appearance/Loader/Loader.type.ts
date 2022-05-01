import { Color } from 'types'

export interface LoaderProps extends React.ComponentProps<'div'> {
  wrapperWidth?: string | number
  wrapperHeight?: string | number
  width?: string | number
  height?: string | number
  color: Color
}
