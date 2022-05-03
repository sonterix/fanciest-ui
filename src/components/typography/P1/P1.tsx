import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const P1 = ({ media, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      media={{
        ...media,
        default: media?.default || '18px'
      }}
      as={as}
      selector="fui-p1"
      {...props}
    />
  )
}

export default P1
