import React from 'react'

export interface SemicircleBarProps extends React.ComponentProps<'div'> {
  value: string | number
  size?: string | number
  layout?: 'solid' | 'dashed'
  backgroundColor?: string
}
