export interface CircleButtonProps extends React.ComponentProps<'button'> {
  children: JSX.Element
  className?: string
  color?: 'black' | 'white' | 'yellow' | 'orange' | 'red' | 'rose' | 'green' | 'teal' | 'turquoise' | 'blue' | 'purple'
  size?: 'sm' | 'md'
  layout?: 'filled' | 'outlined'
}
