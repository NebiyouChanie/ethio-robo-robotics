'use client'

import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/image-upload'
import MultiImageUpload from '@/components/MultiImageUpload'
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false }) as any
import 'react-markdown-editor-lite/lib/index.css'
import ReactMarkdown from 'react-markdown'

type InitialPost = {
  id?: number
  title?: string
  slug?: string
  body?: string
  imageUrl?: string | null
}

export default function PostForm({ initial }: { initial?: InitialPost }) {
  const router = useRouter()
  const editorRef = useRef<any>(null)
  const [title, setTitle] = useState(initial?.title || '')
  const [slug, setSlug] = useState(initial?.slug || '')
  const [body, setBody] = useState(initial?.body || '')
  const [imageUrl, setImageUrl] = useState<string | undefined>(initial?.imageUrl || undefined)
  const [submitting, setSubmitting] = useState(false)

  const [gallery, setGallery] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const isEdit = !!initial?.id
      const url = isEdit ? `/api/posts/${initial?.id}` : '/api/posts'
      const method = isEdit ? 'PATCH' : 'POST'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, slug, body, imageUrl, images: gallery }) })
      if (!res.ok) {
        const err = await res.json().catch(() => ({} as any))
        alert(err?.error || 'Failed to save post')
        return
      }
      await res.json()
      router.refresh()
      router.push('/admin/post')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">{initial?.id ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
          <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug-example" className="w-full px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-400">Featured Image</div>
          <ImageUpload value={imageUrl} onUpload={(url: string) => setImageUrl(url)} />
          {imageUrl && (
            <img src={imageUrl} alt="featured" className="mt-2 h-32 rounded border border-cyan-500/50 object-cover" />
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-400">Gallery Images</div>
          <MultiImageUpload values={gallery} onChange={setGallery} />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <MdEditor
              ref={editorRef}
              value={body}
              style={{ height: 400 }}
              onChange={({ text }: any) => setBody(text)}
              renderHTML={(text: string) => <ReactMarkdown>{text}</ReactMarkdown> as any}
            />
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-2">Live Preview</div>
            <div className="prose prose-invert max-w-none border border-cyan-500/30 rounded p-4">
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={submitting} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded disabled:opacity-50">
            {submitting ? 'Saving...' : (initial?.id ? 'Update Post' : 'Publish Draft')}
          </button>
        </div>
      </form>
    </div>
  )
}



