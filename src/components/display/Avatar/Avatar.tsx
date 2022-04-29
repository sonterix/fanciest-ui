import React from 'react'

import styles from './Avatar.module.scss'

type AvatarProps = {
  className?: string
  width?: number
  height?: number
  radius?: string
  src?: string
  alt?: string
  fit?: 'cover' | 'contain'
  fontSize?: number
  color?: 'primary' | 'dark' | 'white' | 'transparent'
  children?: React.ReactNode
}

const Avatar = ({
  className,
  width,
  height,
  radius,
  src,
  alt,
  fit,
  fontSize,
  color,
  children,
  ...props
}: AvatarProps): JSX.Element => {
  const classes: string = [
    'mu-avatar',
    styles.Avatar,

    ...(color === 'primary' ? [styles.Primary] : []),
    ...(color === 'dark' ? [styles.Dark] : []),
    ...(color === 'white' ? [styles.White] : []),
    ...(color === 'transparent' ? [styles.Transparent] : []),

    className
  ].join(' ')

  return (
    <div className={classes} style={{ width, height, borderRadius: radius }} {...props}>
      {src ? (
        <img
          className={`mu-avatar-image ${styles.Img}`}
          style={{ maxWidth: width, maxHeight: height, objectFit: fit }}
          src={src}
          alt={alt}
        />
      ) : (
        <span
          className={`mu-avatar-content ${styles.Content}`}
          style={{ fontSize, maxWidth: width, maxHeight: height }}
        >
          {children}
        </span>
      )}
    </div>
  )
}

Avatar.defaultProps = {
  className: '',
  width: 48,
  height: 48,
  radius: '12px',
  src: '',
  alt: 'avatar',
  fit: 'cover',
  fontSize: 18,
  children: null
}

export default Avatar
