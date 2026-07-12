"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    // Lenis' rAF loop and scroll hijacking make touch scrolling feel heavy/laggy
    // on phones. Use native scrolling on touch devices; only smooth on desktop.
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (isTouch) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}
