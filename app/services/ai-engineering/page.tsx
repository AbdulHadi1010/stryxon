import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { 
  Brain,
  Cpu,
  Sparkles,
  Bot,
  Network,
  Eye,
  MessageSquare,
  Zap,
  CheckCircle,
  TrendingUp,
  ShoppingBag,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Engineering & Machine Learning Services | Stryxon Technologies",
  description:
    "Custom AI engineering services including AI agent development, machine learning models, natural language processing, computer vision, GPT integration, and AI automation solutions for businesses.",
  keywords: [
    "AI engineering services",
    "machine learning development",
    "AI agent development",
    "custom AI solutions",
    "GPT integration services",
    "ChatGPT implementation",
    "Claude AI integration",
    "natural language processing",
    "computer vision services",
    "AI automation",
    "intelligent automation",
    "AI chatbot development",
    "AI consulting services",
    "deep learning solutions",
    "AI model training",
  ],
  alternates: {
    canonical: "https://www.stryxon.com/services/ai-engineering",
  },
  openGraph: {
    title: "AI Engineering & Machine Learning Services",
    description:
      "Custom AI agents, machine learning models, and intelligent automation solutions. Expert AI engineering for modern businesses.",
    url: "https://www.stryxon.com/services/ai-engineering",
  },
};

// AI Chat interface mockup
function AIChatMockup() {
  return (
    <div className="border border-zinc-800 bg-black font-mono text-xs max-w-md">
      <div className="border-b border-zinc-800 px-4 py-3 flex items-center gap-3">
        <Bot className="w-4 h-4 text-purple-400" />
        <span className="text-zinc-400">AI Assistant</span>
        <div className="ml-auto flex gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-zinc-600">Online</span>
        </div>
      </div>
      <div className="p-4 space-y-4 h-64 overflow-hidden">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-purple-900/30 border border-purple-500/30 px-3 py-2 max-w-[80%]">
            <span className="text-zinc-300">Analyze sales data for Q4</span>
          </div>
        </div>
        {/* AI response */}
        <div className="flex justify-start">
          <div className="bg-zinc-900 border border-zinc-800 px-3 py-2 max-w-[80%]">
            <div className="text-purple-400 mb-2">✓ Analysis complete</div>
            <div className="text-zinc-400 text-[10px] leading-relaxed">
              • Revenue: +23.4% vs Q3<br />
              • Top product: Enterprise Plan<br />
              • Churn rate: -5.2%<br />
              • Forecast: +18% next quarter
            </div>
          </div>
        </div>
        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-zinc-900 border border-zinc-800 px-3 py-2">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 p-3 flex items-center gap-2">
        <input 
          className="flex-1 bg-zinc-950 border border-zinc-800 px-3 py-2 text-zinc-500 text-[10px]"
          placeholder="Ask me anything..."
          disabled
        />
        <div className="px-3 py-2 bg-purple-600 border border-purple-500">
          <Sparkles className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

export default function AIEngineeringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Engineering Services",
    description:
      "Custom AI engineering including AI agents, machine learning models, NLP, computer vision, and intelligent automation solutions.",
    provider: {
      "@type": "Organization",
      name: "Stryxon Technologies",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto border-l border-r border-zinc-800">
          
          {/* Hero */}
          <section className="grid lg:grid-cols-2 border-b border-zinc-800">
            <div className="p-12 lg:p-16 border-r border-zinc-800 flex flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
                AI Engineering
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  Intelligent.<br />Automated.<br />Predictive.
                </span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-xl">
                Custom AI agents powered by GPT-4, Claude, and machine learning. 
                Automate workflows, predict outcomes, and unlock insights hidden in your data.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold border border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Explore AI Solutions
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
              <AIChatMockup />
            </div>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-zinc-800">
            {[
              { value: "70%", label: "Cost Reduction" },
              { value: "24/7", label: "AI Availability" },
              { value: "95%", label: "Model Accuracy" },
              { value: "10x", label: "Faster Processing" },
            ].map((metric, i) => (
              <div
                key={i}
                className={`p-8 text-center border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-purple-900/10 hover:to-fuchsia-900/10 transition-all ${
                  i === 3 ? "border-r-0" : ""
                }`}
              >
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </section>

          {/* Capabilities First (Shuffled) */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-800">
            {[
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Custom AI Agents",
                description: "Intelligent agents using GPT-4, Claude, Gemini for customer service, data analysis, and automation.",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "ChatGPT Integration",
                description: "Integrate OpenAI's ChatGPT into websites and apps. Custom prompts and fine-tuning.",
              },
              {
                icon: <Network className="w-6 h-6" />,
                title: "Machine Learning Models",
                description: "Custom ML models for prediction, classification, and recommendation using TensorFlow and PyTorch.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Natural Language Processing",
                description: "Text analysis, sentiment analysis, entity extraction, and document understanding.",
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Computer Vision",
                description: "Image recognition, object detection, facial recognition, OCR, and video analysis.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "AI Automation",
                description: "Automate repetitive tasks with intelligent bots. Email processing and data entry automation.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Chatbots",
                description: "Conversational AI chatbots for customer support and lead generation using LangChain and RAG.",
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "AI Model Training",
                description: "Train custom models on your data. Fine-tuning and transfer learning for specific use cases.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "AI Consulting",
                description: "AI strategy, feasibility analysis, ROI assessment, and implementation roadmap.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 border-r border-b border-zinc-800 hover:bg-gradient-to-br hover:from-purple-900/10 hover:to-fuchsia-900/10 transition-all group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </section>

          {/* Description */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">
                Overview
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Transform Business with Artificial Intelligence
              </h2>
              <p className="text-lg text-zinc-400 mb-4">
                We build production-ready AI systems that solve real business problems. From ChatGPT-powered 
                customer service to predictive ML models that forecast revenue, our AI solutions deliver measurable ROI.
              </p>
              <p className="text-lg text-zinc-400">
                Every AI implementation includes data pipeline design, model training, API integration, 
                monitoring dashboards, and continuous improvement. Built for scale, security, and reliability.
              </p>
            </div>
          </section>

          {/* Use Cases */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Applications
            </div>
            <h2 className="text-3xl font-bold mb-12">AI Use Cases Across Industries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Customer Service",
                  icon: <MessageSquare className="w-6 h-6" />,
                  items: ["24/7 AI chatbots", "Ticket classification", "Sentiment analysis", "Automated responses"],
                },
                {
                  category: "Business Intelligence",
                  icon: <TrendingUp className="w-6 h-6" />,
                  items: ["Predictive analytics", "Sales forecasting", "Churn prediction", "Market analysis"],
                },
                {
                  category: "Content Creation",
                  icon: <FileText className="w-6 h-6" />,
                  items: ["Blog writing automation", "Social media content", "Product descriptions", "SEO optimization"],
                },
                {
                  category: "Operations",
                  icon: <Cpu className="w-6 h-6" />,
                  items: ["Document processing", "Invoice extraction", "Data entry automation", "Quality assurance"],
                },
                {
                  category: "Healthcare",
                  icon: <Eye className="w-6 h-6" />,
                  items: ["Medical image analysis", "Patient triage", "Drug discovery", "Healthcare chatbots"],
                },
                {
                  category: "E-commerce",
                  icon: <ShoppingBag className="w-6 h-6" />,
                  items: ["Product recommendations", "Search optimization", "Price optimization", "Fraud detection"],
                },
              ].map((useCase, i) => (
                <div key={i} className="border border-zinc-800 p-6 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-400">{useCase.icon}</div>
                    <h3 className="text-lg font-semibold">{useCase.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {useCase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process in Middle (Shuffled) */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Methodology
            </div>
            <h2 className="text-3xl font-bold mb-12">AI Development Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Use Case",
                  description: "Identify AI opportunities and define clear business objectives with measurable ROI.",
                },
                {
                  step: "02",
                  title: "Data Assessment",
                  description: "Evaluate data quality, quantity, and availability. Data cleaning and preparation.",
                },
                {
                  step: "03",
                  title: "Model Selection",
                  description: "Choose appropriate AI models: GPT for language, ML for predictions, CV for images.",
                },
                {
                  step: "04",
                  title: "Development & Training",
                  description: "Build and train models. Fine-tune on your data. Optimize for accuracy and performance.",
                },
                {
                  step: "05",
                  title: "Integration",
                  description: "Integrate AI into your applications via APIs. Ensure seamless user experience.",
                },
                {
                  step: "06",
                  title: "Monitoring & Improvement",
                  description: "Track performance metrics. Continuous learning and model updates.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-zinc-800 p-6">
                  <div className="font-mono text-xs text-purple-400 mb-3">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Technologies
            </div>
            <h2 className="text-3xl font-bold mb-8">AI Technologies & Frameworks</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "OpenAI GPT-4",
                "Claude 3",
                "Gemini",
                "LangChain",
                "TensorFlow",
                "PyTorch",
                "Hugging Face",
                "LlamaIndex",
                "Pinecone",
                "Weaviate",
                "Anthropic API",
                "Scikit-learn",
                "OpenCV",
                "spaCy",
                "NLTK",
                "FastAPI",
                "Python",
                "MLflow",
                "AutoML",
                "Transformers",
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

          {/* Pricing */}
          <section id="pricing" className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Investment
            </div>
            <h2 className="text-3xl font-bold mb-12">AI Engineering Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "AI Chatbot",
                  price: "$5,000",
                  timeline: "2-3 weeks",
                  features: [
                    "ChatGPT/Claude integration",
                    "Custom training on your data",
                    "Website/app integration",
                    "Analytics dashboard",
                    "30-day optimization",
                  ],
                },
                {
                  name: "Custom ML Model",
                  price: "$20,000",
                  timeline: "6-8 weeks",
                  features: [
                    "Bespoke ML model development",
                    "Data pipeline setup",
                    "Model training & validation",
                    "API deployment",
                    "Monitoring & retraining",
                  ],
                  featured: true,
                },
                {
                  name: "Enterprise AI",
                  price: "$50,000+",
                  timeline: "12-16 weeks",
                  features: [
                    "Multi-model AI system",
                    "Advanced automation",
                    "Custom infrastructure",
                    "Team training",
                    "Ongoing support",
                  ],
                },
              ].map((pkg, i) => (
                <div
                  key={i}
                  className={`p-8 border ${
                    pkg.featured
                      ? "border-purple-500 bg-gradient-to-br from-purple-900/10 to-fuchsia-900/10"
                      : "border-zinc-800"
                  }`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-3">
                    {pkg.name}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-zinc-400 mb-6">{pkg.timeline}</div>
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

          {/* Guarantee */}
          <section className="p-12 lg:p-16 border-b border-zinc-800">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              Commitment
            </div>
            <h2 className="text-3xl font-bold mb-8">AI Implementation Guarantee</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "95%+ model accuracy or money back",
                "Complete data security & privacy",
                "Model explainability & transparency",
                "Scalable cloud infrastructure",
                "Continuous model improvement",
                "Full API documentation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 border border-zinc-800">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="p-12 lg:p-16 border-b border-zinc-800 bg-zinc-950/50">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
              FAQ
            </div>
            <h2 className="text-3xl font-bold mb-12">AI Engineering FAQ</h2>
            <div className="max-w-3xl space-y-8">
              {[
                {
                  q: "How much does AI development cost?",
                  a: "AI chatbot integration: $5,000-$15,000. Custom ML models: $15,000-$50,000. Enterprise AI solutions: $50,000+. Pricing depends on complexity, data volume, and integration requirements. Most projects have 6-12 month ROI.",
                },
                {
                  q: "Do I need large amounts of data for AI?",
                  a: "Not always. For ChatGPT/Claude integration, you don't need training data. For custom ML models, you need 1,000+ samples minimum. Transfer learning reduces data requirements. We can also use synthetic data generation.",
                },
                {
                  q: "How accurate are AI models?",
                  a: "Modern AI models achieve 90-95% accuracy for most tasks. GPT-4 has near-human performance in language tasks. Custom ML models improve with more training data. We provide accuracy benchmarks and continuous monitoring.",
                },
                {
                  q: "Can AI replace human workers?",
                  a: "AI augments rather than replaces humans. It handles repetitive tasks, allowing humans to focus on creative work. Typical automation: 30-70% of manual tasks. Human oversight remains essential for quality control.",
                },
                {
                  q: "How long does AI implementation take?",
                  a: "ChatGPT integration: 2-4 weeks. Custom chatbots: 4-8 weeks. ML models: 8-16 weeks. Timeline depends on data availability, complexity, and integration scope. We use agile methodology for iterative delivery.",
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
              Ready to Implement AI?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get a free AI consultation and discover opportunities in your business
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold border border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg"
            >
              Schedule AI Consultation
            </Link>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
