// @ts-ignore
import React from 'react'

import styles from './Container.module.scss'

type ContainerProps = {
  width?: number | string
  fullWidth?: boolean
  spaceTop?: number | string
  spaceBottom?: number | string
  className?: string
  children: React.ReactNode
}

const Container = ({
  width,
  fullWidth,
  spaceTop,
  spaceBottom,
  className,
  children
}: ContainerProps): JSX.Element => {
  const classes: string = ['mu-container', styles.Container, className].join(' ')

  return (
    <section
      className={classes}
      style={{
        maxWidth: fullWidth ? '100%' : width,
        ...(spaceTop ? { paddingTop: spaceTop } : {}),
        ...(spaceBottom ? { paddingBottom: spaceBottom } : {})
      }}
    >
      {children}
    </section>
  )
}

Container.defaultProps = {
  width: 1230,
  fullWidth: false,
  spaceTop: 0,
  spaceBottom: 0,
  className: ''
}

export default Container
