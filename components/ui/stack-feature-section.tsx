"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAws, FaDocker, FaPython, FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiOpenai,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiVercel,
  SiGithubactions,
} from "react-icons/si";
import { Cloud, Brain, Zap } from "lucide-react";

const iconConfigs = [
  { Icon: FaAws, color: "#FF9900" }, // AWS
  { Icon: SiTerraform, color: "#7B42BC" }, // Terraform
  { Icon: FaDocker, color: "#2496ED" }, // Docker
  { Icon: SiKubernetes, color: "#326CE5" }, // Kubernetes
  { Icon: FaPython, color: "#3776AB" }, // Python
  { Icon: SiOpenai, color: "#412991" }, // OpenAI
  { Icon: SiTypescript, color: "#3178C6" }, // TypeScript
  { Icon: FaReact, color: "#61DAFB" }, // React
  { Icon: SiNextdotjs, color: "#FFFFFF" }, // Next.js
  { Icon: FaGitAlt, color: "#F05032" }, // Git
  { Icon: SiGithubactions, color: "#2088FF" }, // GitHub Actions
  { Icon: SiPostgresql, color: "#4169E1" }, // PostgreSQL
  { Icon: SiRedis, color: "#DC382D" }, // Redis
  { Icon: SiGraphql, color: "#E10098" }, // GraphQL
  { Icon: SiVercel, color: "#FFFFFF" }, // Vercel
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-32 px-6 md:pl-10 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-indigo-500/20 bg-gray-900/50 backdrop-blur-sm overflow-hidden rounded-3xl shadow-lg shadow-indigo-500/10">
      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 py-12 md:py-0">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-8 h-8 text-indigo-400" />
          <span className="text-indigo-400 font-semibold">Our Tech Stack</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
          Built on Enterprise Technology
        </h1>
        <p className="text-gray-300 mb-6 max-w-lg">
          We leverage battle-tested technologies to deliver cloud infrastructure
          that scales. From AWS and Terraform to OpenAI and Kubernetes, our
          stack ensures reliability and performance.
        </p>
        <div className="flex items-center gap-3">
          <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white shadow-lg shadow-indigo-500/50">
            <Link href="#contact">Book Technical Audit</Link>
          </Button>
          <Button
            variant="outline"
            className="border-indigo-400/30 text-white hover:bg-indigo-500/10"
          >
            View Services
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-full md:w-1/2 h-[30rem] flex items-center justify-center md:justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] md:translate-x-[50%] flex items-center justify-center">
          {/* Center Circle with Stryxon Logo */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center">
            <Zap className="w-12 h-12 text-white" fill="white" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-indigo-500/30"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(
                    orbitIdx * iconsPerOrbit,
                    orbitIdx * iconsPerOrbit + iconsPerOrbit
                  )
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-indigo-500/20 hover:scale-110 transition-transform"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon
                          className="w-8 h-8"
                          style={{ color: cfg.color }}
                        />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
