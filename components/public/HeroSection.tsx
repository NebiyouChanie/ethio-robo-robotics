"use client"

import { Cog } from "lucide-react";
import MotionCTA from "./CustomButton";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection(){
    const [ref1, inView1] = useIntersectionObserver({ threshold: 0.1 });
    const [ref2, inView2] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="py-32 px-4 section-alt">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref1} className={`space-y-6 animate-fade-up ${inView1?.isIntersecting ? 'visible' : ''}`}>
            <div className="text-sm brand-text tracking-wider">ROBOTICS INNOVATORS</div>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-balance">
              Success Begins <span className="brand-text">At Early Age</span> 
            </h1>
            <p className="text-gray-300 text- leading-relaxed max-w-lg">
            Learn, Compete, and Create with Ethio Robo Robotics. We provide interactive STEM education that prepares students for a technology-driven future
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MotionCTA  >Explore Our Services</MotionCTA>
              <MotionCTA variant="outline">Explore Competitions</MotionCTA>
            </div>
          </div>

          <div ref={ref2} className={`relative animate-fade-up ${inView2?.isIntersecting ? 'visible' : ''}`}>
            <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-96 mx-auto overflow-hidden">
              <div className="absolute inset-0 brand-gradient/20 rounded-2xl blur-xl pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, var(--primary), var(--secondary))`, opacity: 0.2 }}></div>
              <img
                src="/images/students1.png"
                alt="Students building robots"
                className="relative w-full h-full object-cover rounded-2xl border border-[color:var(--primary)]/30 select-none"
              />
            </div>
            {/* floating gears outside the clipped container */}
            <div className="absolute -top-4 -right-4 opacity-90 animate-spin-slow z-10">
              <Cog className="w-8 h-8 text-[var(--secondary)] drop-shadow-[0_0_10px_rgba(237,33,36,0.5)]" />
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-80 animate-spin-slow-reverse z-10">
              <Cog className="w-6 h-6 text-[var(--primary)] drop-shadow-[0_0_8px_rgba(45,53,129,0.5)]" />
            </div>
          </div>
        </div>
      </section>
    )
}