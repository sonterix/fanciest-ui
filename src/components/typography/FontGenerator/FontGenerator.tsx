/* eslint-disable no-underscore-dangle */
import React, { useLayoutEffect, useMemo, useState } from 'react'
import parse from 'html-react-parser'

import { arrayToClasslist, getTextFamily, getTextWeight } from 'helpers'
import { FontProps } from './FontGenerator.type'
import { getFontSize } from './helper'
import styles from './FontGenerator.module.scss'

const FontGenerator = ({
  family,
  weight,
  media,
  as,
  selector,
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
    selector || 'fui-p',

    styles.Font,

    ...getTextFamily(family, styles),

    ...getTextWeight(weight, styles),

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

    updateSize()

    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [media])

  return htmlContent ? (
    <div {...props} className={classes} style={{ ...(style || {}), fontSize }}>
      {htmlContent}
    </div>
  ) : (
    React.createElement(as || 'p', { className: classes, style: { ...(style || {}), fontSize }, ...props }, children)
  )
}

FontGenerator.defaultProps = {
  weight: 400,
  inheritToChildren: false
}

export default FontGenerator
