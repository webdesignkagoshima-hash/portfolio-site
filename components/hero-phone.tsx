"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroPhone() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  // Parallax layers (scroll)
  const copyY = useTransform(smooth, [0, 1], [0, 80])
  const copyOpacity = useTransform(smooth, [0, 0.7], [1, 0])
  const photosY = useTransform(smooth, [0, 1], [0, -120])
  const bgTextY = useTransform(smooth, [0, 1], [0, 160])

  // Mouse parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 60, damping: 18 })
  const smy = useSpring(my, { stiffness: 60, damping: 18 })
  const photosPX = useTransform(smx, [-0.5, 0.5], [24, -24])
  const photosPY = useTransform(smy, [-0.5, 0.5], [24, -24])
  const copyPX = useTransform(smx, [-0.5, 0.5], [-10, 10])

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="animate-hero-gradient relative min-h-screen overflow-hidden"
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
        className="pointer-events-none absolute inset-x-0 bottom-6 md:bottom-10 z-0 text-center select-none"
      >
        <span className="font-display block font-light tracking-display text-white/10 leading-none text-[22vw] md:text-[16vw]">
          DIGITAL
        </span>
      </motion.div>

      {/* Floating photo collage - desktop */}
      <motion.div
        style={{ y: photosY, x: photosPX, translateY: photosPY }}
        className="absolute inset-0 z-[1] hidden md:block"
      >
        <PhotoCollage />
      </motion.div>

      {/* Foreground copy */}
      <div className="container relative z-10 min-h-screen flex flex-col justify-center py-32">
        <motion.div style={{ y: copyY, opacity: copyOpacity, x: copyPX }} className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-medium text-white tracking-wide">鹿児島発・全国対応のデジタルパートナー</span>
          </motion.div>

          {/* Oversized thin English headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-light tracking-tight text-white leading-[1.02]"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/70">Creative</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Digital Partner.</span>
          </motion.h1>

          {/* Mobile photo collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex gap-3 md:hidden"
          >
            {mobilePhotos.map((src, i) => (
              <motion.div
                key={src}
                animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: i * 0.4 }}
                className="flex-1 overflow-hidden rounded-2xl shadow-xl shadow-blue-950/30 ring-1 ring-white/20"
              >
                <img src={src || "/placeholder.svg"} alt="" className="w-full aspect-[3/4] object-cover" />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl font-light text-white/90 tracking-wide"
          >
            Web、集客、採用の可能性を。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-sm md:text-base text-white/75 max-w-xl leading-loose"
          >
            Web制作・広告運用・SNS運用・採用支援まで。企業ごとの課題に合わせた最適な施策を設計し、成果につながる仕組みづくりを支援します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-white text-blue-700 hover:bg-white/90 border-0 px-8"
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
              className="rounded-full border-white/50 text-white hover:bg-white/10 hover:text-white bg-transparent px-8"
            >
              <Link href="#works">実績を見る</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div style={{ opacity: copyOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
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

const mobilePhotos = ["/hero/handshake.png", "/hero/team-meeting.png", "/hero/designer.png"]

function PhotoCollage() {
  const photos = [
    {
      src: "/hero/handshake.png",
      className: "top-[12%] right-[26%] w-44 lg:w-52 rotate-[-8deg]",
      delay: 0.2,
    },
    {
      src: "/hero/team-meeting.png",
      className: "top-[30%] right-[4%] w-52 lg:w-64 rotate-[6deg]",
      delay: 0.35,
    },
    {
      src: "/hero/designer.png",
      className: "bottom-[10%] right-[22%] w-48 lg:w-56 rotate-[-4deg]",
      delay: 0.5,
    },
  ]

  return (
    <div className="relative h-full w-full">
      {photos.map((p) => (
        <motion.div
          key={p.src}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: p.delay }}
          className={`absolute overflow-hidden rounded-2xl shadow-2xl shadow-blue-950/40 ring-1 ring-white/20 ${p.className}`}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: p.delay }}
          >
            <img src={p.src || "/placeholder.svg"} alt="" className="w-full aspect-[3/4] object-cover" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
