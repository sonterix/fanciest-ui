// @ts-ignore
import React, { useState, useEffect } from 'react'

const useDebounce = (value: string | number, delay: number): string | number => {
  const [debouncedValue, setDebouncedValue] = useState<any>(value)

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout((): void => {
      setDebouncedValue(value)
    }, delay)

    return (): void => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

useDebounce.defaultProps = {
  value: '',
  delay: 0
}

export default useDebounce
