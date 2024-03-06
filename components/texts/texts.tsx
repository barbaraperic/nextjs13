import styles from './texts.module.scss'

interface TextProps {
  children: React.ReactNode
  className?: string
}

export function Heading1({ children, className }: TextProps) {
  return <h1 className={`${styles.heading1} ${className}`}>{children}</h1>
}

export function Heading2({ children, className }: TextProps) {
  return <h2 className={`${styles.heading2} ${className}`}>{children}</h2>
}

export function Paragraph({ children, className }: TextProps) {
  return <p className={`${styles.paragraph} ${className}`}>{children}</p>
}
