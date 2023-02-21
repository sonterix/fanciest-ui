import React, { useRef } from 'react'

import { arrayToClasslist, getColorClass } from '../../../helpers'
import { RadioProps } from './Radio.type'
import styles from './Radio.module.scss'

const Radio = ({
  color,
  label,
  labelPosition,
  customInput,
  className,
  checked,
  defaultChecked,
  disabled,
  ...props
}: RadioProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Radio,

    ...(disabled ? [styles.Disabled] : []),

    ...getColorClass(color),

    className || ''
  ])

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
          type="radio"
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
      />

      {label && labelPosition === 'right' && <span className={styles.Label}>{label}</span>}
    </label>
  )
}

Radio.defaultProps = {
  color: 'rose',
  labelPosition: 'right'
}

export default Radio
