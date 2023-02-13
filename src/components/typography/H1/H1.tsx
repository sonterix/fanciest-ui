import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const H1 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      size={getParams(size, { default: 32, md: 36, lg: 48 })}
      as={as || 'h1'}
      selector="fui-h1"
      {...props}
    />
  )
}

export default H1
