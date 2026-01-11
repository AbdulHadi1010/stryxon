"use client";

import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import AOS from "aos";
import "aos/dist/aos.css";

import DockNavigation from "@/components/ui/dock-navigation";
import Footer from "@/components/ui/footer";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DockNavigation />

      <main className="relative flex grow flex-col">{children}</main>

      <Footer />
    </ErrorBoundary>
  );
}
