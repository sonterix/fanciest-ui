import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const Font = ({ as, ...props }: FontProps): JSX.Element => {
  return <FontGenerator as={as} {...props} />
}

export default Font
