import React from 'react'

import { arrayToClasslist } from '../../../helpers'
import { SkeletonProps } from './Skeleton.type'
import styles from './Skeleton.module.scss'

const Skeleton = ({
  layout,
  type,
  width,
  height,
  spaceTop,
  spaceBottom,
  spaceLeft,
  spaceRight,
  as,
  animation,
  className,
  style,
  ...props
}: SkeletonProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Skeleton,

    ...(type === 'block' ? [styles.Block] : []),
    ...(type === 'inline' ? [styles.Inline] : []),

    ...(layout === 'rect' ? [styles.Rect] : []),
    ...(layout === 'circle' ? [styles.Circle] : []),

    ...(animation === 'pulse' ? [styles.Pulse] : []),
    ...(animation === 'wave' ? [styles.Wave] : []),

    className || ''
  ])

  return React.createElement(
    as || 'span',
    {
      ...props,
      className: classes,
      style: {
        ...(style || {}),
        maxWidth: width,
        height,
        marginTop: spaceTop,
        marginBottom: spaceBottom,
        marginLeft: spaceLeft,
        marginRight: spaceRight
      }
    },
    null
  )
}

Skeleton.defaultProps = {
  layout: 'rect',
  type: 'block',
  width: '100%',
  height: '30px',
  spaceTop: 0,
  spaceBottom: 0,
  spaceLeft: 0,
  spaceRight: 0,
  as: 'span',
  animation: 'pulse'
}

export default Skeleton
