import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import type { Post } from '@prisma/client'
async function getPosts(): Promise<Post[]> {
  // @ts-expect-error Prisma client might be stale during dev; generated types will include isPublished
  return prisma.post.findMany({ where: { isPublished: true }, orderBy: { createdAt: 'desc' } })
}

export default async function NewsListPage() {
  const posts = await getPosts()
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-sm text-cyan-400 tracking-wider mb-2">NEWS</div>
          <h1 className="text-4xl lg:text-5xl font-medium">Latest Posts</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(posts || []).map((p: any) => (
            <article key={p.slug} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all" >
              <Link href={`/news/${p.slug}`} className="block group">
                <div className="overflow-hidden rounded-lg border border-gray-700 mb-4">
                  <img src={p.imageUrl || '/images/students1.png'} alt={p.title} className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="text-cyan-400 text-xs mb-2">{new Date(p.createdAt).toLocaleDateString()}</div>
                <h3 className="text font-medium mb-2 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed h-10 overflow-hidden">{(p.body || '').replace(/[#*_`>\-]/g,'').slice(0,160)}...</p>
                <span className="inline-block mt-3 text-cyan-400 text-sm">Read more →</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

 

 