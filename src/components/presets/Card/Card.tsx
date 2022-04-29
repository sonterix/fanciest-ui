// @ts-ignore
import React from 'react'

import useWindowSize from '../../hooks/useWindowSize'
import styles from './Card.module.scss'

type AdaptiveSpacing = {
  desktop: string
  mobile: string
}

type AdaptiveRadius = {
  desktop: {
    0: string
    1: string
    2: string
    3: string
  } & Array<string>
  mobile: {
    0: string
    1: string
    2: string
    3: string
  } & Array<string>
}

type CardProps = {
  className?: string
  style?: { key: string }
  radius?: AdaptiveRadius
  spaceVertical?: AdaptiveSpacing
  spaceHorizontal?: AdaptiveSpacing
  children: React.ReactNode
}

const SM = 601

const Card = ({
  className,
  style,
  radius,
  spaceVertical,
  spaceHorizontal,
  children
}: CardProps): JSX.Element => {
  const { screenWidth } = useWindowSize()

  const classes: string = ['mu-card', styles.Card, className].join(' ')

  const cardStyle = {
    padding:
      screenWidth > SM
        ? `${spaceVertical?.desktop} ${spaceHorizontal?.desktop}`
        : `${spaceVertical?.mobile} ${spaceHorizontal?.mobile}`,

    borderRadius: screenWidth > SM ? radius?.desktop.join(' ') : radius?.mobile.join(' '),

    ...style
  }

  return (
    <section className={classes} style={cardStyle}>
      {children}
    </section>
  )
}

Card.defaultProps = {
  className: '',
  style: {},
  radius: { desktop: ['12px', '12px', '12px', '12px'], mobile: ['0px', '0px', '0px', '0px'] },
  spaceVertical: { desktop: '30px', mobile: '16px' },
  spaceHorizontal: { desktop: '40px', mobile: '20px' }
}

export default Card
