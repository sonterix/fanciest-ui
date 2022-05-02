import { Shape, Size } from 'types'

export interface InputProps extends React.ComponentProps<'input'> {
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize: Size
  label?: string
  mask?: string
  maskSymbol?: string
  before?: React.ReactNode
  after?: React.ReactNode
}
