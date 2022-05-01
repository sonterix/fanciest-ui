import { Color } from 'types'

export interface LoaderProps extends React.ComponentProps<'div'> {
  layout: 'ball' | 'spinline' | 'spindot' | 'rolling' | 'dualring' | 'ellipsis' | 'pulse' | 'magnify'
  wrapperWidth?: string | number
  wrapperHeight?: string | number
  width?: string | number
  height?: string | number
  color: Color
}
