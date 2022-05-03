import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const H0 = ({ media, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      media={{
        ...media,
        default: media?.default || '32px',
        md: media?.md || '40px',
        lg: media?.lg || '48px'
      }}
      as={as || 'h1'}
      selector="fui-h0"
      {...props}
    />
  )
}

export default H0
