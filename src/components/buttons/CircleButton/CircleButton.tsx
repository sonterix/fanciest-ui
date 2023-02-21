import React from 'react'

import {
  arrayToClasslist,
  getBackgroundColorClass,
  getBorderColorClass,
  getColorClass,
  getTextWeight
} from '../../../helpers'
import { CircleButtonLinkProps, CircleButtonProps } from './CircleButton.type'
import styles from './CircleButton.module.scss'

const CircleButton = ({
  layout,
  presetSize,
  color,
  backgroundColor,
  textWeight,
  className,
  children,
  ...props
}: CircleButtonProps | CircleButtonLinkProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.CircleButton,

    ...(layout === 'filled' ? [styles.Filled, ...getBackgroundColorClass(backgroundColor)] : []),
    ...(layout === 'outlined' ? [styles.Outlined, ...getBorderColorClass(backgroundColor)] : []),

    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),

    ...getColorClass(color),

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
  presetSize: 'sm',
  color: 'primary-900',
  backgroundColor: 'primary-400',
  textWeight: 500
}

export default CircleButton
