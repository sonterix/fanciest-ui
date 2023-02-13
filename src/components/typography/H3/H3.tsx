import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const H3 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return <FontGenerator size={getParams(size, { default: 24, lg: 32 })} as={as || 'h3'} selector="fui-h3" {...props} />
}

export default H3
