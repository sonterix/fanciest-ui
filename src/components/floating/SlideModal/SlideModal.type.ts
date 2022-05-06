import { Shape } from 'types'

export interface SlideModalProps extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: boolean
  onClose: () => void
  maxWidth?: string | number
  fullWidth?: boolean
  closeButton?: boolean
  position?: 'left' | 'right'
  shape?: Shape
}
