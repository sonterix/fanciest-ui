import React from 'react'

import styles from './MainLink.module.scss'

interface MainLinkProps extends React.ComponentProps<'a'> {
  href: string
  className?: string
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

const MainLink = ({
  href,
  className,
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
}: MainLinkProps): JSX.Element => {
  const classes: string = [
    'mu-main-link',
    styles.MainLink,
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
    <a href={href} className={classes} {...props}>
      {!!iconBefore && iconBefore}
      {<span className={childrenClasses}>{children}</span>}
      {!!iconAfter && iconAfter}
    </a>
  )
}

MainLink.defaultProps = {
  className: '',
  color: 'primary',
  shape: 'rounded',
  size: 'md',
  weight: 'bold',
  layout: 'filled',
  fontType: 'heading',
  iconBefore: null,
  iconAfter: null
}

export default MainLink
