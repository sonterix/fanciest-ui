import React from 'react'

import { FontProps } from '../FontGenerator/FontGenerator.type'
import FontGenerator from '../FontGenerator/FontGenerator'

const H2 = ({ media, as, ...props }: FontProps): JSX.Element => {
  return (
    <FontGenerator
      media={{
        ...media,
        default: media?.default || '24px',
        md: media?.md || '32px',
        lg: media?.lg || '36px'
      }}
      as={as || 'h2'}
      selector="fui-h2"
      {...props}
    />
  )
}

export default H2
