import React from 'react'

import {
  arrayToClasslist,
  getBackgroundColorClass,
  getBorderColorClass,
  getColorClass,
  getTextWeight
} from '../../../helpers'
import { ButtonLinkProps, ButtonProps } from './Button.type'
import styles from './Button.module.scss'

const Button = ({
  layout,
  shape,
  presetSize,
  color,
  backgroundColor,
  textWeight,
  before,
  after,
  className,
  children,
  ...props
}: ButtonProps | ButtonLinkProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Button,

    ...(layout === 'filled' ? [styles.Filled, ...getBackgroundColorClass(backgroundColor)] : []),
    ...(layout === 'outlined' ? [styles.Outlined, ...getBorderColorClass(backgroundColor)] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(presetSize === 'xs' ? [styles.Xs] : []),
    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),
    ...(presetSize === 'lg' ? [styles.Lg] : []),

    ...getColorClass(color),

    ...getTextWeight(textWeight),

    className || ''
  ])

  return (props as ButtonLinkProps)?.href ? (
    <a {...(props as ButtonLinkProps)} className={classes}>
      {before || null}
      <span className={styles.Children}>{children}</span>
      {after || null}
    </a>
  ) : (
    <button {...(props as ButtonProps)} type={(props as ButtonProps)?.type || 'button'} className={classes}>
      {before || null}
      <span className={styles.Children}>{children}</span>
      {after || null}
    </button>
  )
}

Button.defaultProps = {
  layout: 'filled',
  shape: 'rounded',
  presetSize: 'xs',
  color: 'primary-900',
  backgroundColor: 'primary-400',
  textWeight: 500,
  before: null,
  after: null
}

export default Button
