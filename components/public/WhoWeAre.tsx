"use client"

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

function Counter({ from = 0, to, suffix = "", duration = 1800 }: { from?: number; to: number; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement | null>(null)
    const [value, setValue] = useState(from)
    const [inView, setInView] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        },
        { threshold: 0.1 }
      )
      
      if (ref.current) {
        observer.observe(ref.current)
      }
      
      return () => observer.disconnect()
    }, [])
  
    useEffect(() => {
      if (inView) {
        const startTime = Date.now()
        const startValue = from
        const endValue = to
        const totalDuration = duration
        
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / totalDuration, 1)
          const easeOut = 1 - Math.pow(1 - progress, 3)
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut)
          
          setValue(currentValue)
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        
        requestAnimationFrame(animate)
      }
    }, [inView, from, to, duration])
  
    return (
      <span ref={ref} className="tabular-nums">{value}{suffix}</span>
    )
  }
  
export default function WhoWeAreSection(){
    const [ref1, inView1] = useIntersectionObserver({ threshold: 0.1 });
    const [ref2, inView2] = useIntersectionObserver({ threshold: 0.1 });
    const [ref3, inView3] = useIntersectionObserver({ threshold: 0.1 });
    const [ref4, inView4] = useIntersectionObserver({ threshold: 0.1 });
    const [ref5, inView5] = useIntersectionObserver({ threshold: 0.1 });

    return (
      <section className="py-32 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 ref={ref1} className={`text-4xl lg:text-5xl font-medium mb-12 text-balance animate-fade-up ${inView1?.isIntersecting ? 'visible' : ''}`}>
            Impact in <span className="text-cyan-400">Numbers</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div ref={ref2} className={`animate-fade-in ${inView2?.isIntersecting ? 'visible' : ''}`}>
              <div className="text-3xl lg:text-5xl font-extrabold text-cyan-400 mb-2">
                <Counter to={14} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm">Years Inspiring Students</div>
            </div>

            <div ref={ref3} className={`animate-bounce-in ${inView3?.isIntersecting ? 'visible' : ''}`}>
              <div className="text-3xl lg:text-5xl font-extrabold text-cyan-400 mb-2">
                <Counter to={2500} suffix="+" />
            </div>
              <div className="text-gray-300 text-sm">Students Trained</div>
            </div>

            <div ref={ref4} className={`animate-bounce-in ${inView4?.isIntersecting ? 'visible' : ''}`}>
              <div className="text-3xl lg:text-5xl font-extrabold text-cyan-400 mb-2">
                <Counter to={45}  />
            </div>
              <div className="text-gray-300 text-sm">Competitions Hosted</div>
            </div>

            <div ref={ref5} className={`animate-bounce-in ${inView5?.isIntersecting ? 'visible' : ''}`}>
              <div className="text-3xl lg:text-5xl font-extrabold text-cyan-400 mb-2">
                <Counter to={15} suffix="+"/>
            </div>
              <div className="text-gray-300 text-sm"> School STEM Labs Built </div>
            </div>
          </div>
        </div>
      </section>
    )
}