import React from 'react'

import Icon from '../Icon/Icon'
import styles from './Badge.module.scss'

type BadgeProps = {
  [key: string]: any
  className?: string
  color?: 'primary' | 'green' | 'yellow' | 'blue' | 'turquoise' | 'grey'
  shape?: 'rounded' | 'squared'
  size?: 'sm' | 'md'
  close?: boolean
  handleClose?: () => void
  children?: React.ReactNode
}

const Badge = ({
  className,
  color,
  size,
  shape,
  close,
  handleClose,
  children,
  ...props
}: BadgeProps): JSX.Element => {
  const classes: string = [
    'mu-badge',
    styles.Badge,

    ...(color === 'primary' ? [styles.Primary] : []),
    ...(color === 'green' ? [styles.Green] : []),
    ...(color === 'yellow' ? [styles.Yellow] : []),
    ...(color === 'blue' ? [styles.Blue] : []),
    ...(color === 'turquoise' ? [styles.Turquoise] : []),
    ...(color === 'grey' ? [styles.Grey] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(size === 'sm' ? [styles.SizeSm] : []),
    ...(size === 'md' ? [styles.SizeMd] : []),

    className
  ].join(' ')

  return (
    <div className={classes} {...props}>
      <span className={`mu-content ${styles.Content}`}>{children}</span>

      {close && (
        <button type="button" className={`mu-close-btn ${styles.XMarkBtn}`} onClick={handleClose}>
          <Icon icon="icon-x-mark" size={10} />
        </button>
      )}
    </div>
  )
}

Badge.defaultProps = {
  className: '',
  color: 'primary',
  size: 'md',
  shape: 'squared',
  close: false,
  handleClose: () => {},
  children: null
}

export default Badge
