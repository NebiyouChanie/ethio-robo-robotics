"use client"

import { useEffect, useState } from 'react'

export default function HeroSection(){
    const [posts, setPosts] = useState<any[]>([])
    useEffect(() => {
      let mounted = true
      fetch('/api/posts?published=true')
        .then(r => r.ok ? r.json() : [])
        .then(d => { if (mounted) setPosts(d || []) })
        .catch(() => { if (mounted) setPosts([]) })
      return () => { mounted = false }
    }, [])
    return (
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm brand-text tracking-wider mb-4" >NEWS</div>
            <h2 className="text-4xl lg:text-5xl font-medium mb-6" >News & <span className="brand-text">Announcements</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(posts || []).slice(0,3).map((p: any) => (
              <article key={p.slug} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[var(--primary)]/50 transition-all" >
                <a href={`/news/${p.slug}`} className="block group">
                  <div className="overflow-hidden rounded-lg border border-gray-700 mb-4">
                    <img src={p.imageUrl || '/images/students1.png'} alt={p.title} className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform" />
                  </div>
                  <div className="text-xs mb-2 brand-text">{new Date(p.createdAt).toLocaleDateString()}</div>
                  <h3 className="text font-medium mb-2 group-hover:text-[var(--primary)] transition-colors">{p.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed h-10 overflow-hidden">{(p.body || '').replace(/[#*_`>\-]/g,'').slice(0,120)}...</p>
                  <span className="inline-block mt-3 brand-text text-sm">Read more →</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
}