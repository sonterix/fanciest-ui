import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const H4 = ({ media, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      media={{
        ...media,
        default: media?.default || '22px',
        lg: media?.lg || '24px'
      }}
      as={as || 'h4'}
      {...props}
    />
  )
}

export default H4
