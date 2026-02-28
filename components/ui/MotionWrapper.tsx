'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  className?: string
}

export default function MotionWrapper({
  children,
  delay = 0,
  className = '',
  ...rest
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
