import type { Metadata } from "next"
import { Noto_Sans_JP, Poppins } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ウェブデザイン鹿児島 | Web制作・集客・採用支援のデジタルパートナー",
  description:
    "Web制作から集客・採用支援まで。鹿児島を拠点に、企業ごとの課題に合わせた最適な施策を設計し、成果につながる仕組みづくりを支援するクリエイティブチームです。",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`bg-white ${notoSansJP.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
