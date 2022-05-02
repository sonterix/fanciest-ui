export const getMaskedValue = (value: string, mask: string, maskSymbol: string): string => {
  if (!mask) return value

  // Get array of values without mask values
  const pureValueArr = value.split('').filter(char => !mask.split('').includes(char))

  // Fill maskSymbol with values
  const maskedValueArr = mask.split('').map(char => {
    if (char === maskSymbol) {
      const valueChar = pureValueArr.shift()
      return valueChar || char
    }

    return char
  })

  const maskedValue = maskedValueArr.join('')

  return maskedValue
}
