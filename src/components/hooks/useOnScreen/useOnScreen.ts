import React, { useEffect, useState } from 'react'

const useOnScreen = (ref: React.MutableRefObject<HTMLElement>, rootMargin?: string, threshold?: number): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const element = ref.current

    const options = {
      rootMargin,
      threshold
    }

    // Track element viewport status
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, rootMargin, threshold])

  return isIntersecting
}

export default useOnScreen
