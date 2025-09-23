export default function ShopTeaser() {
  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="text-sm text-cyan-400 tracking-wider">SHOP</div>
          <h2 className="text-3xl lg:text-4xl font-medium">Robotics Kits & Components</h2>
          <p className="text-gray-300">We supply educational robotics kits, components and tools for schools, students and makers. Visit our shop page for locations and contact.</p>
          <a href="/shop" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg">Visit Shop</a>
        </div>
        <div>
          <img src="/images/students3.png" alt="Shop teaser" className="w-full h-64 object-cover rounded-xl border border-gray-700" />
        </div>
      </div>
    </section>
  )
}



