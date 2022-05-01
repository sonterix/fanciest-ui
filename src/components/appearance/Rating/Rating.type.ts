import { Color } from 'types'

export interface RatingProps extends React.ComponentProps<'div'> {
  rating: 0 | 1 | 2 | 3 | 4 | 5
  layout?: 'single' | 'multy'
  color?: Color
  starSize: number
  textSize: string | number
  withNumber?: boolean
  onChangeRating?: (rating: number) => void
}
