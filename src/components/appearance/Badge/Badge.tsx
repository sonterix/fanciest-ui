import React from 'react'

import { arrayToClasslist, getColorClasses, getTextFamily, getTextWeight } from 'helpers'
import { BadgeProps } from './Badge.type'
import styles from './Badge.module.scss'

const Badge = ({
  shape,
  presetSize,
  color,
  bgOpacity,
  hoverable,
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

    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),

    ...(hoverable ? [styles.Hoverable] : []),

    ...getColorClasses(color, styles),

    ...getTextFamily(textFamily, styles),

    ...getTextWeight(textWeight, styles),

    className || ''
  ])

  return (
    <div {...props} className={classes} style={{ ...style, ...(textSize ? { fontSize: textSize } : {}) }}>
      <div className={styles.Background} style={{ opacity: bgOpacity }} />

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
  presetSize: 'md',
  color: 'black',
  bgOpacity: 1,
  hoverable: false,
  textWeight: 500
}

export default Badge
