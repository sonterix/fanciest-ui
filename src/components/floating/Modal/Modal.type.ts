import { Shape } from '../../../types'

export interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: boolean
  onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  maxWidth?: string | number
  fullWidth?: boolean
  closeButton?: boolean
  position?: 'top' | 'center'
  shape?: Shape
  header?: React.ReactNode
  footer?: React.ReactNode
  onInit?: (modal: HTMLElement) => void
}
