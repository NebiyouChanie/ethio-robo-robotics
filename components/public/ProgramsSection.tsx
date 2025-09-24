"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Link from "next/link";

export default function ProgramsSection(){
    const [ref1, inView1] = useIntersectionObserver({ threshold: 0.1 });
    const [ref2, inView2] = useIntersectionObserver({ threshold: 0.1 });
    const [ref3, inView3] = useIntersectionObserver({ threshold: 0.1 });
    const [ref4, inView4] = useIntersectionObserver({ threshold: 0.1 });
    const [ref5, inView5] = useIntersectionObserver({ threshold: 0.1 });
    const [ref6, inView6] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div ref={ref1} className={`text-sm text-cyan-400 tracking-wider mb-4 animate-fade-in ${inView1?.isIntersecting ? 'visible' : ''}`}>PROGRAMS</div>
            <h2 ref={ref2} className={`text-4xl lg:text-5xl font-medium mb-6 animate-fade-up ${inView2?.isIntersecting ? 'visible' : ''}`} >
              Explore Our <span className="text-cyan-400">Programs</span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto" >
            Empowering students with robotics and coding pathways that grow with them, from curious beginners to advanced competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[{
              img: '/images/students1.png',
              alt: 'Elementary & Middle School Training',
              title: 'Elementary & Middle School Training',
              desc: 'VEX IQ foundations in coding, design, and problem‑solving.'
            },{
              img: '/images/students3.png',
              alt: 'Programming',
              title: 'Programming (All Levels)',
              desc: 'Scratch, C++, and Python. Projects, portfolio, and tools.'
            },{
              img: '/images/mr2.png',
              alt: 'High School Training',
              title: 'High School Level',
              desc: 'VEX V5 fundamentals: coding, mechanics, and challenge strategy.'
            },{
              img: '/images/location3.png',
              alt: 'College & University Training',
              title: 'College & University Training',
              desc: 'Advanced VEX V5: sensors, algorithms, and competition prep.'
            }].map((card, idx) => (
              <div key={idx} ref={[ref3, ref4, ref5, ref6][idx]} className={`relative rounded-xl overflow-hidden border border-gray-700 group h-72 animate-scale-in ${[inView3, inView4, inView5, inView6][idx]?.isIntersecting ? 'visible' : ''}`}>
                <Link href="/programs" className="relative block h-full">
                  <img src={card.img} alt={card.alt} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-medium mb-2 force-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{card.title}</h3>
                    <p className="force-gray-100 text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{card.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}