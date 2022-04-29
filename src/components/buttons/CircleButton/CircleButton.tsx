import React from 'react'

import styles from './CircleButton.module.scss'

interface CircleButtonProps extends React.ComponentProps<'button'> {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  color?: 'primary' | 'blue' | 'dark' | 'white'
  size?: 'sm' | 'md'
  layout?: 'filled' | 'outlined'
  opacity?: number
  icon: React.ReactNode
}

const CircleButton = ({
  className,
  type,
  color,
  size,
  layout,
  opacity,
  icon,
  ...props
}: CircleButtonProps): JSX.Element => {
  const classes = [
    'mu-circle-btn',
    styles.CircleButton,
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
    <button type={type} className={classes} style={{ opacity }} {...props}>
      {icon}
    </button>
  )
}

CircleButton.defaultProps = {
  className: '',
  type: 'button',
  color: 'primary',
  size: 'md',
  layout: 'filled',
  opacity: 1
}

export default CircleButton
