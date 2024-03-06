const space = {
  large: 'h-60',
  medium: 'h-40',
  small: 'h-20',
}

interface SpacerComponentType {
  size: 'large' | 'medium' | 'small'
}

const Spacer = ({ size }: SpacerComponentType) => {
  return <div className={space[size]}></div>
}

export default Spacer
