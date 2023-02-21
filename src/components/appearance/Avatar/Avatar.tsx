import React from 'react'

import { arrayToClasslist, getBackgroundColorClass, getColorClass, getTextWeight } from '../../../helpers'
import { AvatarProps } from './Avatar.type'
import styles from './Avatar.module.scss'

const Avatar = ({
  width,
  height,
  radius,
  src,
  alt,
  objectFit,
  color,
  backgroundColor,
  textSize,
  textWeight,
  className,
  style,
  children,
  ...props
}: AvatarProps): JSX.Element => {
  const classes = arrayToClasslist([
    styles.Avatar,

    ...getColorClass(color),

    ...getBackgroundColorClass(backgroundColor),

    ...getTextWeight(textWeight),

    className || ''
  ])

  return (
    <div
      {...props}
      className={classes}
      style={{
        ...(style || {}),
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        fontSize: textSize,
        borderRadius: radius
      }}
    >
      {src ? (
        <img className={styles.Image} src={src} alt={alt} style={{ objectFit }} />
      ) : (
        <span className={styles.Children}>{children}</span>
      )}
    </div>
  )
}

Avatar.defaultProps = {
  radius: '12px',
  src: '',
  alt: 'avatar',
  objectFit: 'cover',
  color: 'neutral-0',
  backgroundColor: 'primary-900',
  textSize: '18px',
  textWeight: 800
}

export default Avatar
