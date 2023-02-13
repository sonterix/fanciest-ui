import React, { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import { arrayToClasslist, getColorClasses, getPositions, getTextWeight } from '../../../helpers'
import { TooltipProps } from './Tooltip.type'
import styles from './Tooltip.module.scss'

const Tooltip = ({
  content,
  position,
  maxWidth,
  color,
  textSize,
  textWeight,
  actionType,
  className,
  style,
  children,
  ...props
}: TooltipProps): JSX.Element => {
  const classesTooltip = arrayToClasslist([
    styles.Tooltip,

    ...getPositions(position, styles),

    ...getColorClasses(color, styles),

    ...getTextWeight(textWeight)
  ])

  const classesTooltipChildren = arrayToClasslist([styles.TooltipChildren, className || ''])

  const tooltipChildrenRef = useRef<HTMLDivElement>(null)
  const [isOpen, setOpen] = useState<boolean>(false)
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
    if (tooltipChildrenRef.current) {
      const tooltipRect = tooltipChildrenRef.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      switch (position) {
        case 'top-left':
          setModalPos({
            top: tooltipRect.top + scrollTop,
            left: tooltipRect.left + scrollLeft
          })
          break

        case 'top':
          setModalPos({
            top: tooltipRect.top + scrollTop,
            left: tooltipRect.left + scrollLeft + tooltipRect.width / 2
          })
          break

        case 'top-right':
          setModalPos({
            top: tooltipRect.top + scrollTop,
            left: tooltipRect.left + scrollLeft + tooltipRect.width
          })
          break

        case 'right-top':
          setModalPos({
            top: tooltipRect.top + scrollTop,
            left: tooltipRect.left + scrollLeft + tooltipRect.width
          })
          break

        case 'right':
          setModalPos({
            top: tooltipRect.top + scrollTop + tooltipRect.height / 2,
            left: tooltipRect.left + scrollLeft + tooltipRect.width
          })
          break

        case 'right-bottom':
          setModalPos({
            top: tooltipRect.top + scrollTop + tooltipRect.height,
            left: tooltipRect.left + scrollLeft + tooltipRect.width
          })
          break

        case 'bottom-left':
          setModalPos({
            top: tooltipRect.top + scrollTop + tooltipRect.height,
            left: tooltipRect.left + scrollLeft
          })
          break

        case 'bottom':
          setModalPos({
            top: tooltipRect.top + scrollTop + tooltipRect.height,
            left: tooltipRect.left + scrollLeft + tooltipRect.width / 2
          })
          break

        case 'bottom-right':
          setModalPos({
            top: tooltipRect.top + scrollTop + tooltipRect.height,
            left: tooltipRect.left + scrollLeft + tooltipRect.width
          })
          break

        case 'left-top':
          setModalPos({
            top: tooltipRect.top + scrollTop,
            left: tooltipRect.left + scrollLeft
          })
          break

        case 'left':
          setModalPos({
            top: tooltipRect.top + scrollTop + tooltipRect.height / 2,
            left: tooltipRect.left + scrollLeft
          })
          break

        case 'left-bottom':
          setModalPos({
            top: tooltipRect.top + scrollTop + tooltipRect.height,
            left: tooltipRect.left + scrollLeft
          })
          break

        default:
          break
      }
    }
  }, [position])

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
    const outsideClick = ({ target }: Event): void => {
      if (
        actionType === 'click' &&
        tooltipChildrenRef.current &&
        !tooltipChildrenRef.current.contains(target as Node)
      ) {
        setOpen(false)
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
  }, [actionType, isOpen])

  const handleToggle = (): void => {
    setOpen(prev => !prev)
  }

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <div
        {...props}
        ref={tooltipChildrenRef}
        className={classesTooltipChildren}
        style={{ ...(style || {}), ...(actionType === 'click' ? { cursor: 'pointer' } : {}) }}
        {...(actionType === 'click'
          ? {
              onClick: handleToggle
            }
          : {})}
        {...(actionType === 'hover'
          ? {
              onMouseOver: handleOpen,
              onFocus: handleOpen,
              onMouseOut: handleClose,
              onBlur: handleClose
            }
          : {})}
      >
        {children}
      </div>

      {transition(
        (animationStyles, isTarget) =>
          isTarget &&
          createPortal(
            <animated.div
              className={classesTooltip}
              style={{ ...modalPos, maxWidth, fontSize: textSize, ...animationStyles }}
            >
              <div className={styles.Childern}>{content}</div>
            </animated.div>,
            document.body
          )
      )}
    </>
  )
}

Tooltip.defaultProps = {
  position: 'top',
  maxWidth: 'none',
  color: 'black',
  textSize: '12px',
  textWeight: 400,
  actionType: 'hover'
}

export default Tooltip
