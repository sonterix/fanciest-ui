import React from 'react'

export interface IconPropsType extends React.ComponentProps<'i'> {
  icon: string
  iconSize?: string | number
  pathNumber?: number
}
