import React from 'react'

import { arrayToClasslist } from 'helpers'
import { ButtonLinkProps, ButtonProps } from './Button.type'
import styles from './Button.module.scss'

const Button = ({
  color,
  shape,
  size,
  layout,
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

    ...(textFamily === 'main' ? [styles.Main] : []),
    ...(textFamily === 'heading' ? [styles.Heading] : []),

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
  color: 'rose',
  shape: 'rounded',
  size: 'md',
  layout: 'filled',
  textWeight: 500,
  before: null,
  after: null
}

export default Button
