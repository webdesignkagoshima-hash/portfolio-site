"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  value: number
  duration?: number
  className?: string
}

export function CountUp({ value, duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo for a snappy finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * value))

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-US")}
    </span>
  )
}
