"use client"

import Link from "next/link"
import { Monitor, TrendingUp, Users, Layers, Target, Zap } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { HeroPhone } from "@/components/hero-phone"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { WorkCard } from "@/components/work-card"
import { CountUp } from "@/components/count-up"
import { Reveal } from "@/components/reveal"

const strengths = [
  {
    icon: Layers,
    title: "制作から運用改善まで一貫対応",
    desc: "WebサイトやLPの制作だけでなく、広告運用や導線改善まで含めて支援可能です。",
  },
  {
    icon: Target,
    title: "マーケティング視点を踏まえた設計",
    desc: "デザイン性だけでなく、問い合わせ・購入・応募といった成果地点から逆算して設計します。",
  },
  {
    icon: Zap,
    title: "少人数チームによる柔軟かつスピーディーな対応",
    desc: "マーケター・デザイナー・エンジニアが連携し、必要な施策をスピーディーに実行します。",
  },
]

const numbers = [
  { label: "月間広告費運用実績", value: 1000, suffix: "万円", unit: "以上" },
  { label: "支援実績数（制作・改善案件）", value: 100, suffix: "件", unit: "以上" },
  { label: "継続率（並走パートナー）", value: 90, suffix: "%", unit: "超" },
]

const services = [
  {
    icon: Monitor,
    title: "Web制作",
    description:
      "企業サイト・サービスサイト・LP・ECサイトなど、目的に応じたWeb制作に対応。見た目だけでなく、問い合わせや購入、応募などの成果地点から逆算して設計します。",
    items: [
      "コーポレートサイト制作",
      "サービスサイト / LP制作",
      "ECサイト制作",
      "バナー / クリエイティブ制作",
      "保守 / 更新対応",
    ],
  },
  {
    icon: TrendingUp,
    title: "集客支援",
    description:
      "広告運用やSEO、導線改善を通じて、公開後の集客・改善まで支援。LPやクリエイティブ制作も含めて一貫して対応できるのが強みです。",
    items: [
      "広告運用（Google・Yahoo・Meta・TikTok等）",
      "SEO / AIO対策",
      "CV改善（LPO / 導線改善）",
      "アクセス解析 / 改善提案",
      "クリエイティブ改善",
    ],
  },
  {
    icon: Users,
    title: "採用支援",
    description:
      "地方企業向け採用支援サービス「カゴネクスト」を軸に、SNS採用、採用LP制作、応募導線設計など、採用課題に合わせた支援を行います。",
    items: [
      "地方特化型採用支援「カゴネクスト」",
      "SNS採用運用支援",
      "採用LP制作",
      "求人広告 / 応募導線設計",
      "応募率改善 / 採用クリエイティブ制作",
    ],
  },
]

const works = [
  {
    category: "Web制作",
    title: "キャンプ予約導線を意識したレジャーパークサイトのリニューアル",
    description: "古くなったサイト構成を見直し、予約導線を意識した情報設計・デザインへ刷新。",
    role: "構成 / デザイン / 実装",
    image: "/works/leisure-park.png",
  },
  {
    category: "採用支援 / LP制作",
    title: "採用支援サービスのLP・クリエイティブ制作",
    description: "採用課題の整理から、訴求設計・LP制作・クリエイティブ改善まで一貫して対応。",
    role: "構成 / デザイン / 実装 / クリエイティブ制作",
    image: "/works/recruit-lp.png",
  },
  {
    category: "EC / SEO / 導線改善",
    title: "ECサイトのSEO・導線改善支援",
    description: "カテゴリ設計や商品導線、コンテンツ改善を通じて、検索流入と回遊性の改善を実施。",
    role: "SEO設計 / 導線改善 / コンテンツ設計",
    image: "/works/ec-seo.png",
  },
  {
    category: "コーポレートサイト制作",
    title: "コーポレートサイトの新規制作・運用設計",
    description: "企業情報の整理からサイト設計・実装まで対応し、公開後の更新しやすさも考慮して構築。",
    role: "構成 / デザイン / WordPress実装",
    image: "/works/corporate.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-hidden">
      <SmoothScroll />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero */}
      <HeroPhone />

      {/* About */}
      <section id="about" className="py-28 md:py-36 relative bg-white">
        <div className="container relative z-10">
          <SectionHeading
            title="About"
            subtitle="Web制作を軸に、集客支援・採用支援まで対応するクリエイティブチームです。マーケター・デザイナー・エンジニアが連携し、企画・制作・運用・改善まで一貫して支援しています。"
          />

          {/* Representative profile + message */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mt-20">
            <div className="relative">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10">
                <img
                  src="/about/team.png"
                  alt="ウェブデザイン鹿児島のチーム"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
                <span className="text-xs font-medium tracking-[0.2em] text-blue-600">PROFILE</span>
                <h3 className="font-display mt-2 text-2xl font-semibold text-slate-900">代表 ○○</h3>
                <p className="mt-4 text-sm text-slate-600 leading-loose">
                  鹿児島県を拠点に活動するデザイナー / クリエイティブディレクター。広告代理店とデジタルマーケティング会社にて約8年間、Webデザインや広告クリエイティブ制作に従事し、2019年に「ウェブデザイン鹿児島」を開業。現在は地元企業をはじめ、全国の企業に向けてWeb制作、クリエイティブ制作、広告運用、採用支援まで幅広く支援しています。
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
                <span className="text-xs font-medium tracking-[0.2em] text-blue-600">MESSAGE</span>
                <p className="mt-4 text-sm text-slate-600 leading-loose">
                  Webサイトや広告、SNS運用は、それぞれを単体で考えるのではなく、事業全体の課題や目的に合わせて設計することが大切だと考えています。私たちは、見た目を整えるだけの制作ではなく、その先の集客・採用・売上につながる仕組みづくりまで見据えた支援を行っています。
                </p>
                <p className="mt-4 text-sm text-slate-600 leading-loose">
                  課題の段階から一緒に整理し、必要な施策をチームで一貫してご提案できるのが私たちの強みです。地域企業のパートナーとして、そして全国の企業のデジタル支援役として、成果につながる伴走をしていきます。
                </p>
              </div>
            </div>
          </Reveal>

          {/* Strength */}
          <Reveal className="mt-24">
            <h3 className="font-display text-center text-2xl font-semibold text-slate-900 tracking-wide">選ばれる理由</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {strengths.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 0.12}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8 text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-display mt-5 text-lg font-semibold text-slate-900 leading-snug text-balance">
                    {s.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-500 leading-loose">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Numbers */}
          <Reveal className="mt-24">
            <h3 className="font-display text-center text-2xl font-semibold text-slate-900 tracking-wide">
              数字で見る実績
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {numbers.map((n, i) => (
                <Reveal
                  key={n.label}
                  delay={i * 0.12}
                  className="rounded-2xl bg-gradient-to-b from-blue-50 to-white border border-slate-200 p-8 text-center"
                >
                  <div className="font-display flex items-end justify-center gap-1">
                    <CountUp
                      value={n.value}
                      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400"
                    />
                    <span className="text-2xl md:text-3xl font-bold text-blue-600 pb-0.5">{n.suffix}</span>
                    <span className="text-lg font-semibold text-blue-500 pb-1">{n.unit}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">{n.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-28 md:py-36 relative bg-slate-50">
        <div className="container relative z-10">
          <SectionHeading
            title="Service"
            subtitle="Web制作を中心に、集客支援・採用支援まで幅広く対応。必要な領域だけのご依頼はもちろん、企画から制作・運用までまとめてご相談いただくことも可能です。"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-28 md:py-36 relative bg-white">
        <div className="container relative z-10">
          <SectionHeading
            title="Works"
            subtitle="制作実績だけでなく、改善・運用を含めた支援事例も掲載しています。"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {works.map((w, i) => (
              <WorkCard key={w.title} {...w} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 md:py-36 relative bg-slate-50">
        <div className="container relative z-10">
          <SectionHeading title="Contact" subtitle="お気軽にご相談ください" />

          <div className="mx-auto max-w-2xl mt-16">
            <div className="space-y-4 text-center">
              <p className="text-base text-slate-600 leading-loose">
                Web制作、集客改善、採用支援に関するご相談を承っております。サイト制作のみのご相談はもちろん、広告や導線改善、採用支援まで含めたご相談も可能です。
              </p>
              <p className="text-base text-slate-600 leading-loose">
                ご相談ベースのお問い合わせも歓迎していますので、課題がまだ整理できていない段階でもお気軽にお問い合わせください。
              </p>
            </div>

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="font-display font-semibold text-xl">
              <span className="text-slate-900">ウェブデザイン</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">鹿児島</span>
            </Link>
            <p className="text-sm text-slate-400 mt-2">
              © {new Date().getFullYear()} ウェブデザイン鹿児島. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { name: "About", href: "#about" },
              { name: "Service", href: "#service" },
              { name: "Works", href: "#works" },
              { name: "Contact", href: "#contact" },
              { name: "プライバシーポリシー", href: "#" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
