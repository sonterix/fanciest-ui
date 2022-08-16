import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { arrayToClasslist, getColorClasses, getTextWeight } from '../../../helpers'
import { MultiselectProps, OptionProps } from './Multiselect.type'
import styles from './Multiselect.module.scss'

const Multiselect = ({
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
  placeholder,
  onChange,
  ...props
}: MultiselectProps): JSX.Element => {
  const classes = [
    ...(presetSize === 'sm' ? [styles.Sm] : []),
    ...(presetSize === 'md' ? [styles.Md] : []),

    ...getColorClasses(color, styles),

    ...getTextWeight(textWeight)
  ]

  // Classes are based on 'classes' variable
  const clssesMultiselect = arrayToClasslist([
    styles.Multiselect,

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...classes,
    className || ''
  ])

  const clssesDropdown = arrayToClasslist([styles.MultiselectDropdown, ...classes])

  // Refs need to match positions
  const selectRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  const [isOpen, setOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [searchOptions, setSearchOptions] = useState<OptionProps[]>(options)

  // Find possible selected options
  const seletedOption = options.filter(option => value?.includes(option.value))
  const seletedDefaultOption = options.filter(option => defaultValue?.includes(option.value))

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

  const handleOpenDropdown = (): void => {
    setOpen(true)
  }

  const handleToggleDropdown = (event: React.MouseEvent<HTMLOrSVGElement>): void => {
    event.stopPropagation()
    setOpen(prev => !prev)
  }

  // Multiselect option anction where the select is closing and call the callbackfunc
  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.stopPropagation()
    setOpen(false)

    // Reset search
    setSearch('')
    setSearchOptions(options)

    if (onChange) {
      onChange(event)
    }
  }

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSearch = event.target.value

    event.stopPropagation()
    setSearch(newSearch)

    setSearchOptions(
      options.filter(
        option =>
          new RegExp(`^${newSearch.toLowerCase()}`).test(option.label.toLowerCase()) ||
          new RegExp(`^${newSearch.toLowerCase()}`).test(option.value.toLowerCase())
      )
    )
  }

  // Recteate option to add onClick
  const localOptions = searchOptions.map((option, index) =>
    React.createElement(
      'button',
      {
        ...option,
        type: 'button',
        tabIndex: index,
        role: 'option',
        'data-active': value?.includes(option.value),
        onClick: handleSelectOption
      },
      option.label
    )
  )

  return (
    <>
      <div className={styles.MultiselectContainer}>
        {label && <span className={styles.Label}>{label}</span>}

        <div {...props} ref={selectRef} className={clssesMultiselect} aria-hidden="true" onClick={handleOpenDropdown}>
          {seletedOption.length ? (
            <ul className={styles.MultiselectSelected}>
              {seletedOption.map((option, index) => (
                <li key={`${option.value}-${index}`}>
                  <span>{option.label}</span>
                  {React.createElement(
                    'button',
                    {
                      ...option,
                      type: 'button',
                      tabIndex: index,
                      role: 'option',
                      'data-active': true,
                      onClick: handleSelectOption
                    },
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          ) : seletedDefaultOption.length ? (
            <ul>
              {seletedDefaultOption.map((option, index) => (
                <li key={`${option.value}-${index}`}>
                  <span>{option.label}</span>
                  {React.createElement(
                    'button',
                    {
                      ...option,
                      type: 'button',
                      tabIndex: index,
                      role: 'option',
                      'data-active': true,
                      onClick: handleSelectOption
                    },
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          ) : !isOpen || props.disabled ? (
            <span>{placeholder || 'Search'}</span>
          ) : null}

          {isOpen && !props.disabled ? (
            <input
              type="text"
              size={6}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              className={styles.MultiselectSearch}
              placeholder={placeholder || 'Search'}
              value={search}
              onChange={handleChangeSearch}
            />
          ) : null}

          <svg
            className={isOpen && !props.disabled ? styles.Up : styles.Down}
            onClick={handleToggleDropdown}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6 0l12 12-12 12z" />
          </svg>
        </div>
      </div>

      {isOpen && !props.disabled
        ? createPortal(
            <ul ref={dropdownRef} className={clssesDropdown}>
              {localOptions.length ? (
                localOptions.map(option => <li key={`option-${option.props.tabIndex}`}>{option}</li>)
              ) : (
                <li className={styles.OptionsNotFound}>Not Found</li>
              )}
            </ul>,
            document.body
          )
        : null}
    </>
  )
}

Multiselect.defaultProps = {
  layout: 'filled',
  shape: 'squared',
  presetSize: 'md',
  color: 'black',
  textWeight: 400,
  limitDropdown: false
}

export default Multiselect
