"use client"

import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/components/image-upload'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false }) as any
import 'react-markdown-editor-lite/lib/index.css'
import ReactMarkdown from 'react-markdown'

export default function AdminCreatePost() {
  const router = useRouter()
  const editorRef = useRef<any>(null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [body, setBody] = useState('')
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
  const [submitting, setSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isDraft, setIsDraft] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const isEdit = !!editingId
      const url = isEdit ? `/api/posts/${editingId}` : '/api/posts'
      const method = isEdit ? 'PATCH' : 'POST'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, slug, body, imageUrl }) })
      if (!res.ok) {
        const err = await res.json()
        alert(err.error || 'Failed to create post')
        return
      }
      await res.json()
      router.refresh()
      alert(isEdit ? 'Post updated' : 'Post created')
      setTitle(''); setSlug(''); setBody(''); setImageUrl(undefined); setIsDraft(true)
      setEditingId(null)
    } finally {
      setSubmitting(false)
    }
  }

  const insertAtCursor = (text: string) => {
    const editor = editorRef.current
    // Prefer the editor's built-in API
    if (editor && typeof editor.insertText === 'function') {
      editor.insertText(text)
      return
    }
    // Fallback attempt via CodeMirror if available
    const cm = editor?.getMdEditor?.()?.getCodemirror?.()
    if (cm) {
      const doc = cm.getDoc()
      const cursor = doc.getCursor()
      doc.replaceRange(text, cursor)
      // sync state with new value read from editor if possible
      try {
        const newVal = doc.getValue()
        if (typeof newVal === 'string') setBody(newVal)
      } catch {}
      return
    }
    // Final fallback: append to end
    setBody((prev) => {
      const next = (prev ? prev + '\n' : '') + text
      try {
        if (editor && typeof editor.setText === 'function') editor.setText(next)
      } catch {}
      return next
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Create Post</h1>
      {/* If navigated with /admin?edit=ID, load post and prefill */}
      {/* lightweight client-side fetch to populate form when editing */}
      {typeof window !== 'undefined' && !editingId && new URLSearchParams(window.location.search).get('edit') && (
        (() => { const id = Number(new URLSearchParams(window.location.search).get('edit')); if (id && !editingId) { setEditingId(id); fetch(`/api/posts/${id}`).then(r=>r.json()).then((p)=>{ setTitle(p.title||''); setSlug(p.slug||''); setBody(p.body||''); setImageUrl(p.imageUrl||undefined); }); } return null })()
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
          <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug-example" className="w-full px-3 py-2 rounded border bg-gray-900/40 border-cyan-500/40 focus:border-cyan-500 outline-none" />
        </div>

        {/* Featured image */}
        <div className="space-y-2">
          <div className="text-sm text-gray-400">Featured Image</div>
          <ImageUpload value={imageUrl} onUpload={(url: string) => setImageUrl(url)} />
          {imageUrl && (
            <img src={imageUrl} alt="featured" className="mt-2 h-32 rounded border border-cyan-500/50 object-cover" />
          )}
        </div>

        {/* Inline image upload into markdown */}
        <div className="space-y-2">
          <div className="text-sm text-gray-400">Insert Image into Body</div>
          <ImageUpload onUpload={(url: string) => insertAtCursor(`![alt text](${url})`)} />
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
          <button type="submit" disabled={submitting} className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded disabled:opacity-50">
            {submitting ? (editingId ? 'Updating...' : 'Saving...') : (editingId ? 'Update' : 'Save Draft')}
          </button>
          <button type="button" disabled className="bg-cyan-500 text-white px-6 py-2 rounded opacity-50 cursor-not-allowed" title="Publish toggle to be enabled once client is regenerated">
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}

 