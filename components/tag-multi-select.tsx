"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Input } from "@heroui/react"

interface TagMultiSelectProps {
  tags: string[]
  value: string[]
  onChange: (tags: string[]) => void
  placeholder: string
  getLabel?: (tag: string) => string
}

export function TagMultiSelect({
  tags,
  value,
  onChange,
  placeholder,
  getLabel = (tag) => tag,
}: TagMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [])

  function toggleTag(tag: string) {
    onChange(
      value.includes(tag) ? value.filter((item) => item !== tag) : [...value, tag]
    )
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Input
          value={value.map(getLabel).join(", ")}
          readOnly
          onClick={() => setIsOpen((prev) => !prev)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full rounded-[8px] pe-8"
        />
        <ChevronDown className="text-field-placeholder pointer-events-none absolute inset-y-0 end-2 my-auto size-4" />
      </div>

      {isOpen && (
        <div className="bg-overlay absolute z-10 mt-1 w-full overflow-hidden rounded-[8px] border border-zinc-200 p-1.5 shadow-lg">
          {tags.map((tag) => {
            const checked = value.includes(tag)
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-start text-sm text-zinc-900 hover:bg-zinc-100"
              >
                <span
                  className={`flex size-4 shrink-0 items-center justify-center rounded border ${
                    checked ? "border-zinc-900 bg-zinc-900" : "border-zinc-300 bg-white"
                  }`}
                >
                  {checked && <Check className="size-3 text-white" strokeWidth={3} />}
                </span>
                {getLabel(tag)}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
