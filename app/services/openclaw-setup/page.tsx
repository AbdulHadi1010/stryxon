import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Footer from "@/components/ui/footer";
import ServiceSchema from "@/components/seo/ServiceSchema";

const TerminalMockup = dynamic(() => import("@/components/terminal-mockup"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center border border-zinc-800 rounded">
      <div className="text-zinc-400 text-sm">Loading terminal...</div>
    </div>
  ),
  ssr: false,
});
import {
  Shield,
  Server,
  Lock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Clock,
  HeadphonesIcon,
  Terminal,
  ArrowRight,
  Database,
  RefreshCw,
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
  return (
    <>
      <ServiceSchema
        name="OpenClaw AI Agent Setup & VPS Hosting Service"
        description="Professional OpenClaw (formerly Clawdbot/Moltbot) AI agent setup with secure VPS hosting. Done-for-you installation in 24-48 hours with enterprise-grade security and zero terminal errors."
        price="500"
        priceValidUntil="2026-12-31"
        ratingValue="5.0"
        reviewCount="28"
        serviceType="AI Agent Setup & Hosting"
        url="https://www.stryxon.com/services/openclaw-setup"
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="grid lg:grid-cols-2">
              {/* Left: Headline */}
              <div className="p-16 lg:p-24 border-r border-b border-zinc-800 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="font-mono text-xs uppercase text-zinc-400 tracking-widest">
                    AI Agent Infrastructure
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                    SECURE
                  </span>
                  <br />
                  <span className="text-white">OPENCLAW</span>
                  <br />
                  <span className="text-white">HOSTING</span>
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed mb-12 max-w-lg">
                  Skip terminal errors, naming confusion (Clawdbot/Moltbot), and
                  malware risks. Get a production-ready OpenClaw AI agent on
                  secure VPS infrastructure in 24-48 hours.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/#contact?source=openclaw-hero"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium uppercase tracking-widest hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-indigo-500/50"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Terminal Mockup */}
              <div className="p-16 lg:p-24 bg-zinc-950 border-r border-b border-zinc-800 flex items-center">
                <div className="w-full">
                  <TerminalMockup
                    title="openclaw-status.sh"
                    variant="success"
                    lines={[
                      "$ sudo systemctl status openclaw",
                      "● openclaw.service - OpenClaw AI Agent",
                      "   Loaded: loaded (/etc/systemd/system/openclaw.service)",
                      "   Active: active (running) since Thu 2026-02-13 14:32:11 UTC",
                      "",
                      "✅ OpenClaw running on https://your-domain.com",
                      "✅ Auto-restart enabled via systemd",
                      "✅ SSL certificate: 89 days remaining",
                      "✅ Firewall: SSH (22), HTTPS (443) only",
                      "✅ Daily backups: 03:00 UTC",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Bar */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Setup Time", value: "24-48h" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "Zero Config", value: "Done For You" },
                { label: "Guarantee", value: "30 Days" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="p-12 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-indigo-900/20 hover:to-purple-900/20 transition-all group"
                >
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4 group-hover:text-indigo-400 transition-colors">
                    {metric.label}
                  </div>
                  <div className="text-4xl font-medium tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
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
                We configure OpenClaw (formerly Clawdbot/Moltbot) on hardened
                Ubuntu VPS with enterprise security: firewall, auto-restart,
                SSL, daily backups. Skip the Python version conflicts and
                malware-laden browser extensions. Production-ready in 24-48
                hours.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid - Shuffled to top */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  What's Included
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  icon: Server,
                  title: "Secure VPS Hosting",
                  description:
                    "Hardened Ubuntu 24.04 LTS on AWS/DigitalOcean/Vultr. UFW firewall, fail2ban intrusion prevention, SSH key-only auth, automated security patches. Your choice of region (US/EU/Asia).",
                },
                {
                  icon: Lock,
                  title: "SSL & Domain Setup",
                  description:
                    "Free Let's Encrypt SSL certificate with auto-renewal. Point your domain (or use our subdomain). HTTPS-only with HTTP→HTTPS redirect. A+ SSL Labs rating guaranteed.",
                },
                {
                  icon: RefreshCw,
                  title: "Auto-Restart & Monitoring",
                  description:
                    "Systemd service with automatic restart on crashes. UptimeRobot monitoring with SMS/email alerts. Recover from failures in <2 minutes. 99.9% uptime SLA.",
                },
                {
                  icon: Database,
                  title: "Daily Backups",
                  description:
                    "Automated daily backups to S3/Backblaze. 7-day retention. One-click restore via control panel. Your data survives server failures or accidental deletions.",
                },
                {
                  icon: Shield,
                  title: "Security Hardening",
                  description:
                    "Fail2ban blocks brute-force attacks, non-root user with sudo, SSH on custom port, open ports limited to 22/443, automatic unattended-upgrades for security patches.",
                },
                {
                  icon: HeadphonesIcon,
                  title: "30-Day Support",
                  description:
                    "Email/Slack support for configuration questions, troubleshooting, and minor tweaks. Response within 4 hours M-F. Extend support for $200/month after 30 days.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                const isRightMost = (index + 1) % 3 === 0;
                const isBottomRow = index >= 3;

                return (
                  <div
                    key={index}
                    className={`p-12 hover:bg-gradient-to-br hover:from-indigo-900/20 hover:to-purple-900/20 transition-all cursor-default group ${
                      !isRightMost ? "border-r border-zinc-800" : ""
                    } ${!isBottomRow ? "border-b border-zinc-800" : "border-b border-zinc-800"}`}
                  >
                    <Icon
                      className="w-6 h-6 text-indigo-400 mb-8 group-hover:text-blue-400 transition-colors"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-mono text-xs uppercase text-white tracking-widest mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pain Points - Shuffled after Features */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
                  Why DIY Installation Fails
                </span>
              </h2>
            </div>

            <div className="border-r border-b border-zinc-800">
              {[
                {
                  title: "Naming Confusion",
                  description:
                    "Originally Clawdbot → renamed to Moltbot → now OpenClaw. Old tutorials reference wrong repository names and outdated commands.",
                },
                {
                  title: "Terminal Errors",
                  description:
                    "Python 3.10 vs 3.11 conflicts, missing pip dependencies, permission issues. Different errors on Windows/macOS/Linux.",
                },
                {
                  title: "Malware Risks",
                  description:
                    "Fake browser extensions and unofficial GitHub forks containing data-stealing code. Hard to verify authenticity.",
                },
                {
                  title: "Uptime Issues",
                  description:
                    "Running on personal laptops means OpenClaw stops when you close the lid or lose WiFi. Not production-ready.",
                },
                {
                  title: "No Support",
                  description:
                    "When something breaks at 2am, you're debugging alone in Discord forums with conflicting advice.",
                },
              ].map((pain, index) => (
                <div
                  key={index}
                  className="p-12 flex items-start hover:bg-gradient-to-r hover:from-red-900/10 hover:to-transparent transition-all group"
                >
                  <div className="w-6 h-6 border border-red-500/50 flex items-center justify-center shrink-0 mr-6 mt-1 group-hover:border-red-400 transition-colors">
                    <div className="text-red-400 text-xs">✗</div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {pain.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing - Shuffled before Process */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  Pricing
                </span>
              </h2>
            </div>

            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="border border-zinc-800 p-16">
                <div className="pb-12 border-b border-zinc-800 mb-12">
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                    OpenClaw Setup + VPS Hosting
                  </div>
                  <div className="text-6xl font-medium tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text mb-4">
                    $500
                  </div>
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest">
                    One-time setup · 24-48h delivery
                  </div>
                </div>

                <div className="grid md:grid-cols-2 pb-12 border-b border-zinc-800 mb-12">
                  {[
                    "OpenClaw installation & configuration",
                    "Secure Ubuntu VPS (your choice of provider)",
                    "SSL certificate with auto-renewal",
                    "Domain/subdomain setup",
                    "Firewall & security hardening",
                    "Auto-restart with systemd",
                    "Daily backups to cloud storage",
                    "30 days email/Slack support",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start py-3">
                      <div className="w-1 h-1 bg-indigo-400 mt-2 mr-4 shrink-0" />
                      <span className="text-sm text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-2">
                    VPS Hosting Costs (Pay Provider Directly)
                  </div>
                  <p className="text-sm text-zinc-400">
                    $12-25/month for DigitalOcean/Vultr droplet (2GB RAM, 1
                    CPU). We recommend providers but you pay them directly and
                    retain full control.
                  </p>
                </div>

                <div>
                  <Link
                    href="/#contact?source=openclaw-pricing"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium uppercase tracking-widest hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-indigo-500/50"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  How It Works
                </span>
              </h2>
            </div>

            <div>
              {[
                {
                  phase: "Hour 0-2",
                  title: "Server Provisioning",
                  description:
                    "You choose VPS provider (DigitalOcean, Vultr, AWS, Linode) and region. We spin up Ubuntu 24.04 LTS droplet, configure SSH keys, set up firewall (UFW), install fail2ban.",
                },
                {
                  phase: "Hour 2-12",
                  title: "OpenClaw Configuration",
                  description:
                    "Clone official OpenClaw repository, install Python dependencies in virtual environment, configure systemd service for auto-restart, set environment variables (API keys). Test functionality.",
                },
                {
                  phase: "Hour 12-24",
                  title: "Production Hardening",
                  description:
                    "Install and configure SSL with Let's Encrypt, point your domain (or use our subdomain), configure Nginx reverse proxy, set up daily backups, enable monitoring. Deliverable: Production URL with dashboard access.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 border-r border-b border-zinc-800 hover:bg-gradient-to-r hover:from-indigo-900/10 hover:to-transparent transition-all group"
                >
                  <div className="lg:col-span-2 p-12 lg:border-r border-zinc-800">
                    <div className="text-6xl font-medium tracking-tighter bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-transparent bg-clip-text group-hover:from-indigo-500/40 group-hover:to-purple-500/40 transition-all">
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

        {/* Guarantee */}
        <section className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:px-24 lg:py-12 border-r border-b border-zinc-800">
              <h2 className="text-4xl font-medium tracking-tighter uppercase">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  Service Guarantee
                </span>
              </h2>
            </div>

            <div className="border-r border-b border-zinc-800">
              {[
                "24-48 hour setup guarantee. If we miss deadline, get $100 credit toward future services.",
                "99.9% uptime SLA after initial setup. We monitor 24/7 and auto-restart on failures.",
                "Secure by default. Firewall configured, SSL enabled, fail2ban active, automatic security patches.",
                "30-day money-back guarantee. If OpenClaw doesn't work as expected, full refund—no questions asked.",
                "Daily backups for 7 days. One-click restore if anything breaks. Your data is safe.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-12 flex items-start hover:bg-gradient-to-r hover:from-indigo-900/10 hover:to-transparent transition-all group"
                >
                  <div className="w-6 h-6 border border-indigo-500/50 flex items-center justify-center shrink-0 mr-6 mt-1 group-hover:border-indigo-400 transition-colors">
                    <div className="w-2 h-2 bg-indigo-400" />
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
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  Common Questions
                </span>
              </h2>
            </div>

            <div>
              {[
                {
                  q: "What's the difference between OpenClaw, Clawdbot, and Moltbot?",
                  a: "Same project, different names. Started as Clawdbot, renamed to Moltbot, now called OpenClaw. We use the official OpenClaw repository and terminology.",
                },
                {
                  q: "Can I use my own VPS provider?",
                  a: "Yes. We support DigitalOcean, Vultr, Linode, AWS Lightsail, and Hetzner. You create the account, we do the configuration. You retain full control and billing.",
                },
                {
                  q: "What if I already have OpenClaw running locally?",
                  a: "We can migrate your existing configuration to VPS. Provide your current setup and API keys, we'll replicate it on the server with proper security.",
                },
                {
                  q: "Do you provide ongoing support after 30 days?",
                  a: "Yes, for $200/month you get priority email/Slack support, monitoring, and minor configuration changes. Not required but recommended for businesses.",
                },
                {
                  q: "What happens if OpenClaw updates to a new version?",
                  a: "We provide upgrade instructions. If you have active support, we handle upgrades for you. Major version updates may require additional configuration.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-16 lg:p-24 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-indigo-900/10 hover:to-purple-900/10 transition-all"
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

        {/* DIY Resources */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-blue-900/10 hover:to-indigo-900/10 transition-all">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="font-mono text-xs uppercase text-zinc-400 tracking-widest mb-4">
                    Technical Resources
                  </div>
                  <h2 className="text-3xl font-medium tracking-tighter text-white mb-4">
                    DIY Resources
                  </h2>
                  <p className="text-base text-zinc-400 leading-relaxed">
                    Prefer to build this yourself? Read our engineering guide.
                  </p>
                </div>
                <div className="lg:col-span-4 text-left lg:text-right">
                  <a
                    href="https://blog.stryxon.com/posts/how-to-setup-openclaw-linux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <span className="text-base font-medium">
                      How to Host OpenClaw on Linux
                    </span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="max-w-7xl mx-auto border-l border-t border-zinc-800">
            <div className="p-16 lg:p-24 border-r border-b border-zinc-800">
              <div className="border border-zinc-800 p-16 bg-gradient-to-br from-indigo-900/10 to-purple-900/10">
                <div className="pb-12 border-b border-zinc-800 mb-12 text-center">
                  <h2 className="text-4xl font-medium tracking-tighter uppercase mb-6">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                      Skip The Setup Headaches
                    </span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Get OpenClaw running on secure VPS infrastructure in 24-48
                    hours. No terminal errors, no malware risks, no naming
                    confusion.
                  </p>
                </div>

                <div className="text-center">
                  <Link
                    href="/#contact?source=openclaw-final-cta"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium uppercase tracking-widest hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-indigo-500/50"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <p className="font-mono text-xs uppercase text-zinc-400 tracking-widest mt-6">
                    24-48h delivery · 30-day guarantee
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
