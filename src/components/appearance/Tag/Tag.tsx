import React from 'react'

import Icon from '../Icon/Icon'
import styles from './Tag.module.scss'

type BadgeProps = {
  [key: string]: any
  className?: string
  color?: 'red' | 'green' | 'grey' | 'white'
  shape?: 'rounded' | 'squared'
  size?:
    | {
        default: 'sm' | 'md' | 'lg'
        smRes: 'sm' | 'md' | 'lg'
        mdRes: 'sm' | 'md' | 'lg'
        lgRes: 'sm' | 'md' | 'lg'
      }
    | 'sm'
    | 'md'
    | 'lg'
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  icon?: string
  onClick?: () => void | null
  children?: React.ReactNode
}

// Copy of SASS breackpoints
const BREACKPOINTS = {
  sm: 601,
  md: 961,
  lg: 1281
}

const Tag = ({ className, color, shape, size, weight, icon, children, onClick, ...props }: BadgeProps): JSX.Element => {
  const screenWidth = 100

  const handleGetSize = () => {
    // If set size for all breackpoints
    if (typeof size === 'string') return size

    let tagSize = size?.default || 'sm'

    if (screenWidth >= BREACKPOINTS.lg && size?.lgRes) tagSize = size.lgRes
    else if (screenWidth >= BREACKPOINTS.md && size?.mdRes) tagSize = size.mdRes
    else if (screenWidth >= BREACKPOINTS.sm && size?.smRes) tagSize = size.smRes

    return tagSize
  }

  const classes: string = [
    'mu-tag',
    styles.Tag,
    styles[`${handleGetSize()}Size`],

    ...(onClick ? [styles.WithAction] : []),

    ...(color === 'red' ? [styles.Red] : []),
    ...(color === 'green' ? [styles.Green] : []),
    ...(color === 'grey' ? [styles.Grey] : []),
    ...(color === 'white' ? [styles.White] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(weight === 'light' ? [styles.Light] : []),
    ...(weight === 'normal' ? [styles.Normal] : []),
    ...(weight === 'semibold' ? [styles.Semibold] : []),
    ...(weight === 'bold' ? [styles.Bold] : []),

    className
  ].join(' ')

  return (
    <div className={classes} {...props} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {children}
    </div>
  )
}

Tag.defaultProps = {
  className: '',
  color: 'green',
  shape: 'squared',
  size: 'md',
  weight: 'normal',
  icon: '',
  onClick: null,
  children: null
}

export default Tag
