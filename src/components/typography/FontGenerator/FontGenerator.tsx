/* eslint-disable no-underscore-dangle */
import React, { useEffect, useMemo, useState } from 'react'
import parse from 'html-react-parser'

import { arrayToClasslist } from '../../../helpers'
import { FontProps } from './FontGenerator.type'
import { getFont } from './helper'
import styles from './FontGenerator.module.scss'

const FontGenerator = ({
  size,
  weight,
  lineHeight,
  letterSpacing,
  as,
  selector,
  inheritToChildren,
  className,
  style,
  dangerouslySetInnerHTML,
  children,
  ...props
}: FontProps): JSX.Element => {
  const [font, setFont] = useState<{
    size: number | string | undefined
    weight: number | string | undefined
    lineHeight: number | string | undefined
    letterSpacing: number | string | undefined
  }>(getFont(size, weight, lineHeight, letterSpacing, 0))

  const classes = arrayToClasslist([
    selector || 'fui-p',

    styles.Font,

    ...(inheritToChildren ? [styles.InheritToChildren] : []),

    className || ''
  ])

  const htmlContent = useMemo<React.ReactNode | null>(
    () => (dangerouslySetInnerHTML?.__html ? parse(dangerouslySetInnerHTML.__html) : null),
    [dangerouslySetInnerHTML]
  )

  // Update screen width on resize screen
  useEffect(() => {
    const updateSize = () => {
      setFont(getFont(size, weight, lineHeight, letterSpacing, window.innerWidth))
    }

    updateSize()

    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [letterSpacing, lineHeight, size, weight])

  return htmlContent ? (
    <div
      {...props}
      className={classes}
      style={{
        ...(style || {}),
        fontSize: font.size,
        fontWeight: font.weight,
        lineHeight: font.lineHeight,
        letterSpacing: font.letterSpacing
      }}
    >
      {htmlContent}
    </div>
  ) : (
    React.createElement(
      as || 'p',
      {
        className: classes,
        style: {
          ...(style || {}),
          fontSize: font.size,
          fontWeight: font.weight,
          lineHeight: font.lineHeight,
          letterSpacing: font.letterSpacing
        },
        ...props
      },
      children
    )
  )
}

FontGenerator.defaultProps = {
  inheritToChildren: false
}

export default FontGenerator
