import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import styles from './Tooltip.module.scss'

type TooltipProps = {
  className?: string
  tooltipText: string | React.ReactNode
  children: React.ReactNode
  color?: 'white' | 'dark'
  width?: string | number
  position?:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'right-top'
    | 'right'
    | 'right-bottom'
    | 'bottom-left'
    | 'bottom'
    | 'bottom-right'
    | 'left-top'
    | 'left'
    | 'left-bottom'
}

const Tooltip = ({
  className,
  tooltipText,
  children,
  color,
  width,
  position
}: TooltipProps): JSX.Element => {
  const [isOpen, setOpen] = useState<null | EventTarget>(null)
  const [modalPos, setModalPos] = useState({
    top: 0,
    left: 0
  })

  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100
    }
  })

  const classes: string = [
    'mu-tooltip-modal',
    styles.Tooltip,

    ...(color === 'white' ? [styles.White] : []),
    ...(color === 'dark' ? [styles.Dark] : []),

    ...(position === 'top-left' ? [styles.TopLeftPos] : []),
    ...(position === 'top' ? [styles.TopPos] : []),
    ...(position === 'top-right' ? [styles.TopRightPos] : []),
    ...(position === 'right-top' ? [styles.RightTopPos] : []),
    ...(position === 'right' ? [styles.RightPos] : []),
    ...(position === 'right-bottom' ? [styles.RightBottomPos] : []),
    ...(position === 'bottom-left' ? [styles.BottomLeftPos] : []),
    ...(position === 'bottom' ? [styles.BottomPos] : []),
    ...(position === 'bottom-right' ? [styles.BottomRightPos] : []),
    ...(position === 'left-top' ? [styles.LeftTopPos] : []),
    ...(position === 'left' ? [styles.LeftPos] : []),
    ...(position === 'left-bottom' ? [styles.LeftBottomPos] : [])
  ].join(' ')

  useEffect(() => {
    if (!isOpen || typeof isOpen === 'boolean') return

    const currentTarget = isOpen as HTMLElement
    const { top, left, width, height } = currentTarget.getBoundingClientRect()

    switch (position) {
      case 'top-left':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset
        })
        break

      case 'top':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset + width / 2
        })
        break

      case 'top-right':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset + width
        })
        break

      case 'right-top':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset + width
        })
        break

      case 'right':
        setModalPos({
          top: top + window.pageYOffset + height / 2,
          left: left + window.pageXOffset + width
        })
        break

      case 'right-bottom':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset + width
        })
        break

      case 'bottom-left':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset
        })
        break

      case 'bottom':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset + width / 2
        })
        break

      case 'bottom-right':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset + width
        })
        break

      case 'left-top':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset
        })
        break

      case 'left':
        setModalPos({
          top: top + window.pageYOffset + height / 2,
          left: left + window.pageXOffset
        })
        break

      case 'left-bottom':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset
        })
        break

      default:
        break
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`mu-tooltip ${className}`}
        onMouseOver={event => setOpen(event.currentTarget)}
        onMouseOut={() => setOpen(null)}
        onFocus={() => {}}
        onBlur={() => {}}
      >
        {children}
      </div>

      {transition(
        (springStyles, item) =>
          item &&
          createPortal(
            <animated.div style={springStyles}>
              <div className={classes} style={{ ...modalPos, maxWidth: width }}>
                {tooltipText}
              </div>
            </animated.div>,
            document.body
          )
      )}
    </>
  )
}

Tooltip.defaultProps = {
  className: '',
  position: 'top',
  width: 'auto',
  color: 'dark'
}

export default Tooltip
