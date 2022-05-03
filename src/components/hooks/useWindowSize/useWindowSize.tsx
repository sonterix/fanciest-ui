import React, { useEffect, useState } from 'react'

import { UseWindowSizeValues } from './useWindowSize.type'

const useWindowSize = (): UseWindowSizeValues => {
  const [windowSize, setWindowSize] = useState<UseWindowSizeValues>({
    screenWidth: 0,
    screenWeight: 0
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
