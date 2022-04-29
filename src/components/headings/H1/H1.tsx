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

type H1Type = {
  [key: string]: any
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  type?: 'main' | 'heading' | 'banner'
  as?: string
  font?: FontsType
  nestedStyles?: boolean
  children?: React.ReactNode | null
}

const H1 = ({ weight, type, as, font, children, ...props }: H1Type): JSX.Element => (
  <FontGenerator
    tagClass="mu-h1"
    as={as || 'h1'}
    type={type || 'main'}
    weight={weight || 'light'}
    defaultFont={font?.default || { fontSize: '32px', lineHeight: '40px' }}
    xsFont={font?.xs || 'none'}
    smFont={font?.sm || 'none'}
    mdFont={font?.md || { fontSize: '36px', lineHeight: '40px' }}
    lgFont={font?.lg || { fontSize: '48px', lineHeight: '56px' }}
    xlFont={font?.xl || 'none'}
    xl2Font={font?.xl2 || 'none'}
    {...props}
  >
    {children}
  </FontGenerator>
)

H1.defaultProps = {
  className: '',
  weight: 'light',
  type: 'main',
  as: 'h1',
  nestedStyles: false,
  children: null
}

export default H1
