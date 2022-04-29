// @ts-ignore
import React from 'react'

import styles from './MenuItem.module.scss'

export type MenuItemProps = {
  [key: string]: any
  className?: string
  disabled?: boolean
  children: React.ReactNode
}

const MenuItem = ({ className, disabled, children, ...props }: MenuItemProps): JSX.Element => {
  const classes: string = [
    'mu-menu-item',
    styles.MenuItem,

    ...(disabled ? [styles.Disabled] : []),

    className
  ].join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

MenuItem.defaultProps = {
  className: '',
  disabled: false
}

export default MenuItem
