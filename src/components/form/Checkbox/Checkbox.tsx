import React, { useRef } from 'react'

import { arrayToClasslist, getColorClasses } from 'helpers'
import { CheckboxProps } from './Checkbox.type'
import styles from './Checkbox.module.scss'

const Checkbox = ({
  color,
  label,
  labelPosition,
  customInput,
  className,
  checked,
  disabled,
  ...props
}: CheckboxProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Checkbox,

    ...(disabled ? [styles.Disabled] : []),

    ...getColorClasses(color, styles),

    className || ''
  ])

  // Id for label and input
  const generatedId = useRef(Math.floor((1 + Math.random()) * 0x10000).toString(16))

  // Add id to custom input props
  if (customInput) {
    // eslint-disable-next-line no-param-reassign
    customInput.props.id = generatedId.current
  }

  return (
    <label htmlFor={generatedId.current} className={classes}>
      {label && labelPosition === 'left' && <span className={styles.Label}>{label}</span>}

      {customInput || (
        <input {...props} id={generatedId.current} type="checkbox" checked={checked} disabled={disabled} />
      )}

      <div className={checked || (customInput ? customInput.props.checked : false) ? styles.Checked : styles.Unchecked}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
        </svg>
      </div>

      {label && labelPosition === 'right' && <span className={styles.Label}>{label}</span>}
    </label>
  )
}

Checkbox.defaultProps = {
  color: 'rose',
  labelPosition: 'right'
}

export default Checkbox
