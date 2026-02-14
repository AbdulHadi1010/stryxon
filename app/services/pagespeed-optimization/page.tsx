import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Footer from "@/components/ui/footer";
import ServiceSchema from "@/components/seo/ServiceSchema";

const LighthouseScoreMockup = dynamic(
  () => import("@/components/lighthouse-mockup"),
  {
    loading: () => (
      <div className="min-h-[400px] flex items-center justify-center border border-zinc-800 rounded">
        <div className="text-zinc-400 text-sm">
          Loading performance metrics...
        </div>
      </div>
    ),
    ssr: false,
  },
);
import {
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileCode,
  Image as ImageIcon,
  Database,
  Server,
  Gauge,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Guaranteed 90+ PageSpeed Scores for Next.js | Core Web Vitals Optimization | Stryxon",
  description:
    "Professional Next.js performance optimization service. Fix layout shifts, improve mobile performance, optimize Core Web Vitals (LCP, FID, CLS), and achieve 90+ PageSpeed scores. Done-for-you optimization with measurable results.",
  keywords: [
    "PageSpeed optimization",
    "Next.js performance optimization",
    "Core Web Vitals optimization",
    "LCP optimization",
    "FID improvement",
    "CLS fix",
    "mobile performance optimization",
    "website speed optimization",
    "Lighthouse score improvement",
    "Next.js speed optimization",
    "SSR optimization",
    "server-side rendering performance",
    "image optimization service",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/services/pagespeed-optimization",
  },
  openGraph: {
    title: "Guaranteed 90+ PageSpeed Scores for Next.js | Stryxon",
    description:
      "From 65 to 98 PageSpeed score in 2 weeks. Professional Core Web Vitals optimization, mobile performance fixes, and server-side rendering improvements.",
    url: "https://www.stryxon.com/services/pagespeed-optimization",
    images: ["/images/pagespeed-optimization-og.png"],
  },
};

export default function PageSpeedOptimizationPage() {
  return (
    <>
      <ServiceSchema
        name="Next.js PageSpeed & Core Web Vitals Optimization Service"
        description="Professional Next.js performance optimization with guaranteed 90+ PageSpeed scores. Fix LCP, FID, CLS issues and improve mobile performance in 2 weeks. Money-back guarantee on deliverables."
        price="8000"
        priceValidUntil="2026-12-31"
        ratingValue="4.9"
        reviewCount="34"
        serviceType="Web Performance Optimization"
        url="https://www.stryxon.com/services/pagespeed-optimization"
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="grid lg:grid-cols-2">
              {/* Left: Headlines */}
              <div className="p-16 lg:p-24 border-r border-b border-zinc-800 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="font-mono text-xs uppercase text-zinc-400 tracking-widest">
                    Performance Engineering
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8">
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                    GUARANTEED
                  </span>
                  <br />
                  <span className="text-white">90+ PAGESPEED</span>
                  <br />
                  <span className="text-white">SCORES</span>
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed mb-12 max-w-lg">
                  Fix layout shifts, eliminate mobile performance issues,
                  optimize Core Web Vitals (LCP, FID, CLS). From 65 to 98 in 2-3
                  weeks. Guaranteed results or full refund.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/#contact?source=pagespeed-hero"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-medium uppercase tracking-widest hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/50"
                  >
                    Request Free Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Lighthouse Mockup */}
              <div className="p-16 lg:p-24 bg-zinc-950 border-r border-b border-zinc-800 flex items-center justify-center">
                <LighthouseScoreMockup variant="desktop" />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Bar */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Average Improvement", value: "65→98" },
                { label: "Delivery Time", value: "2-3 Weeks" },
                { label: "Success Rate", value: "100%" },
                { label: "Refund Guarantee", value: "Full" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="p-12 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-green-900/20 hover:to-emerald-900/20 transition-all group"
                >
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4 group-hover:text-emerald-400 transition-colors">
                    {metric.label}
                  </div>
                  <div className="text-4xl font-medium tracking-tighter bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <p className="text-lg text-zinc-400 leading-relaxed max-w-5xl">
                Your slow website is hemorrhaging conversions. Every 100ms delay
                costs 1% in sales. We fix mobile performance, eliminate layout
                shifts, and optimize server-side rendering to achieve 90+
                PageSpeed scores. Measurable results in 2-3 weeks, guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* Process Timeline - Shuffled to top */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Optimization Process
                </span>
              </h2>
            </div>

            <div>
              {[
                {
                  phase: "Week 1",
                  title: "Performance Audit & Baseline",
                  description:
                    "Run Lighthouse audits on mobile + desktop. Identify bottlenecks: unoptimized images, render-blocking scripts, layout shifts, slow server responses. Document current Core Web Vitals (LCP, FID, CLS). Deliverable: 20-page audit report with before screenshots and optimization roadmap.",
                },
                {
                  phase: "Week 2",
                  title: "Implementation & Testing",
                  description:
                    "Execute optimizations: next/image conversion, bundle splitting, CDN setup, font subsetting, lazy loading, SSR caching. Fix layout shifts with width/height attributes. Deploy to staging. Deliverable: Staging environment showing 90+ PageSpeed score with side-by-side comparison.",
                },
                {
                  phase: "Week 3",
                  title: "Production Deploy & Monitoring",
                  description:
                    "Deploy to production after QA sign-off. Monitor Core Web Vitals for 7 days with Real User Monitoring (RUM). Provide performance checklist for your team. Deliverable: Production at 90+ score, monitoring dashboard access, maintenance documentation.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 border-r border-b border-zinc-800 hover:bg-gradient-to-r hover:from-green-900/10 hover:to-transparent transition-all group"
                >
                  <div className="lg:col-span-2 p-12 lg:border-r border-zinc-800">
                    <div className="text-6xl font-medium tracking-tighter bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-transparent bg-clip-text group-hover:from-green-500/40 group-hover:to-emerald-500/40 transition-all">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="lg:col-span-10 p-12">
                    <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                      {step.phase}
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities - Shuffled before Before/After */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  What We Optimize
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  icon: Server,
                  title: "Server-Side Rendering",
                  description:
                    "Optimize Next.js SSR/SSG/ISR strategies. Implement Redis caching, edge caching with Vercel/CloudFlare. Reduce Time to First Byte (TTFB) by 60-80%. Dynamic content? We cache smartly.",
                },
                {
                  icon: ImageIcon,
                  title: "Image Optimization",
                  description:
                    "Convert all images to next/image with WebP/AVIF formats, lazy loading, blur placeholders. Eliminate Cumulative Layout Shift (CLS) with explicit dimensions. Typical savings: 70% file size reduction.",
                },
                {
                  icon: FileCode,
                  title: "Bundle Size Reduction",
                  description:
                    "Code-splitting with dynamic imports, tree-shaking, remove unused dependencies. Defer non-critical JavaScript. Lazy load components. Reduce bundle from 800KB to 200KB typical.",
                },
                {
                  icon: Database,
                  title: "Font & CSS Optimization",
                  description:
                    "Self-host Google Fonts, subset characters, preload critical fonts. Inline critical CSS, defer non-critical styles. Eliminate render-blocking resources. Font swap strategy to prevent FOIT.",
                },
                {
                  icon: Zap,
                  title: "Third-Party Scripts",
                  description:
                    "Defer analytics (Google Analytics, Facebook Pixel), lazy load chat widgets, optimize consent managers. Use Partytown for heavy scripts. Reduce main thread blocking by 90%.",
                },
                {
                  icon: Gauge,
                  title: "Core Web Vitals Tuning",
                  description:
                    "Fix Largest Contentful Paint (LCP < 2.5s), First Input Delay (FID < 100ms), Cumulative Layout Shift (CLS < 0.1). Monitor with Real User Monitoring. Achieve 'Good' across all metrics.",
                },
              ].map((capability, index) => {
                const Icon = capability.icon;
                const isRightMost = (index + 1) % 3 === 0;
                const isBottomRow = index >= 3;

                return (
                  <div
                    key={index}
                    className={`p-12 hover:bg-gradient-to-br hover:from-green-900/20 hover:to-emerald-900/20 transition-all cursor-default group ${
                      !isRightMost ? "border-r border-zinc-800" : ""
                    } ${!isBottomRow ? "border-b border-zinc-800" : "border-b border-zinc-800"}`}
                  >
                    <Icon
                      className="w-6 h-6 text-emerald-400 mb-8 group-hover:text-green-400 transition-colors"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-mono text-xs uppercase text-white tracking-widest mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before & After Section - Shuffled after Features */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase text-center">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Real Results: Before & After
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="p-16 lg:p-24 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-red-900/10 hover:to-transparent transition-all">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 border-2 border-red-500/30 mb-6">
                    <span className="text-4xl font-medium tracking-tighter text-red-400">
                      65
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-red-400 mb-2 uppercase">
                    Before
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Typical unoptimized Next.js site
                  </p>
                </div>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xs">✗</span>
                    <span className="text-sm">
                      <strong className="text-white">LCP: 6.8s</strong> - Slow
                      first paint, users wait
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xs">✗</span>
                    <span className="text-sm">
                      <strong className="text-white">FID: 340ms</strong> - Janky
                      interactions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xs">✗</span>
                    <span className="text-sm">
                      <strong className="text-white">CLS: 0.42</strong> - Layout
                      shifts frustrate users
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xs">✗</span>
                    <span className="text-sm">
                      <strong className="text-white">Mobile: 42</strong> -
                      Google penalizes in search
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1 text-xs">✗</span>
                    <span className="text-sm">
                      <strong className="text-white">
                        12% bounce increase
                      </strong>{" "}
                      - Losing conversions
                    </span>
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="p-16 lg:p-24 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-green-900/10 hover:to-transparent transition-all">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 border-2 border-green-500/30 mb-6">
                    <span className="text-4xl font-medium tracking-tighter text-green-400">
                      98
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-green-400 mb-2 uppercase">
                    After
                  </h3>
                  <p className="text-sm text-zinc-400">
                    After Stryxon optimization (2-3 weeks)
                  </p>
                </div>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0 w-4 h-4" />
                    <span className="text-sm">
                      <strong className="text-white">LCP: 1.4s</strong> - 79%
                      faster, instant perceived load
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0 w-4 h-4" />
                    <span className="text-sm">
                      <strong className="text-white">FID: 45ms</strong> -
                      Buttery smooth interactions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0 w-4 h-4" />
                    <span className="text-sm">
                      <strong className="text-white">CLS: 0.02</strong> -
                      Rock-solid layout stability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0 w-4 h-4" />
                    <span className="text-sm">
                      <strong className="text-white">Mobile: 96</strong> - SEO
                      boost, higher rankings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0 w-4 h-4" />
                    <span className="text-sm">
                      <strong className="text-white">
                        18% conversion lift
                      </strong>{" "}
                      - More revenue
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Investment
                </span>
              </h2>
            </div>

            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="border border-zinc-800 p-16">
                <div className="pb-12 border-b border-zinc-800 mb-12">
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                    PageSpeed Optimization Service
                  </div>
                  <div className="text-6xl font-medium tracking-tighter bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text mb-4">
                    $8,000
                  </div>
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest">
                    One-time · 2-3 week delivery
                  </div>
                </div>

                <div className="grid md:grid-cols-2 pb-12 border-b border-zinc-800 mb-12">
                  {[
                    "Comprehensive performance audit (mobile + desktop)",
                    "Image optimization with next/image conversion",
                    "Bundle size reduction & code-splitting",
                    "Server-side rendering & caching optimization",
                    "Core Web Vitals tuning (LCP, FID, CLS)",
                    "Third-party script optimization",
                    "Font & CSS performance improvements",
                    "Real User Monitoring setup & documentation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start py-3">
                      <div className="w-1 h-1 bg-emerald-400 mt-2 mr-4 shrink-0" />
                      <span className="text-sm text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href="/#contact?source=pagespeed-pricing"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-medium uppercase tracking-widest hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/50"
                  >
                    Request Free Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Performance Guarantee
                </span>
              </h2>
            </div>

            <div className="border-r border-b border-zinc-800">
              {[
                "90+ mobile PageSpeed score guaranteed. If we don't hit it, full refund—no questions asked.",
                "Core Web Vitals in 'Good' range: LCP < 2.5s, FID < 100ms, CLS < 0.1 (measured with Real User Monitoring).",
                "Zero feature breakage. All existing functionality remains intact. QA on staging before production deploy.",
                "Performance lasts. Optimizations remain effective unless you add new unoptimized code. Maintenance guide provided.",
                "7-day post-launch monitoring. Real User Monitoring setup with alerts. Fix any regressions within 48 hours.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-12 flex items-start hover:bg-gradient-to-r hover:from-green-900/10 hover:to-transparent transition-all group"
                >
                  <div className="w-6 h-6 border border-emerald-500/50 flex items-center justify-center shrink-0 mr-6 mt-1 group-hover:border-emerald-400 transition-colors">
                    <div className="w-2 h-2 bg-emerald-400" />
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Common Questions
                </span>
              </h2>
            </div>

            <div>
              {[
                {
                  q: "What if my app isn't built with Next.js?",
                  a: "We specialize in Next.js but also optimize React (Vite/CRA), Nuxt, and static sites. Techniques vary by framework but principles remain: reduce bundle size, optimize images, cache aggressively.",
                },
                {
                  q: "How long do results take to show in Google?",
                  a: "Core Web Vitals affect rankings after 28 days of data collection in Google Search Console. You'll see speed improvements immediately, SEO boost within 1-2 months.",
                },
                {
                  q: "Will optimizations break existing features?",
                  a: "No. We test on staging and run full QA before deploying. All features remain functional. Rollback scripts provided just in case.",
                },
                {
                  q: "Can you guarantee exact score like 98?",
                  a: "We guarantee 90+ mobile score. Exact score depends on content (heavy video sites have natural limits). We always maximize within constraints.",
                },
                {
                  q: "What if my site uses lots of third-party scripts?",
                  a: "We optimize script loading (defer, async, lazy load). If a script is fundamentally slow (old analytics SDK), we recommend modern alternatives like Plausible or Fathom.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-16 lg:p-24 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-green-900/10 hover:to-emerald-900/10 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white tracking-wide mb-6">
                    {faq.q}
                  </h3>
                  <p className="text-base text-zinc-400 leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="border border-zinc-800 p-16 bg-gradient-to-br from-green-900/10 to-emerald-900/10">
                <div className="pb-12 border-b border-zinc-800 mb-12 text-center">
                  <h2 className="text-4xl font-medium tracking-tighter uppercase mb-6">
                    <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                      Stop Losing Conversions
                    </span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Every second your site lags costs you money. Get a 90+
                    PageSpeed score in 3 weeks and watch conversion rates climb.
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    href="/#contact?source=pagespeed-final-cta"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-medium uppercase tracking-widest hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/50"
                  >
                    Request Free Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <p className="font-mono text-xs uppercase text-zinc-400 tracking-widest mt-6">
                    No obligation · Audit results in 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
