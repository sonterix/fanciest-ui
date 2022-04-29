import React from 'react'

import styles from './MainButton.module.scss'

interface MainButtonProps extends React.ComponentProps<'button'> {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  color?: 'primary' | 'blue' | 'dark' | 'white'
  shape?: 'rounded' | 'squared'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  weight: 'light' | 'normal' | 'semibold' | 'bold'
  layout?: 'filled' | 'outlined'
  fontType?: 'main' | 'heading' | 'banner'
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  children: React.ReactNode
}

const MainButton = ({
  className,
  type,
  color,
  shape,
  size,
  weight,
  layout,
  fontType,
  iconBefore,
  iconAfter,
  children,
  ...props
}: MainButtonProps): JSX.Element => {
  const classes: string = [
    'mu-main-btn',
    styles.MainBtn,
    ...(color === 'primary' ? [styles.Primary] : []),
    ...(color === 'blue' ? [styles.Blue] : []),
    ...(color === 'dark' ? [styles.Dark] : []),
    ...(color === 'white' ? [styles.White] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(size === 'xs' ? [styles.SizeXs] : []),
    ...(size === 'sm' ? [styles.SizeSm] : []),
    ...(size === 'md' ? [styles.SizeMd] : []),
    ...(size === 'lg' ? [styles.SizeLg] : []),

    ...(weight === 'light' ? [styles.Light] : []),
    ...(weight === 'normal' ? [styles.Normal] : []),
    ...(weight === 'semibold' ? [styles.Semibold] : []),
    ...(weight === 'bold' ? [styles.Bold] : []),

    ...(layout === 'filled' ? [styles.Filled] : []),
    ...(layout === 'outlined' ? [styles.Outlined] : []),

    ...(fontType === 'main' ? [styles.FontMani] : []),
    ...(fontType === 'heading' ? [styles.FontHeading] : []),
    ...(fontType === 'banner' ? [styles.FontBanner] : []),
    className
  ].join(' ')

  const childrenClasses: string = [
    'mu-content',
    styles.Content,
    iconBefore ? `mu-with-icon-before ${styles.LeftSpace}` : '',
    iconAfter ? `mu-with-icon-after ${styles.RightSpace}` : ''
  ].join(' ')

  return (
    <button type={type} className={classes} {...props}>
      {!!iconBefore && iconBefore}
      {<span className={childrenClasses}>{children}</span>}
      {!!iconAfter && iconAfter}
    </button>
  )
}

MainButton.defaultProps = {
  className: '',
  type: 'button',
  color: 'primary',
  shape: 'rounded',
  size: 'md',
  weight: 'bold',
  layout: 'filled',
  fontType: 'heading',
  iconBefore: null,
  iconAfter: null
}

export default MainButton
