import React from 'react'

import { Color } from '../../../types'

export interface RadioProps extends React.ComponentProps<'input'> {
  color?: Color
  label?: React.ReactNode
  labelPosition?: 'left' | 'right'
  customInput?: React.ReactElement<React.ComponentProps<'input'>, 'input'>
}
