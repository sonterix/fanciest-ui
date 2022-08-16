import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { arrayToClasslist, getColorClasses, getTextWeight } from '../../../helpers'
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
  limitDropdown,
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

    ...getTextWeight(textWeight)
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

  const clssesDropdown = arrayToClasslist([styles.SelectDropdown, ...classes])

  // Refs need to match positions
  const selectRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  // Find possible selected options
  const seletedOption = options.find(option => option.value === value)
  const seletedDefaultOption = options.find(option => option.value === defaultValue)
  const firstNotDisabledOption = options.find(option => !option.disabled)

  const [isOpen, setOpen] = useState<boolean>(false)

  // Set Dropdown position when the select is open
  useEffect(() => {
    if (isOpen && selectRef.current && dropdownRef.current) {
      const rectSelect = selectRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      // Calculate dropdown position based on select position
      dropdownRef.current.style.top = `${rectSelect.top + scrollTop + rectSelect.height}px`
      dropdownRef.current.style.left = `${rectSelect.left + scrollLeft + rectSelect.width / 2}px`
      dropdownRef.current.style.minWidth = `${rectSelect.width}px`
      // Limit witdth of the dropdown to select width
      if (limitDropdown) {
        dropdownRef.current.style.maxWidth = `${rectSelect.width}px`
      }
    }
  }, [isOpen, limitDropdown])

  // Detect click outside of the dropdown
  useEffect(() => {
    const outsideClick = ({ target }: Event) => {
      if (
        selectRef.current &&
        dropdownRef.current &&
        !selectRef.current.contains(target as Node) &&
        !dropdownRef.current.contains(target as Node)
      ) {
        setOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', outsideClick)
    } else {
      document.removeEventListener('mousedown', outsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', outsideClick)
    }
  }, [isOpen])

  const handleToggleDropdown = (): void => {
    setOpen(prev => !prev)
  }

  // Select option anction where the select is closing and call the callbackfunc
  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setOpen(false)

    if (onChange) {
      onChange(event)
    }
  }

  // Recteate option to add onClick
  const localOptions = options.map((option, index) =>
    React.createElement(
      'button',
      { ...option, type: 'button', tabIndex: index, role: 'option', onClick: handleSelectOption },
      option.label
    )
  )

  return (
    <>
      <div className={styles.SelectContainer}>
        {label && <span className={styles.Label}>{label}</span>}

        <button {...props} ref={selectRef} type="button" className={clssesSelect} onClick={handleToggleDropdown}>
          <span>
            {seletedOption?.label || seletedDefaultOption?.label || firstNotDisabledOption?.label || 'Select'}
          </span>

          <svg
            className={isOpen && !props.disabled ? styles.Up : styles.Down}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6 0l12 12-12 12z" />
          </svg>
        </button>
      </div>

      {isOpen && !props.disabled
        ? createPortal(
            <ul ref={dropdownRef} className={clssesDropdown}>
              {localOptions.map(option => (
                <li key={`option-${option.props.tabIndex}`}>{option}</li>
              ))}
            </ul>,
            document.body
          )
        : null}
    </>
  )
}

Select.defaultProps = {
  layout: 'filled',
  shape: 'squared',
  presetSize: 'md',
  color: 'black',
  textWeight: 400,
  limitDropdown: false
}

export default Select
