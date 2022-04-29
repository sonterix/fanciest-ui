// @ts-ignore
import React from 'react'

import styles from './Switch.module.scss'

type SwitchProps = {
  [key: string]: any
  className?: string
  label?: string
  labelPosition?: 'left' | 'right'
  color?: 'red' | 'blue' | 'turquoise'
  checked: boolean
  disabled?: boolean
  handleChange: () => void
}

const Switch = ({
  className,
  label,
  labelPosition,
  color,
  checked,
  disabled,
  handleChange,
  ...props
}: SwitchProps): JSX.Element => {
  const classes: string = [
    'mu-switch',
    styles.Switch,
    checked ? `switch-checked ${styles.Checked}` : '',

    ...(disabled ? [`switch-disabled ${styles.SwitchDisabled}`] : []),

    ...(color === 'red' ? [styles.RedColor] : []),
    ...(color === 'blue' ? [styles.BlueColor] : []),
    ...(color === 'turquoise' ? [styles.TurquoiseColor] : []),

    className
  ].join(' ')

  return (
    <label className={`mu-container ${styles.SwitchContainer}`}>
      {label && labelPosition === 'left' && (
        <span className={`mu-label ${styles.LabelLeft}`}>{label}</span>
      )}

      <button type="button" className={classes} onClick={handleChange} {...props}>
        <span className={styles.Switcher} />
        <span className={styles.Line} />
      </button>

      {label && labelPosition === 'right' && (
        <span className={`mu-label ${styles.LabelRight}`}>{label}</span>
      )}
    </label>
  )
}

Switch.defaultProps = {
  className: '',
  label: '',
  labelPosition: 'right',
  color: 'red',
  disabled: false
}

export default Switch
