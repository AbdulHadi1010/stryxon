"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { TextHoverEffect, FooterBackgroundGradient } from "./hover-footer";
import EmailImage from "./email-image";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Zap,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Cloud Infrastructure", href: "#workflows" },
        { label: "AI Agents", href: "#features" },
        { label: "Tech Stack", href: "#stack" },
        { label: "Consultation", href: "#contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Case Studies", href: "#" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-indigo-400" />,
      component: (
        <EmailImage className="text-gray-400 hover:text-indigo-400 transition-colors" />
      ),
      href: "mailto:contact@stryxon.com",
    },
    {
      icon: <Phone size={18} className="text-indigo-400" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={18} className="text-indigo-400" />,
      text: "Global Remote",
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Github size={20} />, label: "Github", href: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-[#0F0F11]/10 relative rounded-3xl overflow-hidden m-8"
    >
      {isVisible && (
        <BackgroundBeamsWithCollision className="h-fit min-h-175 dark:from-black dark:to-neutral-900">
          {/* Text hover effect - positioned to start from the hr line */}
          <div className="absolute bottom-0 left-0 right-0 h-120 flex items-start justify-center pointer-events-auto z-10 -mb-16">
            <TextHoverEffect text="STRYXON" className="z-10" />
          </div>

          <div className="relative z-40 mx-auto max-w-7xl p-14 pt-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12 justify-items-center text-center md:text-left md:justify-items-start">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Zap
                    className="text-indigo-400 w-8 h-8"
                    fill="currentColor"
                  />
                  <span className="text-white text-3xl font-bold">Stryxon</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-400">
                  Engineering Intelligence for Modern Agencies. Immutable Cloud
                  Infrastructure meets Custom AI Agents.
                </p>
              </div>

              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="text-white text-lg font-semibold mb-6">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-indigo-400 transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h4 className="text-white text-lg font-semibold mb-6">
                  Contact Us
                </h4>
                <ul className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      {item.icon}
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                        >
                          {item.component || item.text}
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <hr className="border-t border-gray-700 my-8" />

            {/* <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-sm space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-gray-400">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>

            <p className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} Stryxon Technologies. All rights
              reserved.
            </p>
          </div> */}
          </div>

          <FooterBackgroundGradient />
        </BackgroundBeamsWithCollision>
      )}
      {!isVisible && (
        <div className="relative z-40 mx-auto max-w-7xl p-14 pt-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12 justify-items-center text-center md:text-left md:justify-items-start">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/stryxon-logo.png"
                  alt="Stryxon Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-white text-3xl font-bold">Stryxon</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
