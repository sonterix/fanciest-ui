import React from 'react'

import { arrayToClasslist } from 'helpers'
import { ContainerProps } from './Container.type'
import styles from './Container.module.scss'

const Container = ({
  width,
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
        maxWidth: width,
        ...(spaceTop ? { paddingTop: spaceTop } : {}),
        paddingRight: spaceRight || '15px',
        ...(spaceBottom ? { paddingBottom: spaceBottom } : {}),
        paddingLeft: spaceLeft || '15px'
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
