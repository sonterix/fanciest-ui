// @ts-ignore
import React from 'react'

import Icon from '../Icon/Icon'
import styles from './Rating.module.scss'

type RatingProps = {
  [key: string]: any
  className?: string
  color?: 'yellow' | 'red' | 'green'
  layout?: 'single' | 'multy'
  rating: number
  withNumber?: boolean
  handleChange?: (rating: number) => void
}

const Rating = ({
  className,
  color,
  layout,
  rating,
  withNumber,
  handleChange,
  ...props
}: RatingProps): JSX.Element => {
  const classes: string = [
    'mu-rating',
    styles.Rating,

    ...(layout === 'single' ? [styles.Single] : []),
    ...(layout === 'multy' ? [styles.Multy] : []),

    ...(color === 'yellow' ? [styles.Yellow] : []),
    ...(color === 'red' ? [styles.Red] : []),
    ...(color === 'green' ? [styles.Green] : []),

    className
  ].join(' ')

  return (
    <div className={classes} {...props}>
      <span className={`${styles.AllStars} ${handleChange ? styles.Hoverable : ''}`}>
        {layout === 'multy' ? (
          [...Array(5)].map((_, index) =>
            handleChange ? (
              <button
                key={`icon-button-${index}`}
                className={`mu-rating-btn ${styles.RatingBtn}`}
                onClick={() => handleChange(5 - index)}
                data-index={index + 1}
              >
                <Icon icon="icon-star-filled" className={5 - index <= rating ? styles.Checked : styles.Default} size={18}  />
              </button>
            ) : (
              <Icon key={`icon-${index}`} icon="icon-star-filled" className={index + 1 <= rating ? styles.Checked : styles.Default} size={18}  />
            )
          )
        ) : layout === 'single' ? (
          <Icon icon="icon-star-filled" className={styles.Checked} size={18}  />
        ) : (
          ''
        )}
      </span>

      {withNumber && <span className={styles.AllRatingValue}>{rating.toFixed(1)}</span>}
    </div>
  )
}

Rating.defaultProps = {
  className: '',
  color: 'yellow',
  layout: 'multy',
  withNumber: false,
  handleChange: null
}

export default Rating
