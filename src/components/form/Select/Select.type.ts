import React from 'react'
import { Color, PresetSize, Shape, TextWeight } from 'types'

export interface OptionProps extends React.ComponentProps<'option'> {
  value: string
  children: React.ReactNode
}

export interface SelectProps extends React.ComponentProps<'button'> {
  options: OptionProps | OptionProps[]
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize: PresetSize
  label?: React.ReactNode
  color?: Color
  textSize?: string | number
  textWeight?: TextWeight
}
