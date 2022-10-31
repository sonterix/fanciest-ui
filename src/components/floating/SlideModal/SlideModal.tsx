import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import { arrayToClasslist } from '../../../helpers'
import { SlideModalProps } from './SlideModal.type'
import styles from './SlideModal.module.scss'

const SlideModal = ({
  isOpen,
  onClose,
  onInit,
  maxWidth,
  fullWidth,
  closeButton,
  position,
  shape,
  className,
  style,
  children,
  ...props
}: SlideModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const classes = arrayToClasslist([
    styles.SlideModal,

    ...(position === 'left' ? [styles.Left] : []),
    ...(position === 'right' ? [styles.Right] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    className || ''
  ])

  const transitionFade = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100
    }
  })

  const transitionSlide = useTransition(isOpen, {
    from: {
      ...(position === 'left' ? { x: '-100%' } : position === 'right' ? { x: '100%' } : {})
    },
    enter: {
      ...(position === 'left' ? { x: '0' } : position === 'right' ? { x: '0' } : {})
    },
    leave: {
      ...(position === 'left' ? { x: '-100%' } : position === 'right' ? { x: '100%' } : {})
    },
    config: {
      duration: 100
    }
  })

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.classList.add('fui-modal-open')
    return () => document.body.classList.remove('fui-modal-open')
  }, [isOpen])

  useEffect(() => {
    if (onInit) {
      onInit(modalRef.current)
    }
  }, [onInit])

  return (
    <>
      {transitionFade(
        (animationFadeStyles, isItem) =>
          isItem &&
          createPortal(
            <animated.div
              className={styles.SlideModalOverlay}
              style={animationFadeStyles}
              {...(closeButton ? { onClick: onClose } : {})}
              aria-hidden="true"
            />,
            document.body
          )
      )}

      {transitionSlide(
        (animationSlideStyles, isItem) =>
          isItem &&
          createPortal(
            <animated.div
              {...props}
              className={classes}
              style={{ ...(style || {}), maxWidth, ...(fullWidth ? { width: '100%' } : {}), ...animationSlideStyles }}
              ref={modalRef}
            >
              {closeButton && (
                <button type="button" className={styles.XMark} {...(closeButton ? { onClick: onClose } : {})}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                  </svg>
                </button>
              )}

              <div className={styles.Children}>{children}</div>
            </animated.div>,
            document.body
          )
      )}
    </>
  )
}

SlideModal.defaultProps = {
  maxWidth: '50%',
  fullWidth: true,
  closeButton: true,
  position: 'left',
  shape: 'squared'
}

export default SlideModal
