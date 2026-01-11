"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import DockNavigation from "@/components/ui/dock-navigation";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <DockNavigation />

      <main className="relative flex grow flex-col">{children}</main>

      <Footer />
    </>
  );
}
