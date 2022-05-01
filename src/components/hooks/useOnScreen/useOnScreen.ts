import React, { useEffect, useState } from 'react'

const useOnScreen = (ref: React.MutableRefObject<HTMLElement>, rootMargin?: string, threshold?: number): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const options = {
      rootMargin,
      threshold
    }

    // Track element viewport status
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref, rootMargin, threshold])

  return isIntersecting
}

export default useOnScreen
