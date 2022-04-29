/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react'
import parse from 'html-react-parser'

import useWindowSize from '../../hooks/useWindowSize'
import styles from './FontGenerator.module.scss'

type FontType = {
  fontSize: string | number
  lineHeight: string | number
}

type FontGeneratorProps = {
  [key: string]: any
  weight: 'light' | 'normal' | 'semibold' | 'bold'
  type: 'main' | 'heading' | 'banner'
  tagClass: string
  as: string
  defaultFont: FontType
  xsFont: FontType | 'none'
  smFont: FontType | 'none'
  mdFont: FontType | 'none'
  lgFont: FontType | 'none'
  xlFont: FontType | 'none'
  xl2Font: FontType | 'none'
  className?: string
  style?: { strign: any }
  nestedStyles?: boolean
  dangerouslySetInnerHTML?: {
    __html: string
  }
  children?: React.ReactNode | null
}

// Copy of SASS breackpoints
const BREACKPOINTS = {
  xs: 361,
  sm: 601,
  md: 961,
  lg: 1281,
  xl: 1461,
  xl2: 1921
}

const FontGenerator = ({
  weight,
  type,
  tagClass,
  as,
  defaultFont,
  xsFont,
  smFont,
  mdFont,
  lgFont,
  xlFont,
  xl2Font,
  className,
  style,
  nestedStyles,
  dangerouslySetInnerHTML,
  children,
  ...props
}: FontGeneratorProps): JSX.Element => {
  const { screenWidth } = useWindowSize()

  const htmlContent: React.ReactNode | null = dangerouslySetInnerHTML?.__html
    ? parse(dangerouslySetInnerHTML.__html)
    : null

  const Tag = as as keyof JSX.IntrinsicElements
  const classes: string = [
    tagClass,
    styles.Font,

    ...(nestedStyles ? [styles.NestedStyles] : []),

    ...(weight === 'light' ? [styles.Light] : []),
    ...(weight === 'normal' ? [styles.Normal] : []),
    ...(weight === 'semibold' ? [styles.Semibold] : []),
    ...(weight === 'bold' ? [styles.Bold] : []),

    ...(type === 'main' ? [styles.Main] : []),
    ...(type === 'heading' ? [styles.Heading] : []),
    ...(type === 'banner' ? [styles.Banner] : []),

    className
  ].join(' ')

  const handleDetectFont = useCallback((): FontType => {
    let font = defaultFont

    // XL2 font
    if (xl2Font !== 'none' && screenWidth >= BREACKPOINTS.xl2) font = xl2Font
    // XL font
    else if (xlFont !== 'none' && screenWidth >= BREACKPOINTS.xl) font = xlFont
    // LG font
    else if (lgFont !== 'none' && screenWidth >= BREACKPOINTS.lg) font = lgFont
    // MD font
    else if (mdFont !== 'none' && screenWidth >= BREACKPOINTS.md) font = mdFont
    // SM font
    else if (smFont !== 'none' && screenWidth >= BREACKPOINTS.sm) font = smFont
    // XS font
    else if (xsFont !== 'none' && screenWidth >= BREACKPOINTS.xs) font = xsFont

    return font
  }, [defaultFont, screenWidth])

  const [fontStyles, setFontStyles] = useState<FontType>(handleDetectFont())

  useEffect(() => {
    if (!screenWidth) return

    const font = handleDetectFont()
    if (JSON.stringify(font) !== JSON.stringify(fontStyles)) setFontStyles(font)
  }, [screenWidth, fontStyles, setFontStyles, handleDetectFont])

  return htmlContent ? (
    <span className={classes} style={{ ...style, ...fontStyles }} {...props}>
      {htmlContent}
    </span>
  ) : (
    <Tag className={classes} style={{ ...style, ...fontStyles }} {...props}>
      {children}
    </Tag>
  )
}

FontGenerator.defaultProps = {
  className: '',
  style: '',
  nestedStyles: false,
  dangerouslySetInnerHTML: null,
  children: null
}

export default FontGenerator
