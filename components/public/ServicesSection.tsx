import { Beaker, GraduationCap, Lightbulb, Monitor, Trophy, Users } from "lucide-react";

export default function ServicesSection(){
    return (
      <section className="py-48 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-cyan-400 tracking-wider mb-2"   >OUR SERVICES</div>
          <h2 className="text-4xl lg:text-5xl font-medium"    >
            What We <span className="text-cyan-400">Offer</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto"  >
            Robotics education, competitions, and enablement for schools and communities across Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <GraduationCap className="w-6 h-6 text-cyan-400" />, title: "Robotics Education & Training", desc: "From elementary to university with hands‑on learning in design, engineering, and coding." },
            { icon: <Trophy className="w-6 h-6 text-cyan-400" />, title: "Robotics Competitions & Events", desc: "Regional and national events, hackathons, and the annual African Robotics Championship." },
            { icon: <Beaker className="w-6 h-6 text-cyan-400" />, title: "STEM Labs Consultancy", desc: "End‑to‑end setup for new STEM labs: equipment, curriculum, and implementation." },
            { icon: <Users className="w-6 h-6 text-cyan-400" />, title: "STEM‑Teacher Training", desc: "Transforms educators into confident robotics instructors with practical skills." },
            { icon: <Lightbulb className="w-6 h-6 text-cyan-400" />, title: "Workshops & Summer Camps", desc: "Tailored STEM workshops and camps covering robotics, coding, AI, and engineering." },
            { 
              icon: <Monitor className="w-6 h-6 text-cyan-400" />, 
              title: "International Competition Prep", 
              desc: "We prepare students for the ARC robotics competition with elite training, professional coaching, competition entry, and full travel support." 
            }
            ].map((s, i) => (
            <div key={i} className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">{s.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-3">{s.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}