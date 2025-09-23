"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Upload, ImagePlus, X } from 'lucide-react'

export default function MultiImageUpload({ onChange, values = [] }: { onChange: (urls: string[]) => void; values?: string[] }) {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [urls, setUrls] = useState<string[]>(values)

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setFiles(Array.from(e.target.files))
  }

  const removeUrl = (u: string) => {
    const next = urls.filter(x => x !== u)
    setUrls(next)
    onChange(next)
  }

  const doUpload = async () => {
    if (!files.length) return
    setUploading(true)
    try {
      const uploaded: string[] = []
      for (const f of files) {
        const fd = new FormData()
        fd.append('file', f)
        fd.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)
        fd.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, { method: 'POST', body: fd })
        const data = await res.json()
        if (data.secure_url) uploaded.push(data.secure_url)
      }
      const next = [...urls, ...uploaded]
      setUrls(next)
      onChange(next)
      setFiles([])
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3 items-center">
        <input type="file" multiple accept="image/*" onChange={onPick} className="hidden" id="multi-image-upload" />
        <Button variant="outline" onClick={() => document.getElementById('multi-image-upload')?.click()}><ImagePlus className="w-4 h-4 mr-2" />Select Images</Button>
        <Button onClick={doUpload} disabled={!files.length || uploading}><Upload className="w-4 h-4 mr-2" />{uploading ? 'Uploading...' : 'Upload'}</Button>
      </div>
      {urls.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {urls.map(u => (
            <div key={u} className="relative group border border-cyan-500/30 rounded-lg overflow-hidden">
              <img src={u} alt="post image" className="w-full h-32 object-cover" />
              <button type="button" onClick={() => removeUrl(u)} className="absolute top-2 right-2 p-1 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


