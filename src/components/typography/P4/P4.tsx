import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const P4 = ({ media, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      media={{
        ...media,
        default: media?.default || '12px'
      }}
      as={as}
      selector="fui-p4"
      {...props}
    />
  )
}

export default P4
