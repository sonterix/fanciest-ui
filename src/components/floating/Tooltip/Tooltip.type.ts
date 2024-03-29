import React from 'react'

import { Color, Position, TextFamiy, TextWeight } from '../../../types'

export interface TooltipProps extends React.ComponentProps<'div'> {
  content: React.ReactNode
  position?: Position
  maxWidth?: string | number
  color?: Color
  textFamily?: TextFamiy
  textSize?: string | number
  textWeight?: TextWeight
  actionType?: 'hover' | 'click'
}
