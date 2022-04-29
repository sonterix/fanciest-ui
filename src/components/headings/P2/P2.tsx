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

type P2Type = {
  [key: string]: any
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  type?: 'main' | 'heading' | 'banner'
  as?: string
  font?: FontsType
  nestedStyles?: boolean
  children?: React.ReactNode | null
}

const P2 = ({ weight, type, as, font, children, ...props }: P2Type): JSX.Element => (
  <FontGenerator
    tagClass="mu-p2"
    as={as || 'p'}
    type={type || 'main'}
    weight={weight || 'light'}
    defaultFont={font?.default || { fontSize: '16px', lineHeight: '24px' }}
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

P2.defaultProps = {
  className: '',
  weight: 'light',
  type: 'main',
  as: 'p',
  nestedStyles: false,
  children: null
}

export default P2
