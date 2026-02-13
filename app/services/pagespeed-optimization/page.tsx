import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.stryxon.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.stryxon.com/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "PageSpeed Optimization",
            item: "https://www.stryxon.com/services/pagespeed-optimization",
          },
        ],
      },
      {
        "@type": "Service",
        name: "PageSpeed & Core Web Vitals Optimization",
        description:
          "Professional Next.js performance optimization service. Guaranteed 90+ PageSpeed scores with Core Web Vitals improvements for better SEO and conversions.",
        provider: {
          "@type": "Organization",
          name: "Stryxon Technologies",
          url: "https://www.stryxon.com",
        },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          priceRange: "$$$",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
              <Zap className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Guaranteed 90+ Core Web Vitals for Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your slow website is costing you conversions. We fix mobile
              performance, eliminate layout shifts, and optimize server-side
              rendering to achieve 90+ PageSpeed scores in 2-3 weeks.
            </p>
          </div>

          {/* Before & After Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
              Real Results: Before & After
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-red-900/20 border-2 border-red-500/30 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/20 mb-4">
                    <span className="text-4xl font-bold text-red-400">65</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400 mb-2">
                    BEFORE
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Typical Next.js site without optimization
                  </p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>LCP: 6.8s</strong> - Slow first paint, users wait
                      too long
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>FID: 340ms</strong> - Janky interactions, poor UX
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>CLS: 0.42</strong> - Layout shifts frustrate users
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>Mobile Score: 42</strong> - Google penalizes in
                      search
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>12% bounce rate increase</strong> - Losing
                      conversions
                    </span>
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="bg-green-900/20 border-2 border-green-500/30 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 mb-4">
                    <span className="text-4xl font-bold text-green-400">
                      98
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    AFTER
                  </h3>
                  <p className="text-gray-400 text-sm">
                    After Stryxon optimization (2 weeks)
                  </p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>LCP: 1.4s</strong> - 79% faster, instant perceived
                      load
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>FID: 28ms</strong> - 92% faster, buttery smooth
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>CLS: 0.02</strong> - 95% improvement, stable
                      layouts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Mobile Score: 96</strong> - Top Google search
                      results
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>18% conversion increase</strong> - Speed equals
                      revenue
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-400 text-lg">
                <strong className="text-green-400">+133% improvement</strong> in
                overall performance ·{" "}
                <strong className="text-green-400">2.3x ROI</strong> from
                conversion increase
              </p>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="mb-16 bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
              Why PageSpeed Scores Matter
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  SEO Rankings
                </h3>
                <p className="text-gray-400 text-sm">
                  Google uses Core Web Vitals as a ranking factor. Slow sites
                  rank lower, lose traffic.
                </p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Conversion Rates
                </h3>
                <p className="text-gray-400 text-sm">
                  Every 100ms delay costs 1% in conversions. Fast sites make
                  more money.
                </p>
              </div>
              <div className="text-center">
                <Gauge className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  User Experience
                </h3>
                <p className="text-gray-400 text-sm">
                  53% of mobile users abandon sites taking &gt;3s to load. Speed
                  is UX.
                </p>
              </div>
            </div>
          </section>

          {/* What We Fix */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
              What We Optimize
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <ImageIcon className="w-6 h-6" />,
                  title: "Image Optimization",
                  description:
                    "Convert to WebP/AVIF, lazy loading, responsive images, blur placeholders, CDN delivery. Reduce image weight by 60-80%.",
                  impact: "40% faster LCP",
                },
                {
                  icon: <FileCode className="w-6 h-6" />,
                  title: "JavaScript Bundle Size",
                  description:
                    "Code splitting, tree shaking, dynamic imports, remove unused dependencies. Cut JS payload by 50%.",
                  impact: "35% faster FID",
                },
                {
                  icon: <Server className="w-6 h-6" />,
                  title: "Server-Side Rendering",
                  description:
                    "Optimize getServerSideProps, implement ISR, Redis caching, database query optimization, API route performance.",
                  impact: "60% faster TTFB",
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Layout Shift Fixes",
                  description:
                    "Reserve space for images/ads, font loading strategy, skeleton screens, CSS containment. Eliminate visual jumps.",
                  impact: "90% CLS reduction",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Critical Rendering Path",
                  description:
                    "Inline critical CSS, defer non-critical JS, preload fonts, preconnect to CDNs, resource hints.",
                  impact: "50% faster FCP",
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Third-Party Scripts",
                  description:
                    "Lazy load analytics, defer social widgets, optimize Google Tag Manager, reduce external requests by 70%.",
                  impact: "25% overall boost",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-green-400">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  <div className="inline-block bg-green-900/20 border border-green-500/30 rounded-full px-3 py-1">
                    <span className="text-green-400 text-sm font-semibold">
                      {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
              Our 3-Week Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  week: "Week 1",
                  title: "Audit & Baseline",
                  tasks: [
                    "Run full Lighthouse audit across 10+ pages",
                    "Identify bottlenecks with Chrome DevTools",
                    "Analyze bundle size and network waterfall",
                    "Create prioritized optimization roadmap",
                  ],
                  deliverable: "30-page performance audit report",
                },
                {
                  week: "Week 2",
                  title: "Implementation",
                  tasks: [
                    "Implement all image/video optimizations",
                    "Refactor components for code splitting",
                    "Add Redis/CDN caching layers",
                    "Fix all CLS issues with reserved space",
                  ],
                  deliverable: "GitHub PR with optimized codebase",
                },
                {
                  week: "Week 3",
                  title: "Testing & Validation",
                  tasks: [
                    "Run Lighthouse tests on mobile/desktop",
                    "Load testing with 1000+ concurrent users",
                    "Verify Core Web Vitals in production",
                    "Final tuning to hit 90+ score",
                  ],
                  deliverable: "Before/after metrics + monitoring setup",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-green-500/20 rounded-xl p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-green-400 bg-green-900/20 px-3 py-1 rounded-full">
                          {item.week}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="text-gray-400 flex gap-2">
                            <ArrowRight className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-green-900/10 border border-green-500/20 rounded-lg p-3">
                        <p className="text-sm text-green-400 font-semibold">
                          Deliverable: {item.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Guarantee */}
          <section className="mb-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-2 border-green-500/30 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-400">
              Our Performance Guarantee
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              We guarantee a minimum 90+ PageSpeed score on mobile. If we don't
              hit it, we keep working until we do — at no extra cost.
            </p>
            <ul className="text-left text-gray-300 space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong>90+ Mobile Score</strong> or money back (measured on
                  real devices, not simulators)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong>All Core Web Vitals pass</strong> Google's thresholds
                  (LCP &lt;2.5s, FID &lt;100ms, CLS &lt;0.1)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong>Zero regressions</strong> - We test on staging before
                  production. No broken features.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span>
                  <strong>30-day monitoring</strong> - We watch metrics
                  post-launch and fix any issues for free.
                </span>
              </li>
            </ul>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
              Simple Pricing
            </h2>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-500 rounded-2xl p-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                PageSpeed Optimization Package
              </h3>
              <p className="text-6xl font-bold text-green-400 mb-2">$2,499</p>
              <p className="text-gray-400 mb-8">
                One-time payment · 3-week delivery
              </p>
              <ul className="text-left text-gray-300 space-y-3 mb-8">
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Full performance audit (30+ page report)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>
                    All optimization implementations (images, code, SSR)
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Guaranteed 90+ mobile PageSpeed score</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Before/after metrics with ROI analysis</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>30 days post-launch monitoring & fixes</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <span>Performance monitoring dashboard setup</span>
                </li>
              </ul>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-green-500/50 text-lg"
              >
                Get 90+ PageSpeed Score
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                3-week delivery · 90+ score guarantee · Money-back if we fail
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Do you only work with Next.js?",
                  answer:
                    "We specialize in Next.js but also optimize React, Remix, and Gatsby. For WordPress/PHP, we recommend migration to Next.js for best results.",
                },
                {
                  question: "Will optimizations break existing features?",
                  answer:
                    "No. We test on staging environments and run full QA before deploying. All features remain functional. We provide rollback scripts just in case.",
                },
                {
                  question:
                    "What if my site uses a lot of third-party scripts?",
                  answer:
                    "We optimize script loading (defer, async, lazy load). If a script is fundamentally slow (e.g., old analytics SDK), we'll recommend modern alternatives.",
                },
                {
                  question: "Can you guarantee exact numbers like 98 score?",
                  answer:
                    "We guarantee 90+ mobile score. Exact score depends on your content (e.g., heavy video sites have natural limits). We always maximize within constraints.",
                },
                {
                  question: "How long do optimizations last?",
                  answer:
                    "Permanent, unless you add new unoptimized code. We provide a performance checklist so your team maintains scores going forward.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Stop Losing Conversions to Slow Load Times
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Every second your site lags costs you money. Get a 90+ PageSpeed
              score in 3 weeks and watch your conversion rates climb.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-green-500/50"
            >
              Request Free Performance Audit
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No obligation · Get audit results in 48 hours · See before/after
              projections
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
