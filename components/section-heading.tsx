"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center space-y-4">
      <motion.h2
        className="font-display text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-sm md:text-base text-blue-100/70 max-w-2xl mx-auto leading-relaxed text-pretty"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  )
}
