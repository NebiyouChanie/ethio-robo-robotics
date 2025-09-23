import { Button } from "@/components/ui/button";
import { ImagePlus, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ImageUpload = ({ onUpload, value }: { onUpload: (url: string) => void; value?: string }) => {
  const [image, setImage] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>(value || "")
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file)) 
    }
  }

  const handleUpload = async () => {
    if (!image) return

    setUploading(true)

    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!) // Unsigned preset
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      )

      const uploadData = await response.json()
      if (uploadData.secure_url) {
        setUploadedImageUrl(uploadData.secure_url)
        onUpload(uploadData.secure_url) // Pass the URL back to the parent component
      } else {
        console.error("Upload failed:", uploadData)
      }
    } catch (error) {
      console.error("Upload error:", error)
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = () => {
    setImage(null)
    setPreviewUrl(null)
    setUploadedImageUrl("")
    onUpload("")  
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <input
        type="file"
        id="image-upload"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />

      {previewUrl || uploadedImageUrl ? (
        <div className="relative w-full max-w-sm h-40 overflow-hidden rounded-lg border border-cyan-500/50">
          <Image
            src={previewUrl || uploadedImageUrl}
            alt="Uploaded preview"
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="bg-white/90 text-black hover:bg-white/80"
                  onClick={() => document.getElementById("image-upload")?.click()}
                >
                  Change
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={handleRemove}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center w-full max-w-sm h-40 p-4 border-2 border-dashed border-cyan-500/40 rounded-lg cursor-pointer hover:bg-cyan-500/5 transition-colors duration-300"
          onClick={() => document.getElementById("image-upload")?.click()}
        >
          <div className="p-3 rounded-full bg-cyan-500/10 mb-2 border border-cyan-500/30">
            <ImagePlus className="h-7 w-7 text-cyan-400" />
          </div>
          <p className="text-sm font-medium text-center text-gray-300">Click to upload an image</p>
        </div>
      )}

      {previewUrl && !uploadedImageUrl && (
        <Button
          type="button"
          variant="outline"
          onClick={handleUpload}
          disabled={uploading}
          className="w-full max-w-sm border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
        >
          <Upload className="h-4 w-4 mr-2" />
          {uploading ? "Uploading..." : "Upload Image"}
        </Button>
      )}
    </div>
  )
}

export default ImageUpload