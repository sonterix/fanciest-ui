// @ts-ignore
import React, { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'

import P2 from '../../../headings/P2/P2'
import P3 from '../../../headings/P3/P3'
import Icon from '../../../display/Icon/Icon'
import useTimeout from '../../../hooks/useTimeout'
import styles from './Notification.module.scss'

type NotificationType = {
  id: number
  title?: string
  message: string
  active: boolean
  type: 'success' | 'danger' | 'info' | 'warning' | 'default' | 'dark'
  duration: number
}

type NotificationPropsType = {
  notification: NotificationType
  handleRemove: (id: number) => void
}

const Notification = ({ notification, handleRemove }: NotificationPropsType): JSX.Element => {
  const { id, title, message, active, type, duration } = notification
  // Pause status of the notification. Need for progress bar
  const [isPaused, setPaused] = useState<boolean>(false)
  // Here is what happens after the timer is up
  const { startTimeout, pauseTimeout } = useTimeout(() => handleRemove(id), duration)

  // Notification animation on mount and unmount
  const transition = useTransition(active, {
    from: { transform: 'translate(0%, 100%)' },
    enter: { transform: 'translate(0%, 0%)' },
    leave: { transform: 'translate(-100%, 0%)' },
    config: { duration: 250 }
  })

  // Start timer
  useEffect(() => {
    startTimeout()
  }, [])

  const handleSetPause = (pause: boolean): void => {
    // Pause JS timer
    setPaused(pause)
    // Pause CSS progress bar
    if (pause) pauseTimeout()
    else startTimeout()
  }

  return transition(
    (springStyles, item) =>
      item && (
        <animated.div
          className={`mu-notification ${styles.Notification} ${styles[type]}`}
          style={springStyles}
          onClick={() => handleRemove(id)}
          onMouseOver={() => handleSetPause(true)}
          onMouseOut={() => handleSetPause(false)}
        >
          <button type="button" className={styles.CloseBtn}>
            <Icon icon="icon-x-mark" size={10} />
          </button>

          {title && (
            <P2 className={styles.Title} weight="bold">
              {title}
            </P2>
          )}
          <P3 className={styles.Message}>{message}</P3>

          <div
            className={styles.Progress}
            style={{
              animationDuration: `${duration}ms`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          />
        </animated.div>
      )
  )
}

Notification.defaultProps = {
  notifications: []
}

export default Notification
