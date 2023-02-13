import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const P1 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return <FontGenerator size={getParams(size, 18)} as={as} selector="fui-p1" {...props} />
}

export default P1
