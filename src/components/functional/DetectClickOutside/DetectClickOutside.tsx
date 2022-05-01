import React, { useEffect, useRef } from 'react'

import { DetectClickOutsideProps } from './DetectClickOutside.type'

const DetectClickOutside = ({ oneClickOutside, children, ...props }: DetectClickOutsideProps): JSX.Element => {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elRefClick = (event: MouseEvent) => {
      const { target } = event
      const { current } = elRef

      if (!current || !target) return

      if (!current.contains(target as Node)) oneClickOutside(event)
    }

    // Add when mounted
    document.addEventListener('mousedown', elRefClick)
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', elRefClick)
    }
  }, [])

  return (
    <div {...props} ref={elRef}>
      {children}
    </div>
  )
}

export default DetectClickOutside
