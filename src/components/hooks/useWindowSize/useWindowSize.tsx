import React, { useEffect, useState } from 'react'

import { UseWindowSizeValues } from './useWindowSize.type'

const useWindowSize = (): UseWindowSizeValues => {
  const [windowSize, setWindowSize] = useState<UseWindowSizeValues>({
    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    screenWeight: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenWeight: window.innerHeight
      })
    }

    updateSize()

    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
