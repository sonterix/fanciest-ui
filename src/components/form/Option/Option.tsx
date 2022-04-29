// @ts-ignore
import React from 'react'

import styles from './Option.module.scss'

export type OptionProps = {
  [key: string]: any
  value: string
  className?: string
  disabled?: boolean
  children: string
}

const Option = ({ value, className, disabled, children, ...props }: OptionProps): JSX.Element => {
  const classes: string = [
    'mu-option',
    styles.Option,
    ...(disabled ? [styles.Disabled] : []),
    className
  ].join(' ')

  return (
    <div className={classes} data-value={value} role="button" {...props}>
      {children}
    </div>
  )
}

Option.defaultProps = {
  className: '',
  disabled: false
}

export default Option
