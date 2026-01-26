import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Clock, DollarSign, Zap, CheckCircle, XCircle, BarChart3, Server, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agency Migration Case Study: Legacy to Headless Next.js + AWS | Stryxon',
  description: 'Detailed case study of migrating a digital agency from slow Magento/WordPress infrastructure to modern Headless Next.js + AWS architecture. 95+ Lighthouse score, 40% cost reduction, 70% faster page loads.',
  keywords: [
    'agency migration case study',
    'wordpress to nextjs migration',
    'magento to headless commerce',
    'AWS infrastructure optimization',
    'website performance improvement',
    'lighthouse score optimization',
    'infrastructure cost reduction',
    'headless cms migration',
    'legacy system modernization',
    'agency infrastructure upgrade',
  ],
  alternates: {
    canonical: 'https://www.stryxon.com/case-studies/agency-migration',
  },
  openGraph: {
    title: 'Agency Migration Case Study: 95+ Score & 40% Cost Reduction',
    description: 'How we migrated a digital agency from legacy infrastructure to modern Headless Next.js + AWS architecture with dramatic performance and cost improvements.',
    url: 'https://www.stryxon.com/case-studies/agency-migration',
    type: 'article',
    images: [
      {
        url: '/images/case-study-og.png',
        width: 1200,
        height: 630,
        alt: 'Agency Migration Case Study Results',
      },
    ],
  },
}

export default function CaseStudyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Agency Migration Case Study: Legacy Infrastructure to Headless Next.js + AWS",
    "description": "Detailed technical case study documenting the migration of a digital agency from Magento/WordPress to modern Headless Next.js + AWS architecture",
    "author": {
      "@type": "Organization",
      "name": "Stryxon Technologies",
      "url": "https://www.stryxon.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Stryxon Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.stryxon.com/images/stryxon-logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "about": {
      "@type": "Thing",
      "name": "Web Infrastructure Migration"
    }
  };

  const beforeMetrics = [
    { label: "Lighthouse Performance", value: "42/100", icon: <BarChart3 className="w-5 h-5" />, status: "bad" },
    { label: "Largest Contentful Paint", value: "6.8s", icon: <Clock className="w-5 h-5" />, status: "bad" },
    { label: "Time to Interactive", value: "9.2s", icon: <Zap className="w-5 h-5" />, status: "bad" },
    { label: "Cumulative Layout Shift", value: "0.42", icon: <BarChart3 className="w-5 h-5" />, status: "bad" },
    { label: "First Input Delay", value: "340ms", icon: <Clock className="w-5 h-5" />, status: "bad" },
    { label: "Monthly Infrastructure Cost", value: "$2,847", icon: <DollarSign className="w-5 h-5" />, status: "bad" },
    { label: "Server Response Time", value: "1,240ms", icon: <Server className="w-5 h-5" />, status: "bad" },
    { label: "Deployment Time", value: "45 min", icon: <Clock className="w-5 h-5" />, status: "bad" },
  ];

  const afterMetrics = [
    { label: "Lighthouse Performance", value: "98/100", icon: <BarChart3 className="w-5 h-5" />, status: "good" },
    { label: "Largest Contentful Paint", value: "1.4s", icon: <Clock className="w-5 h-5" />, status: "good" },
    { label: "Time to Interactive", value: "2.1s", icon: <Zap className="w-5 h-5" />, status: "good" },
    { label: "Cumulative Layout Shift", value: "0.02", icon: <BarChart3 className="w-5 h-5" />, status: "good" },
    { label: "First Input Delay", value: "28ms", icon: <Clock className="w-5 h-5" />, status: "good" },
    { label: "Monthly Infrastructure Cost", value: "$1,680", icon: <DollarSign className="w-5 h-5" />, status: "good" },
    { label: "Server Response Time", value: "180ms", icon: <Server className="w-5 h-5" />, status: "good" },
    { label: "Deployment Time", value: "4 min", icon: <Clock className="w-5 h-5" />, status: "good" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-sm text-indigo-400 mb-6">
              Case Study
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Legacy to Modern: <br/>Agency Infrastructure Migration
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              How we migrated a digital agency from legacy Magento/WordPress infrastructure to 
              Headless Next.js + AWS architecture, achieving 95+ Lighthouse scores and 40% cost reduction.
            </p>
          </div>

          {/* Executive Summary */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">Executive Summary</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">95+</div>
                      <div className="text-sm text-gray-400">Lighthouse Score</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">From 42/100 to 98/100 performance score</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">41%</div>
                      <div className="text-sm text-gray-400">Cost Reduction</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">$2,847/mo to $1,680/mo infrastructure</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="text-3xl font-bold text-white">79%</div>
                      <div className="text-sm text-gray-400">Faster LCP</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">6.8s to 1.4s Largest Contentful Paint</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Background */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Client Background</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">The Challenge</h3>
                  <p className="text-gray-300 mb-4">
                    A mid-sized digital agency managing 25+ client websites was struggling with legacy infrastructure:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Magento 2.x e-commerce platform with severe performance issues</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>WordPress multisite for content, requiring constant security updates</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>Traditional VPS hosting with manual scaling and frequent downtime</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span>45-minute deployment process with frequent rollback requirements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Business Impact</h3>
                  <p className="text-gray-300 mb-4">
                    The legacy infrastructure was directly affecting business outcomes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-red-400 flex-shrink-0 mt-1">→</span>
                      <span>Lost 15-20% of e-commerce conversions due to slow page loads</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-red-400 flex-shrink-0 mt-1">→</span>
                      <span>Poor Google rankings from failing Core Web Vitals assessment</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-red-400 flex-shrink-0 mt-1">→</span>
                      <span>High infrastructure costs with unpredictable scaling expenses</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                      <span className="text-red-400 flex-shrink-0 mt-1">→</span>
                      <span>Development team spending 40% time on infrastructure maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Before State */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Before: Legacy Infrastructure State</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-6">Technical Architecture</h3>
              <div className="bg-red-900/10 border border-red-500/30 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-3">E-commerce Layer</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Magento 2.4 on dedicated VPS (8 CPU, 32GB RAM)</li>
                      <li>• MySQL 5.7 database with replication lag</li>
                      <li>• Redis cache frequently clearing under load</li>
                      <li>• Varnish cache with inconsistent invalidation</li>
                      <li>• Manual horizontal scaling during traffic spikes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-3">Content Layer</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• WordPress 6.x multisite (15 sites)</li>
                      <li>• Shared hosting with resource limitations</li>
                      <li>• Heavy plugin dependency (40+ plugins)</li>
                      <li>• Manual backups and security patching</li>
                      <li>• No CDN integration, serving from single region</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-6">Performance Metrics</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {beforeMetrics.map((metric) => (
                  <div key={metric.label} className="bg-red-900/10 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-red-400">{metric.icon}</div>
                      <span className="text-xs text-gray-500 uppercase">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-gray-300 mb-3">Key Problems Identified:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p className="mb-2"><strong className="text-red-400">Performance Issues:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• 6.8s LCP failing Google's 2.5s threshold</li>
                    <li>• 340ms FID exceeding acceptable 100ms</li>
                    <li>• Unoptimized images (3-5MB product photos)</li>
                    <li>• Render-blocking CSS and JavaScript</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2"><strong className="text-red-400">Infrastructure Issues:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Single point of failure with VPS architecture</li>
                    <li>• No auto-scaling for traffic spikes</li>
                    <li>• Manual security patching causing downtime</li>
                    <li>• Expensive dedicated server costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Migration Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Migration Strategy & Implementation</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">Architecture Design (Weeks 1-2)</h3>
                    <p className="text-gray-300 mb-3">Designed new Headless architecture leveraging AWS services:</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• <strong>Frontend:</strong> Next.js 14 with App Router, deployed to Vercel Edge Network</li>
                      <li>• <strong>Commerce:</strong> Migrated Magento to Shopify Headless (Storefront API + GraphQL)</li>
                      <li>• <strong>Content:</strong> WordPress headless mode with WPGraphQL API</li>
                      <li>• <strong>Infrastructure:</strong> AWS CloudFront CDN, S3 for assets, Lambda for serverless functions</li>
                      <li>• <strong>Database:</strong> AWS RDS PostgreSQL with automated backups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Data Migration (Weeks 3-5)</h3>
                    <p className="text-gray-300 mb-3">Migrated 7 years of content and commerce data:</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Exported 45,000+ products from Magento with full attributes and variants</li>
                      <li>• Migrated 12,000+ blog posts and pages from WordPress</li>
                      <li>• Preserved SEO metadata, redirects, and URL structures</li>
                      <li>• Imported customer data with GDPR-compliant handling</li>
                      <li>• Created automated sync scripts for ongoing content updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-green-400 mb-3">Frontend Development (Weeks 4-8)</h3>
                    <p className="text-gray-300 mb-3">Built modern Next.js frontend with performance optimization:</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Implemented Server-Side Rendering (SSR) for product pages</li>
                      <li>• Static Generation (SSG) for blog content with ISR revalidation</li>
                      <li>• Image optimization with Next.js Image component (WebP, lazy loading)</li>
                      <li>• Code splitting and dynamic imports for 70% bundle size reduction</li>
                      <li>• Implemented React Server Components for zero-JS page sections</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">Infrastructure Setup (Weeks 6-8)</h3>
                    <p className="text-gray-300 mb-3">Provisioned AWS infrastructure with Infrastructure as Code:</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Terraform IaC for reproducible infrastructure deployment</li>
                      <li>• CloudFront CDN with 310+ global edge locations</li>
                      <li>• Lambda@Edge for dynamic routing and A/B testing</li>
                      <li>• AWS WAF for DDoS protection and security</li>
                      <li>• CloudWatch monitoring with custom dashboards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Testing & Launch (Weeks 9-10)</h3>
                    <p className="text-gray-300 mb-3">Comprehensive testing and gradual traffic migration:</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Load testing with 10,000 concurrent users (passed with 99.9% uptime)</li>
                      <li>• A/B testing comparing old vs new infrastructure</li>
                      <li>• Gradual traffic migration: 10% → 25% → 50% → 100%</li>
                      <li>• Real User Monitoring (RUM) for production performance tracking</li>
                      <li>• Emergency rollback plan with instant DNS failover</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* After State */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">After: Modern Infrastructure Results</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-6">New Technical Architecture</h3>
              <div className="bg-green-900/10 border border-green-500/30 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">Frontend & Commerce</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Next.js 14 on Vercel Edge Network (global deployment)</li>
                      <li>• Shopify Headless with Storefront API</li>
                      <li>• Automatic image optimization (WebP, AVIF formats)</li>
                      <li>• ISR for dynamic content with 60s revalidation</li>
                      <li>• React Server Components reducing client JS by 70%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3">Infrastructure & Content</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• AWS CloudFront CDN with 310+ edge locations</li>
                      <li>• WordPress Headless on AWS Lightsail</li>
                      <li>• Lambda@Edge for dynamic routing</li>
                      <li>• S3 for asset storage with lifecycle policies</li>
                      <li>• CloudWatch + Sentry for real-time monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-6">Performance Metrics</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {afterMetrics.map((metric) => (
                  <div key={metric.label} className="bg-green-900/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-green-400">{metric.icon}</div>
                      <span className="text-xs text-gray-500 uppercase">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-gray-300 mb-3">Improvements Achieved:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p className="mb-2"><strong className="text-green-400">Performance Gains:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• 79% faster LCP (6.8s → 1.4s)</li>
                    <li>• 92% faster FID (340ms → 28ms)</li>
                    <li>• 95% reduction in CLS (0.42 → 0.02)</li>
                    <li>• 77% faster Time to Interactive</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2"><strong className="text-green-400">Business Benefits:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• 41% reduction in monthly costs</li>
                    <li>• 91% faster deployments (45min → 4min)</li>
                    <li>• 99.99% uptime SLA achieved</li>
                    <li>• 18% increase in conversion rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Business Impact */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Measurable Business Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Revenue Impact
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong>18% conversion rate increase</strong>
                      <p className="text-sm text-gray-400">From improved Core Web Vitals and faster page loads</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong>$140K additional monthly revenue</strong>
                      <p className="text-sm text-gray-400">Directly attributed to performance improvements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong>35% higher search rankings</strong>
                      <p className="text-sm text-gray-400">Google rewarding excellent Core Web Vitals scores</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Operational Efficiency
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong>60% reduction in DevOps time</strong>
                      <p className="text-sm text-gray-400">Automated infrastructure management with IaC</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Zero unplanned downtime</strong>
                      <p className="text-sm text-gray-400">In 6 months post-migration vs 4-6 incidents/month before</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong>10x faster feature deployment</strong>
                      <p className="text-sm text-gray-400">CI/CD pipeline enabling daily releases</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">6-Month ROI Analysis</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">$98,000</div>
                  <div className="text-sm text-gray-400">Migration Investment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$224,000</div>
                  <div className="text-sm text-gray-400">Total Cost Savings & Revenue Gain</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">2.3x</div>
                  <div className="text-sm text-gray-400">Return on Investment</div>
                </div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Key Lessons & Best Practices</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-400 mb-3">1. Gradual Migration Reduces Risk</h3>
                <p className="text-gray-300">
                  Migrating traffic gradually (10% → 100% over 2 weeks) allowed us to identify and fix edge cases in production 
                  without impacting the majority of users. This approach is critical for large-scale migrations.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">2. Infrastructure as Code is Non-Negotiable</h3>
                <p className="text-gray-300">
                  Using Terraform for all AWS infrastructure meant we could recreate the entire stack in minutes for testing, 
                  disaster recovery, or client replication. This single decision saved hundreds of hours over 6 months.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">3. Headless Commerce Requires Backend Strength</h3>
                <p className="text-gray-300">
                  While Shopify's Storefront API is excellent, complex product logic and inventory management required custom 
                  middleware. Budget 20-30% more time for backend integration than initially estimated.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">4. Performance Monitoring from Day One</h3>
                <p className="text-gray-300">
                  Setting up Real User Monitoring (RUM) before launch provided invaluable data for optimization. We caught 
                  3 critical performance regressions that synthetic testing missed.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Technology Stack</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• React 18 (Server Components)</li>
                  <li>• TypeScript</li>
                  <li>• TailwindCSS</li>
                  <li>• Vercel Edge Network</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Backend & APIs</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Shopify Storefront API</li>
                  <li>• WordPress + WPGraphQL</li>
                  <li>• Node.js Lambda Functions</li>
                  <li>• GraphQL + REST APIs</li>
                  <li>• AWS API Gateway</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Infrastructure</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• AWS CloudFront CDN</li>
                  <li>• AWS Lambda@Edge</li>
                  <li>• AWS S3 + CloudFront</li>
                  <li>• Terraform (IaC)</li>
                  <li>• GitHub Actions CI/CD</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Database & Storage</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• AWS RDS PostgreSQL</li>
                  <li>• Redis (ElastiCache)</li>
                  <li>• AWS S3 Object Storage</li>
                  <li>• DynamoDB (Sessions)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Monitoring & Security</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• AWS CloudWatch</li>
                  <li>• Sentry Error Tracking</li>
                  <li>• AWS WAF (Firewall)</li>
                  <li>• Vercel Analytics</li>
                  <li>• Google Lighthouse CI</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-violet-400 mb-3">Development Tools</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Git + GitHub</li>
                  <li>• ESLint + Prettier</li>
                  <li>• Playwright (E2E Testing)</li>
                  <li>• k6 (Load Testing)</li>
                  <li>• Storybook Components</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Agency Infrastructure?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Stryxon Technologies specializes in white-label infrastructure migrations for digital agencies. 
              We handle the technical complexity while you focus on client relationships and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
              >
                Schedule Migration Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/cloud-infrastructure"
                className="px-8 py-4 bg-transparent border-2 border-indigo-500 text-indigo-400 font-semibold rounded-full hover:bg-indigo-500/10 transition-colors"
              >
                View Infrastructure Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
