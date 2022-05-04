import React from 'react'
import { Color, PresetSize, Shape, TextWeight } from 'types'

export interface OptionProps extends React.ComponentProps<'option'> {
  label: string
  value: string
}

export interface SelectProps extends Omit<React.ComponentProps<'button'>, 'onChange'> {
  options: OptionProps[]
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize: PresetSize
  label?: React.ReactNode
  color?: Color
  textWeight?: TextWeight
  limitDropdown?: boolean
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
