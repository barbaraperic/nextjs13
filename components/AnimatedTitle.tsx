'use client'
import { useAnimation, motion } from 'framer-motion'
import { useEffect } from 'react'

const AnimatedTitle = ({ title }) => {
  const text = 'Empower your language journey'
  const ctrls = useAnimation()

  useEffect(() => {}, [])

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }
  return (
    <div>
      {text.split('').map((character, index) => (
        <span key={index} animate={ctrls} variants={characterAnimation}>
          {character}
        </span>
      ))}
    </div>
  )
}

export default AnimatedTitle
