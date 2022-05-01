import React from 'react'

import { arrayToClasslist, getColorClasses } from 'helpers'
import { LoaderProps } from './Loader.type'
import styles from './Loader.module.scss'

const Loader = ({
  wrapperWidth,
  wrapperHeight,
  width,
  height,
  color,
  className,
  style,
  ...props
}: LoaderProps): JSX.Element => {
  const classes = arrayToClasslist([styles.Loader, ...getColorClasses(color, styles), className || ''])

  return (
    <div
      {...props}
      className={classes}
      style={{ ...style, minWidth: wrapperWidth || 0, minHeight: wrapperHeight || 0 }}
    >
      <svg style={{ width, height }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="23" r="13">
          <animate
            attributeName="cy"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
            keyTimes="0;0.5;1"
            values="23;77;23"
          />
        </circle>
      </svg>
    </div>
  )
}

Loader.defaultProps = {
  width: '60px',
  height: '60px',
  color: 'rose'
}

export default Loader
