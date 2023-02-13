import React from 'react'

import { TextWeight } from '../../../types'

export interface FontMedia {
  default?: number | string
  xs?: number | string
  sm?: number | string
  md?: number | string
  lg?: number | string
  xl?: number | string
  xxl?: number | string
  xxxl?: number | string
}

export interface FontWeightMedia {
  default?: TextWeight
  xs?: TextWeight
  sm?: TextWeight
  md?: TextWeight
  lg?: TextWeight
  xl?: TextWeight
  xxl?: TextWeight
  xxxl?: TextWeight
}

export interface FontProps extends React.ComponentProps<'p'> {
  size?: number | string | FontMedia
  weight?: TextWeight | FontWeightMedia
  lineHeight?: number | string | FontMedia
  letterSpacing?: number | string | FontMedia
  as?: string
  selector?: string
  inheritToChildren?: boolean
}
