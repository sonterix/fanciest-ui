import React from 'react'

import { Shape, PresetSize } from '../../../types'

export interface InputProps extends React.ComponentProps<'textarea'> {
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize: PresetSize
  label?: React.ReactNode
  resize?: 'both' | 'horizontal' | 'vertical' | 'none'
}
