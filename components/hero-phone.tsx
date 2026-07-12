"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroPhone() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  // Parallax layers (scroll only)
  const copyY = useTransform(smooth, [0, 1], [0, 60])
  const copyOpacity = useTransform(smooth, [0, 0.7], [1, 0])
  const photosY = useTransform(smooth, [0, 1], [0, -80])
  const bgTextY = useTransform(smooth, [0, 1], [0, 120])

  return (
    <section
      ref={sectionRef}
      className="animate-hero-gradient relative min-h-screen overflow-hidden flex items-center pt-8 pb-8 lg:py-0"
    >
      {/* Soft floating light glows */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-24 -left-24 w-[32rem] h-[32rem] bg-white rounded-full mix-blend-overlay filter blur-[130px] opacity-30"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-cyan-200 rounded-full mix-blend-overlay filter blur-[130px] opacity-40"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Oversized thin wordmark background */}
      <motion.div
        style={{ y: bgTextY }}
        className="pointer-events-none absolute inset-x-0 bottom-4 md:bottom-8 z-0 text-center select-none"
      >
        <span className="font-display block font-light tracking-display text-white/10 leading-none text-[22vw] md:text-[15vw]">
          DIGITAL
        </span>
      </motion.div>

      {/* Content grid */}
      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-4 items-center">
          {/* Copy */}
          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                鹿児島発・全国対応のデジタルパートナー
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-extrabold tracking-tight text-white leading-[1.14] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block whitespace-nowrap">Web、集客、採用の</span>
              <span className="block">可能性を。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display mt-3 text-base sm:text-xl lg:text-2xl font-light tracking-display text-white/70"
            >
              Creative Digital Partner.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-sm md:text-base text-white/75 max-w-md leading-relaxed"
            >
              Web制作・広告運用・SNS運用・採用支援まで。企業ごとの課題に合わせた最適な施策を設計し、成果につながる仕組みづくりを支援します。
            </motion.p>

            {/* CTAs - centered, equal size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="btn-shine group rounded-full bg-amber-400 text-slate-900 hover:bg-amber-300 border-0 font-bold shadow-lg shadow-amber-500/30 w-full sm:w-56"
              >
                <Link href="#contact">
                  無料相談はこちら
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full border-white/50 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-56"
              >
                <Link href="#works">
                  実績を見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Rotating 3D photo ring */}
          <motion.div
            style={{ y: photosY }}
            className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[560px]"
          >
            <div className="scale-[0.66] sm:scale-[0.82] lg:scale-100 h-full w-full">
              <PhotoRing />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: copyOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center items-start p-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

const ringPhotos = [
  "/hero/team-meeting.png",
  "/hero/designer.png",
  "/hero/office.png",
  "/hero/laptop-work.png",
  "/hero/meeting-2.png",
  "/hero/handshake.png",
]

function PhotoRing() {
  const count = ringPhotos.length
  const radius = 300

  return (
    <div className="photo-ring-scene relative h-full w-full flex items-center justify-center">
      {/* Shared 3D space so the phone and photos depth-sort together */}
      <div className="ring-space relative">
        {/* Orbiting photo ring */}
        <div className="photo-ring">
          {ringPhotos.map((src, i) => {
            const angle = (360 / count) * i
            return (
              <div
                key={src}
                className="photo-ring-item"
                style={{ transform: `rotateY(${angle}deg) translateZ(${radius}px)` }}
              >
                <div
                  className="photo-ring-face overflow-hidden rounded-xl shadow-2xl shadow-blue-950/40 ring-1 ring-white/25"
                  style={{ width: 168, height: 224, marginLeft: -84, marginTop: -112 }}
                >
                  <img src={src || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Center tilted phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { duration: 0.9, delay: 0.2 },
            scale: { duration: 0.9, delay: 0.2 },
            y: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          style={{ rotateZ: -10, rotateY: -12, translateZ: 0 }}
          className="phone-center absolute top-1/2 left-1/2 -ml-[104px] -mt-[212px] w-[208px] h-[424px] rounded-[2.6rem] bg-slate-950 p-2.5 shadow-2xl shadow-blue-950/50 ring-1 ring-white/20"
        >
          {/* notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-6 rounded-b-2xl bg-slate-950 z-10" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-white/95 flex items-center justify-center shadow-lg">
              <span className="font-display text-3xl font-extrabold text-blue-700">W</span>
            </div>
            <span className="mt-5 font-display text-base font-medium text-white/90 tracking-wide">Web Design</span>
            <span className="text-xs text-white/60 tracking-widest">KAGOSHIMA</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
