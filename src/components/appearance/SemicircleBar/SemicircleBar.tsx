import React, { useMemo } from 'react'

import { SemicircleBarProps } from './SemicircleBar.type'
import styles from './SemicircleBar.module.scss'

const SemicircleBar = ({
  value,
  size,
  layout,
  backgroundColor,
  className,
  style,
  children,
  ...props
}: SemicircleBarProps): JSX.Element => {
  // Progress scale rotation
  const progressRotation = useMemo(() => {
    const progressValue = Number(value)

    if (Number.isInteger(progressValue) && progressValue >= 0) {
      // Convert to degrees
      const inDeg = 35 + 203 * ((progressValue <= 100 ? progressValue : 100) * 0.01)

      if (inDeg >= 200)
        return {
          transform: `rotateZ(${inDeg}deg)`
        }

      if (inDeg >= 110)
        return {
          transform: `rotateZ(${inDeg}deg)`,
          borderTopColor: 'transparent'
        }

      return {
        transform: `rotateZ(${inDeg}deg)`,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent'
      }
    }

    return {
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      transform: 'rotateZ(35deg)'
    }
  }, [value])

  // Calculate elements sizes
  const elementsSizes = useMemo(() => {
    const circleSize = Number(size)

    // Container size
    const container = {
      width: circleSize,
      height: circleSize * 0.7
    }

    // Spaces betwen each dash
    const spaces = [
      {
        left: circleSize * 0.08,
        width: circleSize * 0.08,
        height: circleSize * 0.08
      },
      {
        top: circleSize - (circleSize - circleSize * 0.0773),
        width: circleSize * 0.08,
        height: circleSize * 0.08
      },
      {
        right: circleSize * 0.08,
        width: circleSize * 0.08,
        height: circleSize * 0.08
      }
    ]

    // Circle position
    const circle = {
      top: circleSize - (circleSize - circleSize * 0.08),
      width: circleSize - circleSize * 0.08,
      height: circleSize - circleSize * 0.08,
      borderWidth: circleSize * 0.07
    }

    // Dot position
    const dot = {
      left: circleSize * 0.03,
      width: circleSize * 0.14,
      height: circleSize * 0.14,
      borderWidth: circleSize * 0.038
    }

    // Round borrom lines
    const bottomRoundupSpases = [
      {
        left: circleSize * 0.055,
        bottom: -circleSize * 0.012,
        width: circleSize * 0.087,
        height: circleSize * 0.055
      },
      {
        right: circleSize * 0.055,
        bottom: -circleSize * 0.012,
        width: circleSize * 0.087,
        height: circleSize * 0.055
      }
    ]

    return { container, spaces, circle, dot, bottomRoundupSpases }
  }, [size])

  const getDashesState = (index: number): 'active' | 'default' => {
    if (
      (index === 0 && Number(value) >= 20) ||
      (index <= 1 && Number(value) >= 50) ||
      (index <= 2 && Number(value) >= 82)
    ) {
      return 'active'
    }

    return 'default'
  }

  return (
    <div
      {...props}
      className={styles.SemicircleBar}
      style={{ ...(style || {}), ...elementsSizes.container, ...style, backgroundColor }}
    >
      <div className={styles.BarContainer}>
        {layout === 'dashed' && (
          <>
            {Array.from(Array(3).keys()).map(spaceNumber => (
              <svg
                key={`space-${spaceNumber}`}
                className={`${styles.Space} ${styles[`Space${spaceNumber + 1}`]}`}
                style={{ ...elementsSizes.spaces[spaceNumber], backgroundColor }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse ry="45%" rx="45%" cy="50%" cx="-10%" data-active={getDashesState(spaceNumber) === 'active'} />
                <ellipse ry="45%" rx="45%" cy="50%" cx="110%" data-active={getDashesState(spaceNumber) === 'active'} />
              </svg>
            ))}
          </>
        )}

        <div className={styles.EmplyCircle} style={elementsSizes.circle} />

        <div className={styles.ProgressCircle} style={{ ...elementsSizes.circle, ...progressRotation }} />

        <div className={styles.DotCircle} style={{ ...elementsSizes.circle, transform: progressRotation?.transform }}>
          <div className={styles.Dot} style={elementsSizes.dot} />
        </div>

        <div className={styles.Text}>{children}</div>

        <div className={styles.BottomRoundup}>
          <svg style={{ ...elementsSizes.bottomRoundupSpases[0], backgroundColor }} xmlns="http://www.w3.org/2000/svg">
            <ellipse ry="60%" rx="40%" cy="0" cx="50%" data-active="true" />
          </svg>

          <svg style={{ ...elementsSizes.bottomRoundupSpases[1], backgroundColor }} xmlns="http://www.w3.org/2000/svg">
            <ellipse ry="60%" rx="40%" cy="0" cx="50%" data-active={Number(value) >= 100} />
          </svg>
        </div>
      </div>
    </div>
  )
}

SemicircleBar.defaultProps = {
  size: 200,
  layout: 'dashed',
  backgroundColor: '#fff'
}

export default SemicircleBar
