import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import { arrayToClasslist } from '../../../helpers'
import { ModalProps } from './Modal.type'
import styles from './Modal.module.scss'

const Modal = ({
  isOpen,
  onClose,
  onInit,
  maxWidth,
  fullWidth,
  closeButton,
  position,
  shape,
  header,
  footer,
  className,
  style,
  children,
  ...props
}: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const classes = arrayToClasslist([
    styles.Modal,

    ...(position === 'top' ? [styles.Top] : []),
    ...(position === 'center' ? [styles.Center] : []),

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
    from: { transform: `translate(-50%, ${position === 'center' ? '-45%' : '-10px'})` },
    enter: { transform: `translate(-50%, ${position === 'center' ? '-50%' : '0px'})` },
    leave: { transform: `translate(-50%, ${position === 'center' ? '-45%' : '-10px'})` },
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
    onInit(modalRef.current)
  }, [onInit])

  return (
    <>
      {transitionFade(
        (animationFadeStyles, isItem) =>
          isItem &&
          createPortal(
            <animated.div
              className={styles.ModalOverlay}
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

              {header && <div className={styles.Header}>{header}</div>}
              <div className={styles.ModalChildren}>{children}</div>
              {footer && <div className={styles.Footer}>{footer}</div>}
            </animated.div>,
            document.body
          )
      )}
    </>
  )
}

Modal.defaultProps = {
  maxWidth: 'none',
  fullWidth: false,
  closeButton: true,
  position: 'top',
  shape: 'squared'
}

export default Modal
