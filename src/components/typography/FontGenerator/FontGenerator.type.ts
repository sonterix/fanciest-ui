import React from 'react'

import { TextFamiy, TextWeight } from '../../../types'

export interface FontMedia {
  default?: number | string
  xs?: number | string | false
  sm?: number | string | false
  md?: number | string | false
  lg?: number | string | false
  xl?: number | string | false
  xxl?: number | string | false
  xxxl?: number | string | false
}

export interface FontProps extends React.ComponentProps<'p'> {
  family?: TextFamiy
  weight?: TextWeight
  media?: FontMedia
  as?: string
  selector?: string
  inheritToChildren?: boolean
}
