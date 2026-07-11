"use client"

import { motion } from "framer-motion"

interface WorkCardProps {
  category: string
  title: string
  description: string
  role: string
  image: string
  index?: number
}

export function WorkCard({ category, title, description, role, image, index = 0 }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-blue-400/15"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/80 backdrop-blur-sm text-xs font-medium text-white">
          {category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-white leading-snug text-balance">{title}</h3>
        <p className="mt-3 text-sm text-blue-100/70 leading-relaxed">{description}</p>
        <div className="mt-5 flex items-center gap-2 border-t border-blue-400/10 pt-4">
          <span className="text-xs text-blue-300/70">担当</span>
          <span className="text-xs text-blue-50/90">{role}</span>
        </div>
      </div>
    </motion.div>
  )
}
