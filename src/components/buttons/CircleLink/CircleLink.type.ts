export interface CircleLinkProps extends React.ComponentProps<'a'> {
  children: JSX.Element
  className?: string
  color?: 'black' | 'white' | 'yellow' | 'orange' | 'red' | 'rose' | 'green' | 'teal' | 'turquoise' | 'blue' | 'purple'
  size?: 'sm' | 'md'
  layout?: 'filled' | 'outlined'
}
