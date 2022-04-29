import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import Icon from '../../display/Icon/Icon'
import styles from './SlideModal.module.scss'

type SlideModalProps = {
  [key: string]: any
  className?: string
  maxWidth?: string | number
  fullWidth?: boolean
  horizontalPosition?: 'left' | 'right'
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

const SlideModal = ({
  className,
  maxWidth,
  fullWidth,
  horizontalPosition,
  isOpen,
  handleClose,
  children,
  ...props
}: SlideModalProps): JSX.Element | null => {
  const [mounted, setMounted] = useState<boolean>(false)

  const transitionFade = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 120
    }
  })

  const transitionSlide = useTransition(isOpen, {
    from: {
      ...(horizontalPosition === 'left'
        ? { x: '-100%' }
        : horizontalPosition === 'right'
        ? { x: '100%' }
        : {})
    },
    enter: {
      ...(horizontalPosition === 'left'
        ? { x: '0' }
        : horizontalPosition === 'right'
        ? { x: '0' }
        : {})
    },
    leave: {
      ...(horizontalPosition === 'left'
        ? { x: '-100%' }
        : horizontalPosition === 'right'
        ? { x: '100%' }
        : {})
    },
    config: {
      duration: 100
    }
  })

  const classes: string = [
    'mu-slide-modal',
    styles.Modal,

    ...(horizontalPosition === 'left' ? [styles.PosLeft] : []),
    ...(horizontalPosition === 'right' ? [styles.PosRight] : []),

    ...(fullWidth ? [styles.FullWidth] : []),

    className
  ].join(' ')

  // Crutch for next js
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.classList.add('modal-open')
    return () => document.body.classList.remove('modal-open')
  }, [isOpen])

  return mounted
    ? createPortal(
        <>
          {transitionFade(
            (springStylesFade, itemFade) =>
              itemFade && (
                <animated.div
                  className={`mu-overlay ${styles.Overlay}`}
                  style={springStylesFade}
                  onClick={handleClose}
                  aria-hidden="true"
                />
              )
          )}

          {transitionSlide(
            (springStylesSlide, itemSlide) =>
              itemSlide && (
                <animated.div
                  className={classes}
                  style={{ maxWidth, ...springStylesSlide }}
                  {...props}
                >
                  <button
                    type="button"
                    className={`mu-close-btn ${styles.XMarkBtn}`}
                    onClick={handleClose}
                  >
                    <Icon icon="icon-x-mark" size={10} />
                  </button>

                  <div className={`mu-body ${styles.Body}`}>{children}</div>
                </animated.div>
              )
          )}
        </>,
        document.body
      )
    : null
}

SlideModal.defaultProps = {
  className: '',
  maxWidth: '50%',
  fullWidth: false,
  horizontalPosition: 'left'
}

export default SlideModal
