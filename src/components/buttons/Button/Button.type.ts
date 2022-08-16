import React from 'react'

import { Color, Shape, PresetSize, TextWeight, TextFamiy } from '../../../types'

export interface ButtonProps extends React.ComponentProps<'button'> {
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize?: PresetSize | 'xs' | 'lg'
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}

export interface ButtonLinkProps extends React.ComponentProps<'a'> {
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize?: PresetSize | 'xs' | 'lg'
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
  before?: React.ReactNode
  after?: React.ReactNode
}
