'use client'

import { MapPin } from "lucide-react"
 

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-5xl font-medium mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Comprehensive robotics education programs for schools, students, and educators. We build labs, train teams,
            and empower teachers with the tools and knowledge to inspire innovation.
          </p>
        </div>
      </section>

      
      {/* Robotics Education and Training */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/students1.png" alt="Robotics Education" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-2xl lg:text-3xl font-medium mb-3">Robotics Education and Training</h2>
              <p className="text-gray-400 leading-relaxed mb-4">We provide robotics education and training from elementary to university level, offering hands-on learning in designing, engineering, and coding. Our programs include customized AI trainings workshops for students aimed to build practical skills, foster creativity, and inspire innovation in STEM fields.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Elementary Level</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">University Level</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">AI Workshops</div>
              </div>
            </div>
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/students2.png" alt="Robotics Competitions" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-2xl lg:text-3xl font-medium mb-3">Robotics Competitions & Events</h2>
              <p className="text-gray-400 leading-relaxed mb-4">We organize different regional and national robotics events, hackathons and also host the annual African Robotics Championship. All African students from Elementary to University are invited to participate.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Regional Events</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">National Events</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">African Championship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Consultancy Services for Schools Setting-Up New STEM Labs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/students3.png" alt="STEM Labs" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-2xl lg:text-3xl font-medium mb-3">Consultancy Services for Schools Setting-Up New STEM Labs</h2>
              <p className="text-gray-400 leading-relaxed mb-4">To establish a successful STEM Robotics lab in Ethiopian schools and universities, we provide a comprehensive approach that helps students learn STEM in a more engaging and effective way.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Lab Design</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Equipment Setup</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Training Support</div>
              </div>
            </div>
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/students4.png" alt="Teacher Training" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-2xl lg:text-3xl font-medium mb-3">STEM-Teacher Training</h2>
              <p className="text-gray-400 leading-relaxed mb-4">Our STEM-Teacher program transforms educators into confident and skilled robotics instructors. We provide tailored, hands-on STEM training that builds their expertise and enables them to inspire the next generation of innovators.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Hands-on Training</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Curriculum Development</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Ongoing Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Offering Tailored STEM Workshops and Summer Campus */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/students5.png" alt="STEM Workshops" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-2xl lg:text-3xl font-medium mb-3">Offering Tailored STEM Workshops and Summer Campus</h2>
              <p className="text-gray-400 leading-relaxed mb-4">Our customized STEM workshops and summer camps provide students with practical experience in robotics, coding, AI, and engineering. They will gain valuable skills in critical thinking and problem-solving.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Summer Camps</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Custom Workshops</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Problem Solving</div>
              </div>
            </div>
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/students3.png" alt="Practice & Facilities" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-2xl lg:text-3xl font-medium mb-3">Practice & Facilities</h2>
              <p className="text-gray-400 leading-relaxed mb-4">Access to fields, scrimmages, and mock judging for competition readiness.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Scrimmages</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Mock Judging</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg text-cyan-300 text-sm">Field Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Opportunities */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6">
            Represent <span className="text-cyan-400">Ethiopia</span> on the World Stage
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            Success in our national competitions opens doors to the VEX Robotics World Championship. Ethiopian students
            have achieved remarkable results representing our nation globally in prestigious events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">USA</h3>
              <p className="text-gray-400 text-sm">VEX World Championship in Dallas, Texas</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Canada</h3>
              <p className="text-gray-400 text-sm">North American competitions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Global</h3>
              <p className="text-gray-400 text-sm">Australia, Europe, and China events</p>
            </div>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Register
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-4">Ready to Bring Robotics to Your School?</h2>
          <p className="text-gray-300 mb-8">Contact us to design a program tailored to your needs.</p>
          <a href="/competitions" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Explore Competitions
          </a>
        </div>
      </section>

    </div>
  )
}
