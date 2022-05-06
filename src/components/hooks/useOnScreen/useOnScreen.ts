import React, { useEffect, useState } from 'react'

const useOnScreen = (ref: React.RefObject<HTMLElement>, rootMargin?: string, threshold?: number): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const element = ref.current

    const options = {
      rootMargin: rootMargin || '0px',
      threshold: threshold || 1
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
