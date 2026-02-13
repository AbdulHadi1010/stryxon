export interface ServiceFeature {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroVisual: "terminal" | "lighthouse" | "none";
  metrics: ServiceMetric[];
  features: ServiceFeature[];
  process: {
    phase: string;
    title: string;
    description: string;
  }[];
  pricing: {
    package: string;
    price: string;
    duration: string;
    includes: string[];
  };
  guarantee: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const servicesData: Record<string, ServiceData> = {
  "pagespeed-optimization": {
    slug: "pagespeed-optimization",
    title: "PageSpeed & Core Web Vitals Optimization",
    subtitle: "Guaranteed 90+ Lighthouse Scores for Production Applications",
    description:
      "Your slow website hemorrhages conversions. We surgically optimize server-side rendering, eliminate layout shifts, and compress asset delivery to achieve 90+ PageSpeed scores—guaranteed.",
    heroVisual: "lighthouse",
    metrics: [
      { label: "Average LCP Improvement", value: "79%" },
      { label: "Score Guarantee", value: "90+" },
      { label: "Production Delivery", value: "3 weeks" },
      { label: "Zero Regressions", value: "100%" },
    ],
    features: [
      {
        title: "Server-Side Rendering",
        description:
          "Optimize Next.js getServerSideProps, implement ISR, add Redis caching layers, and tune database queries for sub-200ms TTFB.",
        icon: "Server",
      },
      {
        title: "Image & Asset Pipeline",
        description:
          "Convert to WebP/AVIF, implement lazy loading, responsive images with blur placeholders, and CDN delivery. 60-80% weight reduction.",
        icon: "Image",
      },
      {
        title: "JavaScript Bundle Optimization",
        description:
          "Code splitting, tree shaking, dynamic imports, and dependency pruning. Cut payload by 50% with zero feature loss.",
        icon: "FileCode",
      },
      {
        title: "Layout Shift Elimination",
        description:
          "Reserve space for images/ads, optimize font loading with FOIT/FOUT strategies, and implement skeleton screens. CLS < 0.1 guaranteed.",
        icon: "Layout",
      },
      {
        title: "Critical Rendering Path",
        description:
          "Inline critical CSS, defer non-essential JS, preload key fonts, preconnect to CDNs, and implement resource hints for instant perceived load.",
        icon: "Zap",
      },
      {
        title: "Third-Party Script Deferral",
        description:
          "Lazy load analytics, defer social widgets, optimize GTM execution. Reduce external requests by 70% without losing tracking accuracy.",
        icon: "ExternalLink",
      },
    ],
    process: [
      {
        phase: "Week 1",
        title: "Audit & Baseline",
        description:
          "Full Lighthouse audit across 10+ pages, Chrome DevTools performance profiling, bundle analysis, network waterfall inspection, and bottleneck identification. Deliverable: 30-page performance report with prioritized roadmap.",
      },
      {
        phase: "Week 2",
        title: "Implementation",
        description:
          "Execute all optimizations: image/video compression, component refactoring for code splitting, Redis/CDN caching, and CLS fixes. Deliverable: GitHub PR with optimized codebase ready for staging.",
      },
      {
        phase: "Week 3",
        title: "Testing & Validation",
        description:
          "Lighthouse tests on mobile/desktop, load testing with 1000+ concurrent users, production Core Web Vitals verification, and final tuning to hit 90+ score. Deliverable: Before/after metrics + monitoring dashboard.",
      },
    ],
    pricing: {
      package: "PageSpeed Optimization Package",
      price: "$2,499",
      duration: "One-time · 3-week delivery",
      includes: [
        "Full performance audit (30+ page report)",
        "All optimization implementations",
        "Guaranteed 90+ mobile PageSpeed score",
        "Before/after metrics with ROI analysis",
        "30 days post-launch monitoring & fixes",
        "Performance monitoring dashboard setup",
      ],
    },
    guarantee: [
      "90+ Mobile Score or money back (measured on real devices)",
      "All Core Web Vitals pass Google's thresholds (LCP <2.5s, FID <100ms, CLS <0.1)",
      "Zero regressions - Full QA on staging before production",
      "30-day monitoring - We watch metrics post-launch and fix issues for free",
    ],
    faqs: [
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
        question: "What if my site uses a lot of third-party scripts?",
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
    ],
    metadata: {
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
      ],
    },
  },

  "openclaw-setup": {
    slug: "openclaw-setup",
    title: "OpenClaw AI Agent Setup & Deployment",
    subtitle: "Done-For-You Production Infrastructure in 48 Hours",
    description:
      "Deploy the official OpenClaw AI agent on secure, production-grade infrastructure. We handle VPS provisioning, security hardening, monitoring setup, and 30-day operational support—no DevOps expertise required.",
    heroVisual: "terminal",
    metrics: [
      { label: "Production Uptime", value: "99.9%" },
      { label: "Deployment Speed", value: "48hrs" },
      { label: "Security Patches", value: "24hr SLA" },
      { label: "Support Period", value: "30 days" },
    ],
    features: [
      {
        title: "Secure VPS Infrastructure",
        description:
          "Deploy on AWS, DigitalOcean, Linode, or Vultr with hardened Ubuntu 22.04, fail2ban intrusion prevention, automated backups, and UFW firewall configuration.",
        icon: "Server",
      },
      {
        title: "Official OpenClaw Source",
        description:
          "Direct installation from official GitHub repository with cryptographic signature verification. Zero custom forks or unvetted modifications.",
        icon: "Shield",
      },
      {
        title: "Production Monitoring",
        description:
          "Uptime monitoring, resource usage dashboards, error alerting via email/Slack, and log aggregation. Know exactly when issues occur.",
        icon: "Activity",
      },
      {
        title: "SSL/TLS Certificate Setup",
        description:
          "Automated Let's Encrypt SSL provisioning with auto-renewal. All traffic encrypted with TLS 1.3, HTTPS-only configuration enforced.",
        icon: "Lock",
      },
      {
        title: "Environment Configuration",
        description:
          "Secure .env management with encrypted secrets, API key rotation strategy, and webhook configuration for external integrations.",
        icon: "Settings",
      },
      {
        title: "Documentation & Handoff",
        description:
          "Complete runbook with SSH access credentials, maintenance procedures, backup/restore scripts, and 30-day operational support.",
        icon: "FileText",
      },
    ],
    process: [
      {
        phase: "Day 1",
        title: "Infrastructure Provisioning",
        description:
          "Spin up VPS on your chosen provider, install Ubuntu 22.04, harden SSH (disable root, key-only auth), configure UFW firewall, and set up automated backups. Deliverable: Hardened server ready for deployment.",
      },
      {
        phase: "Day 2",
        title: "OpenClaw Deployment",
        description:
          "Clone official OpenClaw repository, configure environment variables, set up systemd service for auto-start, provision SSL certificates, and run smoke tests. Deliverable: OpenClaw running in production with HTTPS.",
      },
      {
        phase: "Days 3-30",
        title: "Monitoring & Support",
        description:
          "Install UptimeRobot monitoring, configure alerting, provide documentation handoff, and deliver 30 days of operational support for issues, questions, and updates. Deliverable: Self-sufficient operations with safety net.",
      },
    ],
    pricing: {
      package: "OpenClaw Setup & Deployment",
      price: "$1,299",
      duration: "One-time · 48-hour delivery",
      includes: [
        "Secure VPS provisioning & hardening",
        "Official OpenClaw installation with verification",
        "SSL/TLS certificate setup (Let's Encrypt)",
        "Production monitoring & alerting (UptimeRobot)",
        "Complete documentation & SSH handoff",
        "30 days operational support",
      ],
    },
    guarantee: [
      "99.9% uptime SLA (monitored via UptimeRobot)",
      "48-hour production deployment or full refund",
      "Official OpenClaw source with cryptographic verification",
      "30-day support period with 24-hour response times",
    ],
    faqs: [
      {
        question: "Do I need to provide my own VPS?",
        answer:
          "No. We provision a new VPS on your chosen provider (AWS, DigitalOcean, Linode, Vultr). You'll own the account; we just handle setup. Typical cost: $10-20/month.",
      },
      {
        question: "What if I already have a server?",
        answer:
          "We can deploy to your existing infrastructure if it meets requirements (Ubuntu 22.04, root access, public IP). This may reduce delivery time to 24 hours.",
      },
      {
        question: "Is this the official OpenClaw version?",
        answer:
          "Yes. We deploy directly from the official OpenClaw GitHub repository with signature verification. No custom forks or modifications.",
      },
      {
        question: "What happens after 30 days?",
        answer:
          "OpenClaw continues running autonomously. You can maintain it yourself using our documentation, or sign up for ongoing managed support ($199/month).",
      },
      {
        question: "Can you migrate my existing OpenClaw instance?",
        answer:
          "Yes. Migration service available for $499. We'll transfer all data, configurations, and webhooks with zero downtime using blue-green deployment.",
      },
    ],
    metadata: {
      title:
        "OpenClaw AI Agent Setup & Deployment | Production Infrastructure | Stryxon",
      description:
        "Done-for-you OpenClaw deployment on secure VPS infrastructure. 48-hour delivery, 99.9% uptime, official source installation, and 30-day support. No DevOps expertise required.",
      keywords: [
        "OpenClaw setup",
        "AI agent deployment",
        "VPS infrastructure",
        "production deployment",
        "secure hosting",
        "managed AI infrastructure",
      ],
    },
  },

  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    title: "ENTERPRISE CLOUD INFRASTRUCTURE",
    subtitle:
      "Multi-Region AWS & GCP Architecture for High-Traffic Production Systems",
    description:
      "We architect fault-tolerant, auto-scaling cloud infrastructure for companies processing millions of requests per day. Terraform-managed infrastructure-as-code, zero-downtime deployments, and 99.99% uptime SLAs. Built for enterprises that can't afford downtime.",
    heroVisual: "terminal",
    metrics: [
      { label: "Uptime Guarantee", value: "99.99%" },
      { label: "Multi-Region", value: "3+ Zones" },
      { label: "Auto-Scaling", value: "Real-time" },
      { label: "Cost Optimization", value: "40-60%" },
    ],
    features: [
      {
        title: "Multi-Region Architecture",
        description:
          "Deploy across AWS us-east-1, eu-west-1, and ap-southeast-1 with Route53 geo-routing, CloudFront CDN, and automatic failover. Single region failure? Your users never notice.",
        icon: "Server",
      },
      {
        title: "Infrastructure as Code",
        description:
          "100% Terraform-managed infrastructure. Every resource defined in Git. No manual console changes. Versioned, auditable, reproducible. Spin up identical staging environments in 8 minutes.",
        icon: "FileCode",
      },
      {
        title: "Kubernetes Orchestration",
        description:
          "EKS or GKE clusters with Helm charts, horizontal pod autoscaling (HPA), cluster autoscaling, service mesh (Istio), and zero-downtime rolling deployments. Handle 10x traffic spikes automatically.",
        icon: "Layout",
      },
      {
        title: "Database High Availability",
        description:
          "RDS Multi-AZ with read replicas, automated backups, point-in-time recovery. ElastiCache Redis for session/cache. DynamoDB for global tables. Sub-10ms database latency globally.",
        icon: "Shield",
      },
      {
        title: "Observability Stack",
        description:
          "Prometheus + Grafana for metrics, ELK stack for logs, Jaeger for distributed tracing, PagerDuty for alerting. Know exactly what's happening in production 24/7.",
        icon: "Activity",
      },
      {
        title: "Security & Compliance",
        description:
          "VPC isolation, security groups, IAM least-privilege, AWS Secrets Manager, WAF, GuardDuty threat detection, AWS Config compliance. SOC 2 and HIPAA-ready architecture.",
        icon: "Lock",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "GitHub Actions or GitLab CI with automated testing, Docker builds, security scanning (Snyk), blue-green deployments, and automatic rollbacks. 20+ deployments per day without breaking production.",
        icon: "Zap",
      },
      {
        title: "Cost Optimization",
        description:
          "Reserved instances, Spot instances for batch jobs, S3 lifecycle policies, CloudWatch cost anomaly detection. Typical savings: 40-60% vs. default configurations.",
        icon: "Settings",
      },
      {
        title: "Disaster Recovery",
        description:
          "Automated backups to S3 Glacier, cross-region replication, tested recovery runbooks, RTO <4 hours, RPO <15 minutes. Your data survives AWS region outages.",
        icon: "FileText",
      },
    ],
    process: [
      {
        phase: "Week 1-2",
        title: "Architecture Design & Review",
        description:
          "Deep-dive technical assessment of your application. Document current infrastructure, identify bottlenecks, design multi-region architecture with Terraform modules. Review with your team, iterate on feedback. Deliverable: 50+ page infrastructure design document with diagrams, cost projections, and migration roadmap.",
      },
      {
        phase: "Week 3-6",
        title: "Infrastructure Provisioning",
        description:
          "Execute Terraform deployments: VPCs, subnets, security groups, EKS/GKE clusters, RDS databases, Redis caches, S3 buckets, CloudFront distributions, monitoring stack. Configure CI/CD pipelines. Deliverable: Fully provisioned staging environment, production environment ready for migration.",
      },
      {
        phase: "Week 7-8",
        title: "Migration & Cutover",
        description:
          "Blue-green deployment strategy. Migrate databases with AWS DMS (zero downtime). Route 10% traffic to new infrastructure, monitor metrics, gradually increase to 100%. Rollback plan ready. Deliverable: Production traffic on new infrastructure, old infrastructure decommissioned, 30-day support.",
      },
    ],
    pricing: {
      package: "Enterprise Cloud Infrastructure",
      price: "$25,000",
      duration: "One-time · 8-week delivery",
      includes: [
        "Complete multi-region AWS/GCP architecture design",
        "100% Terraform-managed infrastructure provisioning",
        "Kubernetes cluster setup with auto-scaling",
        "Database migration with zero-downtime strategy",
        "CI/CD pipeline configuration (GitHub Actions/GitLab)",
        "Observability stack (Prometheus, Grafana, ELK)",
        "Security audit & compliance (SOC 2/HIPAA-ready)",
        "30 days post-launch operational support",
      ],
    },
    guarantee: [
      "99.99% uptime SLA (measured over 30-day period post-launch)",
      "Infrastructure-as-code with 100% Terraform coverage (no manual console changes)",
      "Multi-region failover tested with chaos engineering (random AZ/region shutdowns)",
      "Cost optimization delivering 40-60% savings vs. current infrastructure",
      "30-day operational support with 4-hour response SLA",
    ],
    faqs: [
      {
        question: "Do you work with AWS, GCP, or Azure?",
        answer:
          "We specialize in AWS and GCP. For Azure, we partner with certified Azure architects. Most enterprises choose AWS for maturity or GCP for Kubernetes/ML workloads.",
      },
      {
        question: "What if our application isn't containerized yet?",
        answer:
          "We handle containerization as part of the project. Dockerfiles, multi-stage builds, security scanning. Turn your monolith into 12-factor app. Adds 1-2 weeks to timeline.",
      },
      {
        question: "Can you take over our existing infrastructure?",
        answer:
          "Yes. We call this 'Terraform Import' - reverse-engineer your existing AWS resources into Terraform state. Typical import project: 2-3 weeks, $8,000 fixed price.",
      },
      {
        question: "What happens after 8 weeks and 30-day support?",
        answer:
          "You own the infrastructure. We provide complete documentation, runbooks, and Terraform code. For ongoing support: $5,000/month retainer (includes on-call rotation, security patching, scaling adjustments).",
      },
      {
        question: "Do you handle regulatory compliance (HIPAA, SOC 2)?",
        answer:
          "We design architectures that meet technical requirements for HIPAA and SOC 2. For formal audits/certifications, we partner with compliance firms. Architecture prep is included; audit fees are separate.",
      },
    ],
    metadata: {
      title:
        "Enterprise Cloud Infrastructure Design & Migration | AWS & GCP | Stryxon",
      description:
        "Multi-region, auto-scaling cloud infrastructure for high-traffic production systems. Terraform-managed AWS/GCP architecture with 99.99% uptime SLA. Built for enterprises that can't afford downtime.",
      keywords: [
        "cloud infrastructure",
        "AWS architecture",
        "multi-region deployment",
        "Terraform infrastructure as code",
        "Kubernetes EKS",
        "enterprise cloud migration",
        "high availability infrastructure",
      ],
    },
  },
};
