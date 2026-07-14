"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroPhone() {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-linked parallax updates several transforms (including the heavy 3D
  // ring) on the main thread every scroll frame, which janks on mobile. Only
  // enable it on desktop; mobile keeps everything static during scroll.
  const [enableParallax, setEnableParallax] = useState(false)
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const desktopMq = window.matchMedia(
    "(min-width: 1024px) and (pointer: fine)",
  )
  const mobileMq = window.matchMedia("(max-width: 767px)")

  const update = () => {
    setEnableParallax(desktopMq.matches)
    setIsMobile(mobileMq.matches)
  }

  update()

  desktopMq.addEventListener("change", update)
  mobileMq.addEventListener("change", update)

  return () => {
    desktopMq.removeEventListener("change", update)
    mobileMq.removeEventListener("change", update)
  }
}, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  // Parallax layers (scroll only, desktop only)
  const copyY = useTransform(smooth, [0, 1], [0, 60])
  const copyOpacity = useTransform(smooth, [0, 0.7], [1, 0])
  const photosY = useTransform(smooth, [0, 1], [0, -80])
  const bgTextY = useTransform(smooth, [0, 1], [0, 120])

  return (
    <section
      ref={sectionRef}
      className="animate-hero-gradient relative min-h-screen overflow-hidden flex items-center pt-8 pb-8 lg:py-0"
    >
      {/* Soft light glows (static, no blend mode - blend compositing behind the
          rotating ring is a major cause of jank on mobile) */}
      <div className="absolute inset-0 z-0">
  <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-white/10 blur-2xl lg:-top-24 lg:-left-24 lg:h-[28rem] lg:w-[28rem] lg:bg-white/15 lg:blur-3xl" />

  <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-cyan-300/15 blur-2xl lg:-bottom-16 lg:-right-16 lg:h-[26rem] lg:w-[26rem] lg:bg-cyan-300/20 lg:blur-3xl" />
</div>

      {/* Oversized thin wordmark background */}
      <motion.div
        style={enableParallax ? { y: bgTextY } : undefined}
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
            style={enableParallax ? { y: copyY, opacity: copyOpacity } : undefined}
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
            style={enableParallax ? { y: photosY } : undefined}
            className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[560px]"
          >
            <div className="scale-[0.66] sm:scale-[0.82] lg:scale-100 h-full w-full">
            <PhotoRing isMobile={isMobile} />
          </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={enableParallax ? { opacity: copyOpacity } : undefined}
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
  "/hero/google.webp",
  "/hero/yahoo.webp",
  "/hero/instagram.webp",
  "/hero/facebook.webp",
  "/hero/tiktok.webp",
]

type PhotoRingProps = {
  isMobile: boolean
}

function PhotoRing({ isMobile }: PhotoRingProps) {
  const count = ringPhotos.length

  // SPでは奥行きと画像サイズを小さくしてGPU負荷を軽減
  const radius = isMobile ? 210 : 300
  const photoSize = isMobile ? 112 : 150

  const phoneWidth = isMobile ? 176 : 208
  const phoneHeight = isMobile ? 358 : 424

  return (
    <div className="photo-ring-scene relative flex h-full w-full items-center justify-center">
      <div className="ring-space relative">
        {/* Orbiting photo ring */}
        <div
          className="photo-ring"
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          {ringPhotos.map((src, i) => {
            const angle = (360 / count) * i

            return (
              <div
                key={src}
                className="photo-ring-item"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  willChange: "transform",
                }}
              >
                <div
                  className={`photo-ring-face overflow-hidden rounded-xl ${
                          isMobile
                            ? "shadow-md shadow-blue-950/20"
                            : "shadow-xl shadow-blue-950/30"
                        }`}
                  style={{
                    width: photoSize,
                    height: photoSize,
                    marginLeft: -(photoSize / 2),
                    marginTop: -(photoSize / 2),
                  }}
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt=""
                    width={photoSize}
                    height={photoSize}
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Center phone */}
        <div
          style={{
            width: phoneWidth,
            height: phoneHeight,
            marginLeft: -(phoneWidth / 2),
            marginTop: -(phoneHeight / 2),
            transform: isMobile
              ? "rotateZ(-7deg) rotateY(-8deg) translateZ(0)"
              : "rotateZ(-10deg) rotateY(-12deg) translateZ(0)",
            willChange: "transform",
          }}
          className="phone-center absolute left-1/2 top-1/2"
        >
          <div
            className={`phone-float h-full w-full rounded-[2.6rem] bg-slate-950 p-2.5 ring-1 ring-white/20 ${
              isMobile
                ? "shadow-lg shadow-blue-950/30"
                : "shadow-2xl shadow-blue-950/50"
            }`}
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            <div className="absolute left-1/2 top-2.5 z-10 h-6 w-20 -translate-x-1/2 rounded-b-2xl bg-slate-950" />

            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-600 to-blue-800">
              <div
                className={`flex items-center justify-center rounded-3xl bg-white/95 ${
                  isMobile
                    ? "h-16 w-16 shadow-md"
                    : "h-20 w-20 shadow-lg"
                }`}
              >
                <span
                  className={`font-display font-extrabold text-blue-700 ${
                    isMobile ? "text-2xl" : "text-3xl"
                  }`}
                >
                  W
                </span>
              </div>

              <span
                className={`font-display font-medium tracking-wide text-white/90 ${
                  isMobile ? "mt-4 text-sm" : "mt-5 text-base"
                }`}
              >
                Web Design
              </span>

              <span className="text-xs tracking-widest text-white/60">
                KAGOSHIMA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}