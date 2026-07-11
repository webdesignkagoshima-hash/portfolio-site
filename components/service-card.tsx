"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
  index?: number
}

export function ServiceCard({ icon: Icon, title, description, items, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-blue-500/30 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur transition duration-500" />
      <div className="relative h-full flex flex-col rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-blue-400/15 p-8">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-900/40">
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="font-display mt-6 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm text-blue-100/70 leading-relaxed">{description}</p>

        <ul className="mt-6 space-y-2.5 border-t border-blue-400/10 pt-6">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-blue-50/90">
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
