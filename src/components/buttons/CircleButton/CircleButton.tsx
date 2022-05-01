import React from 'react'

import { arrayToClasslist, getColorClasses, getTextFamily, getTextWeight } from 'helpers'
import { CircleButtonLinkProps, CircleButtonProps } from './CircleButton.type'
import styles from './CircleButton.module.scss'

const CircleButton = ({
  layout,
  size,
  color,
  textFamily,
  textWeight,
  className,
  children,
  ...props
}: CircleButtonProps | CircleButtonLinkProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.CircleButton,

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(size === 'sm' ? [styles.Sm] : []),
    ...(size === 'md' ? [styles.Md] : []),

    ...getColorClasses(color, styles),

    ...getTextFamily(textFamily, styles),

    ...getTextWeight(textWeight, styles),

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
  layout: 'filled',
  size: 'md',
  color: 'rose',
  textWeight: 500
}

export default CircleButton
