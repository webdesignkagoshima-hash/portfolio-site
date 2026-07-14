"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const categories = ["Web制作", "集客支援", "採用支援", "その他"]

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [category, setCategory] = useState<string>("Web制作")

  const inputClass =
    "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/20"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const form = e.currentTarget
  const formData = new FormData(form)

  setIsSubmitting(true)

  try {
    const response = await fetch("https://formspree.io/f/xkodgoba", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("送信失敗")
    }

toast({
  title: "お問い合わせを送信しました",
  description:
    "お問い合わせありがとうございます。内容を確認のうえ、3営業日以内に担当者よりご連絡いたします。",
})

    form.reset()
    setCategory("Web制作")
  } catch (error) {
    toast({
      title: "送信できませんでした",
      description: "時間をおいて再度お試しください。",
      variant: "destructive",
    })
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-slate-700">
              会社名
            </Label>
            <Input id="company" name="company" placeholder="株式会社サンプル" className={inputClass} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700">
              お名前 <span className="text-blue-600">*</span>
            </Label>
            <Input id="name" name="name" placeholder="山田 太郎" required className={inputClass} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700">
              メールアドレス <span className="text-blue-600">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>

          <div className="space-y-2">
            <span className="block text-sm text-slate-700">ご相談カテゴリ</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    category === c
                      ? "bg-gradient-to-r from-blue-600 to-sky-400 text-white border-transparent"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <input type="hidden" name="category" value={category} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-700">
              ご相談内容 <span className="text-blue-600">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="現状の課題やご相談したい内容をご記入ください。整理できていない段階でも構いません。"
              required
              className={inputClass}
            />
          </div>

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              size="lg"
              className="btn-shine rounded-full bg-amber-400 text-slate-900 hover:bg-amber-300 border-0 font-bold px-10"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>送信中...</>
              ) : (
                <>
                  無料相談を送信する <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
