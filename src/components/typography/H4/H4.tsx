import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const H4 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return <FontGenerator size={getParams(size, { default: 22, lg: 24 })} as={as || 'h4'} selector="fui-h4" {...props} />
}

export default H4
