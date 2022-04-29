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

type H0Type = {
  [key: string]: any
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  type?: 'main' | 'heading' | 'banner'
  as?: string
  font?: FontsType
  nestedStyles?: boolean
  children?: React.ReactNode | null
}

const H0 = ({ weight, type, as, font, children, ...props }: H0Type): JSX.Element => (
  <FontGenerator
    tagClass="mu-h0"
    as={as || 'h1'}
    type={type || 'main'}
    weight={weight || 'light'}
    defaultFont={font?.default || { fontSize: '32px', lineHeight: '36px' }}
    xsFont={font?.xs || 'none'}
    smFont={font?.sm || 'none'}
    mdFont={font?.md || { fontSize: '40px', lineHeight: '44px' }}
    lgFont={font?.lg || { fontSize: '48px', lineHeight: '52px' }}
    xlFont={font?.xl || 'none'}
    xl2Font={font?.xl2 || 'none'}
    {...props}
  >
    {children}
  </FontGenerator>
)

H0.defaultProps = {
  className: '',
  weight: 'light',
  type: 'main',
  as: 'h1',
  nestedStyles: false,
  children: null
}

export default H0
