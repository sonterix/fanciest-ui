export interface DetectClickOutsideProps extends React.ComponentProps<'div'> {
  oneClickOutside: (event: MouseEvent) => void
}
