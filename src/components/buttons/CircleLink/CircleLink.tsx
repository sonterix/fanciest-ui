import React from 'react'

import { CircleLinkProps } from './CircleLink.type'
import styles from './CircleLink.module.scss'

const CircleLink = ({ children, className, color, size, layout, ...props }: CircleLinkProps): JSX.Element => {
  const classes = [
    styles.CircleLink,

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

    className
  ].join(' ')

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}

CircleLink.defaultProps = {
  className: '',
  color: 'rose',
  size: 'md',
  layout: 'filled'
}

export default CircleLink
