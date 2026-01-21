"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(SplitText);

export default function InfiniteHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setIsMobile(
      window.innerWidth < 768 ||
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    );

    // Intersection Observer to pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    return () => {
      if (rootRef.current) {
        observer.unobserve(rootRef.current);
      }
    };
  }, []);

  useGSAP(
    () => {
      const ctas = ctaRef.current ? Array.from(ctaRef.current.children) : [];

      const h1Split = new SplitText(h1Ref.current, { type: "lines" });
      const pSplit = new SplitText(pRef.current, { type: "lines" });

      gsap.set(bgRef.current, { filter: "blur(28px)" });
      gsap.set(h1Split.lines, {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
      });
      gsap.set(pSplit.lines, {
        opacity: 0,
        y: 16,
        filter: "blur(6px)",
      });
      if (ctas.length) gsap.set(ctas, { opacity: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(bgRef.current, { filter: "blur(0px)", duration: 1.2 }, 0)
        .to(
          h1Split.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.1,
          },
          0.3,
        )
        .to(
          pSplit.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.3",
        )
        .to(ctas, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");

      return () => {
        h1Split.revert();
        pSplit.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative h-svh w-full overflow-hidden bg-black text-white"
      style={{ contain: "layout style paint" }}
    >
      <div className="absolute inset-0" ref={bgRef}>
        {!isMobile && isVisible && (
          <>
            {/* Video Background with Fallback */}
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover opacity-55"
                style={{
                  filter: "saturate(1.3) brightness(1.2) contrast(1.15)",
                }}
              >
                {/* Try local video first, fallback to external if not found */}
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
                <source
                  src="https://videos.pexels.com/video-files/3141211/3141211-sd_640_360_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              /* Fallback Gradient Background */
              <>
                <div className="absolute inset-0 bg-black" />

                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent 50%), radial-gradient(ellipse 60% 50% at 50% 120%, rgba(168, 85, 247, 0.25), transparent 50%)",
                    animation: "gradient-shift 20s ease infinite",
                    willChange: "opacity",
                  }}
                />

                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `
                      radial-gradient(at 27% 37%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
                      radial-gradient(at 97% 21%, rgba(147, 51, 234, 0.12) 0px, transparent 50%),
                      radial-gradient(at 52% 99%, rgba(79, 70, 229, 0.1) 0px, transparent 50%),
                      radial-gradient(at 10% 29%, rgba(168, 85, 247, 0.13) 0px, transparent 50%),
                      radial-gradient(at 97% 96%, rgba(99, 102, 241, 0.11) 0px, transparent 50%),
                      radial-gradient(at 33% 50%, rgba(124, 58, 237, 0.14) 0px, transparent 50%),
                      radial-gradient(at 79% 53%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)
                    `,
                    animation: "pulse-slow 8s ease-in-out infinite",
                  }}
                />
              </>
            )}

            {/* Subtle dark overlay for text readability */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/30"
              style={{ pointerEvents: "none" }}
            />

            {/* Remove diagonal streaks - keep only particles and orbs */}
            {/* Floating particles - Desktop */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-indigo-400/30 blur-[2px]"
                  style={{
                    width: `${Math.random() * 3 + 1.5}px`,
                    height: `${Math.random() * 3 + 1.5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 10}s`,
                    willChange: "transform",
                    transform: "translateZ(0)",
                  }}
                />
              ))}
            </div>

            {/* Large glowing orbs */}
            <div
              className="absolute top-10 left-20 w-96 h-96 rounded-full opacity-20 blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(99, 102, 241, 0.6), transparent 70%)",
                animation: "pulse-slow 6s ease-in-out infinite",
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            />
            <div
              className="absolute bottom-10 right-20 w-[30rem] h-[30rem] rounded-full opacity-15 blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.5), transparent 70%)",
                animation: "pulse-slow 8s ease-in-out infinite",
                animationDelay: "2s",
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
              }}
            />
          </>
        )}
        {isMobile && isVisible && (
          <>
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-black animate-gradient-shift"
              style={{ willChange: "background-position" }}
            />

            {/* Diagonal animated streaks */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div
                  key={`streak-${i}`}
                  className="absolute h-[2px] bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent shadow-[0_0_10px_rgba(129,140,248,0.6)]"
                  style={{
                    width: "150%",
                    top: `${i * 24}%`,
                    left: 0,
                    transform: "rotate(-15deg) translateZ(0)",
                    transformOrigin: "left center",
                    animation: `slide-right ${10 + i * 3}s linear infinite`,
                    animationDelay: `${i * 1.5}s`,
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                  }}
                />
              ))}
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-indigo-500/20 blur-sm"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${
                      Math.random() * 15 + 15
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 8}s`,
                    willChange: "transform",
                    transform: "translateZ(0)",
                  }}
                />
              ))}
            </div>

            {/* Glowing orbs */}
            <div
              className="absolute top-20 left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            />
            <div
              className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"
              style={{
                animationDelay: "2s",
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            />
          </>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,transparent_40%,black_100%)]" />

      <div className="relative z-10 flex h-svh w-full items-center px-6 lg:px-12">
        <div className="mx-auto max-w-7xl w-full">
          <div className="max-w-2xl text-left">
            <h1
              ref={h1Ref}
              className="text-balance text-5xl md:text-6xl xl:text-7xl font-extralight leading-[1.1] tracking-tight"
            >
              Infrastructure That Evolves With Your Vision
            </h1>
            <p
              ref={pRef}
              className="mt-6 max-w-xl text-balance text-lg text-white/70 font-light"
            >
              Just like DNA adapts and evolves, our AI-powered cloud
              infrastructure learns from your business. Self-healing systems,
              intelligent scaling, and continuous optimization built into every
              layer of your stack.
            </p>

            <div
              ref={ctaRef}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <a href="mailto:contact@stryxon.com?subject=Technical Audit Request">
                <button
                  type="button"
                  className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 h-12 rounded-full font-semibold text-base text-white transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 cursor-pointer flex items-center gap-2"
                >
                  <span>Book Technical Audit</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </a>

              <a href="#services">
                <button
                  type="button"
                  className="group relative px-6 py-3 h-12 rounded-full font-medium text-base text-white/90 transition-all duration-300 hover:bg-white/5 cursor-pointer"
                >
                  View Capabilities
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
