import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransition, animated } from 'react-spring'

import styles from './MainModal.module.scss'

type MainModalProps = {
  [key: string]: any
  className?: string
  maxWidth?: string | number
  fullWidth?: boolean
  verticalPosition?: 'top' | 'center'
  shape?: 'rounded' | 'squared'
  header?: React.ReactNode
  footer?: React.ReactNode
  hideCloseActions?: boolean
  isOpen: boolean
  handleClose?: () => void
  children: React.ReactNode
}

const MainModal = ({
  className,
  maxWidth,
  fullWidth,
  verticalPosition,
  shape,
  header,
  footer,
  hideCloseActions,
  isOpen,
  handleClose,
  children,
  ...props
}: MainModalProps): JSX.Element | null => {
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
    from: { transform: `translate(-50%, ${verticalPosition === 'center' ? '-45%' : '-10px'})` },
    enter: { transform: `translate(-50%, ${verticalPosition === 'center' ? '-50%' : '0px'})` },
    leave: { transform: `translate(-50%, ${verticalPosition === 'center' ? '-45%' : '-10px'})` },
    config: {
      duration: 100
    }
  })

  const classes: string = [
    'mu-main-modal',
    styles.Modal,

    ...(verticalPosition === 'top' ? [styles.PosTop] : []),
    ...(verticalPosition === 'center' ? [styles.PosCenter] : []),

    ...(shape === 'rounded' ? [styles.Rounded] : []),
    ...(shape === 'squared' ? [styles.Squared] : []),

    ...(fullWidth ? [styles.FullWidth] : []),
    ...(footer ? [styles.WithFooter] : []),

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
                  onClick={hideCloseActions ? () => {} : handleClose}
                  aria-hidden="true"
                />
              )
          )}

          {transitionSlide(
            (springStylesSlide, itemSlide) =>
              itemSlide && (
                <animated.div className={classes} style={{ maxWidth, ...springStylesSlide }} {...props}>
                  {!hideCloseActions && (
                    <button
                      type="button"
                      className={`mu-close-btn ${styles.XMarkBtn}`}
                      onClick={hideCloseActions ? () => {} : handleClose}
                    >
                      <Icon icon="icon-x-mark" size={10} />
                    </button>
                  )}

                  {header && <div className={`mu-header ${styles.Header}`}>{header}</div>}
                  <div className={`mu-body ${styles.Body}`}>{children}</div>
                  {footer && <div className={`mu-footer ${styles.Footer}`}>{footer}</div>}
                </animated.div>
              )
          )}
        </>,
        document.body
      )
    : null
}

MainModal.defaultProps = {
  className: '',
  maxWidth: '800px',
  fullWidth: false,
  verticalPosition: 'top',
  shape: 'squared',
  header: null,
  footer: null,
  hideCloseActions: false,
  handleClose: () => {}
}

export default MainModal
