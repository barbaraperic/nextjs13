const space = {
  large: 'h-60',
  medium: 'h-40',
  small: 'h-20',
}

interface SpacerComponentType {
  size: 'large' | 'medium' | 'small'
}

export default function Spacer({ size }) {
  return <div className={space[size]}></div>
}
