"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function StoriesSection(){
    const [ref1, inView1] = useIntersectionObserver({ threshold: 0.1 });
    const [ref2, inView2] = useIntersectionObserver({ threshold: 0.1 });
    const [ref3, inView3] = useIntersectionObserver({ threshold: 0.1 });
    const [ref4, inView4] = useIntersectionObserver({ threshold: 0.1 });
    const [ref5, inView5] = useIntersectionObserver({ threshold: 0.1 });
    const [ref6, inView6] = useIntersectionObserver({ threshold: 0.1 });
    const [ref7, inView7] = useIntersectionObserver({ threshold: 0.1 });
    const [ref8, inView8] = useIntersectionObserver({ threshold: 0.1 });
    const [ref9, inView9] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div ref={ref1} className={`text-sm text-cyan-400 tracking-wider mb-2 animate-fade-in ${inView1?.isIntersecting ? 'visible' : ''}`}>STUDENT SUCCESS</div>
            <h2 ref={ref2} className={`text-4xl lg:text-5xl font-medium animate-fade-up ${inView2?.isIntersecting ? 'visible' : ''}`}>
              Stories in <span className="text-cyan-400">Snapshots</span>
            </h2>
          </div>

          <div className="flex justify-center items-start gap-8 flex-wrap mt-6 mb-12">
            {/* Card 1 */}
            <div ref={ref3} className={`relative w-[250px] h-[250px] transform -rotate-3 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView3?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-slate-100 p-2 pb-8 rounded shadow-lg">
                <img src="/images/students1.png" alt="First Robot Built" className="object-cover w-full h-full rounded-md" />
              </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">First Robot Built</p>
            </div>

            {/* Card 2 */}
            <div ref={ref4} className={`relative w-[250px] h-[250px] transform rotate-6 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView4?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-white p-2 rounded shadow-lg">
                <img src="/images/students3.png" alt="Regional Winners" className="object-cover w-full h-full rounded-md" />
              </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">Regional Winners</p>
                </div>

            {/* Card 3 */}
            <div ref={ref5} className={`relative w-[250px] h-[250px] transform -rotate-6 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView5?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-white p-2 rounded shadow-lg">
                <img src="/images/mr2.png" alt="Team Collaboration" className="object-cover w-full h-full rounded-md" />
              </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">Team Collaboration</p>
            </div>

            {/* Card 4 */}
            <div ref={ref6} className={`relative w-[250px] h-[250px] transform rotate-3 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView6?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-white p-2 rounded shadow-lg">
                <img src="/images/students5.png" alt="From Idea to Demo" className="object-cover w-full h-full rounded-md" />
          </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">From Idea to Demo</p>
        </div>

            {/* Card 5 */}
            <div ref={ref7} className={`relative w-[250px] h-[250px] transform -rotate-2 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView7?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-white p-2 rounded shadow-lg">
                <img src="/images/location1.png" alt="Campus Workshop" className="object-cover w-full h-full rounded-md" />
              </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">Campus Workshop</p>
            </div>

            {/* Card 6 */}
            <div ref={ref8} className={`relative w-[250px] h-[250px] transform rotate-5 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView8?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-white p-2 rounded shadow-lg">
                <img src="/images/location3.png" alt="Prototype Day" className="object-cover w-full h-full rounded-md" />
              </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">Prototype Day</p>
            </div>

            {/* Card 7 */}
            <div ref={ref9} className={`relative w-[250px] h-[250px] transform -rotate-8 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView9?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-white p-2 rounded shadow-lg">
                <img src="/images/location5.png" alt="Showcase Event" className="object-cover w-full h-full rounded-md" />
              </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">Showcase Event</p>
            </div>
            
             {/* Card 4 */}
             <div ref={ref6} className={`relative w-[250px] h-[250px] transform rotate-3 hover:scale-110 hover:rotate-0 transition-all duration-700 ease-in-out animate-rotate-in ${inView6?.isIntersecting ? 'visible' : ''}`}>
              <div className="w-full h-full bg-white p-2 rounded shadow-lg">
                <img src="/images/students1.png" alt="From Idea to Demo" className="object-cover w-full h-full rounded-md" />
          </div>
              <p className="bg-white w-[250px] text-center absolute bottom-2 font-semibold text-black text-sm">From Idea to Demo</p>
        </div>
          </div>
        </div>
      </section>
    )
}