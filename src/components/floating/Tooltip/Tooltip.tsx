import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import { arrayToClasslist, getColorClasses, getPositions, getTextFamily, getTextWeight } from '../../../helpers'
import { TooltipProps } from './Tooltip.type'
import styles from './Tooltip.module.scss'

const Tooltip = ({
  content,
  position,
  maxWidth,
  color,
  textFamily,
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

    ...getTextFamily(textFamily),

    ...getTextWeight(textWeight)
  ])

  const classesTooltipChildren = arrayToClasslist([styles.TooltipChildren, className || ''])

  const [target, setTarget] = useState<null | HTMLDivElement>(null)
  const [modalPos, setModalPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0
  })

  const transition = useTransition(!!target, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 150
    }
  })

  // Set position of element based on target element
  useEffect(() => {
    if (target) {
      const targetRect = target.getBoundingClientRect()

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
  }, [target, position])

  // When mouse is over the childern
  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>): void => {
    setTarget(event.target as HTMLDivElement)
  }

  // When mouse is out the childern
  const handleMouseOut = (): void => {
    setTarget(null)
  }

  const handleToggle = (event: React.MouseEvent<HTMLDivElement>): void => {
    setTarget(prev => (prev ? null : (event.target as HTMLDivElement)))
  }

  return (
    <>
      <div
        {...props}
        className={classesTooltipChildren}
        style={{ ...(style || {}), ...(actionType === 'click' ? { cursor: 'pointer' } : {}) }}
        {...(actionType === 'click'
          ? {
              onClick: handleToggle
            }
          : {})}
        {...(actionType === 'hover'
          ? {
              onMouseOver: handleMouseOver,
              onFocus: handleMouseOver,
              onMouseOut: handleMouseOut,
              onBlur: handleMouseOut
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
  width: 'none',
  color: 'black',
  textFamily: '',
  textSize: '12px',
  textWeight: 400,
  actionType: 'hover'
}

export default Tooltip
