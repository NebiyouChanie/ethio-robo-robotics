"use client"

import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import MultiImageUpload from '@/components/MultiImageUpload'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false }) as any
import 'react-markdown-editor-lite/lib/index.css'
import ReactMarkdown from 'react-markdown'
import { toast } from 'sonner'

export default function AdminCreatePost() {
  const router = useRouter()
  const editorRef = useRef<any>(null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [body, setBody] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isDraft, setIsDraft] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate that at least one image is uploaded
    if (images.length === 0) {
      toast.error('Please upload at least one image')
      return
    }
    
    setSubmitting(true)
    try {
      const isEdit = !!editingId
      const url = isEdit ? `/api/posts/${editingId}` : '/api/posts'
      const method = isEdit ? 'PATCH' : 'POST'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, slug, body, images }) })
      if (!res.ok) {
        const err = await res.json()
        toast.error(err.error || 'Failed to create post')
        return
      }
      await res.json()
      router.refresh()
      toast.success(isEdit ? 'Post updated' : 'Post created')
      setTitle(''); setSlug(''); setBody(''); setImages([]); setIsDraft(true)
      setEditingId(null)
    } finally {
      setSubmitting(false)
    }
  }


  return (
    <div className="max-w-7xl p-6 space-y-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-semibold text-white">Create Post</h1>
      {/* If navigated with /admin?edit=ID, load post and prefill */}
      {/* lightweight client-side fetch to populate form when editing */}
      {typeof window !== 'undefined' && !editingId && new URLSearchParams(window.location.search).get('edit') && (
        (() => { const id = Number(new URLSearchParams(window.location.search).get('edit')); if (id && !editingId) { setEditingId(id); fetch(`/api/posts/${id}`).then(r=>r.json()).then((p)=>{ setTitle(p.title||''); setSlug(p.slug||''); setBody(p.body||''); setImages(p.images?.map((img: any) => img.url) || []); }); } return null })()
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full px-3 py-2 rounded border bg-gray-800/50 border-cyan-500/40 focus:border-cyan-500 outline-none text-white placeholder-gray-400" />
          <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug-example" className="w-full px-3 py-2 rounded border bg-gray-800/50 border-cyan-500/40 focus:border-cyan-500 outline-none text-white placeholder-gray-400" />
        </div>

        {/* Multiple Images Upload */}
        <div className="space-y-4">
          <div className="text-sm text-gray-400">Upload Images (1-10 images) - First image will be used as featured</div>
          <MultiImageUpload values={images} onChange={setImages} />
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
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={submitting} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded disabled:opacity-50 transition-colors">
            {submitting ? (editingId ? 'Updating...' : 'Saving...') : (editingId ? 'Update' : 'Save Draft')}
          </button>
          <button type="button" disabled className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded opacity-50 cursor-not-allowed" title="Publish toggle to be enabled once client is regenerated">
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}

 