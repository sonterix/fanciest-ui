import React from 'react'

import { arrayToClasslist, getColorClasses, getTextFamily, getTextWeight } from 'helpers'
import { ButtonLinkProps, ButtonProps } from './Button.type'
import styles from './Button.module.scss'

const Button = ({
  layout,
  shape,
  size,
  color,
  textFamily,
  textWeight,
  before,
  after,
  className,
  children,
  ...props
}: ButtonProps | ButtonLinkProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Button,

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(size === 'xs' ? [styles.Xs] : []),
    ...(size === 'sm' ? [styles.Sm] : []),
    ...(size === 'md' ? [styles.Md] : []),
    ...(size === 'lg' ? [styles.Lg] : []),

    ...getColorClasses(color, styles),

    ...getTextFamily(textFamily, styles),

    ...getTextWeight(textWeight, styles),

    className || ''
  ])

  return (props as ButtonLinkProps)?.href ? (
    <a className={classes} {...(props as ButtonLinkProps)}>
      {!!before && before}
      <span className={styles.Children}>{children}</span>
      {!!after && after}
    </a>
  ) : (
    <button type={(props as ButtonProps)?.type || 'button'} className={classes} {...(props as ButtonProps)}>
      {!!before && before}
      <span className={styles.Children}>{children}</span>
      {!!after && after}
    </button>
  )
}

Button.defaultProps = {
  layout: 'filled',
  shape: 'rounded',
  size: 'md',
  color: 'rose',
  textWeight: 500,
  before: null,
  after: null
}

export default Button
