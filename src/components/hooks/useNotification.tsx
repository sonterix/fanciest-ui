// @ts-ignore
import React, { useContext } from 'react'
import { NotificationsContext } from '../hocs/withNotification/withNotification'

type NotificationType = {
  title?: string
  message: string
  type?: 'success' | 'danger' | 'info' | 'warning' | 'default' | 'dark'
  duration?: number
}

type ContextType = {
  addNotification?: (props: NotificationType) => void
  removeNotification?: (id: number) => void
}

const useNotification = (): ContextType => {
  const context = useContext(NotificationsContext)

  if (context === undefined)
    throw new Error('useNotification called outside of withNotification HOC')

  const { addNotification, removeNotification }: ContextType = context

  return {
    addNotification,
    removeNotification
  }
}

export default useNotification
