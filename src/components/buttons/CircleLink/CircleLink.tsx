import React from 'react'

import styles from './CircleLink.module.scss'

interface CircleLinkProps extends React.ComponentProps<'a'> {
  href: string
  className?: string
  color?: 'primary' | 'blue' | 'dark' | 'white'
  size?: 'sm' | 'md'
  layout?: 'filled' | 'outlined'
  opacity?: number
  icon: React.ReactNode
}

const CircleLink = ({
  href,
  className,
  color,
  size,
  layout,
  opacity,
  icon,
  ...props
}: CircleLinkProps): JSX.Element => {
  const classes = [
    'mu-circle-link',
    styles.CircleLink,
    ...(color === 'primary' ? [styles.Primary] : []),
    ...(color === 'blue' ? [styles.Blue] : []),
    ...(color === 'dark' ? [styles.Dark] : []),
    ...(color === 'white' ? [styles.White] : []),

    ...(size === 'sm' ? [styles.SizeSm] : []),
    ...(size === 'md' ? [styles.SizeMd] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),
    className
  ].join(' ')

  return (
    <a href={href} className={classes} style={{ opacity }} {...props}>
      {icon}
    </a>
  )
}

CircleLink.defaultProps = {
  className: '',
  color: 'primary',
  size: 'md',
  layout: 'filled',
  opacity: 1
}

export default CircleLink
