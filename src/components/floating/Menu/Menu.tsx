// @ts-ignore
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import { MenuItemProps } from '../MenuItem/MenuItem'
import styles from './Menu.module.scss'

const isInViewport = (top: number, left: number, bottom: number, right: number) =>
  top >= 0 &&
  left >= 0 &&
  bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  right <= (window.innerWidth || document.documentElement.clientWidth)

interface MenuItem extends JSX.Element {
  props: MenuItemProps
}

type MenuProps = {
  className?: string
  isOpen: null | EventTarget
  handleClose: () => void
  children: MenuItem | Array<MenuItem>
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

type MenuPostition = {
  top: number
  left: number
  maxHeight: number | string
  transform?: string
}

const Menu = ({
  className,
  isOpen,
  position,
  handleClose,
  children
}: MenuProps): JSX.Element | null => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100
    }
  })

  const menuRef = useRef<HTMLDivElement>(null)
  const [modalPos, setModalPos] = useState<MenuPostition>({
    top: 0,
    left: 0,
    maxHeight: '100%'
  })

  const classes: string = [
    'mu-menu-modal',
    styles.Menu,

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

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add('modal-open')

    return () => document.body.classList.remove('modal-open')
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const currentTarget = isOpen as HTMLElement
    const { top = 0, left = 0, width = 0, height = 0 } = currentTarget?.getBoundingClientRect()

    switch (position) {
      case 'top-left':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset,
          maxHeight: '100%'
        })
        break

      case 'top':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset + width / 2,
          maxHeight: '100%'
        })
        break

      case 'top-right':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset + width,
          maxHeight: '100%'
        })
        break

      case 'right-top':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset + width,
          maxHeight: '100%'
        })
        break

      case 'right':
        setModalPos({
          top: top + window.pageYOffset + height / 2,
          left: left + window.pageXOffset + width,
          maxHeight: '100%'
        })
        break

      case 'right-bottom':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset + width,
          maxHeight: '100%'
        })
        break

      case 'bottom-left':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset,
          maxHeight: '100%'
        })
        break

      case 'bottom':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset + width / 2,
          maxHeight: '100%'
        })
        break

      case 'bottom-right':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset + width,
          maxHeight: '100%'
        })
        break

      case 'left-top':
        setModalPos({
          top: top + window.pageYOffset,
          left: left + window.pageXOffset,
          maxHeight: '100%'
        })
        break

      case 'left':
        setModalPos({
          top: top + window.pageYOffset + height / 2,
          left: left + window.pageXOffset,
          maxHeight: '100%'
        })
        break

      case 'left-bottom':
        setModalPos({
          top: top + window.pageYOffset + height,
          left: left + window.pageXOffset,
          maxHeight: '100%'
        })
        break

      default:
        break
    }
  }, [isOpen])

  useEffect(() => {
    if (!menuRef.current || !isOpen) return

    const currentTarget = isOpen as HTMLElement
    const target = currentTarget?.getBoundingClientRect()

    const currentMenu = menuRef.current as HTMLElement
    const { top = 0, left = 0, bottom = 0, right = 0 } = currentMenu?.getBoundingClientRect()

    if (!isInViewport(top, left, bottom, right))
      setModalPos({
        top: target.top + window.pageYOffset,
        left: target.left + window.pageXOffset,
        maxHeight: `calc(100% - ${target.y + 5}px)`,
        transform: 'none'
      })
  }, [menuRef.current])

  return transition(
    (springStyles, item) =>
      item &&
      createPortal(
        <animated.div style={springStyles}>
          <div
            className={`mu-overlay ${styles.Overlay}`}
            onClick={handleClose}
            aria-hidden="true"
          />
          <div ref={menuRef} className={classes} style={{ ...modalPos }}>
            {children}
          </div>
        </animated.div>,
        document.body
      )
  )
}

Menu.defaultProps = {
  className: '',
  position: 'bottom-left'
}

export default Menu
