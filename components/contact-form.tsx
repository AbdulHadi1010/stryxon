"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/mwvvqygl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "cf-turnstile-response": turnstileToken,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Get In Touch
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Build Something Great?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Book a technical audit or discuss your project. We respond within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Why Work With Stryxon?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3">✓</span>
                  <span>
                    White-label technical partner for agencies and startups
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3">✓</span>
                  <span>Cloud infrastructure that scales automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3">✓</span>
                  <span>Custom AI agents trained on your data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3">✓</span>
                  <span>DevOps pipelines that ship code without fear</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>Free 30-minute consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>Serving agencies worldwide</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us about your project, timeline, and technical requirements..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg text-green-300 text-sm">
                  ✓ Message sent! We'll respond within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-300 text-sm">
                  ✗ Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() =>
                  console.log(
                    "Turnstile error - continuing without verification",
                  )
                }
                options={{
                  theme: "dark",
                  size: "normal",
                }}
                className="mb-4"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white shadow-lg shadow-indigo-500/50 py-6 text-base font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    Send Message <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
