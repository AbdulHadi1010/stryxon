"use client";

import {
  Zap,
  Home,
  Briefcase,
  Sparkles,
  Layers,
  MessageSquare,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const data = [
  {
    title: "Stryxon",
    icon: <Zap className="h-full w-full text-indigo-400" fill="currentColor" />,
    href: "#hero",
  },
  {
    title: "Home",
    icon: <Home className="h-full w-full text-neutral-300" />,
    href: "#hero",
  },
  {
    title: "Tech Stack",
    icon: <Sparkles className="h-full w-full text-neutral-300" />,
    href: "#stack",
  },
  {
    title: "Services",
    icon: <Briefcase className="h-full w-full text-neutral-300" />,
    href: "#services",
  },
  {
    title: "Testimonials",
    icon: <MessageSquare className="h-full w-full text-neutral-300" />,
    href: "#testimonials",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-neutral-300" />,
    href: "#contact",
  },
];

export default function DockNavigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] sm:w-auto max-w-full px-0 sm:px-0">
      <Dock
        className="items-end pb-2 sm:pb-3 bg-neutral-900/95 backdrop-blur-sm border border-neutral-800 shadow-2xl shadow-indigo-500/20"
        magnification={isMobile ? 50 : 80}
        distance={isMobile ? 100 : 150}
        panelHeight={isMobile ? 48 : 64}
      >
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className={`aspect-square rounded-full cursor-pointer ${
              idx === 0
                ? "bg-linear-to-br from-indigo-600 to-indigo-500"
                : "bg-neutral-800"
            }`}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <button
                onClick={() => handleClick(item.href)}
                className="w-full h-full flex items-center justify-center"
                aria-label={item.title}
              >
                {item.icon}
              </button>
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
