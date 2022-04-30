import React from 'react'

import { arrayToClasslist } from 'helpers'
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
  type,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = arrayToClasslist([
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

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(size === 'xs' ? [styles.Xs] : []),
    ...(size === 'sm' ? [styles.Sm] : []),
    ...(size === 'md' ? [styles.Md] : []),
    ...(size === 'lg' ? [styles.Lg] : []),

    ...(textWeight === 100 ? [styles.Weight100] : []),
    ...(textWeight === 200 ? [styles.Weight200] : []),
    ...(textWeight === 300 ? [styles.Weight300] : []),
    ...(textWeight === 400 ? [styles.Weight400] : []),
    ...(textWeight === 500 ? [styles.Weight500] : []),
    ...(textWeight === 600 ? [styles.Weight600] : []),
    ...(textWeight === 700 ? [styles.Weight700] : []),
    ...(textWeight === 800 ? [styles.Weight800] : []),
    ...(textWeight === 900 ? [styles.Weight900] : []),

    className || ''
  ])

  return (
    <button type={type || 'button'} className={classes} {...props}>
      {!!before && before}
      <span className={styles.Children}>{children}</span>
      {!!after && after}
    </button>
  )
}

Button.defaultProps = {
  color: 'rose',
  shape: 'rounded',
  size: 'md',
  layout: 'filled',
  textWeight: 500,
  before: null,
  after: null
}

export default Button
