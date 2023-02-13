import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const H0 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      size={getParams(size, { default: 32, md: 40, lg: 48 })}
      as={as || 'h1'}
      selector="fui-h0"
      {...props}
    />
  )
}

export default H0
