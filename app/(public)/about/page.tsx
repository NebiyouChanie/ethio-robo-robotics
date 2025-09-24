"use client"

import { Heart, Lightbulb, Trophy } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function AboutPage() {
  const [refHeroText, inViewHeroText] = useIntersectionObserver({ threshold: 0.1 })
  const [refHeroImg, inViewHeroImg] = useIntersectionObserver({ threshold: 0.1 })
  const [refHistoryHead, inViewHistoryHead] = useIntersectionObserver({ threshold: 0.1 })
  const [refHistoryList, inViewHistoryList] = useIntersectionObserver({ threshold: 0.1 })
  const [refMVVHead, inViewMVVHead] = useIntersectionObserver({ threshold: 0.1 })
  const [refMVVGrid, inViewMVVGrid] = useIntersectionObserver({ threshold: 0.1 })
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero: Who we are (centered, image below text) */}
      <section className="py-24 px-4 bg-gray-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <div ref={refHeroText} className={`space-y-6 animate-fade-up ${inViewHeroText?.isIntersecting ? 'visible' : ''}`}>
            <div className="text-sm text-cyan-400 tracking-wider">ABOUT ETHIO ROBO ROBOTICS</div>
            <h1 className="text-5xl lg:text-5xl font-medium leading-tight">Who We Are</h1>
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto">
              Ethio Robo Robotics is an education-focused organization advancing practical STEM learning in Ethiopia and
              Africa. Since 2011, we have provided immersive robotics programs, teacher training, and competitions that
              help students build real engineering and problem solving skills.
            </p>
          </div>
          <div ref={refHeroImg} className={`mt-10 animate-fade-up ${inViewHeroImg?.isIntersecting ? 'visible' : ''}`}>
            <img src="/images/students1.png" alt="Students in robotics workshop" className="w-full h-96 object-cover rounded-2xl border border-cyan-500/30" />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 ref={refMVVHead} className={`text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-up ${inViewMVVHead?.isIntersecting ? 'visible' : ''}`}>Mission, Vision & Values</h2>
          <div ref={refMVVGrid} className={`grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up ${inViewMVVGrid?.isIntersecting ? 'visible' : ''}`}>
            <div className="bg-gray-900/60 p-8 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl font-bold mb-2">Our Mission</div>
              <p className="text-gray-300 text-sm leading-relaxed">Inspire the next generation of engineers, programmers, and problem-solvers by providing world-class robotics education and organizing high-impact competitions that drive technological advancement in Ethiopia and beyond.</p>
            </div>
            <div className="bg-gray-900/60 p-8 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl font-bold mb-2">Our Vision</div>
              <p className="text-gray-300 text-sm leading-relaxed">Cultivate a generation of innovators and leaders who transform Ethiopia and Africa through robotics, programming, and technology-driven solutions.</p>
            </div>
            <div className="bg-gray-900/60 p-8 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl font-bold mb-2">Our Values</div>
              <p className="text-gray-300 text-sm leading-relaxed">Innovation, teamwork, inclusivity, and excellence—guiding how we teach, mentor, and compete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 ref={refHistoryHead} className={`text-3xl lg:text-4xl font-bold mb-10 text-center animate-fade-up ${inViewHistoryHead?.isIntersecting ? 'visible' : ''}`}>Our History</h2>
          <div ref={refHistoryList} className={`relative animate-fade-up ${inViewHistoryList?.isIntersecting ? 'visible' : ''}`}>
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800 md:left-1/2" />
            <div className="space-y-10">
              {[
                { year: '2011', title: 'Foundation & Early Programs', text: 'Founded Ethio Robo Robotics Center. Launched STEM education in Ethiopia.' },
                { year: '2016', title: 'First International Participation', text: 'First participation in USA VEX Robotics Competition.' },
                { year: '2020', title: 'Expansion & Structured Training', text: 'Expanded robotics programs to schools and introduced structured VEX training.' },
                { year: '2022', title: 'First African Robotics Championship', text: 'Co-organized first ARC with MinT; hosted 40+ teams.' },
                { year: '2023', title: 'Global Competitions & ARC 2023', text: 'Held ARC 2023 (40+ teams, 500+ students). Represented Ethiopia in China. Won medals in USA VEX Competition.' },
                { year: '2024', title: 'ARC 2024 & National Growth', text: 'Held ARC 2024 (40+ teams, 700+ students). Achieved top awards in ENJOY AI Global and USA VEX Competitions. Expanded national STEM initiatives.' },
              ].map((m, i) => (
                <div key={i} className={`relative md:grid md:grid-cols-2 md:gap-12 items-start`}>
                  <div className={`hidden md:block ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}></div>
                  <div className={`relative bg-gray-800/60 border border-gray-700 rounded-xl p-6`}> 
                    <div className="absolute -left-3 md:-translate-x-1/2 md:left-1/2 top-6 w-3 h-3 rounded-full bg-cyan-400 border-2 border-gray-900" />
                    <div className="text-sm text-cyan-300 font-semibold">{m.year}</div>
                    <div className="text-white font-semibold">{m.title}</div>
                    <div className="text-gray-300 text-sm leading-relaxed mt-1">{m.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      
     
    </div>
  )
}
