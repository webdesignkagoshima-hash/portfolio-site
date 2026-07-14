"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface WorkCardProps {
  category: string
  title: string
  description: string
  role: string
  image: string
  popupImage: string
  popupType?: "image" | "pdf"
  index?: number
}

export function WorkCard({
  category,
  title,
  description,
  role,
  image,
  popupImage,
  popupType = "image",
  index = 0,
}: WorkCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
  if (!isOpen) return

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false)
    }
  }

  const scrollY = window.scrollY

  document.body.style.position = "fixed"
  document.body.style.top = `-${scrollY}px`
  document.body.style.left = "0"
  document.body.style.right = "0"
  document.body.style.width = "100%"

  window.addEventListener("keydown", handleKeyDown)

  return () => {
    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.left = ""
    document.body.style.right = ""
    document.body.style.width = ""

    window.scrollTo(0, scrollY)
    window.removeEventListener("keydown", handleKeyDown)
  }
}, [isOpen])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            setIsOpen(true)
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${title}の画像を拡大表示`}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/35">
            <span className="translate-y-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              詳細をみる
            </span>
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
            {category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-lg font-semibold leading-snug text-slate-900 text-balance">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-loose text-slate-500">
            {description}
          </p>

          <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
            <span className="text-xs text-slate-400">担当</span>
            <span className="text-xs text-slate-700">{role}</span>
          </div>
        </div>
      </motion.div>

{isMounted &&
  isOpen &&
  createPortal(
    <div
      className="fixed inset-0 z-[2147483646] overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-sm md:p-8"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={`${title}の拡大画像`}
    >
      <div className="flex min-h-full items-start justify-center py-8 md:py-12">
        <div
          className="relative w-full w-[85vw] overflow-hidden rounded-xl bg-white shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="ポップアップを閉じる"
            onClick={() => setIsOpen(false)}
            className="sticky top-4 z-50 ml-auto mr-4 mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>

          {popupType === "pdf" ? (
  <iframe
    src={`${popupImage}#view=FitH&zoom=page-width`}
    title={`${title}のPDF`}
    className="
      block
      h-[78dvh]
      w-[calc(100vw-2rem)]
      max-w-full
      bg-white
      md:h-[90vh]
      md:w-[90vw]
      md:max-w-[1600px]
    "
  />
) : (
  <img
    src={popupImage || image}
    alt={`${title}の拡大画像`}
    className="-mt-16 block h-auto w-full object-contain"
  />
)}
        </div>
      </div>
    </div>,
    document.body,
  )}
    </>
  )
}