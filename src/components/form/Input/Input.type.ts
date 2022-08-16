import React from 'react'

import { Shape, PresetSize } from '../../../types'

export interface InputProps extends React.ComponentProps<'input'> {
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize: PresetSize
  label?: React.ReactNode
  mask?: string
  maskSymbol?: string
  before?: React.ReactNode
  after?: React.ReactNode
}
