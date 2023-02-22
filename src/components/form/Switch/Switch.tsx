import React, { useRef } from 'react'

import { arrayToClasslist, getBackgroundColorClass } from '../../../helpers'
import { SwitchProps } from './Switch.type'
import styles from './Switch.module.scss'

const Switch = ({
  color,
  label,
  labelPosition,
  customInput,
  className,
  checked,
  defaultChecked,
  disabled,
  ...props
}: SwitchProps): JSX.Element => {
  const classes = arrayToClasslist([styles.Switch, ...(disabled ? [styles.Disabled] : []), className || ''])

  // Id for label and input
  const generatedId = useRef(Math.floor((1 + Math.random()) * 0x10000).toString(16))

  // Recreate custom input with all existing props + id
  const localCustomInput = customInput
    ? React.createElement(customInput.type, { ...customInput.props, id: generatedId.current }, null)
    : null

  return (
    <label htmlFor={generatedId.current} className={classes}>
      {label && labelPosition === 'left' && <span className={styles.Label}>{label}</span>}

      {localCustomInput || (
        <input
          {...props}
          id={generatedId.current}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
      )}

      <div
        className={
          checked || defaultChecked || localCustomInput?.props.checked || localCustomInput?.props.defaultChecked
            ? styles.Checked
            : styles.Unchecked
        }
      >
        <span className={`${styles.Switcher} ${getBackgroundColorClass(color)[0]}`} />
        <span className={`${styles.Line} ${getBackgroundColorClass(color)[0]}`} />
      </div>

      {label && labelPosition === 'right' && <span className={styles.Label}>{label}</span>}
    </label>
  )
}

Switch.defaultProps = {
  color: 'secondary-200',
  labelPosition: 'right'
}

export default Switch
