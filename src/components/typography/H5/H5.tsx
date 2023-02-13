import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'
import { getParams } from '../FontGenerator/helper'

const H5 = ({ size, as, ...props }: FontProps): JSX.Element => {
  return <FontGenerator size={getParams(size, 20)} as={as || 'h5'} selector="fui-h5" {...props} />
}

export default H5
