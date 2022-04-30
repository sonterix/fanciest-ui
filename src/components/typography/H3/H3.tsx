import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const H3 = ({ media, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      media={{
        ...media,
        default: media?.default || '24px',
        lg: media?.lg || '32px'
      }}
      as={as || 'h3'}
      {...props}
    />
  )
}

export default H3
