/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
import React, { useRef, useCallback, useEffect, useState } from 'react'

type DirectionType = 'up' | 'left' | 'down' | 'right'

type XYType = { x: number; y: number }

type XYTimeType = { x: number; y: number; time: number }

type SwipeCardsProps = {
  [key: string]: any
  children?: React.ReactNode
  className?: string
  flickOnSwipe?: boolean
  preventSwipe?: Array<string>
  preventTouch?: boolean
  swipeManual?: {
    swipe: boolean
    power?: number
    direction?: DirectionType
  }
  onSwipe?: (dir: DirectionType) => void
  onCardClick?: () => void
  onCardLeftScreen?: (dir: DirectionType) => void
}

const SETTINGS = {
  snapBackDuration: 300,
  maxTilt: 5,
  bouncePower: 0.8,
  swipeThreshold: 20 // px/s
}

const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

const pythagoras = (x: number, y: number): number => Math.sqrt(x ** 2 + y ** 2)

const rotationString = (rot: number): string => `rotate(${rot}deg)`

const translationString = (x: number, y: number): string => `translate(${x}px, ${y}px)`

const getElementSize = (element: HTMLElement): XYType => {
  const elementStyles = window.getComputedStyle(element)
  const widthString = elementStyles.getPropertyValue('width')
  const width = Number(widthString.split('px')[0])
  const heightString = elementStyles.getPropertyValue('height')
  const height = Number(heightString.split('px')[0])

  return { x: width, y: height }
}

const getTranslate = (element: HTMLElement): XYType => {
  const style = window.getComputedStyle(element)
  const matrix = new window.WebKitCSSMatrix(style.webkitTransform)

  return { x: matrix.m41, y: matrix.m42 }
}

const getRotation = (element: HTMLElement): number => {
  const style = window.getComputedStyle(element)
  const matrix = new window.WebKitCSSMatrix(style.webkitTransform)

  return (-Math.asin(matrix.m21) / (2 * Math.PI)) * 360
}

const animateOut = async (element: HTMLElement, speed: XYType, easeIn?: boolean): Promise<void> => {
  const startPos = getTranslate(element)
  const bodySize = getElementSize(document.body)
  const diagonal = pythagoras(bodySize.x, bodySize.y)

  const velocity = pythagoras(speed.x, speed.y)
  const time = diagonal / velocity
  const multiplier = diagonal / velocity

  const translateString = translationString(
    speed.x * multiplier + startPos.x,
    -speed.y * multiplier + startPos.y
  )
  let rotateString = ''

  const rotationPower = 200

  if (easeIn) element.style.transition = `ease ${time}s`
  else element.style.transition = `ease-out ${time}s`

  if (getRotation(element) === 0)
    rotateString = rotationString((Math.random() - 0.5) * rotationPower)
  else if (getRotation(element) > 0)
    rotateString = rotationString((Math.random() * rotationPower) / 2 + getRotation(element))
  else
    rotateString = rotationString(((Math.random() - 1) * rotationPower) / 2 + getRotation(element))

  element.style.transform = translateString + rotateString

  await sleep(time * 1000)
}

const animateBack = (element: HTMLElement): void => {
  element.style.transition = `${SETTINGS.snapBackDuration}ms`

  const startingPoint = getTranslate(element)
  const translation = translationString(
    startingPoint.x * -SETTINGS.bouncePower,
    startingPoint.y * -SETTINGS.bouncePower
  )

  const rotation = rotationString(getRotation(element) * -SETTINGS.bouncePower)
  element.style.transform = translation + rotation

  setTimeout(() => {
    element.style.transform = 'none'
  }, SETTINGS.snapBackDuration * 0.75)

  setTimeout(() => {
    element.style.transition = '10ms'
  }, SETTINGS.snapBackDuration)
}

const getSwipeDirection = (speed: XYType): DirectionType => {
  if (Math.abs(speed.x) > Math.abs(speed.y)) return speed.x > 0 ? 'right' : 'left'
  return speed.y > 0 ? 'up' : 'down'
}

const calcSpeed = (oldLocation: XYTimeType, newLocation: XYTimeType): XYType => {
  const dx = newLocation.x - oldLocation.x
  const dy = oldLocation.y - newLocation.y
  const dt = (newLocation.time - oldLocation.time) / 1000

  return { x: dx / dt, y: dy / dt }
}

const dragableTouchmove = (
  coordinates: XYType,
  element: HTMLElement,
  offset: XYType,
  lastLocation: XYTimeType
): XYTimeType => {
  const pos = { x: coordinates.x + offset.x, y: coordinates.y + offset.y }
  const newLocation = { x: pos.x, y: pos.y, time: new Date().getTime() }
  const translation = translationString(pos.x, pos.y)
  const rotCalc = calcSpeed(lastLocation, newLocation).x / 1000
  const rotation = rotationString(rotCalc * SETTINGS.maxTilt)

  element.style.transform = translation + rotation

  return newLocation
}

const touchCoordinatesFromEvent = (event: { targetTouches: any[] }): XYType => {
  const touchLocation = event.targetTouches[0]
  return { x: touchLocation.clientX, y: touchLocation.clientY }
}

const mouseCoordinatesFromEvent = (event: { clientX: any; clientY: any }): XYType => ({
  x: event.clientX,
  y: event.clientY
})

const SwipeCards = ({
  children,
  className,
  flickOnSwipe,
  preventSwipe,
  preventTouch,
  swipeManual,
  onSwipe,
  onCardClick,
  onCardLeftScreen,
  ...props
}: SwipeCardsProps): JSX.Element => {
  const swipeAlreadyReleased = useRef<boolean>(false)
  const element = useRef<HTMLDivElement>()

  const [isAutoSwipe, setAutoSwipe] = useState(false)

  const handleManualSwipe = useCallback(
    async (cardElement: HTMLDivElement, dir: DirectionType = 'right', power = 3000) => {
      // if (swipeAlreadyReleased.current) return
      swipeAlreadyReleased.current = true

      if (onSwipe) onSwipe(dir)

      const disturbance = (Math.random() - 0.5) * 100

      if (dir === 'right' && cardElement)
        await animateOut(cardElement, { x: power, y: disturbance }, true)
      else if (dir === 'left' && cardElement)
        await animateOut(cardElement, { x: -power, y: disturbance }, true)
      else if (dir === 'up' && cardElement)
        await animateOut(cardElement, { x: disturbance, y: power }, true)
      else if (dir === 'down' && cardElement)
        await animateOut(cardElement, { x: disturbance, y: -power }, true)

      cardElement.style.display = 'none'

      if (onCardLeftScreen) onCardLeftScreen(dir)
    },
    []
  )

  const handleSwipeStart = useCallback(() => {
    swipeAlreadyReleased.current = false
  }, [swipeAlreadyReleased])

  const handleSwipeReleased = useCallback(
    async (cardElement: HTMLElement, speed: XYType) => {
      if (swipeAlreadyReleased.current) return
      swipeAlreadyReleased.current = true

      // Check if this is a swipe
      if (
        Math.abs(speed.x) > SETTINGS.swipeThreshold ||
        Math.abs(speed.y) > SETTINGS.swipeThreshold
      ) {
        const dir = getSwipeDirection(speed)

        if (onSwipe) onSwipe(dir)

        if (flickOnSwipe) {
          if (preventSwipe && !preventSwipe.includes(dir)) {
            await animateOut(cardElement, speed)

            cardElement.style.display = 'none'

            if (onCardLeftScreen) onCardLeftScreen(dir)

            return
          }
        }
      }

      // Card was not flicked away, animate back to start
      animateBack(cardElement)
    },
    [swipeAlreadyReleased, flickOnSwipe, onSwipe, onCardLeftScreen, preventSwipe]
  )

  useEffect(() => {
    if (!isAutoSwipe && swipeManual?.swipe && element?.current) {
      setAutoSwipe(true)

      const { power, direction } = swipeManual
      handleManualSwipe(element.current, direction, power)
    }

    return () => setAutoSwipe(false)
  }, [swipeManual])

  useEffect(() => {
    const currentElement = element?.current

    let offset = { x: null, y: null }
    let speed = { x: 0, y: 0 }
    let lastLocation = { x: 0, y: 0, time: new Date().getTime() }
    let mouseIsClicked = false

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const handleClick = (speed: XYType) => {
      if (!onCardClick) return
      if (
        !(
          Math.abs(speed.x) > SETTINGS.swipeThreshold || Math.abs(speed.y) > SETTINGS.swipeThreshold
        )
      )
        onCardClick()
    }

    const handleTouchstart = (event: any) => {
      if (preventTouch) event.preventDefault()

      handleSwipeStart()
      // @ts-ignore
      offset = { x: -touchCoordinatesFromEvent(event).x, y: -touchCoordinatesFromEvent(event).y }
    }

    const handleMousedown = (event: any) => {
      event.preventDefault()

      mouseIsClicked = true
      handleSwipeStart()
      // @ts-ignore
      offset = { x: -mouseCoordinatesFromEvent(event)?.x, y: -mouseCoordinatesFromEvent(event).y }
    }

    const handleTouchmove = (event: any) => {
      if (!currentElement) return
      if (preventTouch) event.preventDefault()

      const newLocation = dragableTouchmove(
        touchCoordinatesFromEvent(event),
        currentElement,
        // @ts-ignore
        offset,
        lastLocation
      )

      speed = calcSpeed(lastLocation, newLocation)
      lastLocation = newLocation
    }

    const handleMousemove = (event: any) => {
      if (!currentElement) return
      if (preventTouch) event.preventDefault()

      event.preventDefault()

      if (mouseIsClicked) {
        const newLocation = dragableTouchmove(
          // @ts-ignore
          mouseCoordinatesFromEvent(event),
          currentElement,
          // @ts-ignore
          offset,
          lastLocation
        )

        speed = calcSpeed(lastLocation, newLocation)
        lastLocation = newLocation
      }
    }

    const handleTouchend = (event: any) => {
      if (!currentElement) return
      if (preventTouch) event.preventDefault()

      handleClick(speed)
      handleSwipeReleased(currentElement, speed)
    }

    const handleMouseup = (event: any) => {
      if (mouseIsClicked) {
        event.preventDefault()
        mouseIsClicked = false

        handleClick(speed)
        // @ts-ignore
        handleSwipeReleased(currentElement, speed)
      }
    }

    const handleMouseleave = (event: any) => {
      if (mouseIsClicked) {
        event.preventDefault()
        mouseIsClicked = false

        handleClick(speed)
        // @ts-ignore
        handleSwipeReleased(currentElement, speed)
      }
    }

    currentElement?.addEventListener('click', handleClick)
    currentElement?.addEventListener('touchstart', handleTouchstart)
    currentElement?.addEventListener('mousedown', handleMousedown)
    currentElement?.addEventListener('touchmove', handleTouchmove)
    currentElement?.addEventListener('mousemove', handleMousemove)
    currentElement?.addEventListener('touchend', handleTouchend)
    currentElement?.addEventListener('mouseup', handleMouseup)
    currentElement?.addEventListener('mouseleave', handleMouseleave)

    return () => {
      currentElement?.removeEventListener('click', handleClick)
      currentElement?.removeEventListener('touchstart', handleTouchstart)
      currentElement?.removeEventListener('mousedown', handleMousedown)
      currentElement?.removeEventListener('touchmove', handleTouchmove)
      currentElement?.removeEventListener('mousemove', handleMousemove)
      currentElement?.removeEventListener('touchend', handleTouchend)
      currentElement?.removeEventListener('mouseup', handleMouseup)
      currentElement?.removeEventListener('mouseleave', handleMouseleave)
    }
  }, [handleSwipeReleased, handleSwipeStart])

  return (
    // @ts-ignore
    <div ref={element} className={className} {...props}>
      {children}
    </div>
  )
}

SwipeCards.displayName = 'SwipeCards'

SwipeCards.defaultProps = {
  children: null,
  className: '',
  flickOnSwipe: true,
  preventSwipe: [],
  preventTouch: true,
  swipeManual: {
    swipe: false,
    power: 1000,
    direction: 'right'
  },
  onSwipe: () => {},
  onCardClick: () => {},
  onCardLeftScreen: () => {}
}

export default SwipeCards
