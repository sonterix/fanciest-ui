import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'

import styles from './Input.module.scss'

interface InputProps extends React.ComponentProps<'input'> {
  className?: string
  type?: any
  inputSize?: 'sm' | 'md'
  layout?: 'filled' | 'outlined'
  shape?: 'rounded' | 'squared'
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  label?: string
  msg?: string
  status?: 'success' | 'error'
  mask?: string
}

const getMaskedValue = (value: string, mask: string): string => {
  if (!mask) return value

  // Get array of values without mask values
  const pureValueArr = value.split('').filter(char => !mask.split('').includes(char))

  // Fill mask * with values
  const maskedValueArr = mask.split('').map(char => {
    if (char === '*') {
      const valueChar = pureValueArr.shift()
      return valueChar || char
    }

    return char
  })

  const maskedValue = maskedValueArr.join('')

  return maskedValue
}

const Input = ({
  className,
  type,
  inputSize,
  layout,
  shape,
  iconBefore,
  iconAfter,
  label,
  msg,
  status,
  mask,
  value,
  onChange,
  ...props
}: InputProps): JSX.Element => {
  const classes: string = [
    'mu-input',
    styles.Input,
    ...(inputSize === 'sm' ? [styles.SizeSm] : []),
    ...(inputSize === 'md' ? [styles.SizeMd] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(status === 'success' ? [styles.Success] : []),
    ...(status === 'error' ? [styles.Error] : []),

    ...(iconBefore ? [`mu-with-icon-before ${styles.LeftSpace}`] : []),
    ...(iconAfter ? [`mu-with-icon-after ${styles.RightSpace}`] : []),
    className
  ].join(' ')

  const input = useRef<HTMLInputElement | null>(null)

  // Mask chars indexes array
  const maskCharsIndexes = useMemo(
    () =>
      mask
        ?.split('')
        .reduce((acc: number[], char, index) => (char !== '*' ? [...acc, index] : acc), []),
    [mask]
  )

  const [maskValue, setMaskValue] = useState<string>(
    getMaskedValue(String(value || ''), mask || '')
  )

  // Move cursor to closest unfilled value
  useEffect(() => {
    if (mask && input?.current) {
      if (document.activeElement === input.current) {
        const firstNoneMaskValue = maskValue
          .split('')
          .reduce(
            (acc, char, index) =>
              !maskCharsIndexes?.includes(index) && char !== '*' ? index : acc,
            0
          )

        input.current.setSelectionRange(firstNoneMaskValue + 1, firstNoneMaskValue + 1)
      }
    }
  }, [mask, maskValue, input])

  const handleMask = (
    event: ChangeEvent<HTMLInputElement>,
    onChangeCustom?: React.ChangeEventHandler<HTMLInputElement>
  ): ChangeEvent<HTMLInputElement> | void => {
    const { target } = event

    const maskedValue = getMaskedValue(target.value, mask || '')
    // Update value in event object
    event.target.value = maskedValue

    setMaskValue(maskedValue)
    if (onChangeCustom) return onChangeCustom(event)
    return event
  }

  return (
    <div className="mu-container">
      {!!label && <label className={`mu-label ${styles.Label}`}>{label}</label>}

      <div className={`mu-input-container ${styles.InputWrapper}`}>
        {!!iconBefore && (
          <span className={`mu-icon mu-icon-before ${styles.IconBefore}`}>{iconBefore}</span>
        )}

        <input
          ref={input}
          type={type}
          className={classes}
          value={mask ? maskValue : value}
          onChange={mask ? event => handleMask(event, onChange) : onChange}
          {...props}
        />

        {!!iconAfter && (
          <span className={`mu-icon mu-icon-after ${styles.IconAfter}`}>{iconAfter}</span>
        )}
      </div>

      {!!msg && (
        <small
          className={`mu-message ${
            status === 'success'
              ? styles.SuccessMsg
              : status === 'error'
              ? styles.ErrorMsg
              : styles.Msg
          }`}
        >
          {msg}
        </small>
      )}
    </div>
  )
}

Input.defaultProps = {
  className: '',
  type: 'text',
  inputSize: 'md',
  layout: 'filled',
  shape: 'squared',
  iconBefore: null,
  iconAfter: null,
  label: '',
  msg: '',
  status: '',
  mask: ''
}

export default Input
