"use client"

import type { ReactNode } from "react"
import { motion, type Variants } from "motion/react"

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: "fade" | "media"
  delay?: number
}

const VARIANTS: Record<"fade" | "media", Variants> = {
  fade: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  media: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function Reveal({ children, className, variant = "fade", delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={VARIANTS[variant]}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
