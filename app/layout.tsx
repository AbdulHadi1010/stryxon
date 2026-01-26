import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import { DottedSurface } from "@/components/ui/dotted-surface";
import Navbar from "@/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.stryxon.com"),
  title: {
    default:
      "Stryxon Technologies - White-Label Web Development & Cloud Infrastructure Partner",
    template: "%s | Stryxon Technologies",
  },
  description:
    "White-label web development agency specializing in cloud infrastructure, AI agents, and custom software solutions. Expert technical partner for agencies needing scalable web applications, API development, and immutable cloud deployments.",
  keywords: [
    "white-label web development",
    "technical partner for agencies",
    "cloud infrastructure services",
    "custom AI agents development",
    "scalable web applications",
    "API development services",
    "immutable cloud infrastructure",
    "software development agency",
    "web performance optimization",
    "Next.js development services",
    "serverless architecture",
    "DevOps consulting",
    "technical consulting services",
    "agency white-label solutions",
    "custom software development",
  ],
  authors: [{ name: "Stryxon Technologies" }],
  creator: "Stryxon Technologies",
  publisher: "Stryxon Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.stryxon.com",
    siteName: "Stryxon Technologies",
    title:
      "Stryxon Technologies - White-Label Web Development & Cloud Infrastructure Partner",
    description:
      "Expert white-label web development agency specializing in cloud infrastructure, AI agents, and custom software solutions. Your trusted technical partner for scalable, high-performance web applications.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stryxon Technologies - White-Label Technical Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stryxon Technologies - White-Label Web Development Partner",
    description:
      "Expert white-label web development agency specializing in cloud infrastructure, AI agents, and custom software solutions.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/stryxon-logo.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Stryxon Technologies",
    alternateName: "Stryxon",
    url: "https://www.stryxon.com",
    logo: "https://www.stryxon.com/images/stryxon-logo.png",
    description:
      "White-label web development agency specializing in cloud infrastructure, AI agents, and custom software solutions. Expert technical partner for agencies needing scalable web applications.",
    foundingDate: "2020",
    email: "abdul.hadi@stryxon.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+923184570330",
        email: "abdul.hadi@stryxon.com",
        contactType: "Customer Service",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        email: "abdul.hadi@stryxon.com",
        contactType: "Sales",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.linkedin.com/company/stryxon",
      "https://github.com/stryxon",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "6",
      lowPrice: "5000",
      highPrice: "50000",
      priceCurrency: "USD",
    },
    knowsAbout: [
      {
        "@type": "Thing",
        name: "Cloud Computing",
        description:
          "Expert knowledge in AWS, Azure, and Google Cloud Platform infrastructure design, deployment, and optimization",
      },
      {
        "@type": "Thing",
        name: "AWS Optimization",
        description:
          "Specialized expertise in AWS cost optimization, serverless architecture, Lambda functions, and immutable infrastructure patterns",
      },
      {
        "@type": "Thing",
        name: "AI Automation",
        description:
          "Advanced capabilities in building custom AI agents, ChatGPT integration, RAG systems, and machine learning automation solutions",
      },
      {
        "@type": "Thing",
        name: "Next.js Development",
        description:
          "Deep technical expertise in Next.js 14+, React Server Components, App Router, and headless architecture implementation",
      },
      {
        "@type": "Thing",
        name: "White-Label Development",
        description:
          "Comprehensive white-label web development services enabling agencies to scale without in-house technical teams",
      },
      {
        "@type": "Thing",
        name: "Infrastructure as Code",
        description:
          "Proficiency in Terraform, CloudFormation, and automated infrastructure provisioning for reproducible deployments",
      },
      {
        "@type": "Thing",
        name: "DevOps Engineering",
        description:
          "CI/CD pipeline design, container orchestration, Kubernetes, Docker, and automated deployment strategies",
      },
      {
        "@type": "Thing",
        name: "Headless CMS",
        description:
          "Implementation expertise with Contentful, Sanity, WordPress headless, and API-driven content management",
      },
      {
        "@type": "Thing",
        name: "Core Web Vitals Optimization",
        description:
          "Performance engineering focused on LCP, FID, CLS optimization for superior user experience and SEO rankings",
      },
      {
        "@type": "Thing",
        name: "Serverless Architecture",
        description:
          "Design and implementation of scalable serverless applications using AWS Lambda, Vercel Functions, and edge computing",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technical Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Infrastructure Services",
            description:
              "AWS, Azure, and GCP infrastructure design, deployment, optimization, and management with immutable infrastructure patterns",
            provider: {
              "@type": "Organization",
              name: "Stryxon Technologies",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Engineering & Automation",
            description:
              "Custom AI agent development, ChatGPT integration, machine learning models, RAG systems, and intelligent automation solutions",
            provider: {
              "@type": "Organization",
              name: "Stryxon Technologies",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js Web Development",
            description:
              "Modern web applications with Next.js 14+, React Server Components, headless architecture, and performance optimization",
            provider: {
              "@type": "Organization",
              name: "Stryxon Technologies",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Native iOS and Android apps, React Native, Flutter cross-platform development, and mobile-first solutions",
            provider: {
              "@type": "Organization",
              name: "Stryxon Technologies",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DevOps Consulting",
            description:
              "CI/CD pipeline setup, container orchestration, Kubernetes, Infrastructure as Code, and automated deployment strategies",
            provider: {
              "@type": "Organization",
              name: "Stryxon Technologies",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Development",
            description:
              "RESTful APIs, GraphQL endpoints, microservices architecture, webhook integration, and scalable backend systems",
            provider: {
              "@type": "Organization",
              name: "Stryxon Technologies",
            },
          },
        },
      ],
    },
    service: [
      {
        "@type": "Service",
        name: "White-Label Web Development",
        description:
          "Custom web application development for agencies and businesses with complete white-label branding",
        provider: {
          "@type": "Organization",
          name: "Stryxon Technologies",
        },
        areaServed: "Worldwide",
        serviceType: "Web Development",
      },
      {
        "@type": "Service",
        name: "Cloud Infrastructure Services",
        description:
          "Immutable cloud infrastructure deployment and management on AWS, Azure, and Google Cloud",
        provider: {
          "@type": "Organization",
          name: "Stryxon Technologies",
        },
        areaServed: "Worldwide",
        serviceType: "Cloud Computing",
      },
      {
        "@type": "Service",
        name: "AI Agent Development",
        description:
          "Custom AI agents, ChatGPT integration, and intelligent automation solutions",
        provider: {
          "@type": "Organization",
          name: "Stryxon Technologies",
        },
        areaServed: "Worldwide",
        serviceType: "Artificial Intelligence",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${nacelle.variable} bg-black font-inter text-base text-gray-200 antialiased pt-20`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <DottedSurface />
          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
