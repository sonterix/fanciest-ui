import React from 'react'

import { arrayToClasslist, getColorClasses, getTextWeight } from 'helpers'
import { OptionProps } from './Option.type'
import styles from './Option.module.scss'

const Option = ({ color, textSize, textWeight, className, style, children, ...props }: OptionProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Option,

    ...getColorClasses(color, styles),

    ...getTextWeight(textWeight, styles),

    className || ''
  ])

  return (
    <div className={classes} style={{ ...(style || {}), fontSize: textSize }} data-value={props?.value}>
      {children}
    </div>
  )
}

Option.defaultProps = {
  color: 'black',
  textSize: '16px',
  textWeight: 400
}

export default Option
