import { Mail, Phone, MapPin, Send, Music2, Facebook, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-cyan-400 font-bold text-xl mb-3">ETHIO ROBO ROBOTICS</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Ethiopia's future innovators through practical robotics education, competitions, and teacher training.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://t.me/ethioroboroboticsofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://vm.tiktok.com/ZMSfrfVe9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Music2 className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/17z9cdnZKc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="http://youtube.com/0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ethiorobotics?igsh=MTIyaGR6Nm93Mmpubw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white font-semibold mb-4">Quick Links</div>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/competitions" className="text-gray-400 hover:text-cyan-400 transition-colors">Competitions</a></li>
              <li><a href="/shop" className="text-gray-400 hover:text-cyan-400 transition-colors">Shop</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold mb-4">Contact</div>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">ethiorobo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">+251-911675401</span>
              </li>
            </ul>
          </div>

          {/* Locations (moved here) */}
          <div>
            <div className="text-white font-semibold mb-4">Locations</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">Bole Reality Plaza, 12th Floor</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">CMC (Addis International Convention Center)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">Bole TK Building, 1st Floor</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">Bisrate Gabriel, International Tennis Club, 3rd Floor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-gray-500 text-sm">© {new Date().getFullYear()} Ethio Robo Robotics. All rights reserved.</div>
           
        </div>
      </div>
    </footer>
  )
}
