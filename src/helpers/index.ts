import { Color, TextFamiy, TextWeight } from 'types'

export const arrayToClasslist = (arr: string[]): string => {
  const joined = arr.join(' ').trim()
  return joined
}

export const getColorClasses = (color: Color | undefined, styles: { [className: string]: string }): string[] => {
  const classesArr = [
    ...(color === 'black' ? [styles.Black] : []),
    ...(color === 'white' ? [styles.White] : []),
    ...(color === 'yellow' ? [styles.Yellow] : []),
    ...(color === 'orange' ? [styles.Orange] : []),
    ...(color === 'red' ? [styles.Red] : []),
    ...(color === 'rose' ? [styles.Rose] : []),
    ...(color === 'green' ? [styles.Green] : []),
    ...(color === 'teal' ? [styles.Teal] : []),
    ...(color === 'turquoise' ? [styles.Turquoise] : []),
    ...(color === 'blue' ? [styles.Blue] : []),
    ...(color === 'purple' ? [styles.Purple] : [])
  ]

  return classesArr
}

export const getTextFamily = (textFamily: TextFamiy | undefined): string[] => {
  const classesArr = [
    ...(textFamily === 'main' ? ['fui-family-main'] : []),
    ...(textFamily === 'heading' ? ['fui-family-heading'] : [])
  ]

  return classesArr
}

export const getTextWeight = (textWeight: TextWeight | undefined): string[] => {
  const classesArr = [
    ...(textWeight === 100 ? ['fui-weight-100'] : []),
    ...(textWeight === 200 ? ['fui-weight-200'] : []),
    ...(textWeight === 300 ? ['fui-weight-300'] : []),
    ...(textWeight === 400 ? ['fui-weight-400'] : []),
    ...(textWeight === 500 ? ['fui-weight-500'] : []),
    ...(textWeight === 600 ? ['fui-weight-600'] : []),
    ...(textWeight === 700 ? ['fui-weight-700'] : []),
    ...(textWeight === 800 ? ['fui-weight-800'] : []),
    ...(textWeight === 900 ? ['fui-weight-900'] : [])
  ]

  return classesArr
}
