import { Color, TextWeight } from 'types'

export interface OptionProps extends React.ComponentProps<'option'> {
  color?: Color
  textSize?: string | number
  textWeight?: TextWeight
}
