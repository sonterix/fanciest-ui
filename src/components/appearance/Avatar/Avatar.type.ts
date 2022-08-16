import React from 'react'
import { Color, TextFamiy, TextWeight } from '../../../types'

export interface AvatarProps extends React.ComponentProps<'div'> {
  width?: string | number
  height?: string | number
  radius?: string | number
  src?: string
  alt?: string
  objectFit?: 'cover' | 'contain'
  color?: Color
  textFamily?: TextFamiy
  textSize?: string | number
  textWeight: TextWeight
}
