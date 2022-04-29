// @ts-ignore
import React, { useRef, useEffect, useState } from 'react'

type UseTimeoutType = {
  startTimeout: () => void
  pauseTimeout: () => void
}

const useTimeout = (callback: () => void, delay: number): UseTimeoutType => {
  const [remaining, setRemaining] = useState<number>(delay)
  const [start, setStart] = useState<number>(0)

  const timer = useRef<NodeJS.Timeout>()

  const handleResume = () => {
    setStart(Date.now())

    if (timer?.current) clearTimeout(timer.current)
    timer.current = setTimeout(callback, remaining)
  }

  const handlePause = () => {
    if (timer?.current) clearTimeout(timer.current)
    setRemaining(Date.now() - start)
  }

  useEffect(() => {
    return () => timer.current && clearTimeout(timer.current)
  }, [])

  return { startTimeout: handleResume, pauseTimeout: handlePause }
}

useTimeout.defaultProps = {
  callback: () => {},
  delay: 0
}

export default useTimeout
