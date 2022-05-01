import React, { useLayoutEffect } from 'react'

const useLockBodyScroll = (disable: boolean, defaultOverflow?: string, defaultHeight?: string) => {
  useLayoutEffect(() => {
    if (disable) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
    } else {
      document.body.style.overflow = defaultOverflow || 'auto'
      document.body.style.height = defaultHeight || 'auto'
    }

    return () => {
      document.body.style.overflow = defaultOverflow || 'auto'
      document.body.style.height = defaultHeight || 'auto'
    }
  }, [defaultHeight, defaultOverflow, disable])
}

export default useLockBodyScroll
