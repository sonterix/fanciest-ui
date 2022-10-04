import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import { arrayToClasslist, getColorClasses, getPositions } from '../../../helpers'
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

  const menuRef = useRef<HTMLDivElement>(null)
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
  const handleUpdatePosition = useCallback((): void => {
    if (anchor) {
      const anchorRect = anchor.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      switch (position) {
        case 'top-left':
          setModalPos({
            top: anchorRect.top + scrollTop,
            left: anchorRect.left + scrollLeft
          })
          break

        case 'top':
          setModalPos({
            top: anchorRect.top + scrollTop,
            left: anchorRect.left + scrollLeft + anchorRect.width / 2
          })
          break

        case 'top-right':
          setModalPos({
            top: anchorRect.top + scrollTop,
            left: anchorRect.left + scrollLeft + anchorRect.width
          })
          break

        case 'right-top':
          setModalPos({
            top: anchorRect.top + scrollTop,
            left: anchorRect.left + scrollLeft + anchorRect.width
          })
          break

        case 'right':
          setModalPos({
            top: anchorRect.top + scrollTop + anchorRect.height / 2,
            left: anchorRect.left + scrollLeft + anchorRect.width
          })
          break

        case 'right-bottom':
          setModalPos({
            top: anchorRect.top + scrollTop + anchorRect.height,
            left: anchorRect.left + scrollLeft + anchorRect.width
          })
          break

        case 'bottom-left':
          setModalPos({
            top: anchorRect.top + scrollTop + anchorRect.height,
            left: anchorRect.left + scrollLeft
          })
          break

        case 'bottom':
          setModalPos({
            top: anchorRect.top + scrollTop + anchorRect.height,
            left: anchorRect.left + scrollLeft + anchorRect.width / 2
          })
          break

        case 'bottom-right':
          setModalPos({
            top: anchorRect.top + scrollTop + anchorRect.height,
            left: anchorRect.left + scrollLeft + anchorRect.width
          })
          break

        case 'left-top':
          setModalPos({
            top: anchorRect.top + scrollTop,
            left: anchorRect.left + scrollLeft
          })
          break

        case 'left':
          setModalPos({
            top: anchorRect.top + scrollTop + anchorRect.height / 2,
            left: anchorRect.left + scrollLeft
          })
          break

        case 'left-bottom':
          setModalPos({
            top: anchorRect.top + scrollTop + anchorRect.height,
            left: anchorRect.left + scrollLeft
          })
          break

        default:
          break
      }
    }
  }, [anchor, position])

  // Update position on each open and track scroll
  useEffect(() => {
    if (isOpen) {
      handleUpdatePosition()
      window.addEventListener('scroll', handleUpdatePosition)
    } else {
      window.removeEventListener('scroll', handleUpdatePosition)
    }
  }, [handleUpdatePosition, isOpen])

  // Detect click outside of the dropdown
  useEffect(() => {
    const outsideClick = ({ target }: Event) => {
      if (anchor && menuRef.current && !anchor.contains(target as Node) && !menuRef.current.contains(target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', outsideClick)
    } else {
      document.removeEventListener('mousedown', outsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', outsideClick)
    }
  }, [anchor, isOpen, onClose])

  return transition(
    (animationStyles, isItem) =>
      isItem &&
      createPortal(
        <animated.div
          {...props}
          ref={menuRef}
          className={classes}
          style={{ ...modalPos, ...(style || {}), maxWidth, maxHeight, ...animationStyles }}
        >
          <div className={styles.Childern}>{children}</div>
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
