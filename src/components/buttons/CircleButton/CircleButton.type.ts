import React from 'react'

import { Color, PresetSize, TextWeight } from '../../../types'

export interface CircleButtonProps extends React.ComponentProps<'button'> {
  layout?: 'filled' | 'outlined'
  presetSize?: PresetSize
  color?: Color
  backgroundColor?: Color
  textWeight: TextWeight
}

export interface CircleButtonLinkProps extends React.ComponentProps<'a'> {
  layout?: 'filled' | 'outlined'
  presetSize?: PresetSize
  color?: Color
  backgroundColor?: Color
  textWeight: TextWeight
}
