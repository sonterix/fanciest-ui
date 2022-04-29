// @ts-ignore
import React from 'react'

import styles from './Loader.module.scss'

type LoaderProps = {
  height?: string | number
}

const Loader = ({ height }: LoaderProps): JSX.Element =>
  height ? (
    <div className={styles.LoaderHeight} style={{ minHeight: height }}>
      <svg
        style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
        width="80px"
        height="80px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle className={styles.Loader} cx="50" cy="23" r="13">
          <animate
            attributeName="cy"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
            keyTimes="0;0.5;1"
            values="23;77;23"
          ></animate>
        </circle>
      </svg>
    </div>
  ) : (
    <svg
      style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
      width="80px"
      height="80px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle className={styles.Loader} cx="50" cy="23" r="13">
        <animate
          attributeName="cy"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
          keyTimes="0;0.5;1"
          values="23;77;23"
        ></animate>
      </circle>
    </svg>
  )

Loader.defaultProps = {
  height: 0
}

export default Loader
