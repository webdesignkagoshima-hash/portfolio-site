"use client"

import { useRef, type MutableRefObject } from "react"
import Link from "next/link"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, MeshDistortMaterial, ContactShadows } from "@react-three/drei"
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import type { Group } from "three"

import { Button } from "@/components/ui/button"

function FloatingShapes({ scroll }: { scroll: MutableRefObject<number> }) {
  const group = useRef<Group>(null)
  const inner = useRef<Group>(null)

  useFrame((state, delta) => {
    if (!group.current || !inner.current) return
    const p = scroll.current

    // Scroll drives a full rotation and a dive into the scene
    group.current.rotation.y += delta * 0.15
    group.current.rotation.y = group.current.rotation.y + p * Math.PI * 2 * delta
    inner.current.rotation.z = p * Math.PI
    group.current.position.z = p * 6
    group.current.position.y = p * 2

    // Gentle parallax toward the pointer
    const { x, y } = state.pointer
    group.current.rotation.x += (y * 0.2 - group.current.rotation.x) * 0.05
  })

  return (
    <group ref={group}>
      <group ref={inner}>
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[-2.2, 0.6, 0]} castShadow>
            <icosahedronGeometry args={[1.1, 1]} />
            <MeshDistortMaterial color="#a855f7" speed={2} distort={0.35} roughness={0.1} metalness={0.4} />
          </mesh>
        </Float>

        <Float speed={1.4} rotationIntensity={2} floatIntensity={2.5}>
          <mesh position={[2.3, -0.4, -1]} castShadow>
            <torusGeometry args={[0.9, 0.35, 32, 64]} />
            <MeshDistortMaterial color="#ec4899" speed={3} distort={0.3} roughness={0.15} metalness={0.5} />
          </mesh>
        </Float>

        <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={[0.4, 1.6, -1.5]} castShadow>
            <dodecahedronGeometry args={[0.7, 0]} />
            <MeshDistortMaterial color="#f5d0fe" speed={2.5} distort={0.25} roughness={0.2} metalness={0.3} />
          </mesh>
        </Float>

        <Float speed={1.8} rotationIntensity={1.6} floatIntensity={2}>
          <mesh position={[-0.6, -1.5, 0.5]} castShadow>
            <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
            <MeshDistortMaterial color="#c084fc" speed={2} distort={0.4} roughness={0.1} metalness={0.6} />
          </mesh>
        </Float>
      </group>
    </group>
  )
}

function Scene({ scroll }: { scroll: MutableRefObject<number> }) {
  return (
    <Canvas shadows camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-5, -3, 2]} intensity={2} color="#ec4899" />
      <pointLight position={[5, 3, -2]} intensity={2} color="#a855f7" />

      <FloatingShapes scroll={scroll} />

      <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={14} blur={2.5} far={4} color="#000000" />
      <Environment preset="night" />
    </Canvas>
  )
}

export function Hero3D() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scroll = useRef(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Keep the latest scroll progress in a ref so useFrame can read it without re-renders
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scroll.current = v
  })

  // Fade out / lift the overlay copy as the user scrolls through the hero
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -120])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92])

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      {/* Sticky stage that stays pinned while the section scrolls */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Scene scroll={scroll} />
        </div>

        {/* Overlay copy */}
        <motion.div
          style={{ opacity, y, scale }}
          className="pointer-events-none relative z-10 flex h-full items-center"
        >
          <div className="container">
            <div className="max-w-2xl space-y-6">
              <div className="inline-block">
                <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="relative z-10">Software Engineer & Creative Developer</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                <span className="block">Hi, I&apos;m</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Shine Kyaw Kyaw Aung
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-[600px] text-pretty">
                I craft exceptional digital experiences with code, creativity, and a passion for innovation.
              </p>
              <div className="pointer-events-auto flex flex-wrap gap-4 pt-4">
                <Link href="#projects">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                    <span className="relative z-10 flex items-center">
                      View Projects{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-zinc-700 bg-transparent text-pink-400 hover:text-pink-600 hover:border-zinc-500"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="pointer-events-auto flex gap-4 pt-4">
                <Link href="https://github.com/shinekyaw" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:shinekyawkyawaung@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
