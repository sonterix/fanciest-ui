import { Color, Position } from 'types'

export interface MenuProps extends React.ComponentProps<'div'> {
  isOpen: boolean
  onClose: (event: React.MouseEvent) => void
  anchor?: HTMLElement
  position?: Position
  maxWidth?: string | number
  maxHeight?: string | number
  color?: Color
}
