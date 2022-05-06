import React from 'react'

import { arrayToClasslist } from '../../../helpers'
import { IconPropsType } from './Icon.type'

const Icon = ({ icon, iconSize, pathNumber, className, style, ...props }: IconPropsType): JSX.Element => {
  const classes = arrayToClasslist([icon, className || ''])

  return (
    <i {...props} className={classes} style={{ ...(style || {}), fontSize: iconSize }}>
      {Number.isInteger(pathNumber) &&
        Array.from(Array(pathNumber).keys()).map(key => <span key={`path-${key}`} className={`path${key + 1}`} />)}
    </i>
  )
}

Icon.defaultProps = {
  iconSize: '20px',
  pathNumber: undefined
}

export default Icon
