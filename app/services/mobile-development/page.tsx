import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import {
  Smartphone,
  Tablet,
  Code,
  Zap,
  Bell,
  ShoppingBag,
  Lock,
  Layers,
  CheckCircle,
  Globe,
  Star,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development - iOS, Android, React Native | Stryxon",
  description:
    "Professional mobile app development services for iOS, Android, and cross-platform apps. React Native, Flutter, native development, and app modernization.",
  keywords: [
    "mobile app development",
    "iOS development",
    "Android development",
    "React Native",
    "Flutter",
    "cross-platform apps",
    "native app development",
    "mobile application",
    "app development company",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/services/mobile-development",
  },
  openGraph: {
    title: "Mobile App Development - iOS, Android, React Native",
    description:
      "Build powerful iOS and Android apps with React Native and native technologies. Cross-platform development with native performance.",
    url: "https://www.stryxon.com/services/mobile-development",
  },
};

// Mobile phone mockup with app interface
function MobileMockup() {
  return (
    <div className="border border-zinc-800 bg-black max-w-xs mx-auto">
      {/* Phone notch */}
      <div className="h-6 bg-black border-b border-zinc-800 flex items-center justify-center">
        <div className="w-24 h-4 bg-zinc-950 rounded-full border border-zinc-800" />
      </div>
      {/* Screen */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-8 w-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30" />
          <Bell className="w-5 h-5 text-zinc-600" />
        </div>
        {/* Hero card */}
        <div className="border border-zinc-800 p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="h-3 w-3/4 bg-zinc-800 mb-2" />
          <div className="h-2 w-1/2 bg-zinc-900" />
        </div>
        {/* Grid */}
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square border border-zinc-800 p-3">
              <div className="w-full h-full bg-zinc-950" />
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="h-10 bg-gradient-to-r from-purple-600 to-pink-600 border border-purple-500 flex items-center justify-center">
          <span className="text-xs text-white font-semibold">INSTALL APP</span>
        </div>
      </div>
      {/* Bottom indicator */}
      <div className="h-6 bg-black border-t border-zinc-800 flex items-center justify-center">
        <div className="w-16 h-1 bg-zinc-800 rounded-full" />
      </div>
    </div>
  );
}

export default function MobileDevelopmentPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto border-l border-r border-zinc-800">
          {/* Hero */}
          <section className="grid lg:grid-cols-2 border-b border-zinc-800">
            <div className="p-12 lg:p-16 border-r border-zinc-800 flex flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
                Mobile App Development
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Native Feel.
                  <br />
                  Cross-Platform
                  <br />
                  Power.
                </span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-xl">
                Build iOS and Android apps with a single codebase. React Native
                development that delivers 60fps performance and native user
                experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold border border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Start App Project
                </Link>
                <Link
                  href="#pricing"
                  className="px-6 py-3 border border-zinc-700 text-white font-semibold hover:bg-zinc-900/50 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="p-12 lg:p-16 flex items-center justify-center border-b border-zinc-800">
              <MobileMockup />
            </div>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-zinc-800">
            {[
              { value: "90%", label: "Code Sharing" },
              { value: "60fps", label: "Performance" },
              { value: "2 Weeks", label: "MVP Timeline" },
              { value: "iOS+Android", label: "Platforms" },
            ].map((metric, i) => (
              <div
                key={i}
                className={`p-8 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-purple-900/10 hover:to-pink-900/10 transition-all ${
                  i === 3 ? "border-r-0" : ""
                }`}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          {/* Description */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
                Overview
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Cross-Platform Apps That Feel Native
              </h2>
              <p className="text-lg text-zinc-400 mb-4">
                Build once, deploy everywhere. Our React Native expertise
                delivers apps that users can't distinguish from native iOS and
                Android applications. Share 90% of your code while maintaining
                platform-specific polish where it matters.
              </p>
              <p className="text-lg text-zinc-400">
                From consumer apps to enterprise solutions, we handle App Store
                submissions, push notifications, offline functionality, and
                everything in between. Production-ready apps in weeks, not
                months.
              </p>
            </div>
          </section>

          {/* Pricing First (Shuffled) */}
          <section
            id="pricing"
            className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
              Investment
            </div>
            <h2 className="text-3xl font-bold mb-12">Mobile App Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "MVP App",
                  price: "$10,000",
                  timeline: "4-6 weeks",
                  features: [
                    "iOS + Android",
                    "5-8 screens",
                    "User authentication",
                    "Push notifications",
                    "App Store submission",
                  ],
                },
                {
                  name: "Full-Featured App",
                  price: "$25,000",
                  timeline: "8-12 weeks",
                  features: [
                    "Advanced features",
                    "Payment integration",
                    "Offline functionality",
                    "Custom animations",
                    "Analytics integration",
                  ],
                  featured: true,
                },
                {
                  name: "Enterprise App",
                  price: "$50,000+",
                  timeline: "12-16 weeks",
                  features: [
                    "Complex workflows",
                    "Backend development",
                    "Admin dashboard",
                    "Multi-language support",
                    "Enterprise security",
                  ],
                },
              ].map((pkg, i) => (
                <div
                  key={i}
                  className={`p-8 border ${
                    pkg.featured
                      ? "border-purple-500 bg-gradient-to-br from-purple-900/10 to-pink-900/10"
                      : "border-zinc-800"
                  }`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3">
                    {pkg.name}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-zinc-400 mb-6">
                    {pkg.timeline}
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-800">
            {[
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "iOS App Development",
                description:
                  "Native iOS apps with Swift and SwiftUI. App Store optimization and Apple guidelines compliance.",
              },
              {
                icon: <Tablet className="w-6 h-6" />,
                title: "Android App Development",
                description:
                  "Native Android apps with Kotlin and Jetpack Compose. Google Play Store publishing.",
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "React Native Development",
                description:
                  "Cross-platform apps with 90% code sharing. One codebase for iOS and Android.",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Flutter Development",
                description:
                  "Beautiful cross-platform apps with Flutter and Dart. Fast development and smooth animations.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Mobile App UI/UX",
                description:
                  "User-friendly interfaces with modern design patterns. iOS and Material Design compliance.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "App Modernization",
                description:
                  "Update legacy apps with new features, design, and technologies. Migration to React Native.",
              },
              {
                icon: <Download className="w-6 h-6" />,
                title: "App Store Publishing",
                description:
                  "Handle App Store and Play Store submissions. Screenshots, descriptions, and review management.",
              },
              {
                icon: <Bell className="w-6 h-6" />,
                title: "Push Notifications",
                description:
                  "Firebase Cloud Messaging, APNs integration. Segmented notifications and deep linking.",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "App Maintenance",
                description:
                  "Ongoing updates, bug fixes, OS compatibility, and feature enhancements for published apps.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-purple-900/10 hover:to-pink-900/10 transition-all group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </section>

          {/* Tech Stack */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
              Technologies
            </div>
            <h2 className="text-3xl font-bold mb-8">Mobile Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React Native",
                "Expo",
                "Flutter",
                "Swift",
                "Kotlin",
                "Firebase",
                "Redux",
                "MobX",
                "TypeScript",
                "Xcode",
                "Android Studio",
                "Push Notifications",
                "App Analytics",
                "Deep Linking",
                "In-App Purchases",
                "Stripe",
                "RevenueCat",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-zinc-800 text-sm font-mono hover:border-purple-500/50 hover:bg-purple-900/10 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
              Methodology
            </div>
            <h2 className="text-3xl font-bold mb-12">
              App Development Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  phase: "Week 1-2",
                  title: "Design & Planning",
                  description:
                    "User flows, wireframes, high-fidelity mockups, and technical architecture design.",
                },
                {
                  phase: "Week 3-6",
                  title: "Development",
                  description:
                    "Feature implementation, API integration, authentication, and payment setup.",
                },
                {
                  phase: "Week 7-8",
                  title: "Testing",
                  description:
                    "Device testing, performance optimization, bug fixes, and TestFlight/beta distribution.",
                },
                {
                  phase: "Week 9",
                  title: "Launch",
                  description:
                    "App Store submission, review process, launch marketing, and monitoring setup.",
                },
              ].map((step, i) => (
                <div key={i} className="border border-zinc-800 p-6">
                  <div className="font-mono text-xs text-purple-400 mb-3">
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Guarantee */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
              Commitment
            </div>
            <h2 className="text-3xl font-bold mb-8">Our Mobile App Promise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "60fps smooth performance",
                "iOS and Android app stores included",
                "Push notification setup included",
                "App analytics integration",
                "30-day post-launch support",
                "Full source code ownership",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border border-zinc-800"
                >
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">
              FAQ
            </div>
            <h2 className="text-3xl font-bold mb-12">Common Questions</h2>
            <div className="max-w-3xl space-y-8">
              {[
                {
                  q: "Should I choose React Native or native development?",
                  a: "React Native is ideal for most apps (90% of use cases). It's faster, more cost-effective, and maintains near-native performance. We recommend native only for graphics-intensive games or apps with heavy platform-specific features.",
                },
                {
                  q: "How long does App Store approval take?",
                  a: "Apple reviews typically take 24-48 hours. Google Play is faster at 2-12 hours. We handle all submission requirements, screenshots, descriptions, and review responses.",
                },
                {
                  q: "Can you integrate payment processing?",
                  a: "Yes, we integrate Stripe, PayPal, Apple Pay, Google Pay, and in-app purchases. Full subscription management, receipt validation, and revenue tracking included.",
                },
                {
                  q: "Do you support push notifications?",
                  a: "Absolutely. We set up Firebase Cloud Messaging for both iOS and Android, including segmentation, scheduling, and deep linking to specific app screens.",
                },
                {
                  q: "What happens after the app launches?",
                  a: "30 days of free support for bug fixes and minor adjustments. After that, we offer monthly maintenance packages for updates, new features, and OS compatibility.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-zinc-800 pb-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-base text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-12 lg:p-16 text-center border-b border-zinc-800">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Launch Your App?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get a free app consultation and development roadmap
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold border border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg"
            >
              Start Your App Project
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
