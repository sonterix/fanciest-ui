// @ts-ignore
import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'

import Icon from '../../display/Icon/Icon'
import { OptionProps } from '../Option/Option'
import styles from './Select.module.scss'

interface SelectOption extends JSX.Element {
  props: OptionProps
}

type SelectProps = {
  [key: string]: any
  className?: string
  label?: string | Array<JSX.Element> | JSX.Element
  size?: 'sm' | 'md'
  shape?: 'rounded' | 'squared'
  minWidth?: number
  selectedValue: string | number | boolean
  disabled?: boolean
  handleOnChange: (value: string) => void
  children: Array<SelectOption> | SelectOption
}

const Select = ({
  className,
  label,
  size,
  shape,
  minWidth,
  selectedValue,
  disabled,
  handleOnChange,
  children,
  ...props
}: SelectProps): JSX.Element => {
  const classes: string = [
    'mu-container',
    styles.SelectContainer,
    ...(size === 'sm' ? [styles.SizeSm] : []),
    ...(size === 'md' ? [styles.SizeMd] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(disabled ? [styles.Disabled] : []),
    className
  ].join(' ')

  const dropdownRef = useRef<HTMLDivElement>(null)

  const [isOpen, setOpen] = useState(false)

  // Select option anction where the select is closing and call the callbackfunc
  const handleSelectOption = (value: string) => {
    setOpen(false)
    handleOnChange(value)
  }

  // Detect click outside of the dropdown and close it
  const handleRefElClick = (event: Event) => {
    const { target } = event
    const { current } = dropdownRef

    if (!current || !target) return

    if (!current.contains(target as Node)) setOpen(false)
  }

  // Detect click outside of the dropdown
  useEffect(() => {
    if (isOpen) {
      // Add when opened
      document.addEventListener('mousedown', handleRefElClick)
    } else {
      // Remove when closed
      document.removeEventListener('mousedown', handleRefElClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleRefElClick)
    }
  }, [isOpen])

  // Anyway convert childrens to array
  const options: Array<SelectOption> = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    []
  )

  // Add necessary props to each option
  const constructOptions: Array<SelectOption> = useMemo(
    () =>
      options.map((option, index) => ({
        ...option,
        props: {
          ...option.props,
          onClick: () => handleSelectOption(option.props.value),
          onKeyDown: () => {},
          tabIndex: index
        }
      })),
    [children]
  )

  // Get selected option name to show in jsx
  const {
    props: { children: selectedOption }
  }: SelectOption = useMemo(() => {
    // Selected option
    const selected: SelectOption | undefined = constructOptions?.find(
      option => option.props.value === selectedValue
    )
    // First not disabled option
    const firstNotDisabled: SelectOption | undefined = constructOptions?.find(
      option => !option.props.disabled
    )

    return selected || firstNotDisabled || constructOptions[0]
  }, [constructOptions])

  return (
    <div ref={dropdownRef} className={classes} style={{ minWidth }}>
      {label && <span className={`mu-label ${styles.Label}`}>{label}</span>}

      <div
        className={`mu-select ${styles.Select}`}
        onClick={() => setOpen(prevOpen => !prevOpen)}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        {...props}
      >
        {selectedOption}
        <Icon icon={isOpen ? 'icon-dropdown-up' : 'icon-dropdown-down'} size={10} />
      </div>

      {isOpen && !disabled && (
        <div className={`mu-dropdown ${styles.Dropdown}`}>
          {constructOptions.map((option, index) => (
            <Fragment key={`option-${index}`}>{option}</Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

Select.defaultProps = {
  label: '',
  size: 'md',
  shape: 'squared',
  className: '',
  minWidth: 60,
  disabled: false
}

export default Select
