"use client"

import { Cpu } from "lucide-react";
import { useState } from "react";

export default function MotionCTA({ children, href, variant = "primary" }: { children: React.ReactNode; href?: string; variant?: "primary" | "outline" }) {
  const [hovered, setHovered] = useState(false)
  const base = variant === "primary"
    ? "bg-cyan-500 hover:bg-cyan-600 text-white cursor-pointer"
    : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white cursor-pointer"
  const Comp: any = href ? "a" : "button"
  return (
    <Comp
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-flex items-center gap-2 ${base}  w-fit px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-sm`}
    >
      <span
        aria-hidden
        className={`inline-flex text-white transition-transform duration-75 ease-in-out ${hovered ? 'animate-[spin_0.3s_linear_infinite]' : ''}`}
      >
        <Cpu className="w-4 h-4 text-cyan-400" />
      </span>
      {children}
    </Comp>
  )
}