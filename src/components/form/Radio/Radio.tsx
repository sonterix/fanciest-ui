import React from 'react'

import styles from './Radio.module.scss'

interface ElementJSX extends JSX.Element {
  type: 'input'
}

interface RadioProps extends React.ComponentProps<'input'> {
  className?: string
  label?: string | ElementJSX | Array<ElementJSX>
  labelPosition?: 'left' | 'right'
  color?: 'red' | 'blue' | 'turquoise'
  checked: boolean
  name?: string
  value?: string
  onChange?: () => void
  disabled?: boolean
  customInput?: ElementJSX
}

const Radio = ({
  className,
  label,
  labelPosition,
  color,
  checked,
  name,
  value,
  onChange,
  disabled,
  customInput,
  ...props
}: RadioProps): JSX.Element => {
  const { checked: customChecked }: React.ComponentProps<'input'> = customInput?.props || {}

  const classes: string = [
    'mu-container',
    'mu-redio-container',
    styles.RadioContainer,

    ...(color === 'red' ? [styles.RedColor] : []),
    ...(color === 'blue' ? [styles.BlueColor] : []),
    ...(color === 'turquoise' ? [styles.TurquoiseColor] : []),

    disabled ? `mu-disabled ${styles.RadioDisabled}` : '',

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
            <div className={`mu-checked ${styles.Checked}`} />
          ) : (
            <div className={`mu-unchecked ${styles.Unchecked}`} />
          )}
        </>
      ) : (
        <>
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            {...props}
          />

          {checked ? (
            <div className={`mu-checked ${styles.Checked}`} />
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

Radio.defaultProps = {
  className: '',
  label: '',
  labelPosition: 'right',
  color: 'red',
  name: 'radio',
  value: '1',
  onChange: () => {},
  disabled: false,
  customInput: null
}

export default Radio
