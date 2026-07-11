"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center space-y-5">
      <motion.h2
        className="font-display text-4xl md:text-6xl font-light tracking-display text-slate-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-loose text-pretty"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto mt-4"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  )
}
