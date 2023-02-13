import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const P4 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return <FontGenerator size={getParams(size, 12)} as={as} selector="fui-p4" {...props} />
}

export default P4
