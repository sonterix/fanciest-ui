import React from 'react'

import { PresetSize, Shape, TextWeight } from '../../../types'

export interface OptionProps extends React.ComponentProps<'option'> {
  label: string
  value: string
}

export interface SelectProps extends Omit<React.ComponentProps<'button'>, 'onChange'> {
  options: OptionProps[]
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize?: PresetSize
  label?: React.ReactNode
  textWeight?: TextWeight
  limitDropdown?: boolean
  value?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
