import React from 'react'

import { arrayToClasslist, getColorClasses, getTextFamily, getTextWeight } from 'helpers'
import { BadgeProps } from './Badge.type'
import styles from './Badge.module.scss'

const Badge = ({
  shape,
  size,
  color,
  textFamily,
  textSize,
  textWeight,
  onClose,
  className,
  style,
  children,
  ...props
}: BadgeProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Badge,

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(size === 'sm' ? [styles.Sm] : []),
    ...(size === 'md' ? [styles.Md] : []),

    ...getColorClasses(color, styles),

    ...getTextFamily(textFamily, styles),

    ...getTextWeight(textWeight, styles),

    className || ''
  ])

  return (
    <div className={classes} style={{ ...style, fontSize: textSize }} {...props}>
      <span className={styles.Children}>{children}</span>

      {onClose && (
        <button type="button" className={styles.XMark} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
      )}
    </div>
  )
}

Badge.defaultProps = {
  shape: 'squared',
  size: 'md',
  color: 'black',
  textSize: '18px',
  textWeight: 500
}

export default Badge