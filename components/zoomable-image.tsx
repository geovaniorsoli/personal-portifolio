"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

interface ZoomableImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  objectPosition?: string
}

export function ZoomableImage({
  src,
  alt,
  className = "",
  sizes,
  priority,
  objectPosition = "center",
}: ZoomableImageProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.common.zoomImage.replace("{alt}", alt)}
        className={`group relative block h-full w-full cursor-zoom-in ${className}`}
      >
        {!priority && !loaded && (
          <div className="absolute inset-0 animate-pulse bg-zinc-200" aria-hidden />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          style={{ objectPosition }}
          className={`object-cover transition-all duration-300 ease-out group-hover:scale-[1.03] ${
            priority || loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.common.close}
            className="absolute top-5 right-5 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
          <div
            className="relative h-full max-h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
