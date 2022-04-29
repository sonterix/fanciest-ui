import React from 'react'

import FontGenerator from '../FontGenerator/FontGenerator'

type FontPropType = {
  fontSize: string | number
  lineHeight: string | number
}

type FontsType = {
  default?: FontPropType
  xs?: FontPropType | 'none'
  sm?: FontPropType | 'none'
  md?: FontPropType | 'none'
  lg?: FontPropType | 'none'
  xl?: FontPropType | 'none'
  xl2?: FontPropType | 'none'
}

type FontType = {
  [key: string]: any
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  type?: 'main' | 'heading' | 'banner'
  as: string
  font?: FontsType
  nestedStyles?: boolean
  children?: React.ReactNode | null
}

const Font = ({ weight, type, as, font, children, ...props }: FontType): JSX.Element => (
  <FontGenerator
    tagClass="mu-custom-font"
    as={as}
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

Font.defaultProps = {
  className: '',
  weight: 'light',
  type: 'main',
  nestedStyles: false,
  children: null
}

export default Font
