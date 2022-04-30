import React from 'react'

import { arrayToClasslist } from 'helpers'
import { CircleButtonProps } from './CircleButton.type'
import styles from './CircleButton.module.scss'

const CircleButton = ({ color, size, layout, type, className, children, ...props }: CircleButtonProps): JSX.Element => {
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

    className || ''
  ])

  return (
    <button type={type || 'button'} className={classes} {...props}>
      {children}
    </button>
  )
}

CircleButton.defaultProps = {
  className: '',
  color: 'rose',
  size: 'md',
  layout: 'filled'
}

export default CircleButton
