import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const P2 = ({ media, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      media={{
        ...media,
        default: media?.default || '16px'
      }}
      as={as}
      selector="fui-p2"
      {...props}
    />
  )
}

export default P2
