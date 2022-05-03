import React, { useEffect, useRef, useState } from 'react'

import { arrayToClasslist, getColorClasses, getTextWeight } from 'helpers'
import { SelectProps } from './Select.type'
import styles from './Select.module.scss'

const Select = ({
  options,
  layout,
  shape,
  presetSize,
  label,
  color,
  textWeight,
  className,
  value,
  defaultValue,
  onChange,
  ...props
}: SelectProps): JSX.Element => {
  const classes = [
    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),

    ...getColorClasses(color, styles),

    ...getTextWeight(textWeight, styles)
  ]

  // Classes are based on 'classes' variable
  const clssesSelect = arrayToClasslist([
    styles.Select,

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...classes,
    className || ''
  ])

  const clssesDropdown = arrayToClasslist([styles.Dropdown, ...classes])

  const dropdownRef = useRef<HTMLDivElement>(null)

  const [isOpen, setOpen] = useState(false)

  // Detect click outside of the dropdown
  useEffect(() => {
    const dropdownRefClick = ({ target }: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
        setOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', dropdownRefClick)
    } else {
      document.removeEventListener('mousedown', dropdownRefClick)
    }

    return () => {
      document.removeEventListener('mousedown', dropdownRefClick)
    }
  }, [isOpen])

  const handleToggleDropdown = (): void => {
    setOpen(prev => !prev)
  }

  // Select option anction where the select is closing and call the callbackfunc
  const handleSelectOption = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setOpen(false)

    if (onChange) {
      onChange(event)
    }
  }

  // Recteate option to add onClick
  const localOptions = (Array.isArray(options) ? options : [options]).map((option, index) =>
    React.createElement(
      'button',
      { ...option, type: 'button', tabIndex: index, role: 'option', onClick: handleSelectOption },
      option.children
    )
  )

  const firstNotDisabledOption = (Array.isArray(options) ? options : [options]).find(({ disabled }) => !disabled)

  return (
    <div ref={dropdownRef} className={styles.SelectContainer}>
      {label && <span className={styles.Label}>{label}</span>}

      <button {...props} type="button" className={clssesSelect} onClick={handleToggleDropdown}>
        {value || defaultValue || firstNotDisabledOption?.children || 'Select'}

        <svg
          className={isOpen && !props.disabled ? styles.Up : styles.Down}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6 0l12 12-12 12z" />
        </svg>
      </button>

      {isOpen && !props.disabled && (
        <ul className={clssesDropdown}>
          {localOptions.map(option => (
            <li key={`option-${option.props.tabIndex}`}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

Select.defaultProps = {
  layout: 'filled',
  shape: 'squared',
  presetSize: 'md',
  color: 'black',
  textWeight: 400
}

export default Select
