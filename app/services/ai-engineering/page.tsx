import type { Metadata } from "next";
import Link from "next/link";

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
      <div className="min-h-screen bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              AI Engineering & Machine Learning
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with custom AI agents, machine learning
              models, and intelligent automation. From ChatGPT integration to
              custom ML solutions.
            </p>
          </div>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
              AI Services We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Custom AI Agents",
                  description:
                    "Build intelligent agents using GPT-4, Claude, Gemini for customer service, data analysis, content generation, and business automation.",
                  keywords: "GPT-4, Claude, AI Agents",
                },
                {
                  title: "ChatGPT Integration",
                  description:
                    "Integrate OpenAI's ChatGPT into websites, apps, and workflows. Custom prompts, fine-tuning, and API implementation.",
                  keywords: "OpenAI, ChatGPT API, Integration",
                },
                {
                  title: "Machine Learning Models",
                  description:
                    "Custom ML models for prediction, classification, recommendation systems, and time-series forecasting using TensorFlow and PyTorch.",
                  keywords: "ML Models, TensorFlow, PyTorch",
                },
                {
                  title: "Natural Language Processing",
                  description:
                    "Text analysis, sentiment analysis, entity extraction, language translation, and document understanding using NLP.",
                  keywords: "NLP, Text Analysis, Sentiment",
                },
                {
                  title: "Computer Vision",
                  description:
                    "Image recognition, object detection, facial recognition, OCR, and video analysis for security and automation.",
                  keywords: "Image Recognition, OCR, Vision AI",
                },
                {
                  title: "AI Automation",
                  description:
                    "Automate repetitive tasks with intelligent bots. Email processing, data entry, report generation, and workflow automation.",
                  keywords: "Automation, RPA, Intelligent Bots",
                },
                {
                  title: "AI Chatbots",
                  description:
                    "Build conversational AI chatbots for customer support, lead generation, and internal helpdesk using LangChain and RAG.",
                  keywords: "Chatbots, Conversational AI, RAG",
                },
                {
                  title: "AI Model Training",
                  description:
                    "Train custom models on your data. Fine-tuning, transfer learning, and model optimization for specific use cases.",
                  keywords: "Training, Fine-tuning, Custom Models",
                },
                {
                  title: "AI Consulting",
                  description:
                    "AI strategy, feasibility analysis, ROI assessment, and implementation roadmap. Identify AI opportunities in your business.",
                  keywords: "Strategy, Consulting, ROI",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-sm text-purple-400">
                    {service.keywords}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
              AI Technologies & Frameworks
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
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
                "Keras",
                "OpenCV",
                "spaCy",
                "NLTK",
                "FastAPI",
                "Python",
                "Jupyter",
                "MLflow",
                "AutoML",
                "Transformers",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
              AI Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Customer Service",
                  items: [
                    "24/7 AI chatbots",
                    "Ticket classification",
                    "Sentiment analysis",
                    "Automated responses",
                  ],
                },
                {
                  category: "Business Intelligence",
                  items: [
                    "Predictive analytics",
                    "Sales forecasting",
                    "Customer churn prediction",
                    "Market analysis",
                  ],
                },
                {
                  category: "Content Creation",
                  items: [
                    "Blog writing automation",
                    "Social media content",
                    "Product descriptions",
                    "SEO optimization",
                  ],
                },
                {
                  category: "Operations",
                  items: [
                    "Document processing",
                    "Invoice extraction",
                    "Data entry automation",
                    "Quality assurance",
                  ],
                },
                {
                  category: "Healthcare",
                  items: [
                    "Medical image analysis",
                    "Patient triage",
                    "Drug discovery",
                    "Healthcare chatbots",
                  ],
                },
                {
                  category: "E-commerce",
                  items: [
                    "Product recommendations",
                    "Search optimization",
                    "Price optimization",
                    "Fraud detection",
                  ],
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                    {useCase.category}
                  </h3>
                  <ul className="space-y-2">
                    {useCase.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
              AI Development Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery & Use Case",
                  description:
                    "Identify AI opportunities and define clear business objectives with measurable ROI.",
                },
                {
                  step: "2",
                  title: "Data Assessment",
                  description:
                    "Evaluate data quality, quantity, and availability. Data cleaning and preparation.",
                },
                {
                  step: "3",
                  title: "Model Selection",
                  description:
                    "Choose appropriate AI models: GPT for language, ML for predictions, CV for images.",
                },
                {
                  step: "4",
                  title: "Development & Training",
                  description:
                    "Build and train models. Fine-tune on your data. Optimize for accuracy and performance.",
                },
                {
                  step: "5",
                  title: "Integration",
                  description:
                    "Integrate AI into your applications via APIs. Ensure seamless user experience.",
                },
                {
                  step: "6",
                  title: "Monitoring & Improvement",
                  description:
                    "Track performance metrics. Continuous learning and model updates.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-gray-900/30 border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
              AI Engineering FAQ
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does AI development cost?",
                  a: "AI chatbot integration: $5,000-$15,000. Custom ML models: $15,000-$50,000. Enterprise AI solutions: $50,000+. Pricing depends on complexity, data volume, and integration requirements. Most projects have 6-12 month ROI through automation savings.",
                },
                {
                  q: "Do I need large amounts of data for AI?",
                  a: "Not always. For ChatGPT/Claude integration, you don't need training data. For custom ML models, you need 1,000+ samples minimum. Transfer learning and pre-trained models reduce data requirements. We can also use synthetic data generation.",
                },
                {
                  q: "How accurate are AI models?",
                  a: "Modern AI models achieve 90-95% accuracy for most tasks. GPT-4 has near-human performance in language tasks. Custom ML models improve with more training data. We provide accuracy benchmarks and continuous monitoring for all deployments.",
                },
                {
                  q: "Can AI replace human workers?",
                  a: "AI augments rather than replaces humans. It handles repetitive tasks, allowing humans to focus on creative and strategic work. Typical automation: 30-70% of manual tasks. Human oversight remains essential for quality and edge cases.",
                },
                {
                  q: "How long does AI implementation take?",
                  a: "ChatGPT integration: 2-4 weeks. Custom chatbots: 4-8 weeks. ML models: 8-16 weeks. Timeline depends on data availability, complexity, and integration scope. We use agile methodology for iterative delivery.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Implement AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free AI consultation and discover opportunities in your
              business
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Schedule AI Consultation
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
