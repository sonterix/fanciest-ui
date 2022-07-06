import React, { useEffect } from 'react'

const useMutationObserver = (
  ref: React.MutableRefObject<HTMLElement>,
  callback: MutationCallback,
  options?: MutationObserverInit
): null => {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback)
      observer.observe(ref.current, options)
      return () => observer.disconnect()
    }

    return () => {}
  }, [callback, options, ref])

  return null
}

useMutationObserver.defaultProps = {
  options: {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  }
}

export default useMutationObserver
