import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number = 20,
  className,
  color = "#6366f1",
}: {
  number?: number;
  className?: string;
  color?: string;
}) => {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] shadow-[0_0_0_1px_#ffffff10]",
            className,
          )}
          style={{
            backgroundColor: color,
            top: Math.floor(Math.random() * 400 - 200) + "px",
            left: Math.floor(Math.random() * 400 - 200) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        >
          <div 
            className="pointer-events-none absolute top-1/2 left-1/2 h-[1px] w-[50px] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r to-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${color}, transparent)`
            }}
          />
        </span>
      ))}
    </>
  );
};
