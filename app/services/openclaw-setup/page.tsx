import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import {
  Shield,
  Server,
  Lock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Clock,
  HeadphonesIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Secure OpenClaw AI Agent Setup & VPS Hosting | Done-For-You Installation | Stryxon",
  description:
    "Professional OpenClaw (formerly Clawdbot/Moltbot) AI agent setup and secure VPS hosting. Avoid terminal errors, malware risks, and naming confusion. Get a production-ready OpenClaw instance configured by experts.",
  keywords: [
    "OpenClaw setup service",
    "Clawdbot installation",
    "Moltbot hosting",
    "OpenClaw VPS hosting",
    "AI agent setup",
    "secure OpenClaw installation",
    "OpenClaw configuration",
    "professional AI agent hosting",
    "OpenClaw troubleshooting",
    "done-for-you OpenClaw setup",
    "OpenClaw security",
    "managed AI agent hosting",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/services/openclaw-setup",
  },
  openGraph: {
    title: "Secure OpenClaw AI Agent Setup & VPS Hosting | Stryxon",
    description:
      "Skip the terminal errors and security risks. Get a professionally configured OpenClaw AI agent on secure VPS infrastructure in 24-48 hours.",
    url: "https://www.stryxon.com/services/openclaw-setup",
    images: ["/images/openclaw-setup-og.png"],
  },
};

export default function OpenClawSetupPage() {
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
            name: "OpenClaw Setup",
            item: "https://www.stryxon.com/services/openclaw-setup",
          },
        ],
      },
      {
        "@type": "Service",
        name: "OpenClaw AI Agent Setup & Hosting",
        description:
          "Professional OpenClaw (Clawdbot/Moltbot) setup and secure VPS hosting. Done-for-you installation, configuration, and ongoing support.",
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/10 mb-6">
              <Shield className="w-10 h-10 text-indigo-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Secure OpenClaw AI Agent Setup & Hosting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Skip the terminal errors, naming confusion, and malware risks. Get
              a production-ready OpenClaw instance configured by experts in
              24-48 hours.
            </p>
          </div>

          {/* Pain Points Section */}
          <section className="mb-16 bg-red-900/10 border border-red-500/20 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-400">
                  Why DIY Installation Is Risky
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>Naming Confusion:</strong> Originally Clawdbot →
                      renamed to Moltbot → now OpenClaw. Old tutorials reference
                      wrong names.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>Terminal Errors:</strong> Python version
                      conflicts, missing dependencies, permission issues on
                      Windows/macOS/Linux.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>Malware Risks:</strong> Fake browser extensions
                      and unofficial GitHub forks containing data-stealing code.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>Uptime Issues:</strong> Running on personal
                      laptops means OpenClaw stops when you close the lid.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>
                      <strong>No Support:</strong> When something breaks at 2am,
                      you're debugging alone in Discord forums.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Our Done-For-You Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Server className="w-6 h-6" />,
                  title: "Secure VPS Hosting",
                  description:
                    "We provision a hardened Ubuntu 24.04 VPS on AWS/DigitalOcean with automatic backups, firewall rules, and fail2ban security.",
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Official Source Only",
                  description:
                    "Direct installation from verified OpenClaw GitHub repository. Zero risk of malware or tampered code.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Correct Dependencies",
                  description:
                    "We handle Python 3.11+, Node.js 20+, all npm packages, environment variables, and API key configuration.",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Auto-Start on Boot",
                  description:
                    "Systemd service configured so OpenClaw restarts automatically if the server reboots. 99.9% uptime.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "24-48 Hour Delivery",
                  description:
                    "From payment to production-ready OpenClaw instance in under 2 business days. Fast-tracked setup available.",
                },
                {
                  icon: <HeadphonesIcon className="w-6 h-6" />,
                  title: "30-Day Support",
                  description:
                    "Telegram/Discord support for configuration tweaks, API key updates, and troubleshooting. No extra charge.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-indigo-400">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              What's Included
            </h2>
            <div className="bg-gray-900/30 border border-indigo-500/20 rounded-xl p-8">
              <ul className="space-y-4">
                {[
                  "✓ VPS server provisioning (2GB RAM, 2 vCPU, 50GB SSD)",
                  "✓ Latest OpenClaw installation from official repository",
                  "✓ SSL/TLS certificate setup for secure connections",
                  "✓ Environment configuration (Anthropic API, Discord webhooks, etc.)",
                  "✓ Systemd service for automatic restart on crash/reboot",
                  "✓ UFW firewall with SSH key-only access (no password login)",
                  "✓ Daily automated backups to off-site storage",
                  "✓ Performance monitoring with Netdata or Grafana",
                  "✓ Complete documentation: SSH access, how to update, logs location",
                  "✓ 30 days of Telegram/Discord support for any issues",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  One-Time Setup
                </h3>
                <p className="text-5xl font-bold text-indigo-400 mb-4">$299</p>
                <p className="text-gray-400 mb-6">
                  + VPS hosting ($12-20/month paid directly to provider)
                </p>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li>✓ Full OpenClaw installation</li>
                  <li>✓ Security hardening</li>
                  <li>✓ 30-day support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-2 border-indigo-500 rounded-xl p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Managed Hosting
                </h3>
                <p className="text-5xl font-bold text-indigo-400 mb-4">
                  $99
                  <span className="text-lg text-gray-400">/month</span>
                </p>
                <p className="text-gray-400 mb-6">
                  Includes VPS hosting + ongoing maintenance
                </p>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li>✓ Everything in One-Time Setup</li>
                  <li>✓ OpenClaw updates applied weekly</li>
                  <li>✓ 24/7 uptime monitoring</li>
                  <li>✓ Priority support (4-hour response)</li>
                  <li>✓ Monthly performance reports</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Setup Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Submit Form Below",
                  description:
                    "Tell us your OpenClaw use case, preferred VPS provider, and timezone.",
                  time: "5 minutes",
                },
                {
                  step: "2",
                  title: "Initial Consultation",
                  description:
                    "We schedule a 30-minute call to gather API keys, configure Discord webhooks, and answer questions.",
                  time: "30 minutes",
                },
                {
                  step: "3",
                  title: "VPS Provisioning",
                  description:
                    "We spin up a secure Ubuntu server, install OpenClaw, configure environment, and run full test suite.",
                  time: "12-24 hours",
                },
                {
                  step: "4",
                  title: "Handoff & Training",
                  description:
                    "You receive SSH credentials, documentation, and a 15-minute walkthrough video showing how to monitor/update OpenClaw.",
                  time: "15 minutes",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-gray-900/30 border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-2">{item.description}</p>
                    <p className="text-sm text-indigo-400">
                      Estimated time: {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Can I use my own VPS provider?",
                  answer:
                    "Yes! We support AWS, DigitalOcean, Linode, Vultr, and Hetzner. You pay the provider directly; we just configure it.",
                },
                {
                  question: "What if I already started installing OpenClaw?",
                  answer:
                    "We can take over from any stage. If your current setup is broken, we'll start fresh on a new VPS.",
                },
                {
                  question: "Do I need to provide API keys?",
                  answer:
                    "Yes. You need your own Anthropic API key (Claude) and any other service keys OpenClaw requires. We'll guide you through obtaining them.",
                },
                {
                  question: "What happens after 30 days of support?",
                  answer:
                    "OpenClaw will keep running indefinitely. If you need help later, we offer $50/hour ad-hoc support or switch to managed hosting.",
                },
                {
                  question: "Can you migrate my existing OpenClaw?",
                  answer:
                    "Yes. We can migrate chat history, custom prompts, and configurations from your laptop to the new VPS.",
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
          <section className="text-center bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Skip the Headaches. Get OpenClaw Running Today.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop wrestling with Python versions and terminal errors. Let our
              infrastructure experts handle it while you focus on using
              OpenClaw.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-indigo-500/50"
            >
              Get Started - Free Consultation
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              24-48 hour delivery · 30-day money-back guarantee · No long-term
              contracts
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
