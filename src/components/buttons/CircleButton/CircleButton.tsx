import React from 'react'

import { arrayToClasslist, getColorClasses, getTextWeight } from '../../../helpers'
import { CircleButtonLinkProps, CircleButtonProps } from './CircleButton.type'
import styles from './CircleButton.module.scss'

const CircleButton = ({
  layout,
  presetSize,
  color,
  textWeight,
  className,
  children,
  ...props
}: CircleButtonProps | CircleButtonLinkProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.CircleButton,

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),

    ...getColorClasses(color, styles),

    ...getTextWeight(textWeight),

    className || ''
  ])

  return (props as CircleButtonLinkProps)?.href ? (
    <a {...(props as CircleButtonLinkProps)} className={classes}>
      {children}
    </a>
  ) : (
    <button {...(props as CircleButtonProps)} type={(props as CircleButtonProps)?.type || 'button'} className={classes}>
      {children}
    </button>
  )
}

CircleButton.defaultProps = {
  layout: 'filled',
  presetSize: 'md',
  color: 'rose',
  textWeight: 500
}

export default CircleButton
