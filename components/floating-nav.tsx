"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
]

function Logo() {
  return (
    <Link href="/" className="font-display font-semibold text-base leading-tight">
      <span className="text-slate-900">ウェブデザイン</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">鹿児島</span>
    </Link>
  )
}

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false)
  }

  return (
    <>
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,64rem)] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <motion.div
          className="relative px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg shadow-slate-900/5"
          initial={{ y: -100 }}
          animate={{ y: isVisible ? 0 : -100 }}
          transition={{ duration: 0.3 }}
        >
          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="メニューを開閉"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center justify-between gap-4">
              <Logo />
              <div className="flex items-center gap-1 shrink-0">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  size="sm"
                  className="btn-shine group ml-2 rounded-full bg-amber-400 text-slate-900 hover:bg-amber-300 border-0 font-bold whitespace-nowrap shrink-0 px-5"
                >
                  <Link href="#contact">
                    無料相談はこちら
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-slate-800 hover:text-blue-600 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="btn-shine group mt-6 rounded-full bg-amber-400 text-slate-900 hover:bg-amber-300 border-0 font-bold shadow-lg shadow-amber-500/30"
            >
              <Link href="#contact" onClick={handleNavClick}>
                無料相談はこちら
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
