import { Color, Position } from 'types'

export interface MenuProps extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: boolean
  onClose: () => void
  anchor?: HTMLElement
  position?: Position
  maxWidth?: string | number
  maxHeight?: string | number
  color?: Color
}
