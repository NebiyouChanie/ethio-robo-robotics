"use client"

import { ShoppingCart, Sun, Moon, ArrowDown, ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  currentPage?: string
  showCart?: boolean
  cartItems?: number
}

export default function Header({ currentPage = "home", showCart = false, cartItems = 0 }: HeaderProps) {
  const pathname = usePathname() || "/"

  // Object-based nav model
  const mainLinks = useMemo(() => ([
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Competitions", href: "/competitions" },
    { label: "Blogs & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ]), [])

  const servicesLinks = useMemo(() => ([
    { label: "Services", href: "/services" },
    { label: "Programs", href: "/programs" },
    { label: "Shop", href: "/shop" },
  ]), [])

  const isActiveHref = (href: string | string[]) => {
    const hrefs = Array.isArray(href) ? href : [href]
    return hrefs.some(h => h === "/" ? pathname === "/" : pathname.startsWith(h))
  }

  const [isLight, setIsLight] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null
    const preferLight = stored === "light"
    setIsLight(preferLight)
    if (preferLight) {
      document.documentElement.classList.add("theme-light")
    } else {
      document.documentElement.classList.remove("theme-light")
    }
  }, [])

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add("theme-light")
        localStorage.setItem("theme", "light")
      } else {
        document.documentElement.classList.remove("theme-light")
        localStorage.setItem("theme", "dark")
      }
      return next
    })
  }

  return (
    <>
    <nav className="bg-gray-900 py-4 md:py-6 px-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-3  py-2 px-4 rounded-full">
          <img src="/images/logo.png" alt="Ethio Robo Robotics" className="h-12 w-auto rounded" />
          {/* <div className="hidden sm:block">
            <div className="text-2xl font-bold text-cyan-400 leading-none">ETHIO ROBO</div>
            <div className="text-xs text-gray-400 tracking-wider leading-none">ROBOTICS EDUCATION</div>
          </div> */}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {mainLinks.slice(0, 2).map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`cursor-pointer transition-colors ${isActiveHref(link.href) ? 'text-cyan-400 font-medium' : 'text-white hover:text-cyan-400'}`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setServicesOpen((o) => !o) }}
              className={`flex items-center gap-1 cursor-pointer transition-colors ${isActiveHref(servicesLinks.map(s => s.href)) ? 'text-cyan-400 font-medium' : 'text-white hover:text-cyan-400'}`}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={18} />
            </button>
            {servicesOpen && (
              <div className={`absolute left-0 top-full mt-1 w-56 rounded-lg border shadow-xl z-50 ${isLight ? 'border-gray-200 bg-white' : 'border-gray-800 bg-gray-900'}`}>
                <div className="py-2">
                  {servicesLinks.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block px-4 py-2 text-sm ${isLight ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {mainLinks.slice(2).map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`cursor-pointer transition-colors ${isActiveHref(link.href) ? 'text-cyan-400 font-medium' : 'text-white hover:text-cyan-400'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle */}
          <button onClick={toggleTheme} className="text-cyan-400 hover:text-white transition-colors" aria-label="Toggle theme">
            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <Link href="/register">
            <button className="px-8 py-2 rounded-lg relative cursor-pointer border border-cyan-400 text-cyan-400 hover:text-white transition-colors">
              Register Now
            </button>
            </Link>
             
          </div>
          
          {/* Mobile toggles */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="text-cyan-400 hover:text-white transition-colors" aria-label="Toggle theme">
              {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileOpen((o)=>!o)} aria-label="Toggle menu" className="text-white">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
       
    </nav>
    {/* Mobile menu panel */}
    {mobileOpen && (
      <div className="md:hidden bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <Link href="/" className={`py-2 ${isActiveHref('/') ? 'text-cyan-400 font-medium' : 'text-white'}`} onClick={()=>setMobileOpen(false)}>Home</Link>
          {/* Services dropdown simplified for mobile */}
          <div className="border border-gray-800 rounded-lg overflow-hidden">
            <button type="button" className="w-full flex items-center justify-between px-4 py-2 text-white" onClick={()=>setServicesOpen((o)=>!o)}>
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className={`${isLight ? 'bg-white' : 'bg-gray-900'}`}>
                {servicesLinks.map(s => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block px-4 py-2 text-sm ${isLight ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                    onClick={()=>setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {mainLinks.slice(2).map(link => (
            <Link key={link.href} href={link.href} className={`py-2 ${isActiveHref(link.href) ? 'text-cyan-400 font-medium' : 'text-white'}`} onClick={()=>setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/register" className="mt-2">
            <button className="w-full px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:text-white">Register Now</button>
          </Link>
        </div>
      </div>
    )}
    </>
  )
}
