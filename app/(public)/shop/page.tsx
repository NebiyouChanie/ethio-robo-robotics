export default function ShopPage() {
  return (
    <section className="py-20 px-4  bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-medium mb-4">Robotics & Electronics <span className="brand-text">Shop</span></h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We supply educational robotics kits, electronic components, and innovation tools for students, schools, and makers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800/60 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl brand-text  mb-4">About Our Shop</h2>
            <p className="text-gray-300 leading-relaxed">
              From beginner-friendly robotics kits to parts for advanced projects, our shop supports hands‑on learning and innovation.
              Visit us to explore kits, controllers, sensors, and learning resources—perfect for classrooms and hobby projects.
            </p>
             
          </div>

          <aside className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-medium mb-4 brand-text">Get In Touch</h2>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-gray-400">Email</div>
                <div className="text-white">ethiorobo@gmail.com</div>
              </div>
              <div>
                <div className="text-gray-400">Phone</div>
                <div className="text-white">+251-911675401</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 bg-gray-800/60 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-xl font-medium mb-4 brand-text">Our Locations</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-300">
            <li className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">CMC (Addis International Convention Center)</li>
            <li className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">Bole Tk Building</li>
            <li className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">Bole Reality Plaza</li>
            <li className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">Bisrate Gebriel</li>
          </ul>
          <div className="mt-6">
            <img src="/images/shop.JPG" alt="Our shop and equipment" className="w-full h-128 object-cover rounded-xl border border-gray-700" />
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="inline-block brand-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

 