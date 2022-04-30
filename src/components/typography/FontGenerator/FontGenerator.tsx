/* eslint-disable no-underscore-dangle */
import React, { useLayoutEffect, useMemo, useState } from 'react'
import parse from 'html-react-parser'

import { arrayToClasslist } from 'helpers'
import { FontProps } from './FontGenerator.type'
import { getFontSize } from './helper'
import styles from './FontGenerator.module.scss'

const FontGenerator = ({
  family,
  weight,
  media,
  as,
  inheritToChildren,
  className,
  style,
  dangerouslySetInnerHTML,
  children,
  ...props
}: FontProps): JSX.Element => {
  const [fontSize, setFontSize] = useState<string | number>(
    getFontSize(media, typeof window !== 'undefined' ? window.innerWidth : 0)
  )

  const classes = arrayToClasslist([
    styles.Font,

    ...(family === 'main' ? [styles.Main] : []),
    ...(family === 'heading' ? [styles.Heading] : []),

    ...(weight === 100 ? [styles.Weight100] : []),
    ...(weight === 200 ? [styles.Weight200] : []),
    ...(weight === 300 ? [styles.Weight300] : []),
    ...(weight === 400 ? [styles.Weight400] : []),
    ...(weight === 500 ? [styles.Weight500] : []),
    ...(weight === 600 ? [styles.Weight600] : []),
    ...(weight === 700 ? [styles.Weight700] : []),
    ...(weight === 800 ? [styles.Weight800] : []),
    ...(weight === 900 ? [styles.Weight900] : []),

    ...(inheritToChildren ? [styles.InheritToChildren] : []),

    className || ''
  ])

  const htmlContent = useMemo<React.ReactNode | null>(
    () => (dangerouslySetInnerHTML?.__html ? parse(dangerouslySetInnerHTML.__html) : null),
    [dangerouslySetInnerHTML]
  )

  // Update screen width on resize screen
  useLayoutEffect(() => {
    const updateSize = () => {
      setFontSize(getFontSize(media, window.innerWidth))
    }

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [media])

  return htmlContent ? (
    <div className={classes} style={{ ...style, fontSize }} {...props}>
      {htmlContent}
    </div>
  ) : (
    React.createElement(as || 'p', { className: classes, style: { ...style, fontSize }, ...props }, children)
  )
}

FontGenerator.defaultProps = {
  weight: 400,
  inheritToChildren: false
}

export default FontGenerator
