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

export const getTextFamily = (textFamily: TextFamiy | undefined, styles: { [className: string]: string }): string[] => {
  const classesArr = [
    ...(textFamily === 'main' ? [styles.Main] : []),
    ...(textFamily === 'heading' ? [styles.Heading] : [])
  ]

  return classesArr
}

export const getTextWeight = (
  textWeight: TextWeight | undefined,
  styles: { [className: string]: string }
): string[] => {
  const classesArr = [
    ...(textWeight === 100 ? [styles.Weight100] : []),
    ...(textWeight === 200 ? [styles.Weight200] : []),
    ...(textWeight === 300 ? [styles.Weight300] : []),
    ...(textWeight === 400 ? [styles.Weight400] : []),
    ...(textWeight === 500 ? [styles.Weight500] : []),
    ...(textWeight === 600 ? [styles.Weight600] : []),
    ...(textWeight === 700 ? [styles.Weight700] : []),
    ...(textWeight === 800 ? [styles.Weight800] : []),
    ...(textWeight === 900 ? [styles.Weight900] : [])
  ]

  return classesArr
}
