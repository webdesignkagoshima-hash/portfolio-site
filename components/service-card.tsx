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
      <div className="relative h-full flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:shadow-lg group-hover:border-blue-200 transition-all duration-300 p-8">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Icon className="h-7 w-7 text-white" />
        </div>

        <h3 className="font-display mt-6 text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm text-slate-500 leading-loose">{description}</p>

        <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
              <Check className="h-4 w-4 mt-1 shrink-0 text-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
