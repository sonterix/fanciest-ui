import { useEffect, useState } from 'react'

type WindowType = {
  screenWidth: number
  screenWeight: number
}

const useWindowSize = (): WindowType => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<WindowType>({
    screenWidth: 0,
    screenWeight: 0
  })

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = (): void => {
      // Set window width/height to state
      setWindowSize({
        screenWidth: window.innerWidth,
        screenWeight: window.innerHeight
      })
    }

    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default useWindowSize
