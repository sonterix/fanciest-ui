import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import { arrayToClasslist, getColorClasses, getPositions } from 'helpers'
import { MenuProps } from './Menu.type'
import styles from './Menu.module.scss'

const Menu = ({
  isOpen,
  onClose,
  anchor,
  position,
  maxWidth,
  maxHeight,
  color,
  className,
  style,
  children,
  ...props
}: MenuProps): JSX.Element | null => {
  const classes = arrayToClasslist([
    styles.Menu,

    ...getPositions(position, styles),

    ...getColorClasses(color, styles),

    className || ''
  ])

  const [modalPos, setModalPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0
  })

  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 150
    }
  })

  // Set position of element based on target element
  useEffect(() => {
    if (anchor) {
      const targetRect = anchor.getBoundingClientRect()

      switch (position) {
        case 'top-left':
          setModalPos({
            top: targetRect.top + window.pageYOffset,
            left: targetRect.left + window.pageXOffset
          })
          break

        case 'top':
          setModalPos({
            top: targetRect.top + window.pageYOffset,
            left: targetRect.left + window.pageXOffset + targetRect.width / 2
          })
          break

        case 'top-right':
          setModalPos({
            top: targetRect.top + window.pageYOffset,
            left: targetRect.left + window.pageXOffset + targetRect.width
          })
          break

        case 'right-top':
          setModalPos({
            top: targetRect.top + window.pageYOffset,
            left: targetRect.left + window.pageXOffset + targetRect.width
          })
          break

        case 'right':
          setModalPos({
            top: targetRect.top + window.pageYOffset + targetRect.height / 2,
            left: targetRect.left + window.pageXOffset + targetRect.width
          })
          break

        case 'right-bottom':
          setModalPos({
            top: targetRect.top + window.pageYOffset + targetRect.height,
            left: targetRect.left + window.pageXOffset + targetRect.width
          })
          break

        case 'bottom-left':
          setModalPos({
            top: targetRect.top + window.pageYOffset + targetRect.height,
            left: targetRect.left + window.pageXOffset
          })
          break

        case 'bottom':
          setModalPos({
            top: targetRect.top + window.pageYOffset + targetRect.height,
            left: targetRect.left + window.pageXOffset + targetRect.width / 2
          })
          break

        case 'bottom-right':
          setModalPos({
            top: targetRect.top + window.pageYOffset + targetRect.height,
            left: targetRect.left + window.pageXOffset + targetRect.width
          })
          break

        case 'left-top':
          setModalPos({
            top: targetRect.top + window.pageYOffset,
            left: targetRect.left + window.pageXOffset
          })
          break

        case 'left':
          setModalPos({
            top: targetRect.top + window.pageYOffset + targetRect.height / 2,
            left: targetRect.left + window.pageXOffset
          })
          break

        case 'left-bottom':
          setModalPos({
            top: targetRect.top + window.pageYOffset + targetRect.height,
            left: targetRect.left + window.pageXOffset
          })
          break

        default:
          break
      }
    }
  }, [anchor, position])

  return transition(
    (animationStyles, isItem) =>
      isItem &&
      createPortal(
        <animated.div style={animationStyles}>
          <div className={styles.MenuOverlay} onClick={onClose} aria-hidden="true" />
          <div {...props} className={classes} style={{ ...modalPos, ...style, maxWidth, maxHeight }}>
            {children}
          </div>
        </animated.div>,
        document.body
      )
  )
}

Menu.defaultProps = {
  position: 'bottom',
  maxWidth: 'none',
  maxHeight: 'none',
  color: 'white'
}

export default Menu
