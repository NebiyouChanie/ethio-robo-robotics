"use client"

import React, { useEffect, useRef, useState } from "react"

type SimpleCarouselProps = {
  images: string[]
  alt?: string
  heightClass?: string
}

export function SimpleCarousel({ images, alt = "", heightClass = "h-72" }: SimpleCarouselProps) {
  const [index, setIndex] = useState(0)
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const goTo = (i: number) => {
    const next = ((i % images.length) + images.length) % images.length
    setIndex(next)
    const container = containerRef.current
    if (!container) return
    const slideWidth = container.clientWidth
    container.scrollTo({ left: next * slideWidth, behavior: "smooth" })
  }

  const next = () => {
    // If user interacts, stop auto-scroll cycle
    if (!hasAutoScrolled) setHasAutoScrolled(true)
    goTo(index + 1)
  }
  const prev = () => {
    // If user interacts, stop auto-scroll cycle
    if (!hasAutoScrolled) setHasAutoScrolled(true)
    goTo(index - 1)
  }

  useEffect(() => {
    if (images.length <= 1 || hasAutoScrolled) return
    // Auto-advance through slides once to signal it's a carousel
    let step = 0
    const id = setInterval(() => {
      step += 1
      if (step >= images.length) {
        clearInterval(id)
        setHasAutoScrolled(true)
        // return to first slide after preview
        goTo(0)
        return
      }
      goTo(step)
    }, 3000)
    return () => clearInterval(id)
  }, [images.length, hasAutoScrolled])

  // Sync scroll-based index if the user swipes
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const onScroll = () => {
      const slideWidth = container.clientWidth
      if (slideWidth > 0) {
        const current = Math.round(container.scrollLeft / slideWidth)
        if (current !== index) setIndex(current)
      }
    }
    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [index])

  return (
    <div className="relative group rounded-xl border border-gray-700 overflow-hidden">
      <div
        ref={containerRef}
        className={`w-full ${heightClass} overflow-x-auto snap-x snap-mandatory scroll-smooth flex no-scrollbar`}
        style={{ scrollbarWidth: "none" as any }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full snap-start">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/60 text-white px-3 py-2 rounded-md transition"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/60 text-white px-3 py-2 rounded-md transition"
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}


