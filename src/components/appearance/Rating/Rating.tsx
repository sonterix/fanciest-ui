import React from 'react'

import { arrayToClasslist, getColorClasses } from 'helpers'
import { RatingProps } from './Rating.type'
import styles from './Rating.module.scss'

const Rating = ({
  rating,
  layout,
  color,
  starSize,
  textSize,
  withNumber,
  onChangeRating,
  className,
  style,
  ...props
}: RatingProps): JSX.Element => {
  const classes = arrayToClasslist([styles.Rating, ...getColorClasses(color, styles), className || ''])

  const handleChangeRating = (selectedRating: number) => () => {
    if (onChangeRating) {
      onChangeRating(selectedRating)
    }
  }

  return (
    <div {...props} className={classes}>
      <span className={`${styles.Stars}${onChangeRating ? ` ${styles.Hoverable}` : ''}`}>
        {layout === 'multy'
          ? Array.from(Array(5).keys()).map(key =>
              onChangeRating ? (
                <button
                  key={`star-${key}`}
                  className={styles.InteractiveIcon}
                  onClick={handleChangeRating(5 - key)}
                  data-star={key + 1}
                >
                  <svg
                    className={5 - key <= rating ? styles.Checked : styles.Unchecked}
                    style={{ width: starSize + 6, height: starSize }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23 22"
                  >
                    <path d="M12.4099 1.48715C12.2799 1.08715 11.9099 0.827148 11.4999 0.827148C11.0799 0.827148 10.7199 1.09715 10.5899 1.48715L8.42992 8.12715H1.45992C1.03992 8.12715 0.679923 8.38715 0.549923 8.78715C0.419923 9.18715 0.559923 9.61715 0.899923 9.85715L6.53992 13.9571L4.37992 20.5871C4.24992 20.9871 4.38992 21.4172 4.72992 21.6572C5.06992 21.8972 5.51992 21.8972 5.85992 21.6572L11.4999 17.5571L17.1399 21.6572C17.4799 21.8972 17.9299 21.8972 18.2699 21.6572C18.6099 21.4172 18.7499 20.9771 18.6199 20.5871L16.4699 13.9571L22.1099 9.85715C22.4499 9.61715 22.5899 9.17715 22.4599 8.78715C22.3299 8.38715 21.9599 8.12715 21.5499 8.12715H14.5799L12.4099 1.48715Z" />
                  </svg>
                </button>
              ) : (
                <svg
                  key={`star-${key}`}
                  className={5 - key <= rating ? styles.Checked : styles.Unchecked}
                  style={{ width: starSize + 6, height: starSize }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 22"
                >
                  <path d="M12.4099 1.48715C12.2799 1.08715 11.9099 0.827148 11.4999 0.827148C11.0799 0.827148 10.7199 1.09715 10.5899 1.48715L8.42992 8.12715H1.45992C1.03992 8.12715 0.679923 8.38715 0.549923 8.78715C0.419923 9.18715 0.559923 9.61715 0.899923 9.85715L6.53992 13.9571L4.37992 20.5871C4.24992 20.9871 4.38992 21.4172 4.72992 21.6572C5.06992 21.8972 5.51992 21.8972 5.85992 21.6572L11.4999 17.5571L17.1399 21.6572C17.4799 21.8972 17.9299 21.8972 18.2699 21.6572C18.6099 21.4172 18.7499 20.9771 18.6199 20.5871L16.4699 13.9571L22.1099 9.85715C22.4499 9.61715 22.5899 9.17715 22.4599 8.78715C22.3299 8.38715 21.9599 8.12715 21.5499 8.12715H14.5799L12.4099 1.48715Z" />
                </svg>
              )
            )
          : null}

        {layout === 'single' ? (
          <svg
            className={styles.Checked}
            style={{ width: starSize + 6, height: starSize }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 22"
          >
            <path d="M12.4099 1.48715C12.2799 1.08715 11.9099 0.827148 11.4999 0.827148C11.0799 0.827148 10.7199 1.09715 10.5899 1.48715L8.42992 8.12715H1.45992C1.03992 8.12715 0.679923 8.38715 0.549923 8.78715C0.419923 9.18715 0.559923 9.61715 0.899923 9.85715L6.53992 13.9571L4.37992 20.5871C4.24992 20.9871 4.38992 21.4172 4.72992 21.6572C5.06992 21.8972 5.51992 21.8972 5.85992 21.6572L11.4999 17.5571L17.1399 21.6572C17.4799 21.8972 17.9299 21.8972 18.2699 21.6572C18.6099 21.4172 18.7499 20.9771 18.6199 20.5871L16.4699 13.9571L22.1099 9.85715C22.4499 9.61715 22.5899 9.17715 22.4599 8.78715C22.3299 8.38715 21.9599 8.12715 21.5499 8.12715H14.5799L12.4099 1.48715Z" />
          </svg>
        ) : null}
      </span>

      {withNumber && (
        <p className={styles.RatingNumber} style={{ fontSize: textSize }}>
          {rating.toFixed(1)}
        </p>
      )}
    </div>
  )
}

Rating.defaultProps = {
  layout: 'multy',
  color: 'yellow',
  starSize: 18,
  textSize: '18px',
  withNumber: false
}

export default Rating
