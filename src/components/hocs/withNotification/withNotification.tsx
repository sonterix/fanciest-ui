// @ts-ignore
import React, { useCallback, createContext, useMemo, useState } from 'react'

import Notification from './Notification/Notification'
import styles from './withNotification.module.scss'

type NotificationType = {
  id?: number
  title?: string
  message: string
  active?: boolean
  type?: 'success' | 'danger' | 'info' | 'warning' | 'default' | 'dark'
  duration?: number
}

type DefaultNotificationValueType = {
  id: number
  type: 'success' | 'danger' | 'info' | 'warning' | 'default' | 'dark'
  active: boolean
  duration: number
}

type NotificationWithDefaultType = {
  id: number
  title?: string
  message: string
  active: boolean
  type: 'success' | 'danger' | 'info' | 'warning' | 'default' | 'dark'
  duration: number
}

type ValueType = {
  addNotification: (props: NotificationType) => void
  removeNotification: (id: number) => void
}

const getRandomNumber = (): number => Math.random() * 10000000

const NotificationsContext = createContext({})

const withNotification = (WrappedComponent: React.FC): React.FC => {
  const WithNotification = (props: Record<string, any>): JSX.Element => {
    const [notifications, setNotifications] = useState<Array<NotificationWithDefaultType>>([])

    const handleAddNotification = useCallback((newNotification: NotificationType): void => {
      // Generate id
      const id = getRandomNumber()
      // Generate default settings
      const defaultNotificationValue: DefaultNotificationValueType = {
        id,
        type: 'default',
        active: true,
        duration: 3000
      }
      // Merge user settings with default
      const notificationsWithId: NotificationWithDefaultType = {
        ...defaultNotificationValue,
        ...newNotification
      }
      // Add notifiction
      setNotifications(prevNotifications => [...prevNotifications, notificationsWithId])
    }, [])

    // Find and remove notification by id
    const handleRemoveNotification = useCallback(
      (id): void =>
        setNotifications(prevNotifications =>
          prevNotifications.map(notification =>
            notification.id === id ? { ...notification, active: false } : notification
          )
        ),
      []
    )

    const value: ValueType = useMemo(
      () => ({
        addNotification: handleAddNotification,
        removeNotification: handleRemoveNotification
      }),
      []
    )

    return (
      <NotificationsContext.Provider value={value}>
        <WrappedComponent {...props} />

        <div className={`mu-notifications ${styles.Notifications}`}>
          {notifications.map(notification => (
            <Notification
              key={notification.id}
              notification={notification}
              handleRemove={handleRemoveNotification}
            />
          ))}
        </div>
      </NotificationsContext.Provider>
    )
  }

  return WithNotification
}

export { NotificationsContext }

export default withNotification
