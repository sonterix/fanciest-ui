import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const H2 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      size={getParams(size, { default: 24, md: 32, lg: 36 })}
      as={as || 'h2'}
      selector="fui-h2"
      {...props}
    />
  )
}

export default H2
