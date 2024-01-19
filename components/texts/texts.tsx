import clsx from 'clsx'
import { FC } from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
}

const Heading1: FC<TextProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        'text-4xl font-bold leading-tight text-green-400',
        className
      )}
    >
      {children}
    </h1>
  )
}

const Heading2: FC<TextProps> = ({ children, className }) => {
  return (
    <h2 className={clsx('text-3xl text-bold leading-tight', className)}>
      {children}
    </h2>
  )
}

const Heading3: FC<TextProps> = ({ children, className }) => {
  return (
    <h3 className={clsx('text-xl leading-tight font-bold', className)}>
      {children}
    </h3>
  )
}

const Paragraph: FC<TextProps> = ({ children, className }) => {
  return (
    <p className={clsx('text-xl text-base-content', className)}>{children}</p>
  )
}

const ButtonText: FC<TextProps> = ({ children, className }) => {
  return <p className={clsx('text-base font-bold', className)}>{children}</p>
}

export { Heading1, Heading2, Heading3, Paragraph, ButtonText }
