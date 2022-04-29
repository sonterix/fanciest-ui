// @ts-ignore
import React from 'react'

import styles from './Skeleton.module.scss'

type SkeletonProps = {
  [key: string]: any
  className?: string
  animation?: 'pulse' | 'wave' | false
  variant?: 'text' | 'rect' | 'circle'
  as?: string
  width?: number | string
  height?: number | string
  spaceTop?: number
  spaceBottom?: number
  spaceLeft?: number
  spaceRight?: number
}

const Skeleton = ({
  className,
  animation,
  variant,
  as,
  width,
  height,
  spaceTop,
  spaceBottom,
  spaceLeft,
  spaceRight,
  ...props
}: SkeletonProps): JSX.Element => {
  const Tag = (as as keyof JSX.IntrinsicElements) || 'h1'
  const classes: string = [
    'mu-skeleton',
    styles.Skeleton,
    ...(animation === 'pulse' ? [styles.Pulse] : []),
    ...(animation === 'wave' ? [styles.Wave] : []),
    ...(variant === 'text' ? [styles.Text] : []),
    ...(variant === 'rect' ? [styles.Rect] : []),
    ...(variant === 'circle' ? [styles.Circle] : []),
    className
  ].join(' ')

  return (
    <Tag
      className={classes}
      style={{
        maxWidth: width,
        height,
        marginTop: spaceTop,
        marginBottom: spaceBottom,
        marginLeft: spaceLeft,
        marginRight: spaceRight
      }}
      {...props}
    />
  )
}

Skeleton.defaultProps = {
  className: '',
  animation: 'pulse',
  variant: 'text',
  as: 'div',
  width: '100%',
  height: '30px',
  spaceTop: 0,
  spaceBottom: 0,
  spaceLeft: 0,
  spaceRight: 0
}

export default Skeleton
