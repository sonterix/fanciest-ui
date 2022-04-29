// @ts-ignore
import React, { useMemo } from 'react'

import styles from './SemicircleBar.module.scss'

type SemicircleBarProps = {
  barPercent: number
  markPercent?: number
  size?: number
  type?: 'solid' | 'dashed'
  progress?: string
  value?: string
  units?: string
  spaceColor?: string
}

type MarkStyles = {
  left: number
  bottom: number
  width: number
  fontSize: number
  transform: string
}

type MarkRotateStyles = { transform: string }

type BarRotateStyles = {
  borderTopColor?: string
  borderRightColor?: string
  transform: string
}

type ContainerStyles = {
  width: number
  height: number
}

type SpacesStyles = {
  space1: {
    left: number
    width: number
    height: number
  }
  space2: {
    top: number
    width: number
    height: number
  }
  space3: {
    right: number
    width: number
    height: number
  }
}

type CircleStyles = {
  top: number
  width: number
  height: number
  borderWidth: number
}

type DotStyles = {
  left: number
  width: number
  height: number
  borderWidth: number
}

type TextsStyles = {
  ptsText: { fontSize: number }
  barText: { fontSize: number }
  unitText: { fontSize: number }
}

type BottomSpace = {
  space1: {
    left: number
    bottom: number
    width: number
    height: number
  }
  space2: {
    right: number
    bottom: number
    width: number
    height: number
  }
}

type Spaces = {
  container: ContainerStyles
  spaces: SpacesStyles
  circle: CircleStyles
  dot: DotStyles
  texts: TextsStyles
  bottomSpace: BottomSpace
}

const SemicircleBar = ({
  barPercent,
  markPercent,
  size,
  type,
  progress,
  value,
  units,
  spaceColor
}: SemicircleBarProps): JSX.Element => {
  const markRotate: MarkRotateStyles = useMemo(() => {
    if (markPercent && markPercent >= 0) {
      // 35 - 0%; 203 - 100%
      const inDeg = 35 + 203 * ((markPercent <= 100 ? markPercent : 100) * 0.01)
      return { transform: `rotateZ(${inDeg}deg)` }
    }

    return { transform: 'rotateZ(35deg)' }
  }, [markPercent])

  const barRotate: BarRotateStyles = useMemo(() => {
    if (Number.isInteger(barPercent) && barPercent >= 0) {
      const inDeg = 35 + 203 * ((barPercent <= 100 ? barPercent : 100) * 0.01)

      if (inDeg >= 200)
        return {
          transform: `rotateZ(${inDeg}deg)`
        }
      else if (inDeg >= 110)
        return {
          borderTopColor: 'transparent',
          transform: `rotateZ(${inDeg}deg)`
        }
      else
        return {
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
          transform: `rotateZ(${inDeg}deg)`
        }
    }

    return {
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      transform: 'rotateZ(35deg)'
    }
  }, [barPercent])

  const markStyles: MarkStyles = useMemo(() => {
    const defaultStyles = {
      left: size ? -(size * 0.05) : 0,
      bottom: size ? -(size * 0.05) : 0,
      width: size ? size * 0.15 : 0,
      fontSize: size ? size * 0.13 : 0
    }

    if (markPercent && markPercent <= 100 && markPercent >= 0) {
      // 35 - 0%; 203 - 100%
      const inDeg = 35 + 203 * (markPercent * 0.01)
      // 360 (circle) * 0.7 (70% of the circle) = 255
      const markRotation = 252 * (markPercent / 100) - 126
      const markPosition = -inDeg + markRotation

      return {
        ...defaultStyles,
        transform: `rotateZ(${markPosition}deg)`
      }
    }

    return {
      ...defaultStyles,
      transform: 'rotateZ(-35deg)'
    }
  }, [markPercent, size])

  const { container, spaces, circle, dot, texts, bottomSpace }: Spaces = useMemo(() => {
    const container: ContainerStyles = {
      width: size || 0,
      height: size ? size * 0.7 : 0
    }

    const spaces: SpacesStyles = {
      space1: {
        left: size ? size * 0.082 : 0,
        width: size ? size * 0.08 : 0,
        height: size ? size * 0.08 : 0
      },
      space2: {
        top: size ? size - (size - size * 0.0773) : 0,
        width: size ? size * 0.08 : 0,
        height: size ? size * 0.08 : 0
      },
      space3: {
        right: size ? size * 0.082 : 0,
        width: size ? size * 0.08 : 0,
        height: size ? size * 0.08 : 0
      }
    }

    const circle: CircleStyles = {
      top: size ? size - (size - size * 0.08) : 0,
      width: size ? size - size * 0.08 : 0,
      height: size ? size - size * 0.08 : 0,
      borderWidth: size ? size * 0.07 : 0
    }

    const dot: DotStyles = {
      left: size ? size * 0.03 : 0,
      width: size ? size * 0.14 : 0,
      height: size ? size * 0.14 : 0,
      borderWidth: size ? size * 0.038 : 0
    }

    const texts: TextsStyles = {
      ptsText: { fontSize: size ? size * 0.06 : 0 },
      barText: { fontSize: size ? size * 0.24 : 0 },
      unitText: { fontSize: size ? size * 0.08 : 0 }
    }

    const bottomSpace: BottomSpace = {
      space1: {
        left: size ? size * 0.055 : 0,
        bottom: size ? -size * 0.012 : 0,
        width: size ? size * 0.087 : 0,
        height: size ? size * 0.055 : 0
      },
      space2: {
        right: size ? size * 0.055 : 0,
        bottom: size ? -size * 0.012 : 0,
        width: size ? size * 0.087 : 0,
        height: size ? size * 0.055 : 0
      }
    }

    return { container, spaces, circle, dot, texts, bottomSpace }
  }, [size])

  const getDashesState = (index: number): 'active' | 'default' => {
    if ((index === 0 && barPercent >= 20) || (index <= 1 && barPercent >= 50) || (index <= 2 && barPercent >= 82))
      return 'active'
    return 'default'
  }

  return (
    <div className={styles.SemicircleBar} style={container}>
      {!!markPercent && markPercent > 0 && (
        <div className={styles.MarkCircle} style={{ ...circle, ...markRotate }}>
          <i className={`icon-location ${styles.Mark}`} style={markStyles} />
        </div>
      )}

      <div className={styles.BarContainer}>
        {type === 'dashed' && (
          <>
            {[...Array(3)].map((_, index) => (
              <svg
                key={`space-${index}`}
                className={`${styles.Space} ${styles[`Space${index + 1}`]}`}
                // @ts-ignore
                style={{ ...spaces[`space${index + 1}`], backgroundColor: spaceColor }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  ry="45%"
                  rx="45%"
                  cy="50%"
                  cx="-10%"
                  fill={getDashesState(index) === 'active' ? '#23CDC3' : '#E8E8EB'}
                />
                <ellipse
                  ry="45%"
                  rx="45%"
                  cy="50%"
                  cx="110%"
                  fill={getDashesState(index) === 'active' ? '#23CDC3' : '#E8E8EB'}
                />
              </svg>
            ))}
          </>
        )}

        <div className={styles.EmplyCircle} style={circle} />

        <div className={styles.ProgressCircle} style={{ ...circle, ...barRotate }} />

        <div className={styles.DotCircle} style={{ ...circle, transform: barRotate?.transform }}>
          <div className={styles.Dot} style={dot} />
        </div>

        <div className={styles.Text}>
          {!!progress && (
            <span className={styles.Progress} style={texts?.ptsText}>
              {progress}
            </span>
          )}
          {!!value && (
            <span className={styles.Value} style={texts?.barText}>
              {value}
            </span>
          )}
          {!!units && (
            <span className={styles.Units} style={texts?.unitText}>
              {units}
            </span>
          )}
        </div>

        <div className={styles.BottomCircles}>
          <svg style={{ ...bottomSpace.space1, backgroundColor: spaceColor }} xmlns="http://www.w3.org/2000/svg">
            <ellipse ry="60%" rx="40%" cy="0" cx="50%" fill="#23CDC3" />
          </svg>

          <svg style={{ ...bottomSpace.space2, backgroundColor: spaceColor }} xmlns="http://www.w3.org/2000/svg">
            <ellipse ry="60%" rx="40%" cy="0" cx="50%" fill={barPercent >= 100 ? '#23CDC3' : '#E8E8EB'} />
          </svg>
        </div>
      </div>
    </div>
  )
}

SemicircleBar.defaultProps = {
  markPercent: 0,
  size: 200,
  type: 'solid',
  progress: '',
  value: '',
  units: '',
  spaceColor: '#fff'
}

export default SemicircleBar
