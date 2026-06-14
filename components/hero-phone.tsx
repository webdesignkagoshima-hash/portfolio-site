"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroPhone() {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll progress across the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  // Scroll-driven phone transforms
  const phoneY = useTransform(smooth, [0, 1], [0, -160])
  const phoneScale = useTransform(smooth, [0, 1], [1, 0.82])
  const phoneRotate = useTransform(smooth, [0, 1], [-8, 10])
  const phoneOpacity = useTransform(smooth, [0, 0.85], [1, 0])

  // Background headline parallax
  const bgTextY = useTransform(smooth, [0, 1], [0, 220])
  const bgTextOpacity = useTransform(smooth, [0, 0.7], [0.08, 0])

  // Foreground copy parallax
  const copyY = useTransform(smooth, [0, 1], [0, 90])
  const copyOpacity = useTransform(smooth, [0, 0.6], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"
    >
      {/* Ambient blue glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 left-1/4 w-[28rem] h-[28rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-25" />
        <div className="absolute bottom-0 right-1/4 w-[26rem] h-[26rem] bg-cyan-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
      </div>

      {/* Oversized background wordmark */}
      <motion.div
        style={{ y: bgTextY, opacity: bgTextOpacity }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 text-center"
      >
        <span className="block font-bold tracking-tighter text-white leading-none text-[22vw]">PORTFOLIO</span>
      </motion.div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-24">
        {/* Left: copy */}
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">Software Engineer & Creative Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[0.95]"
          >
            <span className="block text-white">CRAFTED</span>
            <span className="block text-white">FOR THE</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400">
              SMALL SCREEN
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-blue-100/70 max-w-[520px] mx-auto lg:mx-0 leading-relaxed"
          >
            I&apos;m Shine Kyaw Kyaw Aung — I design and build fast, beautiful mobile-first experiences with code,
            creativity, and a passion for the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <Button
              asChild
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0 text-white"
            >
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-400/40 text-blue-200 hover:text-white hover:border-blue-300 bg-transparent"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-3 justify-center lg:justify-start pt-2"
          >
            {[
              { Icon: Github, href: "https://github.com/shinekyaw", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/shinekyawkyawaung/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:shinekyawkyawaung@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-200 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Button>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: floating phone */}
        <div className="relative flex justify-center items-center [perspective:1200px]">
          <motion.div
            style={{ y: phoneY, scale: phoneScale, rotate: phoneRotate, opacity: phoneOpacity }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: copyOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-blue-300/30 flex justify-center items-start p-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute -inset-8 bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 rounded-[4rem] blur-3xl" />

      {/* Device frame */}
      <div className="relative w-[260px] sm:w-[300px] aspect-[9/19] rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-2xl shadow-blue-950/60 border border-blue-300/10 ring-1 ring-white/5">
        {/* Screen */}
        <div className="relative h-full w-full rounded-[2.4rem] overflow-hidden bg-gradient-to-b from-blue-600 via-blue-700 to-slate-900">
          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-20 h-6 rounded-full bg-black/80" />

          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-4 text-[10px] font-medium text-white/90">
            <span>9:41</span>
            <span>Portfolio</span>
          </div>

          {/* Profile header */}
          <div className="relative z-10 flex flex-col items-center mt-8 px-5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-300 to-blue-200 p-0.5">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xl font-bold text-cyan-300">
                S
              </div>
            </div>
            <div className="mt-3 text-base font-bold text-white">Shine K. K. Aung</div>
            <div className="text-[11px] text-blue-100/80">Mobile-first Developer</div>

            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/15 text-[10px] text-white">React</span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-[10px] text-white">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-[10px] text-white">UI/UX</span>
            </div>
          </div>

          {/* Content cards */}
          <div className="relative z-10 mt-6 px-4 space-y-2.5">
            {[
              { label: "Projects", value: "24" },
              { label: "Experience", value: "6 yrs" },
              { label: "Open to work", value: "Yes" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl bg-white/10 backdrop-blur-sm px-4 py-3 border border-white/10"
              >
                <span className="text-[11px] text-blue-50/80">{row.label}</span>
                <span className="text-[12px] font-semibold text-white">{row.value}</span>
              </div>
            ))}
          </div>

          {/* CTA pill */}
          <div className="absolute bottom-5 left-0 right-0 px-4 z-10">
            <div className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 py-2.5 text-center text-[12px] font-semibold text-slate-900">
              Get in touch
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
