'use client'

import { MapPin } from "lucide-react"
 

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-5xl font-medium mb-6">
            Our <span className="brand-text">Services</span>
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
              <img src="/images/students1.png" alt="Robotics Education" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-xl lg:text-2xl font-medium mb-3 ">Robotics Education and Training</h2>
              <p className="text-gray-400 leading-relaxed mb-4">We provide robotics education and training from elementary to university level, offering immersive learning in designing, engineering, and coding. Our programs include customized AI trainings workshops for students aimed to build practical skills, foster creativity, and inspire innovation in STEM fields.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Elementary Level</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">University Level</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">AI Workshops</div>
              </div>
            </div>
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/images/students2.png" alt="Robotics Competitions" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-xl lg:text-2xl font-medium mb-3 ">Robotics Competitions & Events</h2>
              <p className="text-gray-400 leading-relaxed mb-4">We organize different regional and national robotics events, hackathons and also host the annual African Robotics Championship. All African students from Elementary to University are invited to participate.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Regional Events</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">National Events</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">African Championship</div>
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
              <img src="/images/students3.png" alt="STEM Labs" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-xl lg:text-2xl font-medium mb-3 ">Consultancy Services for Schools Setting-Up New STEM Labs</h2>
              <p className="text-gray-400 leading-relaxed mb-4">To establish a successful STEM Robotics lab in Ethiopian schools and universities, we provide a comprehensive approach that helps students learn STEM in a more engaging and effective way.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Lab Design</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Equipment Setup</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Training Support</div>
              </div>
            </div>
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
              <img src="/images/students3.png" alt="Teacher Training" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-xl lg:text-2xl font-medium mb-3 ">STEM-Teacher Training</h2>
              <p className="text-gray-400 leading-relaxed mb-4">Our STEM-Teacher program transforms educators into confident and skilled robotics instructors. We provide tailored, practical STEM training that builds their expertise and enables them to inspire the next generation of innovators.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Practical Training</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Curriculum Development</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Ongoing Support</div>
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
              <img src="/images/students5.png" alt="STEM Workshops" className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" />
              <h2 className="text-xl lg:text-2xl font-medium mb-3 ">Offering Tailored STEM Workshops and Summer Campus</h2>
              <p className="text-gray-400 leading-relaxed mb-4">Our customized STEM workshops and summer camps provide students with practical experience in robotics, coding, AI, and engineering. They will gain valuable skills in critical thinking and problem-solving.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Summer Camps</div>
                <div className="bg-primary  border border-primary px-3 py-1.5 rounded-lg  text-sm">Custom Workshops</div>
                <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">Problem Solving</div>
              </div>
            </div>
            <div className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700">
  <img 
    src="/images/students3.png" 
    alt="International Competition Preparation" 
    className="w-full h-56 object-cover rounded-xl border border-gray-700 mb-6" 
  />
  <h2 className="text-xl lg:text-2xl font-medium mb-3 ">
    International Competition Preparation
  </h2>
  <p className="text-gray-400 leading-relaxed mb-4">
    We prepare students for the ARC robotics competition through elite training, professional coaching, competition entry, and complete travel support — empowering them to compete on the global stage.
  </p>
  <div className="flex flex-wrap gap-3">
    <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">
      Elite Training
    </div>
    <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">
      Professional Coaching
    </div>
    <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">
      Competition Entry
    </div>
    <div className="bg-primary border border-primary px-3 py-1.5 rounded-lg  text-sm">
      Travel Support
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

  

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-4">Ready to Bring Robotics to Your School or University?</h2>
          <p className="text-gray-300 mb-8">Contact us to design a program tailored to your needs.</p>
          <a href="/contact" className="inline-block brand-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Us
          </a>
        </div>
      </section>

    </div>
  )
}
