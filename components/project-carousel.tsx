"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { ZoomableImage } from "@/components/zoomable-image"

interface ProjectCarouselProps {
  images: { src: string; alt: string }[]
  intervalMs?: number
}

export function ProjectCarousel({ images, intervalMs = 4000 }: ProjectCarouselProps) {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  function goTo(next: number) {
    setIndex(((next % images.length) + images.length) % images.length)
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [images.length, intervalMs, isPaused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[1918/1040] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        {images.map((image, i) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <ZoomableImage
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 768px, 100vw"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label={t.common.previousImage}
          className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md transition-colors hover:bg-white"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label={t.common.nextImage}
          className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md transition-colors hover:bg-white"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={t.common.goToImage.replace("{n}", String(i + 1))}
            className={`h-2 cursor-pointer rounded-full transition-all ${
              i === index ? "w-6 bg-[#2F2F33]" : "w-2 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
