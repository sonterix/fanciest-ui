import React from 'react'

import { arrayToClasslist } from '../../../helpers'
import { ContainerProps } from './Container.type'
import styles from './Container.module.scss'

const Container = ({
  maxWidth,
  spaceTop,
  spaceRight,
  spaceBottom,
  spaceLeft,
  className,
  style,
  children,
  ...props
}: ContainerProps): JSX.Element => {
  const classes = arrayToClasslist([styles.Container, className || ''])

  return (
    <section
      {...props}
      className={classes}
      style={{
        ...(style || {}),
        maxWidth,
        ...(spaceTop ? { paddingTop: spaceTop } : {}),
        ...(spaceRight ? { paddingRight: spaceRight } : {}),
        ...(spaceBottom ? { paddingBottom: spaceBottom } : {}),
        ...(spaceLeft ? { paddingLeft: spaceLeft } : {})
      }}
    >
      {children}
    </section>
  )
}

Container.defaultProps = {
  width: '1230px'
}

export default Container
