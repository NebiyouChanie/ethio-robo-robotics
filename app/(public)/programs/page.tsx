'use client'

 

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-5xl font-medium mb-6">
            Our <span className="brand-text">Programs</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Structured learning tracks tailored for students, educators, and competition teams. Hands-on projects,
            real tools, and guided mentorship from beginner to advanced.
          </p>
        </div>
      </section>

      {/* Elementary & Middle School */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-medium brand-text">Elementary & Middle School Level Training</h2>
              <p className="text-gray-400 leading-relaxed">
                Introduction to robotics using VEX IQ platform. Students learn basic programming, mechanical design,
                and problem-solving skills through engaging, hands-on activities.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">VEX IQ Kit Included</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Basic Programming</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Team Projects</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Certificate</span>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/students1.png" alt="Elementary & Middle School" className="w-full h-80 object-cover rounded-xl border border-gray-700" />
            </div>
          </div>
        </div>
      </section>

      {/* High School */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/images/students2.png" alt="High School" className="w-full h-80 object-cover rounded-xl border border-gray-700" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-medium brand-text">High School Level</h2>
              <p className="text-gray-400 leading-relaxed">
                Introduction to robotics using VEX V5 platform. Students learn programming, mechanical design, and
                competition strategies while building progressively complex robots.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">VEX V5 Kit Included</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Programming</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Team Projects</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College & University */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-medium brand-text">College & University Level Training</h2>
              <p className="text-gray-400 leading-relaxed">
                Advanced robotics with VEX V5 system. Complex programming, sensor integration, and competitive robotics
                preparation with mentorship and project reviews.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">VEX V5 Access</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Advanced Programming</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Competition Prep</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Mentorship</span>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/students3.png" alt="College & University" className="w-full h-80 object-cover rounded-xl border border-gray-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Programming - All Levels */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/images/mr1.png" alt="Programming" className="w-full h-80 object-cover rounded-xl border border-gray-700" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-medium brand-text">Programming </h2>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive coding program covering Scratch, C++ and Python. Build a portfolio with real projects using
                industry tools and best practices.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Multiple Languages</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Hands-on Projects</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Portfolio Building</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Industry Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Registration for ARC */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-medium brand-text">Team Registration for ARC</h2>
              <p className="text-gray-400 leading-relaxed">
                Elite training program for students preparing for national and international robotics competitions.
                Includes professional coaching, competition entry, and travel guidance.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Elite Training</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Competition Entry</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Professional Coaching</span>
                  <span className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Travel Support</span>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/students1.png" alt="ARC Team Registration" className="w-full h-80 object-cover rounded-xl border border-gray-700" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


