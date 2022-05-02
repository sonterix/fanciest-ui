import React, { useRef } from 'react'

import { arrayToClasslist } from 'helpers'
import { InputProps } from './Textarea.type'
import styles from './Textarea.module.scss'

const Textarea = ({
  layout,
  shape,
  presetSize,
  label,
  resize,
  className,
  style,
  ...props
}: InputProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Textarea,

    ...(props?.disabled ? [styles.Disabled] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),

    className || ''
  ])

  // Id for label and textarea
  const generatedId = useRef(Math.floor((1 + Math.random()) * 0x10000).toString(16))

  return (
    <div className={styles.InputContainer}>
      {!!label && (
        <label className={styles.Label} htmlFor={generatedId.current}>
          {label}
        </label>
      )}

      <div className={classes}>
        <textarea {...props} id={generatedId.current} style={{ ...(style || {}), ...(resize ? { resize } : {}) }} />
      </div>
    </div>
  )
}

Textarea.defaultProps = {
  layout: 'filled',
  shape: 'squared',
  presetSize: 'md'
}

export default Textarea
