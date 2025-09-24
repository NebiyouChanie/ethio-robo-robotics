'use client'

import { Trophy, Star, Code, Users, Calendar, MapPin, Award, BookOpen, Globe, Target, Zap, CheckCircle, ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function CompetitionsPage() {
  const [refIntro, inViewIntro] = useIntersectionObserver({ threshold: 0.1 })
  const [refMainGrid, inViewMainGrid] = useIntersectionObserver({ threshold: 0.1 })
  const [refFriendHead, inViewFriendHead] = useIntersectionObserver({ threshold: 0.1 })
  const [refFriendGrid, inViewFriendGrid] = useIntersectionObserver({ threshold: 0.1 })
  const [refFriendActions, inViewFriendActions] = useIntersectionObserver({ threshold: 0.1 })
  const [refArcHead, inViewArcHead] = useIntersectionObserver({ threshold: 0.1 })
  const [refArcGrid, inViewArcGrid] = useIntersectionObserver({ threshold: 0.1 })
  const [refArcActions, inViewArcActions] = useIntersectionObserver({ threshold: 0.1 })
  const [refVexHead, inViewVexHead] = useIntersectionObserver({ threshold: 0.1 })
  const [refVexGrid, inViewVexGrid] = useIntersectionObserver({ threshold: 0.1 })
  const [refVexActions, inViewVexActions] = useIntersectionObserver({ threshold: 0.1 })
  const [refTrainHead, inViewTrainHead] = useIntersectionObserver({ threshold: 0.1 })
  const [refFaqHead, inViewFaqHead] = useIntersectionObserver({ threshold: 0.1 })
  const faqs = [
    {
      q: 'Can beginners participate?',
      a: 'Yes! We provide comprehensive instructions on how to start a team and prepare for competition. Robotics experience is not necessary - we welcome all skill levels.'
    },
    {
      q: 'Can one person compete alone?',
      a: 'No. Competitions are team activities designed to promote collaboration. A team must have at least 2 students working together, with a maximum of 6 students per team.'
    },
    {
      q: 'Can we use any robot?',
      a: 'No, you must use official VEX Robotics products (VEX IQ, VRC, or VEX U) as specified in the game manual for  division. This ensures fair competition and safety.'
    },
    {
      q: 'Do we build the robot at the event?',
      a: 'No. Robots must be designed and built before the tournament. The competition day is for inspection, practice, qualification matches, and eliminations.'
    },
    {
      q: 'What awards are available?',
      a: 'Awards include Tournament Champions, Excellence Award, Design Award, Judges Award, and more. Top teams may qualify for international competitions.'
    },
  ]
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const toggle = (idx: number) => setOpenIdx((prev) => (prev === idx ? null : idx))
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Shared gradient for icon strokes (match Services implementation) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>
      </svg>
      

      {/* Main Competitions Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={refIntro} className={`text-center mb-16 animate-fade-up ${inViewIntro?.isIntersecting ? 'visible' : ''}`}>
            <div className="text-sm brand-text tracking-wider mb-4 hidden md:block">OUR COMPETITIONS</div>
            <h2 className="text-4xl lg:text-5xl font-medium mb-6">
              A Platform for <span className="brand-text">Excellence</span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto hidden md:block">
              We believe competition is a powerful catalyst for learning. Our events are
              dynamic, game-based engineering challenges where classroom STEM concepts are put to the ultimate test.
              Students learn invaluable lifelong skills in teamwork, leadership, communication, and perseverance.
            </p>
          </div>

          <div ref={refMainGrid} className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12`}>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all">
              {/* <Trophy className="w-12 h-12 text-cyan-400 mb-6" /> */}
              <h3 className="text-xl font mb-4">African Robotics Championship</h3>
              <p className="text-gray-400 mb-4">
                Our flagship event, organized in collaboration with the Ministry of Innovation and Technology, bringing
                together the brightest young minds from across the continent.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Annual Event</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Addis Ababa</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all">
              {/* <Star className="w-12 h-12 text-cyan-400 mb-6" /> */}
              <h3 className="text-xl  mb-4">Friendship Competitions</h3>
              <p className="text-gray-400 mb-4">
                We organize national robotics competitions in Addis Ababa, providing a platform for Ethiopian students
                to showcase their skills and qualify for international events.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Hosted multiple times throughout the year</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Addis Ababa</span>

                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all">
              {/* <Code className="w-12 h-12 text-cyan-400 mb-6" /> */}
            
              <h3 className="text-xl  mb-4">International Opportunities</h3>
              <p className="text-gray-400 mb-4">
                Winning teams get the opportunity to represent Ethiopia and compete in prestigious global events like
                the VEX World Championship in the USA, Canada, Australia, Europe, and China.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Global Stage</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Worldwide</span>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </section>

      {/* Frendship */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div ref={refFriendHead} className={`text-center mb-8 animate-fade-up ${inViewFriendHead?.isIntersecting ? 'visible' : ''}`}>
            <h2 className="text-4xl font-semibold mb-4">
              The <span className="brand-text">Friendship </span>  Competitions
            </h2>
            <p className="text-gray-300 hidden md:block">For Schools & Communities in Addis Ababa</p>
          </div>

          {/* Content grid with side image on large screens */}
          <div ref={refFriendGrid} className={`grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 items-stretch`}>
            {/* Left content cards */}
            <div className="order-2 lg:order-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Trophy className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">About Frendship competitions</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Friendly robotics events designed for practice, collaboration, and learning. Teams use VEX robots to gain experience and prepare for higher-level competitions.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Star className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">Competition Levels</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX IQ:</strong> Grades 1-8</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX V5:</strong> Grades 9-12</span></div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <MapPin className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">When & Where</h3>
               <p className="text-gray-400 text-sm mb-2"> Addis Ababa • Multiple Dates</p>
              <p className="text-gray-400 text-sm">
                Event details are shared with each game release — stay tuned for updates!
              </p>

              </div>
            </div>

            {/* Right-side supporting image on large screens */}
            <div className="order-1 lg:order-2 lg:block">
              <img src="/images/mr2.png" alt="African Robotics Championship" className="w-full h-full object-cover rounded-xl border border-gray-700" />
            </div>
          </div>

          {/* Actions */}
          <div ref={refFriendActions} className={`flex items-center justify-center  mb-8 gap-4 animate-fade-up ${inViewFriendActions?.isIntersecting ? 'visible' : ''}`}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register" className="w-full brand-gradient hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                Register  Team
              </a>
               
            </div>
          </div>
        </div>
      </section>

      {/* African Robotics Championship */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div ref={refArcHead} className={`text-center mb-8 animate-fade-up ${inViewArcHead?.isIntersecting ? 'visible' : ''}`}>
            <h2 className="text-4xl font-semibold mb-4">
              The <span className="brand-text">African Robotics</span> Championship
            </h2>
            <p className="text-gray-300 hidden md:block">The Premier Robotics Event in Africa</p>
          </div>

          {/* Content grid with side image on large screens */}
          <div ref={refArcGrid} className={`grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 items-stretch`}>
            {/* Left content cards */}
            <div className="order-2 lg:order-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Trophy className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">About ARC</h3>
                <p className="text-gray-400 text-sm mb-4">
                  ARC is our flagship event with the Ministry of Innovation and Technology, bringing together the
                  brightest young minds across the continent for hands-on STEM competition.
                </p>
                 
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Star className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">Competition Levels</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX IQ:</strong> Grades 1-8</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX V5:</strong> Grades 9-12</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX U:</strong> College & University</span></div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <MapPin className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">When & Where</h3>
                <p className="text-gray-400 text-sm mb-2">Addis Ababa • January 29, 2026</p>
                <p className="text-gray-400 text-sm">Registration closes on December 31, 2025</p>
              </div>
            </div>

            {/* Right-side supporting image on large screens */}
            <div className="order-1 lg:order-2 lg:block">
              <img src="/images/mr2.png" alt="African Robotics Championship" className="w-full h-full object-cover rounded-xl border border-gray-700" />
            </div>
          </div>

          {/* Actions */}
          <div ref={refArcActions} className={`flex items-center justify-center  mb-8 gap-4 animate-fade-up ${inViewArcActions?.isIntersecting ? 'visible' : ''}`}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register" className="brand-gradient hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                Register  Team
              </a>
              <a href="/one.pdf" download className="rounded-lg p-[1px] brand-gradient">
                <span className="block bg-gray-800 text-white hover:bg-gray-800/80 px-6 py-3 rounded-lg font-medium text-center">Download ARC Details (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VEX Competition Details */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div ref={refVexHead} className={`text-center mb-8 animate-fade-up ${inViewVexHead?.isIntersecting ? 'visible' : ''}`}>
            <h2 className="text-3xl font-semibold mb-4">VEX Robotics <span className="brand-text">Competitions</span></h2>
            <p className="text-gray-300 hidden md:block">World’s leading international robotics competition program</p>
          </div>

        

          {/* Content grid with side image on large screens */}
          <div ref={refVexGrid} className={`grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12`}>
            <div className="order-2 lg:order-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <BookOpen className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">About VEX</h3>
                <p className="text-gray-400 text-sm mb-4">
                  VEX Robotics is the world’s largest and most recognized educational robotics platform, helping students develop STEM skills through fun, competitive challenges.
                </p>
                 
              </div>
              

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Star className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">Competition Levels</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX IQ:</strong> Grades 1-8</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX V5:</strong> Grades 9-12</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span><strong>VEX U:</strong> College & University</span></div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <MapPin className="w-12 h-12 mb-4" color="url(#brandGradient)"  />
                <h3 className="text-xl font-semibold mb-3">When & Where</h3>
                <p className="text-gray-400 text-sm mb-2">USA • April 1, 2026</p>
                {/* <p className="text-gray-400 text-sm">Entry is determined by REC Foundation / Event Rules.</p> */}
              </div>
            </div>
            

            {/* Right-side supporting image on large screens */}
            <div className="block order-1 lg:order-2 lg:block">
              <img src="/images/students3.png" alt="VEX event" className="w-full h-full object-cover rounded-xl border border-gray-700" />
            </div>
          </div>
          {/* Actions */}
          <div ref={refVexActions} className={`flex items-center justify-center  mb-8 gap-4 animate-fade-up ${inViewVexActions?.isIntersecting ? 'visible' : ''}`}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/register" className="brand-gradient hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                Register  Team
              </a>
              <a href="/one.pdf" download className="rounded-lg p-[1px] brand-gradient">
                <span className="block bg-gray-800 text-white hover:bg-gray-800/80 px-6 py-3 rounded-lg font-medium text-center">Download VEX Details (PDF)</span>
              </a>
            </div>
          </div>
        </div>
        
      </section>

      

      
      {/* Training & Support */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={refTrainHead} className={`text-center mb-16 animate-fade-up ${inViewTrainHead?.isIntersecting ? 'visible' : ''}`}>
            <h2 className="text-3xl font-semibold mb-5">Training & <span className="brand-text">Support</span></h2>
            <p className="text-gray-400">We provide comprehensive support to help you succeed</p>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" color="url(#brandGradient)"  />
              </div>
              <h3 className="font-medium mb-2">Expert Mentorship</h3>
              <p className="text-gray-400 text-sm">Guidance from experienced robotics educators</p>
            </div>
 

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" color="url(#brandGradient)"  />
              </div>
              <h3 className="font-medium mb-2">Recognition</h3>
              <p className="text-gray-400 text-sm">Certificates, trophies, and opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div ref={refFaqHead} className={`text-center mb-16 animate-fade-up ${inViewFaqHead?.isIntersecting ? 'visible' : ''}`}>
            <h2 className="text-3xl font-semibold mb-6">Frequently Asked <span className="brand-text">Questions</span></h2>
            <p className="text-gray-300">Common questions about robotics competitions</p>
          </div>

          <div className="divide-y divide-gray-800 rounded-lg border border-gray-700 bg-gray-800/60">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx
              return (
                <div key={idx}>
                  <button onClick={() => toggle(idx)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                    <span className="text-base md:text-lg   text-white">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}   />
                  </button>
                  <div className={`px-6 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
                  </div>
                  {idx < faqs.length - 1 && <div className="h-px bg-gray-800" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
