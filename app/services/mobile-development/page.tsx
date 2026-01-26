import type { Metadata } from "next";
import Link from "next/link";

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
};

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Mobile App Development
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Build powerful iOS and Android apps with React Native and native
            technologies. Cross-platform development that delivers native
            performance.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
            Mobile Development Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "iOS App Development",
                description:
                  "Native iOS apps with Swift and SwiftUI. App Store optimization, TestFlight beta testing, and Apple guidelines compliance.",
              },
              {
                title: "Android App Development",
                description:
                  "Native Android apps with Kotlin and Jetpack Compose. Google Play Store publishing and material design.",
              },
              {
                title: "React Native Development",
                description:
                  "Cross-platform apps with 90% code sharing. One codebase for iOS and Android with native performance.",
              },
              {
                title: "Flutter Development",
                description:
                  "Beautiful cross-platform apps with Flutter and Dart. Fast development and smooth 60fps animations.",
              },
              {
                title: "Mobile App UI/UX",
                description:
                  "User-friendly interfaces with modern design patterns. iOS Human Interface Guidelines and Material Design.",
              },
              {
                title: "App Modernization",
                description:
                  "Update legacy apps with new features, design, and technologies. Migration from old frameworks to React Native.",
              },
              {
                title: "App Store Publishing",
                description:
                  "Handle App Store and Play Store submissions. Screenshots, descriptions, keywords, and review management.",
              },
              {
                title: "Push Notifications",
                description:
                  "Firebase Cloud Messaging, APNs integration. Segmented notifications, deep linking, and analytics.",
              },
              {
                title: "App Maintenance",
                description:
                  "Ongoing updates, bug fixes, OS compatibility, and feature enhancements for published apps.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">
            Mobile Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React Native",
              "Flutter",
              "Swift",
              "Kotlin",
              "Expo",
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
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your App?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free mobile app consultation
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Start Your App Project
          </Link>
        </section>
      </div>
    </div>
  );
}
