import React, { useRef } from 'react'

import { arrayToClasslist, getBackgroundColorClass, getColorClass } from '../../../helpers'
import { CheckboxProps } from './Checkbox.type'
import styles from './Checkbox.module.scss'

const Checkbox = ({
  color,
  backgroundColor,
  label,
  labelPosition,
  customInput,
  className,
  checked,
  defaultChecked,
  disabled,
  ...props
}: CheckboxProps): JSX.Element => {
  const classes = arrayToClasslist([styles.Checkbox, ...(disabled ? [styles.Disabled] : []), className || ''])

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
            ? `${styles.Checked} ${getBackgroundColorClass(backgroundColor)[0] || ''}`
            : styles.Unchecked
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
        </svg>
      </div>

      {label && labelPosition === 'right' && <span className={styles.Label}>{label}</span>}
    </label>
  )
}

Checkbox.defaultProps = {
  backgroundColor: 'secondary-200',
  labelPosition: 'right'
}

export default Checkbox
