import React from 'react'

import Icon from '../../display/Icon/Icon'
import styles from './Checkbox.module.scss'

interface ElementJSX extends JSX.Element {
  type: 'input'
}

interface CheckboxProps extends React.ComponentProps<'input'> {
  className?: string
  label?: string | ElementJSX | Array<ElementJSX>
  labelPosition?: 'left' | 'right'
  color?: 'red' | 'blue' | 'turquoise'
  checked: boolean
  name?: string
  onChange?: () => void
  disabled?: boolean
  customInput?: ElementJSX
}

const Checkbox = ({
  className,
  label,
  labelPosition,
  color,
  checked,
  name,
  onChange,
  disabled,
  customInput,
  ...props
}: CheckboxProps): JSX.Element => {
  const { checked: customChecked }: React.ComponentProps<'input'> = customInput?.props || {}

  const classes: string = [
    'mu-container',
    'mu-checkbox-container',
    styles.CheckboxContainer,

    ...(color === 'red' ? [styles.RedColor] : []),
    ...(color === 'blue' ? [styles.BlueColor] : []),
    ...(color === 'turquoise' ? [styles.TurquoiseColor] : []),

    disabled ? `mu-disabled ${styles.CheckboxDisabled}` : '',

    className
  ].join(' ')

  return (
    <label className={classes}>
      {label && labelPosition === 'left' && (
        <span className={`mu-label ${styles.LabelLeft}`}>{label}</span>
      )}

      {customInput ? (
        <>
          {customInput}
          {customChecked ? (
            <div className={`mu-checked ${styles.Checked}`}>
              <Icon icon="icon-check-mark" size={10} />
            </div>
          ) : (
            <div className={`mu-unchecked ${styles.Unchecked}`} />
          )}
        </>
      ) : (
        <>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            {...props}
          />

          {checked ? (
            <div className={`mu-checked ${styles.Checked}`}>
              <Icon icon="icon-check-mark" size={10} />
            </div>
          ) : (
            <div className={`mu-unchecked ${styles.Unchecked}`} />
          )}
        </>
      )}

      {label && labelPosition === 'right' && (
        <span className={`mu-label ${styles.LabelRight}`}>{label}</span>
      )}
    </label>
  )
}

Checkbox.defaultProps = {
  className: '',
  label: '',
  labelPosition: 'right',
  color: 'red',
  name: 'checkbox',
  onChange: () => {},
  disabled: false,
  customInput: null
}

export default Checkbox
