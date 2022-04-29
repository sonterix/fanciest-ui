import React from 'react'

import styles from './Textarea.module.scss'

interface TextareaProps extends React.ComponentProps<'textarea'> {
  className?: string
  textareaSize?: 'sm' | 'md'
  layout?: 'filled' | 'outlined'
  shape?: 'rounded' | 'squared'
  label?: string
  msg?: string
  status?: 'success' | 'error'
  resize?: boolean
}

const Textarea = ({
  className,
  textareaSize,
  layout,
  shape,
  label,
  msg,
  status,
  resize,
  ...props
}: TextareaProps): JSX.Element => {
  const classes: string = [
    'mu-textarea',
    styles.Textarea,
    ...(textareaSize === 'sm' ? [styles.SizeSm] : []),
    ...(textareaSize === 'md' ? [styles.SizeMd] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(status === 'success' ? [styles.Success] : []),
    ...(status === 'error' ? [styles.Error] : []),

    ...(!resize ? [styles.NoResize] : []),
    className
  ].join(' ')

  return (
    <div className="mu-container">
      {!!label && <label className={`mu-label ${styles.Label}`}>{label}</label>}

      <div className={`mu-textarea-container ${styles.TextareaWrapper}`}>
        <textarea className={classes} {...props} />
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

Textarea.defaultProps = {
  className: '',
  textareaSize: 'md',
  layout: 'filled',
  shape: 'squared',
  label: '',
  msg: '',
  resize: true
}

export default Textarea
