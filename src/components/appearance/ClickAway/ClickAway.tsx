import React, { useEffect, useRef } from 'react'

type ClickAwayProps = {
  children: React.ReactNode
  handleClickAway: () => void
}

const ClickAway = ({ children, handleClickAway }: ClickAwayProps): JSX.Element => {
  const elRef = useRef<HTMLDivElement>(null)

  const handleRefElClick = (event: Event) => {
    const { target } = event
    const { current } = elRef

    if (!current || !target) return

    if (!current.contains(target as Node)) handleClickAway()
  }

  useEffect(() => {
    // Add when mounted
    document.addEventListener('mousedown', handleRefElClick)
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleRefElClick)
    }
  }, [])

  return (
    <div className="mu-click-away" ref={elRef}>
      {children}
    </div>
  )
}

export default ClickAway
