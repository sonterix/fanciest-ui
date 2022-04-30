import React from 'react'

import { ButtonProps } from './Button.type'
import styles from './Button.module.scss'

const Button = ({
  color,
  shape,
  size,
  layout,
  textWeight,
  before,
  after,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = [
    styles.Button,

    ...(color === 'black' ? [styles.Black] : []),
    ...(color === 'white' ? [styles.White] : []),
    ...(color === 'yellow' ? [styles.Yellow] : []),
    ...(color === 'orange' ? [styles.Orange] : []),
    ...(color === 'red' ? [styles.Red] : []),
    ...(color === 'rose' ? [styles.Rose] : []),
    ...(color === 'green' ? [styles.Green] : []),
    ...(color === 'teal' ? [styles.Teal] : []),
    ...(color === 'turquoise' ? [styles.Turquoise] : []),
    ...(color === 'blue' ? [styles.Blue] : []),
    ...(color === 'purple' ? [styles.Purple] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(size === 'xs' ? [styles.Xs] : []),
    ...(size === 'sm' ? [styles.Sm] : []),
    ...(size === 'md' ? [styles.Md] : []),
    ...(size === 'lg' ? [styles.Lg] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(textWeight === 'light' ? [styles.Light] : []),
    ...(textWeight === 'normal' ? [styles.Normal] : []),
    ...(textWeight === 'semibold' ? [styles.Semibold] : []),
    ...(textWeight === 'bold' ? [styles.Bold] : []),

    className || ''
  ].join(' ')

  return (
    <button className={classes} {...props}>
      {!!before && before}
      {<span className={styles.Children}>{children}</span>}
      {!!after && after}
    </button>
  )
}

Button.defaultProps = {
  color: 'rose',
  shape: 'rounded',
  size: 'md',
  layout: 'filled',
  textWeight: 'normal',
  before: null,
  after: null
}

export default Button
