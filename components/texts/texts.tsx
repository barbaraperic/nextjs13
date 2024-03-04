import clsx from 'clsx'
import { FC } from 'react'
import styles from './texts.module.css'

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
  return <h2 className={`${styles.paragraph} ${className}`}>{children}</h2>
}
