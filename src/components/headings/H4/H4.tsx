import React from 'react'

import FontGenerator from '../FontGenerator/FontGenerator'

type FontType = {
  fontSize: string | number
  lineHeight: string | number
}

type FontsType = {
  default?: FontType
  xs?: FontType | 'none'
  sm?: FontType | 'none'
  md?: FontType | 'none'
  lg?: FontType | 'none'
  xl?: FontType | 'none'
  xl2?: FontType | 'none'
}

type H4Type = {
  [key: string]: any
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  type?: 'main' | 'heading' | 'banner'
  as?: string
  font?: FontsType
  nestedStyles?: boolean
  children?: React.ReactNode | null
}

const H4 = ({ weight, type, as, font, children, ...props }: H4Type): JSX.Element => (
  <FontGenerator
    tagClass="mu-h4"
    as={as || 'h4'}
    type={type || 'main'}
    weight={weight || 'light'}
    defaultFont={font?.default || { fontSize: '22px', lineHeight: '30px' }}
    xsFont={font?.xs || 'none'}
    smFont={font?.sm || 'none'}
    mdFont={font?.md || 'none'}
    lgFont={font?.lg || { fontSize: '24px', lineHeight: '32px' }}
    xlFont={font?.xl || 'none'}
    xl2Font={font?.xl2 || 'none'}
    {...props}
  >
    {children}
  </FontGenerator>
)

H4.defaultProps = {
  className: '',
  weight: 'light',
  type: 'main',
  as: 'h4',
  nestedStyles: false,
  children: null
}

export default H4
