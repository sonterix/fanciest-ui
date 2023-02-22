import React from 'react'

import { PresetSize, Shape, TextWeight } from '../../../types'

export interface OptionProps extends React.ComponentProps<'option'> {
  label: string
  value: string
}

export interface MultiselectProps extends Omit<React.ComponentProps<'div'>, 'onChange'> {
  options: OptionProps[]
  layout?: 'filled' | 'outlined'
  shape?: Shape
  presetSize?: PresetSize
  label?: React.ReactNode
  textWeight?: TextWeight
  limitDropdown?: boolean
  value?: string[]
  defaultValue?: string[]
  placeholder?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
