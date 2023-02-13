import { TextWeight } from '../../../types'
import { FontMedia, FontWeightMedia } from './FontGenerator.type'

export const getParams = (
  param: number | string | FontMedia | FontWeightMedia | undefined,
  defaultParam: number | string | FontMedia
) => {
  if (typeof param !== 'undefined' && typeof param === 'object') {
    if (typeof defaultParam === 'object') {
      return {
        ...defaultParam,
        ...param
      }
    }

    return {
      default: defaultParam,
      ...param
    }
  }

  if (typeof param !== 'undefined') {
    return param
  }

  return defaultParam
}

export const getMedia = (media: FontMedia, screenWidth: number): number | string | undefined => {
  const breackpoints = {
    xs: 361,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1201,
    xxl: 1401,
    xxxl: 1981
  } as const

  let value = media?.default

  // XXXL
  if ((typeof media?.xxxl === 'string' || typeof media?.xxxl === 'number') && screenWidth >= breackpoints.xxxl) {
    value = media.xxxl
  }
  // XXL
  else if ((typeof media?.xxl === 'string' || typeof media?.xxl === 'number') && screenWidth >= breackpoints.xxl) {
    value = media.xxl
  }
  // XL
  else if ((typeof media?.xl === 'string' || typeof media?.xl === 'number') && screenWidth >= breackpoints.xl) {
    value = media.xl
  }
  // LG
  else if ((typeof media?.lg === 'string' || typeof media?.lg === 'number') && screenWidth >= breackpoints.lg) {
    value = media.lg
  }
  // MD
  else if ((typeof media?.md === 'string' || typeof media?.md === 'number') && screenWidth >= breackpoints.md) {
    value = media.md
  }
  // SM
  else if ((typeof media?.sm === 'string' || typeof media?.sm === 'number') && screenWidth >= breackpoints.sm) {
    value = media.sm
  }
  // XS
  else if ((typeof media?.xs === 'string' || typeof media?.xs === 'number') && screenWidth >= breackpoints.xs) {
    value = media.xs
  }

  return value
}

export const getFont = (
  size: number | string | FontMedia | undefined,
  weight: TextWeight | FontWeightMedia | undefined,
  lineHeight: number | string | FontMedia | undefined,
  letterSpacing: number | string | FontMedia | undefined,
  screenWidth: number
): {
  size: number | string | undefined
  weight: number | string | undefined
  lineHeight: number | string | undefined
  letterSpacing: number | string | undefined
} => {
  let sizeProp: number | string | undefined
  let weightProp: number | string | undefined
  let lineHeightProp: number | string | undefined
  let letterSpacingProp: number | string | undefined

  if (size) {
    sizeProp = typeof size === 'object' ? getMedia(size, screenWidth) : size
  }
  if (weight) {
    weightProp = typeof weight === 'object' ? getMedia(weight, screenWidth) : weight
  }
  if (lineHeight) {
    lineHeightProp = typeof lineHeight === 'object' ? getMedia(lineHeight, screenWidth) : lineHeight
  }
  if (letterSpacing) {
    letterSpacingProp = typeof letterSpacing === 'object' ? getMedia(letterSpacing, screenWidth) : letterSpacing
  }

  return { size: sizeProp, weight: weightProp, lineHeight: lineHeightProp, letterSpacing: letterSpacingProp }
}
