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

type P3Type = {
  [key: string]: any
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  type?: 'main' | 'heading' | 'banner'
  as?: string
  font?: FontsType
  nestedStyles?: boolean
  children?: React.ReactNode | null
}

const P3 = ({ weight, type, as, font, children, ...props }: P3Type): JSX.Element => (
  <FontGenerator
    tagClass="mu-p3"
    as={as || 'p'}
    type={type || 'main'}
    weight={weight || 'light'}
    defaultFont={font?.default || { fontSize: '14px', lineHeight: '20px' }}
    xsFont={font?.xs || 'none'}
    smFont={font?.sm || 'none'}
    mdFont={font?.md || 'none'}
    lgFont={font?.lg || 'none'}
    xlFont={font?.xl || 'none'}
    xl2Font={font?.xl2 || 'none'}
    {...props}
  >
    {children}
  </FontGenerator>
)

P3.defaultProps = {
  className: '',
  weight: 'light',
  type: 'main',
  as: 'p',
  nestedStyles: false,
  children: null
}

export default P3
