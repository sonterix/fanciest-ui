export interface DetectClickOutsideProps extends React.ComponentProps<'div'> {
  onClickOutside: (event: MouseEvent) => void
}
