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
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-sm text-xs font-medium text-white tracking-wide">
          {category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900 leading-snug text-balance">{title}</h3>
        <p className="mt-3 text-sm text-slate-500 leading-loose">{description}</p>
        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
          <span className="text-xs text-slate-400">担当</span>
          <span className="text-xs text-slate-700">{role}</span>
        </div>
      </div>
    </motion.div>
  )
}
