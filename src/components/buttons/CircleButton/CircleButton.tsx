import React from 'react'

import { arrayToClasslist } from 'helpers'
import { CircleButtonLinkProps, CircleButtonProps } from './CircleButton.type'
import styles from './CircleButton.module.scss'

const CircleButton = ({
  color,
  size,
  layout,
  textFamily,
  textWeight,
  className,
  children,
  ...props
}: CircleButtonProps | CircleButtonLinkProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.CircleButton,

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

    ...(size === 'sm' ? [styles.Sm] : []),
    ...(size === 'md' ? [styles.Md] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

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

  return (props as CircleButtonLinkProps)?.href ? (
    <a className={classes} {...(props as CircleButtonLinkProps)}>
      {children}
    </a>
  ) : (
    <button type={(props as CircleButtonProps)?.type || 'button'} className={classes} {...(props as CircleButtonProps)}>
      {children}
    </button>
  )
}

CircleButton.defaultProps = {
  color: 'rose',
  shape: 'rounded',
  size: 'md',
  layout: 'filled',
  textWeight: 500
}

export default CircleButton
