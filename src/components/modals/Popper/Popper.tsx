// @ts-ignore
import React, { ReactPortal, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import styles from './Popper.module.scss'

type PopperProps = {
  className?: string
  isOpen: null | EventTarget
  children: JSX.Element | Array<JSX.Element>
  color?: 'white' | 'dark'
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

const Popper = ({
  className,
  isOpen,
  children,
  color,
  position
}: PopperProps): JSX.Element | null => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100
    }
  })

  const [modalPos, setModalPos] = useState({
    top: 0,
    left: 0
  })

  const classes: string = [
    'mu-popper',
    styles.Popper,

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
    ...(position === 'left-bottom' ? [styles.LeftBottomPos] : []),

    className
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

  return transition(
    (springStyles, item) =>
      item &&
      createPortal(
        <animated.div style={springStyles}>
          <div className={classes} style={{ ...modalPos }}>
            {children}
          </div>
        </animated.div>,
        document.body
      )
  )
}

Popper.defaultProps = {
  className: '',
  position: 'bottom-left',
  color: 'white'
}

export default Popper
