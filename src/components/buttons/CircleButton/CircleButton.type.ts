import { Color, PresetSize, TextFamiy, TextWeight } from '../../../types'

export interface CircleButtonProps extends React.ComponentProps<'button'> {
  layout?: 'filled' | 'outlined'
  presetSize?: PresetSize
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
}

export interface CircleButtonLinkProps extends React.ComponentProps<'a'> {
  layout?: 'filled' | 'outlined'
  presetSize?: PresetSize
  color?: Color
  textFamily?: TextFamiy
  textWeight: TextWeight
}
