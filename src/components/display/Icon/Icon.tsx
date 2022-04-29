// @ts-ignore
import React from 'react'

type IconPropsType = {
  className?: string
  icon: string
  size?: number | string
  pathNumber?: number
}

const Icon = ({ className, icon, size, pathNumber }: IconPropsType): JSX.Element => (
  <i className={`${icon} ${className}`} style={{ fontSize: size }}>
    {!!pathNumber &&
      [...Array(pathNumber)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`path-${index}`} className={`path${index + 1}`} />
      ))}
  </i>
)

Icon.defaultProps = {
  className: '',
  size: '20px',
  pathNumber: 0
}

export default Icon
