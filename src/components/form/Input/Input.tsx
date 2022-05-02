import React, { useEffect, useRef } from 'react'

import { arrayToClasslist } from 'helpers'
import { InputProps } from './Input.type'
import { getMaskedValue } from './helper'
import styles from './Input.module.scss'

const Input = ({
  layout,
  shape,
  presetSize,
  label,
  mask,
  maskSymbol,
  before,
  after,
  className,
  value,
  onChange,
  ...props
}: InputProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Input,

    ...(props?.disabled ? [styles.Disabled] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),

    className || ''
  ])

  const generatedId = useRef(Math.floor((1 + Math.random()) * 0x10000).toString(16))

  // Mask chars indexes array
  const maskCharsIndexes =
    mask && maskSymbol
      ? mask?.split('').reduce((acc: number[], char, index) => (char !== maskSymbol ? [...acc, index] : acc), [])
      : null

  const inputRef = useRef<HTMLInputElement | null>(null)

  // Move cursor to closest mask-unfilled value
  useEffect(() => {
    if (mask && maskSymbol && inputRef.current) {
      if (document.activeElement === inputRef.current) {
        const firstNoneMaskValue = String(value)
          .split('')
          .reduce((acc, char, index) => (!maskCharsIndexes?.includes(index) && char !== maskSymbol ? index : acc), 0)

        inputRef.current.setSelectionRange(firstNoneMaskValue + 1, firstNoneMaskValue + 1)
      }
    }
  }, [mask, maskCharsIndexes, maskSymbol, value])

  const handleOnChangeWithMask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (mask && maskSymbol) {
      // Update value in event object with masked value
      const maskedValue = getMaskedValue(event.target.value, mask, maskSymbol)

      // Hide mask from value if the value(without mask chars) of the input is empty. Else update event with masked value
      if (maskedValue === mask) {
        // eslint-disable-next-line no-param-reassign
        event.target.value = ''
      } else {
        // eslint-disable-next-line no-param-reassign
        event.target.value = maskedValue
      }
    }

    // Send event object to callback function. Note that the event may have been changed if the mask is enabled
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className={styles.InputContainer}>
      {!!label && (
        <label className={styles.Label} htmlFor={generatedId.current}>
          {label}
        </label>
      )}

      <div className={classes}>
        {before || null}

        <input {...props} id={generatedId.current} ref={inputRef} value={value} onChange={handleOnChangeWithMask} />

        {after || null}
      </div>
    </div>
  )
}

Input.defaultProps = {
  layout: 'filled',
  shape: 'squared',
  presetSize: 'md',
  maskSymbol: ' '
}

export default Input
