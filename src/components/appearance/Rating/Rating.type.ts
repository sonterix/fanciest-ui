import React from 'react'

import { Color } from '../../../types'

export interface RatingProps extends React.ComponentProps<'div'> {
  rating: number
  layout?: 'single' | 'multy'
  color?: Color
  starSize: number
  textSize: string | number
  withNumber?: boolean
  onChangeRating?: (rating: number) => void
}
