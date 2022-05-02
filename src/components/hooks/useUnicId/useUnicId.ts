import { useRef } from 'react'

const useUnicId = (length: number): string => {
  const id = useRef(
    Math.floor(
      (1 + Math.random()) *
        Number(
          `0x1${Array.from(Array(length).keys())
            .map(() => 0)
            .join('')}`
        )
    )
      .toString(16)
      .substring(1)
  )

  return id.current
}

export default useUnicId
