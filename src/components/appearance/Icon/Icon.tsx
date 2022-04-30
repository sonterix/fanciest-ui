import React from 'react'

import { arrayToClasslist } from 'helpers'
import { IconPropsType } from './Icon.type'

const Icon = ({ icon, size, pathNumber, className, style, ...props }: IconPropsType): JSX.Element => {
  const classes = arrayToClasslist([icon, className || ''])

  return (
    <i className={classes} style={{ ...style, fontSize: size }} {...props}>
      {Number.isInteger(pathNumber) &&
        Array.from(Array(pathNumber).keys()).map(key => <span key={`path-${key}`} className={`path${key + 1}`} />)}
    </i>
  )
}

Icon.defaultProps = {
  size: '20px',
  pathNumber: undefined
}

export default Icon
