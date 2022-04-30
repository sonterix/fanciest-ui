import { FontMedia } from './FontGenerator.type'

// eslint-disable-next-line
export const getFontSize = (media: FontMedia | undefined, screenWidth: number): string | number => {
  const breackpoints = {
    xs: 361,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1201,
    xxl: 1401,
    xxxl: 1981
  } as const

  let size = media?.default || '16px'

  // XXXL font
  if ((typeof media?.xxxl === 'string' || typeof media?.xxxl === 'number') && screenWidth >= breackpoints.xxxl) {
    size = media.xxxl
  }
  // XXL font
  else if ((typeof media?.xxl === 'string' || typeof media?.xxl === 'number') && screenWidth >= breackpoints.xxl) {
    size = media.xxl
  }
  // XL font
  else if ((typeof media?.xl === 'string' || typeof media?.xl === 'number') && screenWidth >= breackpoints.xl) {
    size = media.xl
  }
  // LG font
  else if ((typeof media?.lg === 'string' || typeof media?.lg === 'number') && screenWidth >= breackpoints.lg) {
    size = media.lg
  }
  // MD font
  else if ((typeof media?.md === 'string' || typeof media?.md === 'number') && screenWidth >= breackpoints.md) {
    size = media.md
  }
  // SM font
  else if ((typeof media?.sm === 'string' || typeof media?.sm === 'number') && screenWidth >= breackpoints.sm) {
    size = media.sm
  }
  // XS font
  else if ((typeof media?.xs === 'string' || typeof media?.xs === 'number') && screenWidth >= breackpoints.xs) {
    size = media.xs
  }

  return size
}
