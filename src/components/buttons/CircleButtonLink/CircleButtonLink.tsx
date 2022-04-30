import React from 'react'

import { CircleButtonLinkProps } from './CircleButtonLink.type'
import styles from './CircleButtonLink.module.scss'

const CircleButtonLink = ({
  color,
  size,
  layout,
  className,
  children,
  ...props
}: CircleButtonLinkProps): JSX.Element => {
  const classes = [
    styles.CircleButtonLink,

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
  ].join(' ')

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

CircleButtonLink.defaultProps = {
  color: 'rose',
  size: 'md',
  layout: 'filled'
}

export default CircleButtonLink
